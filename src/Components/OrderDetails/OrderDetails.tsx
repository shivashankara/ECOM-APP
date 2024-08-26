'use client'
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";




export default function OrderDetails() {

  const countriesList = async () => {
    // const res = await getCountries();
  };
  React.useEffect(() => {
    countriesList();
  }, []);
  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Product</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="left">
              2 Door Apartment Size Refrigerator with Freezer, 7.2 cu ft,
              Platinum Series, Stainless Steel
            </TableCell>
            <TableCell align="right">$849.00</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="left">Subtotal</TableCell>
            <TableCell align="right">$849.00</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="left">
              <strong>Total</strong>{" "}
            </TableCell>
            <TableCell align="right">
              <strong> $849.00</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
