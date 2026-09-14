import {
  Search,
  Bell,
  UserCircle,
  Menu,
  X,
  Settings,
  LogOut,
  CheckCheck,
  AlertTriangle,
  Info,
  Activity,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

const notifications = [
  {
    id: 1,
    title: "Stock Alert",
    message:
      "Cattle feed quantity is below reorder level.",
    time: "15 minutes ago",
    type: "warning",
  },
  {
    id: 2,
    title: "Health Check",
    message:
      "8 livestock health records were updated.",
    time: "1 hour ago",
    type: "success",
  },
  {
    id: 3,
    title: "New Sale",
    message:
      "A new livestock sale worth LKR 42,000 was recorded.",
    time: "3 hours ago",
    type: "info",
  },
];

export default function Topbar({
  onMenuClick,
}) {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [notificationOpen, setNotificationOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (
        (event.ctrlKey ||
          event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();

        searchRef.current?.focus();
      }

      if (event.key === "Escape") {
        setNotificationOpen(false);
        setProfileOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
  }, []);

  const getNotificationIcon = (type) => {
    if (type === "warning") {
      return <AlertTriangle size={16} />;
    }

    if (type === "success") {
      return <Activity size={16} />;
    }

    return <Info size={16} />;
  };

  const handleProfileSettings = () => {
    setProfileOpen(false);
    navigate("/settings");
  };

  return (
    <header className="topbar">
      {/* MOBILE MENU */}

      <button
        type="button"
        className="mobile-menu-btn"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Menu size={21} />
      </button>

      {/* MOBILE BRAND */}

      <div className="mobile-brand">
        <img
          src="/logo.png"
          alt="Dewly Farm"
        />

        <span>Dewly Farm</span>
      </div>

      {/* SEARCH */}

      <div className="topbar-search">
        <Search size={18} />

        <input
          ref={searchRef}
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          type="search"
          placeholder="Search anything..."
          aria-label="Search"
        />

        {search && (
          <button
            type="button"
            className="search-clear"
            onClick={() => setSearch("")}
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}

        {!search && (
          <span className="search-shortcut">
            Ctrl K
          </span>
        )}
      </div>

      {/* ACTIONS */}

      <div className="topbar-actions">
        {/* NOTIFICATIONS */}

        <button
          type="button"
          className="icon-button notification"
          onClick={() => {
            setNotificationOpen(
              (previous) => !previous
            );
            setProfileOpen(false);
          }}
          aria-label="Notifications"
        >
          <Bell size={20} />

          <span className="notification-dot"></span>
        </button>

        {notificationOpen && (
          <div className="topbar-dropdown notification-dropdown">
            <div className="dropdown-header">
              <strong>
                Notifications
              </strong>

              <button type="button">
                <CheckCheck size={13} />
                Mark all read
              </button>
            </div>

            {notifications.map(
              (notification) => (
                <div
                  className="notification-item"
                  key={notification.id}
                >
                  <div className="notification-item-icon">
                    {getNotificationIcon(
                      notification.type
                    )}
                  </div>

                  <div className="notification-item-content">
                    <strong>
                      {notification.title}
                    </strong>

                    <p>
                      {notification.message}
                    </p>

                    <span>
                      {notification.time}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* USER */}

        <button
          type="button"
          className="user-profile"
          onClick={() => {
            setProfileOpen(
              (previous) => !previous
            );
            setNotificationOpen(false);
          }}
        >
          <div className="avatar">
            DF
          </div>

          <div className="user-info">
            <strong>
              Farm Admin
            </strong>

            <span>
              Administrator
            </span>
          </div>
        </button>

        <button
          type="button"
          className="mobile-user"
          onClick={() => {
            setProfileOpen(
              (previous) => !previous
            );
            setNotificationOpen(false);
          }}
          aria-label="User menu"
        >
          <UserCircle size={25} />
        </button>

        {profileOpen && (
          <div className="topbar-dropdown profile-dropdown">
            <div className="profile-dropdown-header">
              <strong>
                Farm Admin
              </strong>

              <span>
                Administrator
              </span>
            </div>

            <button
              type="button"
              className="profile-menu-item"
              onClick={handleProfileSettings}
            >
              <Settings size={15} />
              Settings
            </button>

            <button
              type="button"
              className="profile-menu-item danger"
              onClick={() =>
                setProfileOpen(false)
              }
            >
              <LogOut size={15} />
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}