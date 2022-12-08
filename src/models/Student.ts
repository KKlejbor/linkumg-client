import type { Socials } from "./Socials";

export interface Student {
	about: string;
	avatar: string;
	birthDate: string;
	createdAt: Date;
	email: string;
	faculty: string;
	id: string;
	indexNumber: number;
	lastName: string;
	lastUpdateAt: Date;
	name: string;
	phone: string;
	socials: Socials;
	type: string;
}

export interface StudentPost {
    email: string;
    faculty: string;
    indexNumber: number;
    lastName: string;
    name: string;
    password: string;
}

export interface StudentPatch {
	birthDate: string;
	phone: string;
	about: string; 
	socials: Socials;
	avatar: string;
}