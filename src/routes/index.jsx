import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Suspense } from "react";
import LoadingProgress from "../components/UI/ProgressCircularLoading";
// Rutas protegidas
import AuthRoute from "../components/Protected/AuthRoute";
import ProjectedRoute from "../components/Protected/ProjectedRoute";

// Páginas públicas
const Home = lazy(() => import("../pages/Home/index"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingProgress/>}>
        <Routes>
          <Route path="/" element={ <AuthRoute><Login /></AuthRoute>} />
          <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />
          <Route path="/home" element={<ProjectedRoute><Home /></ProjectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
