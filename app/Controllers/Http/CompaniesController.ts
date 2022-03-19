import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Company from "App/Models/Company";
import BadRequest from "App/Exceptions/BadRequestException";

export default class CompaniesController {
  //GetAll
  public async index({}: HttpContextContract) {
    const ubuntuModel = await Company.all();
    return ubuntuModel;
  }

  //POST
  public async store({ request }: HttpContextContract) {
    const data = request.all();

    const name = await Company.findBy("company_name", data.company_name);
    if (name) throw new BadRequest("company_name already in use", 409);

    const cnpj = await Company.findBy("cnpj", data.cnpj);
    if (cnpj) throw new BadRequest("cnpj already in use", 409);

    const ubuntuMudel = await Company.create(data);
    return ubuntuMudel;
  }
}
