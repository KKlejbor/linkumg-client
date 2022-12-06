import type { Company } from './Company';

export interface JobOffer {
	companyDto: Company;
	createdAt: string;
	description: string;
	lastUpdatedAt: string;
	location: string;
	offerId: string;
	salaryDown: number;
	salaryUp: number;
	title: string;
}

export interface JobOfferPost {
	description: string;
	location: string;
	salaryDown: number;
	salaryUp: number;
	title: string;
}

export interface SearchJobOffer {
	contain?: string;
  location?: string;
  salaryDown?: number;
  salaryUp?: number;
}