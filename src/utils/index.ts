import { MouseEvent } from "react";

export const statusColors = {
  Completed: "green",
  Pending: "#F28282",
} as {
  [key: string]: string;
};

export const formatDate = (date: string): number => {
  const eventDate = Date.now() - new Date(date).getTime();
  return Math.floor(eventDate / 1000 / 86400);
};

export const checkInput = (
  e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
) => {
  const checked = e.currentTarget.checked,
    id = e.currentTarget.id,
    allInput = document.getElementsByTagName("input");

  if (checked) {
    Array.from(allInput).every(e => {
      if (e.checked && e.id === id) return false;
      e.checked = true;
      return true;
    });
  } else {
    Array.from(allInput).every(e => {
      if (!e.checked && e.id === id) return false;
      e.checked = false;
      return true;
    });
  }
};
