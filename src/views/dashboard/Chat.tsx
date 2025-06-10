import { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { UserProfile, users } from "../../constant";
import ChatDrawer from "../../components/chat/ChatDrawer";
import ChatHistory from "../../components/chat/ChatHistory";

const Chat = () => {
  const theme = useTheme();
  const [openChatDrawer, setOpenChatDrawer] = useState(
    window.innerWidth >= 1024
  );
  const [selectedUser, setSelectedUser] = useState<UserProfile>(users[0]);

  useEffect(() => {
    const handleResize = () => {
      setOpenChatDrawer(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        borderRadius: "8px",
        overflow: "hidden",
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          height: "calc(100vh - 102px)",
        }}
      >
        <ChatDrawer
          openChatDrawer={openChatDrawer}
          setOpenChatDrawer={setOpenChatDrawer}
          setSelectedUser={setSelectedUser}
          selectedUser={selectedUser}
        />
        <ChatHistory
          selectedUser={selectedUser}
          setOpenChatDrawer={setOpenChatDrawer}
        />
      </Box>
    </Box>
  );
};

export default Chat;
