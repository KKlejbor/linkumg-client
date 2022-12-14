import { type Writable, writable } from "svelte/store";

export const pageSize: Writable<number> = writable(50);

export const notificationTime = 4000;
export const notificationLocation = 'bottom-center';