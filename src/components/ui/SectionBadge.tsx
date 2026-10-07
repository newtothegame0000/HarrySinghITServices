import type { LucideIcon } from 'lucide-react';

// The pill label used at the top of each section (lime dot + icon + label).
export default function SectionBadge({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        width: 'fit-content',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '999px',
        padding: '6px 14px 6px 10px',
        backgroundColor: 'rgba(255,255,255,0.04)',
        marginBottom: '28px',
      }}
    >
      <div
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          backgroundColor: '#88FF00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 0 6px 2px rgba(136,255,0,0.55), 0 0 18px 6px rgba(136,255,0,0.25)',
        }}
      >
        <Icon size={12} color="#000000" strokeWidth={2.5} />
      </div>
      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{label}</span>
    </div>
  );
}
