export interface College {
	about: string;
	avatar: string;
	createdAt: Date;
	email: string;
	id: string;
	lastUpdateAt: Date;
	name: string;
	type: string;
}

export interface CollegePost {
	email: string;
	faculty: string;
	name: string;
	password: string;
}

export interface CollegePatch {
	about: string;
	avatar: string;
}
