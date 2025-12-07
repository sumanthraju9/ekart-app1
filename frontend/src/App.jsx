import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./store/pages/Landingpage";
import Computerpage from "./store/pages/Computerpage";
import Fridgepage from "./store/pages/Fridgepage";
import Watchpage from "./store/pages/Watchpage";
import Mobilepage from "./store/pages/Mobilepage";
import Tvpage from "./store/pages/Tvpage";

import Computersingle from "./store/component/Singles/Computersingle";
import Mobilesingle from "./store/component/Singles/Mobilesingle";
import Fridgesingle from "./store/component/Singles/Fridgesingle";
import Tvsingle from "./store/component/Singles/Tvsingle";
import Watchsingle from "./store/component/Singles/Watchsingle";

import Usercart from "./store/Usercart";

import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ProtectedRoute from "./auth/ProtectedRoute";
import { useAuthStore } from "./auth/authStore";

const App = () => {
  const loadUser = useAuthStore((s) => s.loadUser);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Landingpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/computer"
            element={
              <ProtectedRoute>
                <Computerpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fridge"
            element={
              <ProtectedRoute>
                <Fridgepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tv"
            element={
              <ProtectedRoute>
                <Tvpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mobile"
            element={
              <ProtectedRoute>
                <Mobilepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/watch"
            element={
              <ProtectedRoute>
                <Watchpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/computer/:id"
            element={
              <ProtectedRoute>
                <Computersingle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mobile/:id"
            element={
              <ProtectedRoute>
                <Mobilesingle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fridge/:id"
            element={
              <ProtectedRoute>
                <Fridgesingle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tv/:id"
            element={
              <ProtectedRoute>
                <Tvsingle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/watch/:id"
            element={
              <ProtectedRoute>
                <Watchsingle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usecart"
            element={
              <ProtectedRoute>
                <Usercart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
