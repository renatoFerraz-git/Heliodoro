import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Company from "App/Models/Company";
import BadRequest from "App/Exceptions/BadRequestException";

export default class CompaniesController {
  //GetAll
  public async index({}: HttpContextContract) {
    const companyModel = await Company.all();
    return companyModel;
  }

  //GetById
  public async show({ params }: HttpContextContract) {
    const companyModel = await Company.findOrFail(params.id);
    return companyModel;
  }

  //POST
  public async store({ request }: HttpContextContract) {
    const data = request.all();

    const name = await Company.findBy("company_name", data.company_name);
    if (name) throw new BadRequest("company_name already in use", 409);

    const cnpj = await Company.findBy("cnpj", data.cnpj);
    if (cnpj) throw new BadRequest("cnpj already in use", 409);

    const companyModel = await Company.create(data);
    return companyModel;
  }

  //Put
  public async update({ request, params }: HttpContextContract) {
    const companyModel = await Company.findOrFail(params.id);
    const data = request.all();
    const name = await Company.findBy("company_name", data.company_name);
    if (name) throw new BadRequest("company_name already in use", 409);

    const cnpj = await Company.findBy("cnpj", data.cnpj);
    if (cnpj) throw new BadRequest("cnpj already in use", 409);

    companyModel.merge(data);
    await companyModel.save();
    return companyModel;
  }

  //Delete
  public async destroy({ params }: HttpContextContract) {
    const companyModel = await Company.findOrFail(params.id);
    await companyModel.delete();
  }
}
