export const concerts: Concert[] = [
  {
    date: "25",
    month: "AGO",
    year: "2026",
    title: "Santeramo in Colle (BA)",
    venue: "Atrio del Palazzo Marchesale",
    time: "20:30",
  },
  {
    date: "29",
    month: "AGO",
    year: "2026",
    title: "Mesagne (BR)",
    venue: "Atrio del castello Svevo",
    time: "20:45",
  },
];

export const nextConcert: Concert = concerts[0];

export type Concert = {
  date: string;
  month: string;
  year: string;
  title: string;
  venue: string;
  time: string;
};
