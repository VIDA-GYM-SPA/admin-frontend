export interface IUser {
  avatar: string | Blob | null;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  fingerprint: Text | string | Blob | null;
  rfid: string | null;
}

export interface IAuth {
  token: string | null;
  expiresAt: Date | string;
}

export interface ISession {
  lastLogin: Date | string;
}

export interface IUserAuthSession extends IUser, IAuth, ISession {}


export interface ISizes {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  span?: number;
}
