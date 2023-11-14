export interface IUser {
  name: string;
  lastname: string;
  dni: string;
  email: string;
  role: {
    name: string;
  };
  role_id: number;
  fingerprint: Text | string | null;
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
