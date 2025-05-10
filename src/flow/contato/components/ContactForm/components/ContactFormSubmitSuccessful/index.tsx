import Icon from "@components/icon";
import Typography from "@components/typography";

function ContactFormSubmitSuccessful() {
  return (
    <div className="flex flex-col gap-1 items-center">
      <Icon name="heart-angle-bold" className="animate-pulse text-red-500" />
      <Typography variant="title-small">
        Mensagem enviada com sucesso!
      </Typography>
      <Typography>
        Obrigado por entrar em contato. Recebemos sua mensagem e nossa equipe
        vai responder o mais rápido possível.
      </Typography>
      <Typography>
        Fique de olho em seu e-mail (ou WhatsApp) — vamos te mostrar como sua
        empresa pode ganhar destaque no Google.
      </Typography>
    </div>
  );
}

export default ContactFormSubmitSuccessful;
