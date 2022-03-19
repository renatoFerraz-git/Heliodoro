import Route from "@ioc:Adonis/Core/Route";

Route.resource("/employees", "EmployeesController").apiOnly();
Route.resource("/companies", "CompaniesController").apiOnly();
Route.resource("/fakers", "FakerController").apiOnly();

Route.post("/forgot-password", "PasswordsController.forgotPassword");
