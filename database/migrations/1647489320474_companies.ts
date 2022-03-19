import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Companies extends BaseSchema {
  protected tableName = "companies";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("company_name").notNullable().unique();
      table.string("cnpj").notNullable().unique();
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
