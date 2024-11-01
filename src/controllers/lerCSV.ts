import csvParser from "csv-parser"
import fs from 'fs'
import { IPlanilha } from "../interfaces/planilha"

export function LerCSV(arquivo: string): Promise<IPlanilha[]> {
  return new Promise((resolve, reject) => {
    const resultado: IPlanilha[] = []

    fs.createReadStream(arquivo)
      .pipe(csvParser())
      .on('data', (data => resultado.push(data)))
      .on('end', () => resolve(resultado))
      .on('error', (error) => reject(error))
  })
}