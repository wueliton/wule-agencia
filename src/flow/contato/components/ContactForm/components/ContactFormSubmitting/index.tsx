import Icon from "@components/icon";
import Typography from "@components/typography";

function ContactFormSubmitting() {
  return (
    <div className="flex flex-col gap-1">
      <Icon name="refresh-linear" className="animate-spin text-white/60" />
      <Typography variant="title-small">Enviando...</Typography>
      <Typography>
        Estamos enviando o seu contato, aguarde por favor.
      </Typography>
    </div>
  );
}

export default ContactFormSubmitting;
