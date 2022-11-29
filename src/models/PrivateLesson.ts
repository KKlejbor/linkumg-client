import type { Student } from "./Student";

export interface PrivateLesson {
	category: string;
	createdAt: string;
	description: string;
	lastUpdateAt: string;
	lessonId: string;
	location: string;
	pricePerHour: number;
	studentDto: Student;
	title: string;
}

export interface PrivateLessonPost {
	description: string;
	location: string;
	salaryDown: number;
	salaryUp: number;
	title: string;
}