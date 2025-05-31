import { useMemo, useState } from "react";
import {
  alpha,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { TablePagination } from "./Pagination";

const CommonTable = ({ columns, data }: any) => {
  const theme = useTheme();
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const paginatedData = useMemo(() => {
    const start = pageIndex * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);
  }, [data, pageIndex, pageSize]);

  const gotoPage = (page: number) => {
    setPageIndex(page);
  };
  return (
    <>
      <Box sx={{ width: "100%", overflowX: "auto", display: "block" }}>
        <Table
          sx={{
            ".MuiTableCell-root": {
              color: theme.palette.secondary.dark,
              whiteSpace: "nowrap",
              "&:first-of-type": { paddingLeft: "24px" },
              "&:last-child": { paddingRight: "24px" },
            },
          }}
        >
          <TableHead
            sx={{
              background: theme.palette.background.default,
              borderTop: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
              borderBottom: `2px solid ${alpha(theme.palette.divider, 0.5)}`,
            }}
          >
            <TableRow>
              {columns.map((col: any, index: number) => (
                <TableCell
                  key={index}
                  sx={{
                    fontWeight: "700",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    "&:not(:last-of-type)": {
                      position: "relative",
                      "&:after": {
                        position: "absolute",
                        content: '""',
                        backgroundColor: alpha(theme.palette.divider, 0.5),
                        width: "1px",
                        height: "calc(100% - 30px)",
                        right: "0px",
                        top: "16px",
                      },
                    },
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row: any, index: number) => (
              <TableRow
                key={index}
                sx={{
                  cursor: "pointer",
                  "&:hover": { background: theme.palette.background.default },
                }}
              >
                {columns.map((col: any, i: number) => (
                  <TableCell
                    key={i}
                    sx={{
                      borderColor: alpha(theme.palette.divider, 0.5),
                      padding: "12px",
                    }}
                  >
                    {col.render ? col.render(row, index) : row[col.accessor]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box sx={{ paddingX: { sm: "16px", xs: "12px" }, paddingY: "24px" }}>
        <TablePagination
          gotoPage={gotoPage}
          pageIndex={pageIndex}
          pageSize={pageSize}
          setPageSize={setPageSize}
          rows={data}
        />
      </Box>
    </>
  );
};

export default CommonTable;
