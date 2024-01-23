export type userProfileType = {
    status: string | number,
    data: {
      id: number;
      firstname: string;
      lastname: string;
      accountName: string;
      created_at: string;
      email: string;
      password: string | number;
    }[];
  };
  