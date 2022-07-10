import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Criterio extends BaseModel {

  public static table = 'us_t_criterio'

  @column({ isPrimary: true })
  public id: number
  @column()
  public description: string
  @column()
  public dm_type: string
  @column()
  public code: string
  @column()
  public status: string
  @column()
  public ordem:number
  @column()
  public valor:number
}
