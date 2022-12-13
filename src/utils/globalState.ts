import { type Writable, writable } from "svelte/store";

export const pageSize: Writable<number> = writable(4);

export const notificationTime = 4000;
export const notificationLocation = 'bottom-center';