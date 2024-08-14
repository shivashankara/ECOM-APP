import Footer from "@/Layout/Partials/Footer";
import Header from "@/Layout/Partials/Header";
import { CssBaseline } from "@mui/material";

export default function CartTemplate({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </>
  );
}
