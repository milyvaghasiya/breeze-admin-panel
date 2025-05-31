import { ChangeEvent, useState } from "react";
import {
  FormControl,
  Grid,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

type TablePaginationProps = {
  gotoPage: (value: number) => void;
  setPageSize: (value: number) => void;
  pageIndex: number;
  pageSize: number;
  rows: any;
};

export const TablePagination = ({
  gotoPage,
  rows,
  setPageSize,
  pageSize,
  pageIndex,
}: TablePaginationProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  let options: number[] = [5, 10, 25, 50, 100];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChangePagination = (_: ChangeEvent<unknown>, value: number) => {
    gotoPage(value - 1);
  };

  const handleChange = (event: SelectChangeEvent<number>) => {
    setPageSize(+event.target.value);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={"space-between"}
      sx={{ width: "auto", gap: "10px" }}
    >
      <Grid sx={{ margin: { sm: "0", xs: "auto" } }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="caption" color="secondary">
              Row per page
            </Typography>
            <FormControl sx={{ m: 1 }}>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={pageSize}
                onChange={handleChange}
                size="small"
                sx={{
                  lineHeight: "17px",
                  borderRadius: "8px",
                  "& .MuiSelect-select": {
                    py: "6px",
                    px: "10px",
                    fontSize: "12px",
                  },
                }}
              >
                {options.map((option: number) => (
                  <MenuItem
                    key={option}
                    value={option}
                    sx={{ fontSize: "14px" }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Typography variant="caption" color="secondary">
            Go to
          </Typography>
          <TextField
            size="small"
            type="number"
            value={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) : 0;
              gotoPage(page - 1);
            }}
            sx={{
              lineHeight: "17px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
              "& .MuiOutlinedInput-input": {
                py: "6px",
                px: "10px",
                fontSize: "12px",
                width: "36px",
              },
            }}
          />
        </Stack>
      </Grid>
      <Grid sx={{ margin: { sm: "0", xs: "auto" } }}>
        <Pagination
          count={Math.ceil(rows.length / pageSize)}
          page={pageIndex + 1}
          onChange={handleChangePagination}
          color="primary"
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          sx={{
            "& .MuiPaginationItem-root": {
              fontSize: "12px",
              borderRadius: "8px",
              marginY: "3px",
              "&.Mui-selected": {
                background: theme.palette.primary.main,
                color: "white",
              },
            },
          }}
        />
      </Grid>
    </Grid>
  );
};
