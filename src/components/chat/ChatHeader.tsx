import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import {
  alpha,
  Avatar,
  Badge,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { IoMenu } from "react-icons/io5";
import { FiAlertCircle, FiPhone, FiVideo } from "react-icons/fi";
import { CgMoreAlt } from "react-icons/cg";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineMuted } from "react-icons/ai";
import { UserProfile } from "../../constant";
import AvatarStatus from "./AvatarStatus";

type ChatHeaderProps = {
  user: UserProfile;
  setOpenChatDrawer: Dispatch<SetStateAction<boolean>>;
};

const ChatHeader = ({ user, setOpenChatDrawer }: ChatHeaderProps) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCloseSort = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems={"center"}
      width="100%"
      spacing={{ sm: "12px", xs: "8px" }}
      sx={{
        paddingX: "16px",
        paddingY: "11px",
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
        height: "65px",
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Grid width={{ sm: "auto", xs: "calc(100% - 50px)" }}>
        <Stack direction="row" alignItems="center" spacing={1} width={"100%"}>
          {user && (
            <>
              <IconButton
                onClick={() => setOpenChatDrawer(true)}
                sx={{
                  color: "secondary.main",
                  height: "38px",
                  width: "38px",
                  display: { lg: "none" },
                }}
              >
                <IoMenu size={22} />
              </IconButton>

              <Badge
                overlap="circular"
                badgeContent={<AvatarStatus status={user.online_status!} />}
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
                  alt="user-avatar"
                  src={`/assets/images/users/${user.avatar}`}
                  sx={{ ml: { lg: "0 !important" } }}
                />
              </Badge>
              <Stack width={{ sm: "auto", xs: "calc(100% - 96px)" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "secondary.dark",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {user.name}
                </Typography>
                <Typography
                  variant="caption"
                  color={"secondary.main"}
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Active {user.lastMessage}
                </Typography>
              </Stack>
            </>
          )}
        </Stack>
      </Grid>
      <Grid>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={"4px"}
        >
          <Tooltip arrow title="Voice Call" placement="bottom">
            <IconButton
              sx={{
                color: "secondary.dark",
                height: "38px",
                width: "38px",
                display: { sm: "flex", xs: "none" },
              }}
            >
              <FiPhone size={20} />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Video Call" placement="bottom">
            <IconButton
              sx={{
                color: "secondary.dark",
                height: "38px",
                width: "38px",
                display: { sm: "flex", xs: "none" },
              }}
            >
              <FiVideo size={20} />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Profile Info" placement="bottom">
            <IconButton
              sx={{
                color: "secondary.dark",
                height: "38px",
                width: "38px",
                display: { sm: "flex", xs: "none" },
              }}
            >
              <FiAlertCircle size={20} />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="More" placement="bottom">
            <IconButton
              onClick={(event: MouseEvent<HTMLButtonElement>) =>
                setAnchorEl(event.currentTarget)
              }
              sx={{
                color: "secondary.dark",
                height: "38px",
                width: "38px",
              }}
            >
              <CgMoreAlt />
            </IconButton>
          </Tooltip>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseSort}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              ".MuiPopover-paper": {
                borderRadius: "8px",
              },
              ".MuiList-root": {
                padding: "8px",
              },
              "& .MuiMenuItem-root": {
                borderRadius: "8px",
                color: theme.palette.secondary.dark,
                fontSize: "14px",
                padding: "6px 10px",
                height: "33px",
                minHeight: "33px",
                "&:hover": {
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? theme.palette.background.paper
                      : "rgba(0,0,0,0.04)",
                },
              },
            }}
          >
            <MenuItem
              onClick={handleCloseSort}
              sx={{ display: { sm: "none", xs: "flex" } }}
            >
              <FiPhone size={16} />
              <Typography fontSize={"14px"} marginLeft={"8px"}>
                Voice Call
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={handleCloseSort}
              sx={{ display: { sm: "none", xs: "flex" } }}
            >
              <FiVideo size={16} />
              <Typography fontSize={"14px"} marginLeft={"8px"}>
                Video call
              </Typography>
            </MenuItem>
            <MenuItem sx={{ display: { sm: "none", xs: "flex" } }}>
              <FiAlertCircle size={16} />
              <Typography fontSize={"14px"} marginLeft={"8px"}>
                Profile Info
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseSort}>
              <HiOutlineDocumentArrowDown size={16} />
              <Typography fontSize={"14px"} marginLeft={"8px"}>
                Archive
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseSort}>
              <AiOutlineMuted size={16} />
              <Typography fontSize={"14px"} marginLeft={"8px"}>
                Muted
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseSort}>
              <RiDeleteBinLine size={16} />
              <Typography fontSize={"14px"} marginLeft={"8px"}>
                Delete
              </Typography>
            </MenuItem>
          </Menu>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ChatHeader;
