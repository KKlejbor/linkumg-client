export interface Login {
    email: string;
    password: string;
}

export interface LoginResponse {
    type: string;
    accessToken: string;
    refreshToken: string;
}