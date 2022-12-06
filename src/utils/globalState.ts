import { type Writable, writable } from "svelte/store";

export const pageSize: Writable<number> = writable(4);