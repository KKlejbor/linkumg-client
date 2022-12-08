import type { LoginResponse } from "src/models/User";
import { writable, type Writable } from "svelte/store";

// export const storagedAuth: Writable<LoginResponse> | Writable<null> = writable(null);
export const storagedAuth: Writable<LoginResponse> | Writable<null> = writable("sss");
