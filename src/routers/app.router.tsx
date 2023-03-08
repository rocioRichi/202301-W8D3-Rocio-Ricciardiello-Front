import { Navigate, Route, Routes } from "react-router-dom";
import { MenuOption } from "../components/menu/menu";
import { Home } from "../components/home/home";

type AppRouterProps = {
  menuOptions: MenuOption[];
};
export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Routes>
      <Route path={"/"} element={<Home></Home>}></Route>
      <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
      <Route
        path={"*"}
        element={<Navigate to={"/home"} replace={true} />}
      ></Route>
    </Routes>
  );
}
