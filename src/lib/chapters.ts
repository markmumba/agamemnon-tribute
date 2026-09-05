export const chapters = [
  { slug: "/the-man", title: "The Man", subtitle: "Son of Atreus" },
  { slug: "/the-war", title: "The War", subtitle: "A Thousand Ships" },
  { slug: "/the-sacrifice", title: "The Sacrifice", subtitle: "Iphigenia at Aulis" },
  { slug: "/the-siege", title: "The Siege", subtitle: "Ten Years at Troy" },
  { slug: "/the-fall", title: "The Fall", subtitle: "The Homecoming" },
  { slug: "/the-legacy", title: "The Legacy", subtitle: "Eternal in Memory" },
] as const;

export type Chapter = (typeof chapters)[number];
