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
import CommonTable from "../../components/CommonTable";

const data = [
  {
    id: 1,
    customer: "Chery Mail",
    paymentType: "PayPal",
    paidDate: "02/05/2025",
    paidAmount: "$2590.00",
    status: 1,
  },
  {
    id: 2,
    customer: "Charlie Brown",
    paymentType: "Credit Card",
    paidDate: "02/05/2025",
    paidAmount: "$3470.00",
    status: 1,
  },
  {
    id: 3,
    customer: "Jaxson Herwitz",
    paymentType: "Debit Card",
    paidDate: "02/03/2025",
    paidAmount: "$6579.00",
    status: 2,
  },
  {
    id: 4,
    customer: "Gretchen Lipshutz",
    paymentType: "Debit Card",
    paidDate: "23/03/2025",
    paidAmount: "$4539.00",
    status: 1,
  },
  {
    id: 5,
    customer: "Ashlynn Gouse",
    paymentType: "PayPal",
    paidDate: "02/05/2025",
    paidAmount: "$2590.00",
    status: 1,
  },
  {
    id: 6,
    customer: "Hanna Ekstorm",
    paymentType: "Credit Card",
    paidDate: "02/05/2025",
    paidAmount: "$3470.00",
    status: 2,
  },
  {
    id: 7,
    customer: "Ashlynn Gouse",
    paymentType: "Debit Card",
    paidDate: "02/03/2025",
    paidAmount: "$6579.00",
    status: 1,
  },
  {
    id: 8,
    customer: "Chery Mail",
    paymentType: "Debit Card",
    paidDate: "23/06/2025",
    paidAmount: "$4539.00",
    status: 2,
  },
  {
    id: 9,
    customer: "Brandon Lee",
    paymentType: "PayPal",
    paidDate: "02/05/2025",
    paidAmount: "$2590.00",
    status: 2,
  },
  {
    id: 10,
    customer: "Bredly Nine",
    paymentType: "Credit Card",
    paidDate: "02/05/2025",
    paidAmount: "$3470.00",
    status: 1,
  },
  {
    id: 11,
    customer: "Hanna Ekstorm",
    paymentType: "Debit Card",
    paidDate: "02/03/2025",
    paidAmount: "$6579.00",
    status: 1,
  },
  {
    id: 12,
    customer: "Brandon Lee",
    paymentType: "Debit Card",
    paidDate: "23/06/2025",
    paidAmount: "$4539.00",
    status: 2,
  },
];

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
        <CommonTable columns={columns} data={data} />
      </Box>
    </Box>
  );
};

export default Payment;
