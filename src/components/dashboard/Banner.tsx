import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";

const Banner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: "12px",
        background: theme.palette.primary.main,
        position: "relative",
        padding: { sm: "24px", xs: "16px" },
        overflow: "hidden",
        "&::after": {
          content: '""',
          background: "url(/assets/images/banner-bg.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 100%",
          position: "absolute",
          inset: "0",
          zIndex: "1",
          opacity: "0.5",
          pointerEvents: "none",
        },
      }}
    >
      <Grid container sx={{ position: "relative", zIndex: "11" }}>
        <Grid
          size={{ xl: 6, sm: 8, xs: 12 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Stack gap="16px" flexDirection="column">
            <Typography
              sx={{ fontWeight: "600", fontSize: { sm: "30px", xs: "24px" } }}
              variant="h6"
              color="white"
            >
              Explore Redesigned Breeze
            </Typography>
            <Typography sx={{ fontSize: "14px" }} color="white">
              The Brand new User Interface with power of Material-UI Components.
              Explore the Endless possibilities with Able Pro.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid white",
                color: "white",
                textTransform: "capitalize",
                padding: "5px 15px",
                width: "fit-content",
                borderRadius: "8px",
                marginY: { sm: "12px", xs: "8px" },
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropOpacity: 0.1,
                },
              }}
            >
              Exclusive on Themeforest
            </Button>
          </Stack>
        </Grid>
        <Grid
          size={{ xl: 6, sm: 4, xs: 12 }}
          sx={{ display: { xs: "none", sm: "initial" } }}
        >
          <Stack justifyContent="center" alignItems="flex-end">
            <img
              src="/assets/images/welcome-banner.png"
              alt="Banner"
              width={200}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
