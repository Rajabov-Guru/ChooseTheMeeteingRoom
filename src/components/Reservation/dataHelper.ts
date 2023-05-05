import { SelectItem } from '@mantine/core';

export const getFloors = (): SelectItem[] => {
  const floors: SelectItem[] = [];
  for (let i = 3; i <= 27; i++) {
    const v = i.toString();
    floors.push({ value: v, label: v });
  }
  return floors;
};

export const getRooms = (): SelectItem[] => {
  const rooms: SelectItem[] = [];
  for (let i = 1; i <= 10; i++) {
    const v = i.toString();
    rooms.push({ value: v, label: v });
  }
  return rooms;
};

export const getTowers = (): SelectItem[] => {
  return ['А', 'Б'].map((t) => ({ value: t, label: t }));
};
