import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

function fixEncoding(str: string) {
    let fixed = Buffer.from(str, 'latin1').toString('utf-8');
    fixed = Buffer.from(fixed, 'latin1').toString('utf-8');
    return fixed;
}

export const GET = () => {
    const filePath = path.join(process.cwd(), 'static', 'data', 'ranking_ccaa_centil_padres_20.csv');
    const fileContent = fs.readFileSync(filePath, 'latin1');

    let records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    });

    records = records.map((r: any) => ({
        ...r,
        ccaa: fixEncoding(r.ccaa),
        centil_hijo_loess: r.centil_hijo_loess
    }))

    return json(records);
}