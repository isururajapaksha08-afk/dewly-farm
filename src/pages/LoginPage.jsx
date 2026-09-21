import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  Loader2,
  AlertCircle,
} from "lucide-react";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../firebase";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // =========================================================
  // LOGIN
  // =========================================================

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const cleanEmail = email.trim();

    // Validation
    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      // Remember me
      await setPersistence(
        auth,
        rememberMe
          ? browserLocalPersistence
          : browserSessionPersistence
      );

      // Firebase Authentication
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          cleanEmail,
          password
        );

      console.log(
        "Login successful:",
        userCredential.user.uid
      );

      // Go to dashboard
      navigate("/dashboard", {
        replace: true,
      });
    } catch (err) {
      console.error("Login error:", err);

      switch (err.code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
        case "auth/user-not-found":
          setError(
            "Incorrect email or password."
          );
          break;

        case "auth/invalid-email":
          setError(
            "Please enter a valid email address."
          );
          break;

        case "auth/user-disabled":
          setError(
            "This account has been disabled. Please contact your administrator."
          );
          break;

        case "auth/too-many-requests":
          setError(
            "Too many login attempts. Please try again later."
          );
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection."
          );
          break;

        default:
          setError(
            "Unable to sign in. Please check your details and try again."
          );
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // FORGOT PASSWORD
  // =========================================================

  const handleForgotPassword = async () => {
    setError("");
    setSuccess("");

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError(
        "Enter your email address first, then click Forgot password."
      );
      return;
    }

    try {
      setResetLoading(true);

      await sendPasswordResetEmail(
        auth,
        cleanEmail
      );

      setSuccess(
        "Password reset email sent. Please check your inbox."
      );
    } catch (err) {
      console.error(
        "Password reset error:",
        err
      );

      switch (err.code) {
        case "auth/invalid-email":
          setError(
            "Please enter a valid email address."
          );
          break;

        case "auth/user-not-found":
          setError(
            "No account was found with this email address."
          );
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection."
          );
          break;

        default:
          setError(
            "Unable to send password reset email."
          );
      }
    } finally {
      setResetLoading(false);
    }
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="login-page">

      {/* =====================================================
          LEFT BRAND SECTION
      ====================================================== */}

      <div className="login-brand-section">

        <div className="brand-overlay">

          {/* LOGO */}
          <div className="brand-logo">
            <img
              src="/logo.png"
              alt="Dewly Farm"
            />
          </div>

          {/* BRAND NAME */}
          <h1>Dewly Farm</h1>

          <p>
            Smart farm management made
            <br />
            simple and efficient.
          </p>

          {/* FEATURES */}
          <div className="brand-features">

            <div>
              <span>✓</span>
              <label>Manage your farm</label>
            </div>

            <div>
              <span>✓</span>
              <label>
                Track livestock & production
              </label>
            </div>

            <div>
              <span>✓</span>
              <label>
                Manage inventory & staff
              </label>
            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          RIGHT LOGIN SECTION
      ====================================================== */}

      <div className="login-form-section">

        <div className="login-card">

          {/* MOBILE LOGO */}
          <div className="mobile-logo">

            <img
              src="/logo.png"
              alt="Dewly Farm"
            />

          </div>

          {/* HEADER */}
          <div className="login-heading">

            <h2>
              Welcome back 👋
            </h2>

            <p>
              Sign in to continue to your
              Dewly Farm dashboard.
            </p>

          </div>

          {/* =================================================
              LOGIN FORM
          ================================================== */}

          <form onSubmit={handleLogin}>

            {/* ERROR MESSAGE */}
            {error && (
              <div
                className="login-error"
                role="alert"
              >
                <AlertCircle
                  size={18}
                />

                <span>
                  {error}
                </span>
              </div>
            )}

            {/* SUCCESS MESSAGE */}
            {success && (
              <div
                className="login-success"
                role="status"
              >
                <span>
                  ✓
                </span>

                <span>
                  {success}
                </span>
              </div>
            )}

            {/* =================================================
                EMAIL
            ================================================== */}

            <div className="form-field">

              <label htmlFor="email">
                Email address
              </label>

              <div className="input-wrapper">

                <Mail
                  className="field-icon"
                  size={19}
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                    setSuccess("");
                  }}
                  placeholder="Enter your email"
                  autoComplete="email"
                  disabled={loading}
                  required
                />

              </div>
            </div>

            {/* =================================================
                PASSWORD
            ================================================== */}

            <div className="form-field">

              <div className="password-label-row">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-btn"
                  onClick={
                    handleForgotPassword
                  }
                  disabled={
                    loading ||
                    resetLoading
                  }
                >
                  {resetLoading
                    ? "Sending..."
                    : "Forgot password?"}
                </button>

              </div>

              <div className="input-wrapper">

                <LockKeyhole
                  className="field-icon"
                  size={19}
                />

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) => {
                    setPassword(
                      e.target.value
                    );
                    setError("");
                  }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={loading}
                  required
                />

                {/* SHOW / HIDE PASSWORD */}
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (prev) => !prev
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  disabled={loading}
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>
            </div>

            {/* =================================================
                REMEMBER ME
            ================================================== */}

            <div className="login-options">

              <label className="remember-me">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(
                      e.target.checked
                    )
                  }
                  disabled={loading}
                />

                <span>
                  Remember me
                </span>

              </label>

            </div>

            {/* =================================================
                LOGIN BUTTON
            ================================================== */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              {loading ? (
                <>
                  <Loader2
                    size={19}
                    className="spin"
                  />

                  <span>
                    Signing in...
                  </span>
                </>
              ) : (
                <>
                  <span>
                    Sign in
                  </span>

                  <ArrowRight
                    size={19}
                  />
                </>
              )}

            </button>

          </form>

          {/* FOOTER */}
          <div className="login-footer">

            <span>
              © {new Date().getFullYear()}
            </span>

            <span>
              Dewly Farm Management System
            </span>

          </div>

        </div>
      </div>

    </div>
  );
}