import Factory from "@ioc:Adonis/Lucid/Factory";
import Employee from "App/Models/Employee";

export const EmployeeFactory = Factory.define(Employee, ({ faker }) => {
  return {
    company_id: 1,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: "123456", //faker.internet.password(),
  };
}).build();
