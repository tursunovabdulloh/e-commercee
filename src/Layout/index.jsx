import React from "react";
import { Outlet } from "react-router-dom";

export default function index() {
  return (
    <>
      <main>
        <Outlet />
        <header>header</header>
      </main>
      <footer>footer</footer>
    </>
  );
}
