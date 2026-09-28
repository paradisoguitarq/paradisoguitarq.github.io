export const concerts: Concert[] = [
  {
    date: "2024-07-19",
    title: "Suoni della Murgia",
    venue: "Altamura (BA) · Dimora Cagnazzi",
    time: "20:00",
  },
  {
    date: "2024-09-12",
    title: "Scorci",
    venue: "Santeramo in Colle (BA) · Convento dei Padri Riformati",
    time: "20:00",
  },
  {
    date: "2024-09-21",
    title: "Concerto all'Alba",
    venue: "Bari · Sala Margherita",
    time: "06:00",
  },
  {
    date: "2024-12-15",
    title: "Christmas Concert",
    venue: "Acquaviva delle Fonti (BA) · Cattedrale",
    time: "20:00",
  },
  {
    date: "2025-06-13",
    title: "Concerto del Sacro Cuore",
    venue: "Santeramo in Colle (BA) · Parrocchia Sacro Cuore",
    time: "20:30",
  },
  {
    date: "2025-07-17",
    title: "Suoni della Murgia",
    venue: "Santeramo in Colle (BA) · Atrio del Palazzo Marchesale",
    time: "21:45",
  },
  {
    date: "2025-08-05",
    title: "Nel Respiro dei Luoghi",
    venue: "Gioia del Colle (BA) · Area esterna della biblioteca comunale",
    time: "20:00",
  },
  {
    date: "2026-08-25",
    title: "Suoni della Murgia",
    venue: "Santeramo in Colle (BA) · Atrio del Palazzo Marchesale",
    time: "20:30",
  },
  {
    date: "2026-08-29",
    title: "MIG Festival",
    venue: "Mesagne (BR) · Atrio del castello Svevo",
    time: "20:45",
  },
];

const MONTHS = ["GEN", "FEB", "MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT", "NOV", "DIC"];

/** A concert still counts on the day it takes place, so it expires at the start of the following day. */
export function getUpcomingConcerts(now: Date = new Date()): Concert[] {
  const today = startOfDay(now);

  return concerts.filter((concert) => parseConcertDate(concert) >= today).sort(byDateAscending);
}

export function getPastConcertsByYear(now: Date = new Date()): ConcertYear[] {
  const today = startOfDay(now);
  const years = new Map<string, Concert[]>();

  concerts
    .filter((concert) => parseConcertDate(concert) < today)
    .sort((a, b) => byDateAscending(b, a))
    .forEach((concert) => {
      const year = concert.date.slice(0, 4);
      years.set(year, [...(years.get(year) ?? []), concert]);
    });

  return [...years].map(([year, yearConcerts]) => ({ year, concerts: yearConcerts }));
}

export function getConcertDateLabels(concert: Concert): ConcertDateLabels {
  const [year, month, day] = concert.date.split("-");

  return { date: day.replace(/^0/, ""), month: MONTHS[Number(month) - 1], year };
}

function parseConcertDate(concert: Concert): Date {
  const [year, month, day] = concert.date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function byDateAscending(a: Concert, b: Concert): number {
  return a.date.localeCompare(b.date);
}

export type Concert = {
  date: string;
  title: string;
  venue: string;
  time: string;
};

export type ConcertYear = {
  year: string;
  concerts: Concert[];
};

export type ConcertDateLabels = {
  date: string;
  month: string;
  year: string;
};
