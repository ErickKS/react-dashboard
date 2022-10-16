import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Dashboard />} />
    </Routes>
  );
}
