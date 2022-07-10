import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Domain extends BaseModel {

  public static table = 'us_t_domain'

  @column({ isPrimary: true })
  public id: number
  @column()
  public description: string
  @column()
  public domain_type: string
  @column()
  public dominio: string
  @column()
  public ordem:number
  @column()
  public status: string
  @column()
  public valor:number
}
