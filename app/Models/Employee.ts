import Hash from "@ioc:Adonis/Core/Hash";
import {
  BaseModel,
  beforeSave,
  column,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

import LinkToken from "./LinkToken";

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public company_id: number;

  @column()
  public username: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public email: string;

  @hasMany(() => LinkToken, { foreignKey: "employeeId" })
  public tokens: HasMany<typeof LinkToken>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(employee: Employee) {
    if (employee.$dirty.password) {
      employee.password = await Hash.make(employee.password);
    }
  }
}
