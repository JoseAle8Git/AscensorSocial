import { json } from "@sveltejs/kit";
import fs from 'fs'
import path from 'path';
import { parse } from 'csv-parse/sync';

export const GET = () => {
    // Ruta absoluta al .csv dentro de static/.
    const filePath = path.join(process.cwd(), 'static', 'data', 'curva_movilidad_nacional.csv')
    // Leer archivo.
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    // Parsear el .csv a objetos.
    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    })
    return json(records);
}