// ─── EDIT PIPELINE STAGES HERE ─────────────────────────────────────────────
export const STAGES = [
  {
    name: 'Vision',
    line: "Defines the artist's character, world and recurring objects, and writes the prompts for every image and clip.",
  },
  {
    name: 'Ears',
    line: "Reads each song's stems, transients and energy levels.",
  },
  {
    name: 'Eyes',
    line: "Describes and logs every clip with low-cost AI models, so the system knows what's in each one.",
  },
  {
    name: 'Brain',
    line: 'Knows the character, world, objects and full clip library, and picks the right clip for each moment of the song.',
  },
  {
    name: 'Hands',
    line: "Cuts the chosen clips to the song's transients and energy.",
  },
  {
    name: 'Finish',
    line: 'Applies LUTs and colour correction, and renders the finished video.',
  },
];

// Planned features. Shown under the stages, labelled as not built yet.
export const COMING_NEXT =
  'Coming next: a thumbnail maker, and research that finds gaps a new music channel can fill.';
