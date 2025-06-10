import { Dispatch, SetStateAction } from "react";
import { Box, useTheme } from "@mui/material";
import { UserProfile } from "../../constant";
import ChatHeader from "./ChatHeader";

type ChatHistoryProps = {
  selectedUser: UserProfile;
  setOpenChatDrawer: Dispatch<SetStateAction<boolean>>;
};

const ChatHistory = ({ selectedUser, setOpenChatDrawer }: ChatHistoryProps) => {
  const theme = useTheme();
  return (
    <Box
      width={{ lg: "calc(100% - 320px)", xs: "100%" }}
      bgcolor={theme.palette.background.paper}
    >
      <ChatHeader user={selectedUser} setOpenChatDrawer={setOpenChatDrawer} />
      <Box
        sx={{
          height: "calc(100% - 97px)",
          my: "16px",
          paddingX: { sm: "24px", xs: "16px" },
        }}
      >
        Chat History
      </Box>
    </Box>
  );
};

export default ChatHistory;
