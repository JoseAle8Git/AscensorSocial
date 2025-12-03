import { json } from "@sveltejs/kit";
import fs from 'fs'
import path from "path";
import { parse } from "csv-parse/sync";

export const GET = () => {
    const filePath = path.join(process.cwd(), 'static', 'data', 'distribucion_quintiles_nacional_padres_hijos.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    });
    return json(records);
}