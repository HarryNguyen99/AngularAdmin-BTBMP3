export interface User {
  id: number;
  username: string;
  full_name: string;
  email: string;
  birthday: Date;
  phone_number: string;
  status: boolean;
  password: string;
  createDate: Date;
  roles: any;
}
