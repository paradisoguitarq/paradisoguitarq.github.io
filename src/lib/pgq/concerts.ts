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

const MONTHS = ["GEN", "FEB", "MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT", "NOV", "DIC"];

/** A concert still counts on the day it takes place, so it expires at the start of the following day. */
export function getUpcomingConcerts(now: Date = new Date()): Concert[] {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return concerts.filter((concert) => {
    const concertDay = new Date(Number(concert.year), MONTHS.indexOf(concert.month), Number(concert.date));
    return concertDay >= today;
  });
}

export type Concert = {
  date: string;
  month: string;
  year: string;
  title: string;
  venue: string;
  time: string;
};
