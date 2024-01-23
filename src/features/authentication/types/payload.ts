export type payloadCreateUser = {
  firstname: string;
  lastname: string;
  accountName: string;
  email: string;
  password: string;
};

export type payloadUpdateUser = {
  id: string | number;
  firstname: string;
  lastname: string;
  accountName: string;
  email: string;
  password: string;
};

export type payloadDeleteUser = {
  id: string | number;
};
