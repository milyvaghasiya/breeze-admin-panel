import { useTheme } from "@mui/material";
import { FaCheckCircle, FaClock, FaMinusCircle } from "react-icons/fa";

type Props = {
  status: string;
};

const AvatarStatus = ({ status }: Props) => {
  const theme = useTheme();

  switch (status) {
    case "available":
      return (
        <FaCheckCircle
          size={14}
          style={{ color: theme.palette.success.main }}
        />
      );
    case "do_not_disturb":
      return (
        <FaMinusCircle
          size={14}
          style={{ color: theme.palette.secondary.main }}
        />
      );
    case "offline":
      return (
        <FaClock size={14} style={{ color: theme.palette.warning.main }} />
      );
    default:
      return null;
  }
};

export default AvatarStatus;
