export interface IUser {
  avatar: string | Blob | null;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}

export interface IAuth {
  token: string | null;
  expiresAt: Date | string;
}

export interface ISession {
  lastLogin: Date | string;
}

export interface IUserAuthSession extends IUser, IAuth, ISession {}
