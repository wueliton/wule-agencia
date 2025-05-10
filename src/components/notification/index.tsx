import Icon from "@components/icon";
import Typography from "@components/typography";
import type { NotificationProps } from "./types";

function Notification({ title, description }: NotificationProps) {
  return (
    <div className="p-4 rounded border border-red-700/60 bg-red-700/40 flex gap-4 items-center">
      <Icon name="forbidden-linear" size={24} />
      <div>
        <Typography>{title}</Typography>
        <div>
          <Typography variant="body-alt" className="!text-white/60">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Notification;
