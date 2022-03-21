import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { 3333: "ONLINE" };
});

Route.resource("/employees", "EmployeesController").apiOnly();
Route.resource("/companies", "CompaniesController").apiOnly();
Route.resource("/fakers", "FakerController").apiOnly();

Route.post("/forgot-password", "PasswordsController.forgotPassword");
