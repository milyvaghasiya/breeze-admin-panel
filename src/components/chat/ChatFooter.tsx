import { IconButton, OutlinedInput, Stack, useTheme } from "@mui/material";
import { HiOutlineEmojiHappy, HiOutlinePaperClip } from "react-icons/hi";
import { TiMicrophone } from "react-icons/ti";
import { VscSend } from "react-icons/vsc";

const ChatFooter = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={"8px"}
      sx={{
        borderTop: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.paper,
        padding: "12px 16px",
      }}
    >
      <Stack
        direction="row"
        sx={{
          ".MuiIconButton-root": {
            color: "secondary.dark",
            height: "38px",
            width: "38px",
          },
        }}
      >
        <IconButton>
          <HiOutlineEmojiHappy />
        </IconButton>
        <IconButton>
          <HiOutlinePaperClip size={20} />
        </IconButton>
        <IconButton>
          <TiMicrophone size={20} />
        </IconButton>
      </Stack>
      <OutlinedInput
        placeholder="Your Message..."
        sx={{
          height: "40px",
          fontSize: "14px",
          borderRadius: "8px",
          width: "100%",
          "& .MuiOutlinedInput-input": { p: "10px 16px" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: `${theme.palette.primary.main} !important`,
            borderWidth: "1px!important",
          },
        }}
      />
      <IconButton
        sx={{
          color: "primary.main",
          height: "38px",
          width: "38px",
        }}
      >
        <VscSend />
      </IconButton>
    </Stack>
  );
};

export default ChatFooter;
