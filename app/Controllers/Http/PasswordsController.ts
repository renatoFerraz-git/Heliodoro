import Mail from "@ioc:Adonis/Addons/Mail";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Employee from "App/Models/Employee";
import { randomBytes } from "crypto";
import { promisify } from "util";

export default class PasswordsController {
  //Post
  public async forgotPassword({ request, response }: HttpContextContract) {
    // console.log(response, request);
    const { email, resetPasswordUrl } = request.only([
      "email",
      "resetPasswordUrl",
    ]);
    const employee = await Employee.findByOrFail("email", email);
    const random = await promisify(randomBytes)(24);
    const token = random.toString("hex");
    await employee
      .related("tokens")
      .updateOrCreate({ employeeId: employee.id }, { token });
    await Mail.send((mensage) => {
      mensage
        .from("heliodoro@heliodoro.com")
        .to(email)
        .subject("Heliodoro: Recuperação de Senha!")
        .htmlView("emails/forgotpassword", {
          productName: "Heliodoro",
          name: employee.username,
          resetPasswordUrl,
        });
    });
    return response.noContent();
  }
}
