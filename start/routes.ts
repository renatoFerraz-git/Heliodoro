import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { ONLINE: "SUA APLICAÇÃO ESTÁ RODANDO NA PORTA 3333" };
});

Route.resource("/employees", "EmployeesController").apiOnly();
Route.resource("/companies", "CompaniesController").apiOnly();
Route.resource("/fakers", "FakerController").apiOnly();

Route.post("/forgot-password", "PasswordsController.forgotPassword");
