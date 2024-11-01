import { Twilio } from "twilio";
import { env } from "../env";

const cliente = new Twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);
export function EnviarMensagem(mensagem: string) {
  cliente.messages.create({
    from: `whatsapp:${env.TWILIO_WHATSAPP_NUMBER}`,
    to: `whatsapp:${env.MY_WHATSAPP_NUMBER}`,
    body: mensagem
  })
  .then(message => console.log('Mensagem enviada com sucesso. ID:',message.sid))
  .catch(error => console.error('Deu erro ao enviar mensagem', error))
}
