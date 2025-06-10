import {
  Box,
  Chip,
  InputAdornment,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { paymentData } from "../../constant";
import CommonTable from "../../components/CommonTable";

const Payment = () => {
  const theme = useTheme();

  const columns = [
    {
      label: "No.",
      accessor: "id",
    },
    {
      label: "Customer",
      accessor: "customer",
    },
    {
      label: "Payment Type",
      accessor: "paymentType",
    },
    {
      label: "Paid Date",
      accessor: "paidDate",
    },
    {
      label: "Paid Amount",
      accessor: "paidAmount",
    },
    {
      label: "Status",
      accessor: "status",
      render: (row: any) => {
        const value = row.status;
        switch (value.toString()) {
          case "1":
            return (
              <Chip
                label="Paid"
                size="small"
                sx={{
                  color: theme.palette.mode === "dark" ? "#c0e5d9" : "#107d4f",
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(16, 125, 79, 0.5)"
                      : "rgba(192, 229, 217, 0.5)",
                  transitionDuration: "0s",
                }}
              />
            );
          case "2":
            return (
              <Chip
                label="Unpaid"
                size="small"
                sx={{
                  color: theme.palette.mode === "dark" ? "#f5bebe" : "#c50d0d",
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(197, 13, 13, 0.5)"
                      : "rgba(245, 190, 190, 0.5)",
                  transitionDuration: "0s",
                }}
              />
            );
        }
      },
    },
  ];

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
        Payment
      </Typography>
      <Box
        sx={{
          borderRadius: "12px",
          border: `1px solid ${theme.palette.divider}`,
          background: theme.palette.background.paper,
          overflow: "hidden",
        }}
      >
        <Stack
          sx={{
            gap: "10px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "end",
            padding: "16px",
          }}
        >
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start" sx={{ mr: "-4px" }}>
                <LuSearch size={18} />
              </InputAdornment>
            }
            placeholder="Search 12 records..."
            sx={{
              height: "40px",
              fontSize: "14px",
              borderRadius: "8px",
              maxWidth: "260px",
              "& .MuiOutlinedInput-input": { py: "8px", pl: "12px" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: `${theme.palette.primary.main} !important`,
                borderWidth: "1px!important",
              },
            }}
          />
          <Tooltip title="CSV Export">
            <HiOutlineDocumentArrowDown
              size={30}
              color="secondary"
              style={{ cursor: "pointer" }}
            />
          </Tooltip>
        </Stack>
        <CommonTable columns={columns} data={paymentData} />
      </Box>
    </Box>
  );
};

export default Payment;
