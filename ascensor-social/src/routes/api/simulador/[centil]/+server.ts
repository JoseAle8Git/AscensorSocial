import { json, type RequestHandler } from "@sveltejs/kit";
import fs from 'fs';
import path from "path";
import { parse } from "csv-parse/sync";

interface FilaMovilidad {
    sexo: string;
    tipo_renta: string;
    centil_padres: string;
    promedio: string;
    centil_hijo: string;
    centil_hijo_loess: string;
    n: string;
}

interface FilaEuros {
    centil: string;
    renta: string;
}


function loadCSV<T>(fileName: string): T[] {
    const filePath = path.join(process.cwd(), 'static', 'data', fileName);
    const content = fs.readFileSync(filePath, 'utf-8');
    return parse(content, { columns: true, skip_empty_lines: true}) as T[];
}

export const GET: RequestHandler = async ({ params }) => {
    const centil = Number(params.centil);

    const curva = loadCSV<FilaMovilidad>('curva_movilidad_nacional.csv');
    const eurosPadres = loadCSV<FilaEuros>('conversor_centiles_a_euros_padres.csv');
    const eurosHijos = loadCSV<FilaEuros>('conversor_centiles_a_euros_hijos.csv');

    const filaMov = curva.find((d) => Number(d.centil_padres) === centil);
    const filaPadre = eurosPadres.find((d) => Number(d.centil) === centil);

    const centilHijo = Number(filaMov?.centil_hijo_loess ?? filaMov?.centil_hijo);
    const filaHijo = eurosHijos.find(
        (d) => Number(d.centil) === Math.round(centilHijo)
    );

    return json({
        centil_padres: centil,
        centil_hijo: centilHijo,
        renta_padre: filaPadre ? Number(filaPadre.renta).toFixed(2) : null,
        renta_hijo: filaHijo ? Number(filaHijo.renta).toFixed(2) : null
    });
};