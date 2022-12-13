export interface Login {
    email: string;
    password: string;
}

export interface LoginResponse {
    type: string;
    accessToken: string;
    refreshToken: string;
}

export interface RegisterStudent {
    email: string;
    password: string;
    name: string;
    lastName: string;
    indexNumber: string;
    faculty: string;
}

export interface RegisterCompany {
    email: string;
    password: string;
    name: string;
    nip: string;
}

export interface SearchUser {
    email?: string;
    type?: string;
}

export interface TokenDecoded {
    iss: string;
    sub: string;
    exp: number;
    iat: number;
    scope: string;
}