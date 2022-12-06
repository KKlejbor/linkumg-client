import type { Socials } from "./Socials";

export interface Company {
	about: string;
	avatar: string;
	createdAt: Date;
	email: string;
	id: string;
	lastUpdateAt: Date;
	name: string;
	nip: string;
	phone: string;
	socials: Socials;
	type: string;
}


export interface CompanyPost {
    email: string;
    name: string;
    nip: string;
    password: string;
}