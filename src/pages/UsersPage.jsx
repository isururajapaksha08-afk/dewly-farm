
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  UserRound,
} from "lucide-react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

import "../index.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ============================================================
  // LOGIN
  // ============================================================

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // Firebase Authentication login
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );

      const user = userCredential.user;

      // --------------------------------------------------------
      // Save Firebase UID
      // --------------------------------------------------------

      localStorage.setItem(
        "dewlyFarmUserUid",
        user.uid
      );

      // --------------------------------------------------------
      // TEMPORARY ROLE
      //
      // Later we will get this from Data Connect User table.
      // --------------------------------------------------------

      const role = localStorage.getItem(
        "dewlyFarmUserRole"
      );

      if (!role) {
        localStorage.setItem(
          "dewlyFarmUserRole",
          "Super Admin"
        );
      }

      // --------------------------------------------------------
      // Login success
      // --------------------------------------------------------

      window.location.href = "/dashboard";

    } catch (err) {
      console.error("Login error:", err);

      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/user-not-found"
      ) {
        setError(
          "Invalid email or password."
        );
      } else if (
        err.code === "auth/too-many-requests"
      ) {
        setError(
          "Too many login attempts. Please try again later."
        );
      } else if (
        err.code === "auth/network-request-failed"
      ) {
        setError(
          "Network error. Please check your internet connection."
        );
      } else {
        setError(
          "Unable to login. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">

      {/* ========================================================
          LOGO
      ======================================================== */}

      <div className="login-logo">
        <img
          src="/logo.png"
          alt="Dewly Farm"
        />
      </div>

      {/* ========================================================
          LOGIN FORM
      ======================================================== */}

      <form
        className="login-form"
        onSubmit={handleLogin}
      >

        <h2>
          Welcome to Dewly Farm
        </h2>

        <p className="login-subtitle">
          Sign in to manage your farm
        </p>

        {/* ======================================================
            ERROR MESSAGE
        ====================================================== */}

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        {/* ======================================================
            EMAIL
        ====================================================== */}

        <div className="input-group">

          <UserRound
            className="input-icon"
            size={20}
          />

          <input
            type="email"
            placeholder="Username or Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
            autoComplete="email"
          />

        </div>

        {/* ======================================================
            PASSWORD
        ====================================================== */}

        <div className="input-group">

          <LockKeyhole
            className="input-icon"
            size={20}
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
            autoComplete="current-password"
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {/* ======================================================
            LOGIN BUTTON
        ====================================================== */}

        <button
          type="submit"
          className="submit-btn"
          disabled={loading}
        >

          {loading
            ? "Signing in..."
            : "Login"}

        </button>

      </form>

    </div>
  );
}

