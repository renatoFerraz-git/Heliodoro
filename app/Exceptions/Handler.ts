import HttpExceptionHandler from "@ioc:Adonis/Core/HttpExceptionHandler";
import Logger from "@ioc:Adonis/Core/Logger";
import { Exception } from "@adonisjs/core/build/standalone";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger);
  }
  public async handle(error: Exception, ctx: HttpContextContract) {
    if (error.status == 422) {
      return ctx.response.status(error.status).send({
        code: "BAD_REQUEST",
        message: error.message,
        status: error.status,
        errors: error["messages"]?.errors ? error["messages"].errors : "",
      });
    }
    return super.handle(error, ctx);
  }
}
