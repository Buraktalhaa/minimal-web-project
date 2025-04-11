import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();
const { Pool } = pkg;

export const pool = new Pool({
    user: 'postgres',
    password:process.env.PASSWORD, 
    host: 'localhost',
    port: 5432,
    database: 'website_form',
  })