import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import { UserAuthContextProvider } from "./context/UserAuthContext";

import Dashboard from "./dashboard/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import AboutYourself from "./components/AboutYourself";
import AboutYourLastJob from "./components/AboutYourLastJob";
import AboutYourEducation from "./components/AboutYourEducation";
import AboutYourSkills from "./components/AboutYourSkills";
import ChooseTemplate from "./components/ChooseTemplate";
import DefaultDashboard from "./components/DefaultDashboard";

ReactDOM.render(
  <UserAuthContextProvider>
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/aboutYourself" element={<AboutYourself />} />
          <Route path="/AboutYourLastJob" element={<AboutYourLastJob />} />
          <Route path="/AboutYourEducation" element={<AboutYourEducation />} />
          <Route path="/AboutYourSkills" element={<AboutYourSkills />} />
          <Route path="/ChooseTemplate" element={<ChooseTemplate />} />
          <Route path="/DefaultDashboard" element={<DefaultDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Routes>
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </React.StrictMode>
    </Router>
  </UserAuthContextProvider>,
  document.getElementById("root")
);
