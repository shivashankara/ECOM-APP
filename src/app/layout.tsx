"use client";
import store from "@/Redux/store";
import "react-image-gallery/styles/css/image-gallery.css";
import { Provider } from "react-redux";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
