export interface Customer {
  Id_customer: number;
  username: string;
  password: string;
  email: string;
  phone: string;
  otp: string;
}
export const customers: Customer[] = [
  {Id_customer: 940200005,username: "user0",password: "password0",email: "user0@example.com",phone: "0123456789",otp: "123456",},
  {Id_customer: 720100221,username: "user1",password: "password1",email: "user1@example.com",phone: "0987654321",otp: "123456",},
  {Id_customer: 940200002,username: "Vu",password: "1",email: "vu0@example.com",phone: "0366732074",otp: "123456",},
];