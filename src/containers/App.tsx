import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "../types/AppRoute";
import { UserRole } from "../types/User";
import AuthWrapper from "../components/AuthWrapper";
import LoginPage from "./auth/Login";
import HomePage from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path={AppRoute.HOME} element={<HomePage />} />
        <Route path={AppRoute.LOGIN} element={<LoginPage />} />

        <Route
          path="/user"
          element={
            <AuthWrapper role={UserRole.USER}>
              <h1>User</h1>
            </AuthWrapper>
          }
        />

        <Route
          path="/admin"
          element={
            <AuthWrapper role={UserRole.ADMIN}>
              <h1>Admin</h1>
            </AuthWrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
