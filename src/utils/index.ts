import { EventType } from "../ts-types";

export const statusColors = {
  Completed: "green",
  Pending: "#F28282",
} as {
  [key: string]: string;
};

export const sortActivity = (activity: EventType[]) =>
  activity.sort((a: EventType, b: EventType) => {
    return new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()
      ? 1
      : -1;
  });

export const formatDate = (date: string): number => {
  const eventDate = Date.now() - new Date(date).getTime();
  return Math.floor(eventDate / 1000 / 86400);
};
