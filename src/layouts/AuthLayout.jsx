import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt28 flex flex-col md:flex-row items-center">
      <img src="../img/logo.svg" alt="imagen logotipo" className="max-w-xs"/>
      <div>
        <Outlet />
      </div>
    </main>
  );
}
