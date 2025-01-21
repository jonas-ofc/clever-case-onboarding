export interface Errors {
    email: string;
    password: string;
}

export interface User {
    email: string;
    password: string;
}

export interface ApiUser {
    email: string;
}

export interface State {
    isAuthenticated: boolean;
    user: User | null;
  }