import {Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    password: '267126', 
    host: 'localhost',
    port: 5432,
    database: 'website_form',
  })