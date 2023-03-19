import { DataSource } from 'typeorm'
// import dotenv from 'dotenv'

// dotenv.config()

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'centro_salud_db',
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity.ts'],
  migrations: ['database/migrations/*.ts'],
})

export default AppDataSource
