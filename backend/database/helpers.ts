import { pool } from "../config/db.js";



export async function sendValues
        (gender: string,
        personName: string,
        surname: string,
        email: string,
        requestType: string,
        message: string) {
    const queryMesssage = ('INSERT INTO message(gender , personName, surname, email, requestType, messageValue) VALUES ($1 , $2, $3, $4, $5, $6) RETURNING personName')
    const valueMessage = [gender, personName, surname, email, requestType, message];
    const addMessageDb = await pool.query(queryMesssage, valueMessage);

    return addMessageDb.rows[0].personName, addMessageDb.rows[0].messageValue
}
