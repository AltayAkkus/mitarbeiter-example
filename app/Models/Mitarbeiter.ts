import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Mitarbeiter extends BaseModel {
  public static table = 'mitarbeiter' // WICHTIG! Wenn ihr den Standard Tabellennamen ändert, muss der hier im Modell auch geändert werden!!!

  @column({ isPrimary: true })
  public id: number

  // Alles was in der Migration drin ist muss auch hier ins Modell. Richtige Datentyp angeben! (string, boolean, number etc.)
  // Name ist String
  @column()
  public name: string

  @column()
  public adresse: string

  @column()
  public kst: string

  // Schuhgröße ist integer, also eine nummer (number)
  @column()
  public schuhgroesse: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
