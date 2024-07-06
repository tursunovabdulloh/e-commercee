import React from "react";
import { Outlet } from "react-router-dom";

export default function index() {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}
