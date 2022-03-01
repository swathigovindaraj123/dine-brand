export type UserUpdateInput = {
  address?: string | null;
  firstName?: string | null;
  freedomPay?: boolean | null;
  lastName?: string | null;
  password?: string;
  postalCode?: number | null;
  roles?: Array<string>;
  username?: string;
};
