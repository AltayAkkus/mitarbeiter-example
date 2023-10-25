import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  // Tabellenname ändern, standard ist "mitarbeiters"
  protected tableName = 'mitarbeiter'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // Mehr Infos auf https://docs.adonisjs.com/reference/database/table-builder

      table.increments('id') // Standard, https://docs.adonisjs.com/reference/database/table-builder#increments
      table.string('name', 64) // Feldname: name, String (Länge 64 Zeichen) https://docs.adonisjs.com/reference/database/table-builder#string
      table.string('adresse',128) // Feldname: adresse, String (Länge 128 Zeichen)
      table.string('kst', 4) // Feldname: kst, String (Länge 4 Zeichen)
      table.integer('schuhgroesse') // Feldname: schuhgroesse, Integer https://docs.adonisjs.com/reference/database/table-builder#integer
      table.timestamps(true,true) // Feld created_at und modified_at, timestamps https://docs.adonisjs.com/reference/database/table-builder#timestamps
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
