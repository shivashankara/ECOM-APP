import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CartButton from "../CartButton/CartButton";



const home_appliances = [
  {
    id: "001",
    productName: "myProduct826707485",
    productImg: "a_v1",
    offerPrice: 1123,
    actualPrice: 7879,
    productTittle: "sExbupRUXdUNBzLfZmbrgmzjadENjzWvAzSkwKRjxthDU",
    keyFeatures: [
      "Newest technology",
      "Best in class components",
      "Dimensions -69.5 x 75.0 x 169.0",
      "Maintenance free",
      "12 years warranty",
    ],
    rating: 4,
    description:
      "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
  },
  {
    id: "002",
    productName: "myProduct3969775583",
    productImg: "a_v2",
    offerPrice: 1123,
    actualPrice: 7879,
    productTittle: "yDUVBbwbWezKXyKwdAqNMYDIYqrCEFMjCHADrCwKTbnfN",
    keyFeatures: [
      "Newest technology",
      "Best in class components",
      "Dimensions -69.5 x 75.0 x 169.0",
      "Maintenance free",
      "12 years warranty",
    ],
    rating: 4,
    description:
      "Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
  },
  {
    id: "003",
    productName: "myProduct3341796472",
    productImg: "a_v3",
    offerPrice: 1123,
    actualPrice: 7879,
    productTittle: "ZBewxfDHLCMqgvgRjVBvQoEhNASYGRfNENEISeBZwFHzr",
    keyFeatures: [
      "Newest technology",
      "Best in class components",
      "Dimensions -69.5 x 75.0 x 169.0",
      "Maintenance free",
      "12 years warranty",
    ],
    rating: 2,
    description:
      "Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
  },
  {
    id: "004",
    productName: "myProduct71644868",
    productImg: "a_v4",
    offerPrice: 1123,
    actualPrice: 7879,
    productTittle: "lcfwZNapssxJEjuUaokiSCHmZFfYZFENZUJEylqeCdwDU",
    keyFeatures: [
      "Newest technology",
      "Best in class components",
      "Dimensions -69.5 x 75.0 x 169.0",
      "Maintenance free",
      "12 years warranty",
    ],
    rating: 3,
    description:
      "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
  },
];

export default function CartTable() {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  align="right"></TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {home_appliances.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell  component="th" align="right">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
              <TableCell  component="th" align="right">
                {row.productName}
              </TableCell>
              <TableCell align="right">$ {row.offerPrice}</TableCell>
              <TableCell align="right">
                <CartButton />
                 {row.rating}
                 </TableCell>
              <TableCell align="right">$ {row.offerPrice*row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
