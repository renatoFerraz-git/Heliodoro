import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import BadRequest from "App/Exceptions/BadRequestException";
import Employee from "App/Models/Employee";

export default class EmployeesController {
  //GetAll
  public async index({}: HttpContextContract) {
    const ubuntuModel = await Employee.all();
    return ubuntuModel;
  }

  //POST
  public async store({ request }: HttpContextContract) {
    const data = request.all();

    const ubuntuByUsername = await Employee.findBy("username", data.username);
    if (ubuntuByUsername) throw new BadRequest("username already in use", 409);

    const ubuntuByEmail = await Employee.findBy("email", data.email);
    if (ubuntuByEmail) throw new BadRequest("email already in use", 409);

    const ubuntuMudel = await Employee.create(data);
    return ubuntuMudel;
  }
}
