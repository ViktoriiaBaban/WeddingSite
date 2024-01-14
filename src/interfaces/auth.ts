export interface LoginResponseData {
    username: string,
    email: string,
    token: string
}

export interface LoginRequestData {
    username: string,
    password: string,
}