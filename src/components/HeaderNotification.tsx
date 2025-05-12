import { useRef, useState } from "react";
import {
  alpha,
  Badge,
  Box,
  ClickAwayListener,
  Grow,
  IconButton,
  Link,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { BiSolidCalendar } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { TbMessage2Filled } from "react-icons/tb";
import { RiSettings3Fill } from "react-icons/ri";

const HeaderNotification = () => {
  const theme = useTheme();
  const anchorRef = useRef<any>(null);
  const [read] = useState(2);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenMenu(false);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: "6px" }}>
      <IconButton
        ref={anchorRef}
        onClick={() => setOpenMenu((prevOpen) => !prevOpen)}
        sx={{
          color: "secondary.main",
          height: "40px",
          width: "40px",
        }}
      >
        <Badge
          badgeContent={read}
          color="primary"
          sx={{
            "& .MuiBadge-badge": {
              top: "4px",
              right: "6px",
              height: "14px",
              width: "14px",
              minWidth: "14px",
              fontSize: "10px !important",
            },
          }}
        >
          <IoNotifications />
        </Badge>
      </IconButton>
      <Popper
        placement="bottom-end"
        open={openMenu}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
        sx={{ zIndex: "20" }}
      >
        {({ TransitionProps }) => (
          <Grow
            timeout={{
              appear: 0,
              enter: 150,
              exit: 150,
            }}
            in={openMenu}
            {...TransitionProps}
          >
            <Paper
              sx={{
                boxShadow: `0px 8px 24px ${
                  theme.palette.mode === "dark"
                    ? "rgba(62, 72, 83, 0.1)"
                    : "rgba(19, 25, 32, 0.08)"
                }`,
                transformOrigin: "top right",
                borderRadius: "12px",
                width: "100%",
                maxWidth: { sm: "420px", xs: "400px" },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <Box
                  sx={{
                    paddingY: { xs: "16px", sm: "24px" },
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    marginBottom="20px"
                    paddingX={{ xs: "12px", sm: "24px" }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontSize: "16px", fontWeight: 600 }}
                    >
                      Notifications
                    </Typography>
                    <Link
                      href="#"
                      variant="h6"
                      color="primary"
                      sx={{
                        fontSize: "14px",
                        textDecoration: "none",
                        ":hover": { textDecoration: "underline" },
                      }}
                    >
                      Mark all read
                    </Link>
                  </Stack>
                  <List
                    component="nav"
                    sx={{
                      overflowY: "auto",
                      minHeight: "auto",
                      maxHeight: "calc(100vh - 210px)",
                      padding: { xs: "0 12px", sm: "0 24px" },
                      "& .MuiListItemButton-root": {
                        p: "12px",
                        mb: "12px",
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: "8px",
                        ":last-child": { mb: "2px" },
                        "&:hover": {
                          bgcolor:
                            theme.palette.mode === "dark"
                              ? alpha(theme.palette.primary.main, 0.16)
                              : alpha(theme.palette.primary.main, 0.08),
                          borderColor: theme.palette.primary.main,
                          "& .MuiListItemAvatar-root": {
                            "& .MuiBox-root": {
                              background: theme.palette.primary.main,
                              color: "white",
                            },
                          },
                        },
                        "& .MuiListItemSecondaryAction-root": {
                          mt: "6px",
                          ml: "8px",
                          top: "auto",
                          right: "auto",
                          alignSelf: "flex-start",
                          transform: "none",
                          position: "relative",
                        },
                        "& .MuiListItemAvatar-root": {
                          minWidth: { xs: "46px", sm: "56px" },
                        },
                      },
                    }}
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Box
                          sx={{
                            height: { xs: "36px", sm: "40px" },
                            width: { xs: "36px", sm: "40px" },
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: theme.palette.primary.main,
                            transition: "all 0.5s",
                          }}
                        >
                          <BiSolidCalendar size={20} />
                        </Box>
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ color: theme.palette.secondary.main }}
                        primary={
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "14px",
                              lineHeight: "20px",
                              display: "block",
                            }}
                          >
                            It's{" "}
                            <Typography
                              component="span"
                              variant="caption"
                              sx={{ fontSize: "14px", fontWeight: "600" }}
                            >
                              Cristina danny's
                            </Typography>{" "}
                            birthday today.
                          </Typography>
                        }
                        secondary={
                          <Typography
                            variant="caption"
                            sx={{ display: "block" }}
                          >
                            2 min ago
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Typography
                          color="secondary"
                          variant="caption"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          3:00 AM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemAvatar>
                        <Box
                          sx={{
                            height: { xs: "36px", sm: "40px" },
                            width: { xs: "36px", sm: "40px" },
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: theme.palette.primary.main,
                            transition: "all 0.5s",
                          }}
                        >
                          <TbMessage2Filled size={20} />
                        </Box>
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ color: theme.palette.secondary.main }}
                        primary={
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "14px",
                              lineHeight: "20px",
                              display: "block",
                            }}
                          >
                            <Typography
                              component="span"
                              variant="caption"
                              sx={{ fontSize: "14px", fontWeight: "600" }}
                            >
                              Aida Burg
                            </Typography>{" "}
                            commented your post.
                          </Typography>
                        }
                        secondary={
                          <Typography
                            variant="caption"
                            sx={{ display: "block" }}
                          >
                            10 April
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Typography
                          color="secondary"
                          variant="caption"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          6:00 PM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemAvatar>
                        <Box
                          sx={{
                            height: { xs: "36px", sm: "40px" },
                            width: { xs: "36px", sm: "40px" },
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: theme.palette.primary.main,
                            transition: "all 0.5s",
                          }}
                        >
                          <RiSettings3Fill size={20} />
                        </Box>
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ color: theme.palette.secondary.main }}
                        primary={
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "14px",
                              lineHeight: "20px",
                              display: "block",
                            }}
                          >
                            Your Profile is Complete{" "}
                            <Typography
                              component="span"
                              variant="caption"
                              sx={{ fontSize: "14px", fontWeight: "600" }}
                            >
                              60%
                            </Typography>
                          </Typography>
                        }
                        secondary={
                          <Typography
                            variant="caption"
                            sx={{ display: "block" }}
                          >
                            5 hours ago
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Typography
                          color="secondary"
                          variant="caption"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          1:30 PM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                  </List>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    marginTop="20px"
                    paddingX={{ xs: "12px", sm: "24px" }}
                  >
                    <Link
                      href="#"
                      variant="h6"
                      color="primary"
                      sx={{
                        fontSize: "14px",
                        textDecoration: "none",
                        ":hover": { textDecoration: "underline" },
                      }}
                    >
                      View all
                    </Link>
                  </Stack>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default HeaderNotification;
