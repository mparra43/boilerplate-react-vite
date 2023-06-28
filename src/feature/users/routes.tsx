import { Route, Routes } from "react-router-dom";
import { Users } from "./pages";

export const TransversalRoutes = () => {
  return (
    <Routes>
      <Route path="users" element={<Users />} />
    </Routes>
  );
};
