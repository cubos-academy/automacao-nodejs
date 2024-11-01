import schedules from 'node-schedule'
import { EnviarMensagem } from './enviarMensagem'

export function AgendarNotificacao(diaEmNumero: number, horaCompleta: string, tarefa: string) {
  const [hora, minuto] = horaCompleta.split(':').map(item => parseInt(item))
  
  const novaRegra = new schedules.RecurrenceRule()
  novaRegra.hour = hora
  novaRegra.minute = minuto
  novaRegra.dayOfWeek = diaEmNumero

  schedules.scheduleJob(novaRegra, () => {
    EnviarMensagem(`Hora de: ${tarefa}`)
  })
}

