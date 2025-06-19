import { SyntheticEvent, useState } from "react";
import {
  alpha,
  Avatar,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { pricingPlan } from "../../constant";

const Pricing = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "24px",
          marginBottom: "24px",
          color: theme.palette.secondary.dark,
        }}
      >
        Pricing
      </Typography>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        gap={"16px"}
        marginBottom={"30px"}
        flexWrap={{ sm: "nowrap", xs: "wrap" }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { sm: "18px", xs: "16px" },
              color: theme.palette.secondary.dark,
            }}
          >
            Quality is never an accident. It is always the result of
            interlligent effort
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
            }}
          >
            It makes no difference what the price is, it all makes senses to us.
          </Typography>
        </Box>
        <Box
          sx={{
            background: theme.palette.background.paper,
            borderRadius: "40px",
            padding: "4px",
            width: "fit-content",
            height: "fit-content",
            margin: { sm: "0", xs: "auto" },
            border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              minHeight: 0,
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {["Monthly", "Yearly"].map((label, index) => (
              <Tab
                key={label}
                label={label}
                sx={{
                  textTransform: "none",
                  color: theme.palette.secondary.main,
                  fontWeight: 600,
                  fontSize: "16px",
                  minHeight: 0,
                  minWidth: "80px",
                  px: "30px",
                  py: "8px",
                  borderRadius: "40px",
                  transition: "0.3s",
                  "&.Mui-selected": {
                    color: "white",
                    backgroundColor: theme.palette.primary.main,
                  },
                  "&:hover": {
                    backgroundColor:
                      value === index
                        ? theme.palette.primary.main
                        : theme.palette.background.default,
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Stack>
      <Grid container spacing={{ sm: "20px", xs: "16px" }}>
        {pricingPlan.map((pricing, index) => (
          <Grid
            key={index}
            size={{ xl: 4, sm: 6, xs: 12 }}
            sx={{
              maxWidth: "400px",
              marginTop: { sm: "70px", xs: "60px" },
              marginX: "auto",
              ":hover": {
                ".MuiAvatar-root": {
                  color: "white",
                  background: theme.palette.primary.main,
                },
              },
            }}
          >
            <Box position="relative">
              <Avatar
                sx={{
                  height: { sm: "140px", xs: "120px" },
                  width: { sm: "140px", xs: "120px" },
                  background: theme.palette.background.paper,
                  color: theme.palette.primary.main,
                  border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                  position: "absolute",
                  top: { sm: "-70px", xs: "-60px" },
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontWeight: 600,
                  fontSize: { sm: "40px", xs: "35px" },
                }}
              >
                {value === 0 ? pricing.monthlyCost : pricing.yearlyCost}
              </Avatar>
              <Stack
                sx={{
                  borderRadius: {
                    md: "70px 70px 6px 6px",
                    xs: "50px 50px 6px 6px",
                  },
                  background: theme.palette.background.paper,
                  padding: { md: "24px", sm: "20px", xs: "16px" },
                  paddingTop: { md: "70px", sm: "70px", xs: "56px" },
                  border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                  justifyContent: "space-between",
                  boxShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      textAlign: "center",
                      color: theme.palette.secondary.dark,
                      fontWeight: 700,
                      marginTop: "16px",
                      textTransform: "uppercase",
                    }}
                  >
                    {pricing.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      textAlign: "center",
                      color: theme.palette.secondary.dark,
                      marginBottom: "16px",
                    }}
                  >
                    {pricing.service} Services
                  </Typography>
                </Box>
                <List sx={{ padding: 0, marginBottom: "24px" }}>
                  {pricing.description.map((desc, index) => (
                    <ListItem key={index} sx={{ paddingX: "0" }}>
                      <RiVerifiedBadgeFill
                        style={{ color: theme.palette.primary.main }}
                      />
                      <Typography ml={"8px"}>{desc.title}</Typography>
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant={index === 1 ? "contained" : "outlined"}
                  sx={{
                    maxWidth: "220px",
                    margin: "auto",
                    width: "100%",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    borderRadius: "6px",
                    borderColor: "primary.main",
                    boxShadow: "none !important",
                    color: index === 1 ? "white" : theme.palette.primary.main,
                    ":hover": {
                      background:
                        index === 1
                          ? alpha(theme.palette.primary.main, 0.9)
                          : alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  Order Now
                </Button>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
