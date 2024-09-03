"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CartButton from "../CartButton/CartButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "@/Redux/Slices/slice";

export default function CartTable() {
  const cartInformation = useSelector(
    (state: any) => state.appState.cartInformation
  );
  const [deleting, setDeleting] = React.useState(false);

  
  const dispatch = useDispatch();
  const handleClick = (id: any) => {
    setDeleting(true);
    dispatch(deleteCartItem(id));
    setDeleting(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartInformation.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" align="right">
                <IconButton aria-label="delete">
                {/* {deleting && <p>Deleting item...</p>} */}
                  <DeleteIcon onClick={() => handleClick(row.id)} />
                </IconButton>
              </TableCell>
              <TableCell component="th" align="right">
                {row.productName}
              </TableCell>
              <TableCell align="right">$ {row.offerPrice}</TableCell>
              <TableCell align="right">
                <CartButton buyQty={row.buyQuantity} id={row.id} />
                {row.buyQuantity}
              </TableCell>
              <TableCell align="right">
               $ {row.offerPrice * row.buyQuantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
