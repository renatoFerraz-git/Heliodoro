import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import BadRequest from "App/Exceptions/BadRequestException";
import Employee from "App/Models/Employee";

export default class EmployeesController {
  //GetAll
  public async index({}: HttpContextContract) {
    const employeeModel = await Employee.all();
    return employeeModel;
  }

  //GetById
  public async show({ params }: HttpContextContract) {
    const employeeModel = await Employee.findOrFail(params.id);
    return employeeModel;
  }

  //POST
  public async store({ request }: HttpContextContract) {
    const data = request.all();

    const name = await Employee.findBy("username", data.username);
    if (name) throw new BadRequest("username already in use", 409);

    const email = await Employee.findBy("email", data.email);
    if (email) throw new BadRequest("email already in use", 409);

    const employeeModel = await Employee.create(data);
    return employeeModel;
  }

  //Put
  public async update({ request, params }: HttpContextContract) {
    const employeeModel = await Employee.findOrFail(params.id);
    const data = request.all();

    const name = await Employee.findBy("username", data.username);
    if (name) throw new BadRequest("username already in use", 409);

    const email = await Employee.findBy("email", data.email);
    if (email) throw new BadRequest("email already in use", 409);

    employeeModel.merge(data);
    await employeeModel.save();
    return employeeModel;
  }

  //Delete
  public async destroy({ params }: HttpContextContract) {
    const employeeModel = await Employee.findOrFail(params.id);
    await employeeModel.delete();
  }
}
