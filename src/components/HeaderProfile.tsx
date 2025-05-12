import { useRef, useState } from "react";
import {
  alpha,
  Box,
  ClickAwayListener,
  Grow,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

const profileMenu = [
  { title: "Profile", icon: <FaRegUser size={18} /> },
  { title: "Logout", icon: <LuLogOut size={18} /> },
];

const HeaderProfile = () => {
  const theme = useTheme();
  const anchorRef = useRef<any>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenMenu(false);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: "8px" }}>
      <img
        src="/assets/images/avatar-1.png"
        alt="profile"
        ref={anchorRef}
        onClick={() => setOpenMenu((prevOpen) => !prevOpen)}
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "100%",
          objectFit: "cover",
          cursor: "pointer",
        }}
      />
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
                minWidth: "220px",
                maxWidth: { sm: "420px", xs: "400px" },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  sx={{
                    padding: "0",
                    ".MuiListItemButton-root": {
                      borderBottom: "1px solid var(--color-gray-200)",
                      justifyContent: "center",
                      fontSize: "14px",
                      paddingY: "6px",
                      "&:first-of-type": {
                        justifyContent: "start",
                      },
                    },
                  }}
                >
                  <ListItemButton
                    sx={{
                      background: "transparent !important",
                      borderBottom: `2px solid ${theme.palette.primary.main} !important`,
                      paddingY: "12px !important",
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{
                        cursor: "pointer",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img
                        src="/assets/images/avatar-1.png"
                        alt="profile"
                        style={{
                          height: "40px",
                          width: "40px",
                          borderRadius: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <Stack>
                        <Typography
                          variant="caption"
                          fontWeight={600}
                          sx={{ fontSize: "14px" }}
                        >
                          JWT User
                        </Typography>
                        <Typography variant="caption" color="secondary">
                          UI/UX Designer
                        </Typography>
                      </Stack>
                    </Stack>
                  </ListItemButton>
                  <Box sx={{ padding: "8px" }}>
                    {profileMenu.map((menu, index) => (
                      <ListItemButton
                        sx={{
                          borderRadius: "8px",
                          "&:hover": {
                            bgcolor:
                              theme.palette.mode === "dark"
                                ? alpha(theme.palette.primary.main, 0.16)
                                : alpha(theme.palette.primary.main, 0.08),
                            ".MuiListItemText-primary": {
                              color: theme.palette.primary.main,
                            },
                            ".MuiListItemIcon-root": {
                              color: theme.palette.primary.main,
                            },
                          },
                        }}
                        key={index}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: "32px",
                            color: theme.palette.secondary.main,
                          }}
                        >
                          {menu.icon}
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            ".MuiListItemText-primary": {
                              fontSize: "14px",
                              color: theme.palette.secondary.main,
                            },
                          }}
                          primary={menu.title}
                        />
                      </ListItemButton>
                    ))}
                  </Box>
                </List>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default HeaderProfile;
