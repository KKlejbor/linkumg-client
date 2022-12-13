import type { LoginResponse, TokenDecoded } from "src/models/User";
import { writable, type Writable } from "svelte/store";

export const storagedAuth: Writable<LoginResponse> | Writable<null> = writable(null);
export const storagedToken: Writable<TokenDecoded> | Writable<null> = writable(null);
