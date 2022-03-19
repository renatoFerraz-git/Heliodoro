import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { EmployeeFactory } from "Database/factories";

export default class FakerController {
  //POST_FAKER
  public async store({}: HttpContextContract) {
    const enmplooies = await EmployeeFactory.createMany(100);
    return enmplooies;
  }
}
