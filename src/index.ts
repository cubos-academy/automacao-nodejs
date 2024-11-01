import { AgendarNotificacao } from "./controllers/agendarNotificacao";
import { LerCSV } from "./controllers/lerCSV";
import { IPlanilha } from "./interfaces/planilha";
import { getDay} from 'date-fns'
async function inicializar() {
  try {
    // [x] ler CSV
    const planilha = await LerCSV('./tarefas.csv');
    const diasDaSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
    const hojeEmNumero = getDay(new Date());
    const hoje = diasDaSemana[hojeEmNumero]
    
    planilha.forEach(async (item: IPlanilha) => {
      const tarefa = item[hoje as keyof IPlanilha]
      if(tarefa) {
        // [ ] agendar
        
        await AgendarNotificacao(hojeEmNumero, item.horario, tarefa)
      }
    });

    console.log('Notificação agendada com sucesso!')
  } catch(error) {
    console.error('ocorreu um erro ', error)
  }
}

inicializar();
