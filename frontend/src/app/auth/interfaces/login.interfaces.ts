export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse{
    token: string;
}

export interface User {
    name: string,
    email: string,
    password: string,
}