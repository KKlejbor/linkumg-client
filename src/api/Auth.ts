import type { College } from "src/models/College";
import type { Company } from "src/models/Company";
import type { Student } from "src/models/Student";
import type { LoginResponse, TokenDecoded } from "src/models/User";
import { writable, type Writable } from "svelte/store";

export const storagedAuth: Writable<LoginResponse> | Writable<null> = writable(null);
export const storagedToken: Writable<TokenDecoded> | Writable<null> = writable(null);
export const storagedUser: Writable<Student | College | Company> | Writable<null> = writable(null);