import { DateTime } from "luxon";
import { BaseModel, belongsTo, BelongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Employee from "./Employee";

export default class LinkToken extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public token: string;

  @column({ columnName: "employee_id" })
  public employeeId: number;

  @belongsTo(() => Employee, { foreignKey: "employeeId" })
  public employee: BelongsTo<typeof Employee>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
