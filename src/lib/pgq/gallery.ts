const photoModules = import.meta.glob<string>("../../assets/gallery/*.{jpg,jpeg}", {
  eager: true,
  import: "default",
  query: "?url",
});

const groups: PhotoGroup[] = [
  { prefix: "170725-", alt: "Il PGQ in concerto, luglio 2025" },
  { prefix: "sdm-2024-", alt: "Il PGQ in concerto, 2024" },
  { prefix: "studio-", alt: "Il PGQ in studio di registrazione" },
];

export const galleryPhotos: GalleryPhoto[] = Object.keys(photoModules)
  .map((path) => {
    const fileName = path.slice(path.lastIndexOf("/") + 1);
    return { fileName, src: photoModules[path], alt: getAlt(fileName), groupOrder: getGroupOrder(fileName) };
  })
  .sort((a, b) => a.groupOrder - b.groupOrder || a.fileName.localeCompare(b.fileName))
  .map(({ src, alt }) => ({ src, alt }));

function getGroup(fileName: string): PhotoGroup | undefined {
  return groups.find(({ prefix }) => fileName.startsWith(prefix));
}

function getGroupOrder(fileName: string): number {
  const group = getGroup(fileName);

  if (!group)
    return groups.length;

  return groups.indexOf(group);
}

function getAlt(fileName: string): string {
  const group = getGroup(fileName);

  if (!group)
    return "Il PGQ";

  return group.alt;
}

export type GalleryPhoto = {
  src: string;
  alt: string;
};

type PhotoGroup = {
  prefix: string;
  alt: string;
};
