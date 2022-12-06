import type { College } from "./College";

export interface Announcement {
	announcementId: string;
	collegeDto: College;
	createdAt: string;
	description: string;
	lastUpdatedAt: string;
	pathToAnnouncementImage: string;
	title: string;
}

export interface AnnouncementPost {
	description: string;
	pathToAnnouncementImage: string;
	title: string;
}