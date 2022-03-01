export type User = {
  address: string | null;
  createdAt: Date;
  firstName: string | null;
  freedomPay: boolean | null;
  id: string;
  lastName: string | null;
  postalCode: number | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
