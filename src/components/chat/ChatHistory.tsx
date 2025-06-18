import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { BiEdit } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import { LiaReplySolid } from "react-icons/lia";
import { TbPlayerSkipForward } from "react-icons/tb";
import { FaRegCopy } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { UserProfile } from "../../constant";
import ChatHeader from "./ChatHeader";
import AvatarStatus from "./AvatarStatus";
import ChatFooter from "./ChatFooter";

type ChatHistoryProps = {
  selectedUser: UserProfile;
  setOpenChatDrawer: Dispatch<SetStateAction<boolean>>;
};

const chat = [
  { text: "Hi Good Morning!" },
  { text: "Hey. Very Good morning. How are you?" },
  { text: "Good. Thank you" },
  { text: "I need your minute, are you available?" },
];

const ChatHistory = ({ selectedUser, setOpenChatDrawer }: ChatHistoryProps) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  return (
    <Box width={{ lg: "calc(100% - 320px)", xs: "100%" }}>
      <ChatHeader user={selectedUser} setOpenChatDrawer={setOpenChatDrawer} />
      <Box
        sx={{
          height: "calc(100% - 130px)",
          overflow: "auto",
          py: "16px",
          paddingX: { sm: "24px", xs: "16px" },
          bgcolor:
            theme.palette.mode === "dark" ? theme.palette.background.paper : "",
        }}
      >
        <Stack rowGap={"16px"}>
          {chat.map((history: any, index: number) => {
            return (
              <React.Fragment key={index}>
                {index % 2 === 0 ? (
                  <Stack
                    spacing={"10px"}
                    direction="row"
                    alignItems="flex-start"
                  >
                    <Grid container justifyContent="flex-end" flex={1}>
                      <Grid size={{ xs: 0, md: 3, xl: 4 }} />
                      <Grid size={{ xs: 12, md: 9, xl: 8 }}>
                        <Stack
                          direction="row"
                          justifyContent="flex-end"
                          alignItems="flex-start"
                        >
                          <Tooltip arrow title="More" placement="bottom">
                            <IconButton
                              onClick={(event: MouseEvent<HTMLButtonElement>) =>
                                setAnchorEl(event.currentTarget)
                              }
                              size="small"
                              sx={{
                                color: "secondary.dark",
                              }}
                            >
                              <CgMoreAlt />
                            </IconButton>
                          </Tooltip>
                          <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
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
                            <MenuItem>
                              <LiaReplySolid size={16} />
                              <Typography fontSize={"14px"} marginLeft={"8px"}>
                                Reply
                              </Typography>
                            </MenuItem>
                            <MenuItem>
                              <TbPlayerSkipForward size={16} />
                              <Typography fontSize={"14px"} marginLeft={"8px"}>
                                Forward
                              </Typography>
                            </MenuItem>
                            <MenuItem
                              sx={{ display: { sm: "none", xs: "flex" } }}
                            >
                              <BiEdit size={16} />
                              <Typography fontSize={"14px"} marginLeft={"8px"}>
                                Edit
                              </Typography>
                            </MenuItem>
                            <MenuItem>
                              <FaRegCopy size={16} />
                              <Typography fontSize={"14px"} marginLeft={"8px"}>
                                Copy
                              </Typography>
                            </MenuItem>
                            <MenuItem>
                              <RiDeleteBinLine size={16} />
                              <Typography fontSize={"14px"} marginLeft={"8px"}>
                                Delete
                              </Typography>
                            </MenuItem>
                          </Menu>
                          <Tooltip arrow title="Edit" placement="bottom">
                            <IconButton
                              size="small"
                              sx={{
                                color: "secondary.dark",
                                display: { sm: "flex", xs: "none" },
                              }}
                            >
                              <BiEdit />
                            </IconButton>
                          </Tooltip>
                          <Card
                            sx={{
                              display: "inline-block",
                              float: "right",
                              bgcolor: theme.palette.primary.main,
                              boxShadow: "none",
                              borderRadius: "8px",
                              ml: "8px",
                            }}
                          >
                            <CardContent
                              sx={{
                                p: "8px",
                                pb: "8px !important",
                                width: "fit-content",
                                ml: "auto",
                              }}
                            >
                              <Grid container spacing={"8px"}>
                                <Grid size={12}>
                                  <Typography
                                    variant="h6"
                                    color={"white"}
                                    fontSize={"14px"}
                                  >
                                    {history.text}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        </Stack>
                      </Grid>
                      <Grid size={12}>
                        <Typography
                          align="right"
                          color={"secondary.main"}
                          fontSize={"12px"}
                          paddingTop={"8px"}
                        >
                          11:23 AM
                        </Typography>
                      </Grid>
                    </Grid>
                    <Badge
                      overlap="circular"
                      badgeContent={<AvatarStatus status="available" />}
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
                        src={`/assets/images/users/${selectedUser.avatar}`}
                        sx={{ ml: { lg: "0 !important" } }}
                      />
                    </Badge>
                  </Stack>
                ) : (
                  <Stack
                    direction="row"
                    spacing={"10px"}
                    alignItems="flex-start"
                  >
                    <Badge
                      overlap="circular"
                      badgeContent={
                        <AvatarStatus status={selectedUser.online_status!} />
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
                        alt="user-avatar"
                        src={`/assets/images/users/${selectedUser.avatar}`}
                        sx={{ ml: { lg: "0 !important" } }}
                      />
                    </Badge>
                    <Grid container flex={1}>
                      <Grid size={12}>
                        <Card
                          sx={{
                            display: "inline-block",
                            float: "left",
                            bgcolor: theme.palette.background.paper,
                            borderRadius: "8px",
                            boxShadow: "none",
                          }}
                        >
                          <CardContent sx={{ p: "8px", pb: "8px !important" }}>
                            <Grid container spacing={"8px"}>
                              <Grid size={12}>
                                <Typography
                                  variant="h6"
                                  color={"secondary.dark"}
                                  fontSize={"14px"}
                                >
                                  {history.text}
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid size={12}>
                        <Typography
                          align="left"
                          color={"secondary.main"}
                          fontSize={"12px"}
                          paddingTop={"8px"}
                        >
                          11:23 AM
                        </Typography>
                      </Grid>
                    </Grid>
                  </Stack>
                )}
              </React.Fragment>
            );
          })}
        </Stack>
      </Box>
      <ChatFooter />
    </Box>
  );
};

export default ChatHistory;
