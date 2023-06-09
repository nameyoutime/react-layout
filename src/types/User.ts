export enum UserRole {
    NONE = '',
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export interface User {
    _id: number;
    userName?: string;
    passWord?: string;
    role: UserRole;
    createdAt?: string;
    updatedAt?: string;
}