import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Employees extends BaseSchema {
  protected tableName = "employees";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      //table.uuid("id");
      table.increments("id");
      table.string("username").notNullable().unique();
      table.string("password").notNullable();
      table.string("email").notNullable().unique();
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
