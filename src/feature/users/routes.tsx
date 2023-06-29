import { Route, Routes } from "react-router-dom";
import { Users } from "./pages";

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="users" element={<Users />} />
    </Routes>
  );
};
