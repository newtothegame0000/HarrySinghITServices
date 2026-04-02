import { useEffect, useRef, useCallback } from 'react';

const CITIES: { name: string; coords: [number, number] }[] = [
  { name: 'Mumbai',    coords: [72.8777,  19.0760] },
  { name: 'New York',  coords: [-74.0060, 40.7128] },
  { name: 'London',    coords: [-0.1278,  51.5074] },
  { name: 'Dubai',     coords: [55.2708,  25.2048] },
  { name: 'Singapore', coords: [103.8198,  1.3521] },
  { name: 'Sydney',    coords: [151.2093, -33.8688] },
  { name: 'Toronto',   coords: [-79.3832, 43.6532] },
  { name: 'Berlin',    coords: [13.4050,  52.5200] },
];

const DOT_COLOR   = '#88FF00';
const OCEAN_COLOR = '#0a0a0a';
const SPIN_SPEED  = 0.012;
const DOT_SPACING = 4;

const GEOJSON_URL =
  'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson';

const DEG = Math.PI / 180;

function toRad(d: number) { return d * DEG; }

function projectPoint(
  lng: number, lat: number,
  rotation: [number, number, number],
  scale: number, cx: number, cy: number
): [number, number, boolean] {
  const l = toRad(lng), p = toRad(lat);
  const r = rotation;
  const cosp = Math.cos(p), sinp = Math.sin(p);
  const cosl = Math.cos(l), sinl = Math.sin(l);

  const x0 = cosp * cosl;
  const y0 = cosp * sinl;
  const z0 = sinp;

  const r0 = toRad(-r[0]);
  const x1 = x0 * Math.cos(r0) - y0 * Math.sin(r0);
  const y1 = x0 * Math.sin(r0) + y0 * Math.cos(r0);
  const z1 = z0;

  const r1 = toRad(-r[1]);
  const x2 = x1 * Math.cos(r1) + z1 * Math.sin(r1);
  const y2 = y1;
  const z2 = -x1 * Math.sin(r1) + z1 * Math.cos(r1);

  const visible = x2 >= 0;
  const px = cx + scale * y2;
  const py = cy - scale * z2;
  return [px, py, visible];
}

function pointInPolygon(point: [number, number], ring: number[][]): boolean {
  const [x, y] = point;
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    if (((yi > y) !== (yj > y)) && (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

function geoContains(feature: GeoJSON.Feature<GeoJSON.Geometry>, point: [number, number]): boolean {
  const geom = feature.geometry;
  if (!geom) return false;
  if (geom.type === 'Polygon') {
    return pointInPolygon(point, (geom as GeoJSON.Polygon).coordinates[0]);
  }
  if (geom.type === 'MultiPolygon') {
    return (geom as GeoJSON.MultiPolygon).coordinates.some(poly =>
      pointInPolygon(point, poly[0])
    );
  }
  return false;
}

function drawPath(
  ctx: CanvasRenderingContext2D,
  coords: number[][],
  rotation: [number, number, number],
  scale: number, cx: number, cy: number
) {
  let started = false;
  for (const [lng, lat] of coords) {
    const [px, py, visible] = projectPoint(lng, lat, rotation, scale, cx, cy);
    if (!visible) { started = false; continue; }
    if (!started) { ctx.moveTo(px, py); started = true; }
    else { ctx.lineTo(px, py); }
  }
}

function drawFeature(
  ctx: CanvasRenderingContext2D,
  feature: GeoJSON.Feature<GeoJSON.Geometry>,
  rotation: [number, number, number],
  scale: number, cx: number, cy: number
) {
  const geom = feature.geometry;
  if (!geom) return;
  ctx.beginPath();
  if (geom.type === 'Polygon') {
    for (const ring of (geom as GeoJSON.Polygon).coordinates) {
      drawPath(ctx, ring, rotation, scale, cx, cy);
    }
  } else if (geom.type === 'MultiPolygon') {
    for (const poly of (geom as GeoJSON.MultiPolygon).coordinates) {
      for (const ring of poly) {
        drawPath(ctx, ring, rotation, scale, cx, cy);
      }
    }
  }
}

interface Props {
  width?: number;
  height?: number;
}

export default function RotatingEarth({ width = 520, height = 520 }: Props) {
  const canvasRef      = useRef<HTMLCanvasElement>(null);
  const geoJsonRef     = useRef<GeoJSON.FeatureCollection | null>(null);
  const rotationRef    = useRef<[number, number, number]>([0, -25, 0]);
  const frameRef       = useRef<number>(0);
  const draggingRef    = useRef(false);
  const lastMouseRef   = useRef<[number, number]>([0, 0]);
  const landDotsRef    = useRef<Array<[number, number]>>([]);
  const lastRenderRef  = useRef<number>(0);

  const radius = Math.min(width, height) / 2 - 8;
  const cx = width / 2;
  const cy = height / 2;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const geo = geoJsonRef.current;
    const rot = rotationRef.current;

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fillStyle = OCEAN_COLOR;
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    if (geo) {
      for (const feature of geo.features) {
        drawFeature(ctx, feature, rot, radius, cx, cy);
        ctx.fillStyle = 'rgba(136,255,0,0.10)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(136,255,0,0.28)';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      const dots = landDotsRef.current;
      if (dots.length > 0) {
        ctx.beginPath();
        for (const [lng, lat] of dots) {
          const [px, py, visible] = projectPoint(lng, lat, rot, radius, cx, cy);
          if (!visible) continue;
          ctx.moveTo(px + 1.5, py);
          ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        }
        ctx.fillStyle = DOT_COLOR;
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (const { name, coords } of CITIES) {
      const [px, py, visible] = projectPoint(coords[0], coords[1], rot, radius, cx, cy);
      if (!visible) continue;

      ctx.beginPath();
      ctx.arc(px, py, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(136,255,0,0.18)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(px, py, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = DOT_COLOR;
      ctx.shadowColor = DOT_COLOR;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.fillStyle = DOT_COLOR;
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.shadowColor = DOT_COLOR;
      ctx.shadowBlur = 6;
      ctx.fillText(name, px, py - 9);
      ctx.shadowBlur = 0;
    }

    ctx.restore();

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(136,255,0,0.20)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, radius + 10, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(136,255,0,0.05)';
    ctx.lineWidth = 8;
    ctx.stroke();

    const shine = ctx.createRadialGradient(
      cx - radius * 0.2, cy - radius * 0.25, 0,
      cx, cy, radius
    );
    shine.addColorStop(0, 'rgba(136,255,0,0.06)');
    shine.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fillStyle = shine;
    ctx.fill();
  }, [width, height, radius, cx, cy]);

  useEffect(() => {
    let cancelled = false;
    fetch(GEOJSON_URL)
      .then(r => r.json())
      .then((geo: GeoJSON.FeatureCollection) => {
        if (cancelled) return;
        geoJsonRef.current = geo;

        const dots: Array<[number, number]> = [];
        for (let lng = -180; lng <= 180; lng += DOT_SPACING) {
          for (let lat = -90; lat <= 90; lat += DOT_SPACING) {
            const isLand = geo.features.some(f => geoContains(f, [lng, lat]));
            if (isLand) dots.push([lng, lat]);
          }
        }
        landDotsRef.current = dots;
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let lastTime = performance.now();
    const animate = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;
      if (!draggingRef.current) {
        rotationRef.current = [
          rotationRef.current[0] + delta * SPIN_SPEED,
          rotationRef.current[1],
          rotationRef.current[2],
        ];
      }
      if (now - lastRenderRef.current >= 16) {
        lastRenderRef.current = now;
        draw();
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [draw]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    draggingRef.current = true;
    lastMouseRef.current = [e.clientX, e.clientY];
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!draggingRef.current) return;
    const [lx, ly] = lastMouseRef.current;
    const dx = e.clientX - lx;
    const dy = e.clientY - ly;
    rotationRef.current = [
      rotationRef.current[0] + dx * 0.4,
      rotationRef.current[1] - dy * 0.4,
      rotationRef.current[2],
    ];
    lastMouseRef.current = [e.clientX, e.clientY];
  }, []);

  const stopDrag = useCallback(() => { draggingRef.current = false; }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    draggingRef.current = true;
    lastMouseRef.current = [e.touches[0].clientX, e.touches[0].clientY];
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!draggingRef.current) return;
    const [lx, ly] = lastMouseRef.current;
    const dx = e.touches[0].clientX - lx;
    const dy = e.touches[0].clientY - ly;
    rotationRef.current = [
      rotationRef.current[0] + dx * 0.4,
      rotationRef.current[1] - dy * 0.4,
      rotationRef.current[2],
    ];
    lastMouseRef.current = [e.touches[0].clientX, e.touches[0].clientY];
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        cursor: 'grab',
        touchAction: 'none',
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={stopDrag}
    />
  );
}
