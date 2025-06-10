import {
  ChangeEvent,
  Dispatch,
  Fragment,
  SetStateAction,
  useState,
} from "react";
import {
  Avatar,
  Badge,
  Box,
  Chip,
  IconButton,
  InputAdornment,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  OutlinedInput,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { LuSearch } from "react-icons/lu";
import { FaCheckCircle, FaClock, FaMinusCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { UserProfile, users } from "../../constant";

type ChatDrawerProps = {
  openChatDrawer: boolean;
  setOpenChatDrawer: Dispatch<SetStateAction<boolean>>;
  setSelectedUser: (u: UserProfile) => void;
  selectedUser: any;
};

const ChatDrawer = ({
  openChatDrawer,
  setOpenChatDrawer,
  setSelectedUser,
  selectedUser,
}: ChatDrawerProps) => {
  const theme = useTheme();
  const [search, setSearch] = useState<string | undefined>("");
  const handleSearch = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    const newString = event?.target.value;
    setSearch(newString);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search?.toLowerCase() || "")
  );

  const AvatarStatus = ({ status }: any) => {
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

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        position: { lg: "relative", xs: "absolute" },
        left: openChatDrawer ? 0 : { xs: "-298px", sm: "-330px" },
        top: "0",
        zIndex: "3",
        width: { xs: "100%", sm: "320px" },
        maxWidth: { xs: "288px", sm: "320px" },
        transition: "0.3s",
        borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        boxShadow: {
          lg: "none",
          xs: "0 4px 0px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.1)",
        },
        height: "100%",
      }}
    >
      <Box
        sx={{
          padding: { sm: "24px", xs: "16px" },
          paddingBottom: "12px !important",
        }}
      >
        <Stack spacing={{ lg: "16px", xs: "10px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={"16px"}
          >
            <Stack direction="row" spacing={"4px"} alignItems="center">
              <Typography
                variant="h5"
                color="secondary.dark"
                fontSize={"16px"}
                fontWeight={"600"}
              >
                Messages
              </Typography>
              <Chip
                label="9"
                component="span"
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  "& .MuiChip-label": { px: "4px" },
                  color: "white",
                  background: "rgb(91, 107, 121)",
                }}
              />
            </Stack>
            <IconButton
              onClick={() => setOpenChatDrawer(false)}
              sx={{
                color: "secondary.main",
                height: "38px",
                width: "38px",
                display: { lg: "none" },
              }}
            >
              <IoClose size={22} />
            </IconButton>
          </Stack>
          <OutlinedInput
            fullWidth
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start" sx={{ mr: "-4px" }}>
                <LuSearch size={20} />
              </InputAdornment>
            }
            sx={{
              borderRadius: "8px",
              fontSize: "14px",
              height: "40px",
              "& .MuiOutlinedInput-input": { py: "10px", pl: "12px" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: `${theme.palette.primary.main} !important`,
                borderWidth: "1px!important",
              },
            }}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          height: { sm: "calc(100% - 124px)", xs: "calc(100% - 116px)" },
        }}
      >
        <Box sx={{ px: { sm: "24px", xs: "16px" } }}>
          <List component="nav" sx={{ p: 0 }}>
            {filteredUsers?.map((user) => (
              <Fragment key={user.id}>
                <ListItemButton
                  sx={{
                    pl: "8px",
                    borderRadius: 0,
                    my: "2px",
                    "&:hover": { borderRadius: 1 },
                    "&:last-child": { borderBottom: "none" },
                  }}
                  divider
                  onClick={() => {
                    setSelectedUser(user);
                    if (window.innerWidth < 1024) {
                      setOpenChatDrawer(false);
                    }
                  }}
                  selected={user.id === selectedUser?.id}
                >
                  <ListItemAvatar>
                    <Badge
                      overlap="circular"
                      badgeContent={
                        <AvatarStatus status={user.online_status!} />
                      }
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      sx={{
                        "& .MuiBox-root": { width: "6px", height: "6px" },
                        padding: 0,
                        minWidth: "12px",
                        "& svg": { background: "#fff", borderRadius: "50%" },
                      }}
                    >
                      <Avatar
                        alt={user.name}
                        src={`/assets/images/users/${user.avatar}`}
                      />
                    </Badge>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={"8px"}
                      >
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "text.primary",
                          }}
                        >
                          {user.name}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          variant="caption"
                          fontSize="12px"
                        >
                          {user.lastMessage}
                        </Typography>
                      </Stack>
                    }
                    secondary={
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={"8px"}
                      >
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            color: "text.secondary",
                          }}
                        >
                          {user.status}
                        </Typography>
                        <>
                          {user.unReadChatCount && (
                            <Box
                              sx={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                bgcolor: theme.palette.primary.main,
                              }}
                            />
                          )}
                        </>
                      </Stack>
                    }
                  />
                </ListItemButton>
              </Fragment>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatDrawer;
