
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, LogIn, UserRound } from "lucide-react";
import { loginWithUserId } from "../firebase";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!userId.trim() || !password) {
      setError("User ID and password are required.");
      return;
    }

    try {
      setLoading(true);

      await loginWithUserId(userId, password);

      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);

      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        setError("Invalid User ID or password.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="login-glow login-glow-one" />
        <div className="login-glow login-glow-two" />
      </div>

      <div className="login-container">
        <div className="login-brand">
          <div className="login-logo">
            <span>DF</span>
          </div>

          <div>
            <h1>Dewly Farm</h1>
            <p>Smart Farm Management System</p>
          </div>
        </div>

        <div className="login-card">
          <div className="login-card-header">
            <div className="login-icon">
              <LockKeyhole size={22} />
            </div>

            <h2>Welcome back</h2>

            <p>
              Sign in to manage your farm operations.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="login-field">
              <span>User ID</span>

              <div className="login-input-wrapper">
                <UserRound size={18} />

                <input
                  type="text"
                  value={userId}
                  onChange={(event) =>
                    setUserId(event.target.value)
                  }
                  placeholder="Enter your User ID"
                  autoComplete="username"
                  disabled={loading}
                />
              </div>
            </label>

            <label className="login-field">
              <span>Password</span>

              <div className="login-input-wrapper">
                <LockKeyhole size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={loading}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword((current) => !current)
                  }
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </label>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button
              className="login-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                "Signing in..."
              ) : (
                <>
                  <LogIn size={18} />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <span>DEWLY FARM</span>
            <span>•</span>
            <span>Secure Access</span>
          </div>
        </div>

        <p className="login-copyright">
          © 2026 Dewly Farm. Smart agriculture management.
        </p>
      </div>
    </div>
  );
}
