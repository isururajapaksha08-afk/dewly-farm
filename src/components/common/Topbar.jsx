import {
    Search,
    Bell,
    UserCircle,
    Menu,
  } from "lucide-react";
  
  export default function Topbar({ onMenuClick }) {
    return (
      <header className="topbar">
        <button
          className="mobile-menu-btn"
          onClick={onMenuClick}
        >
          <Menu size={22} />
        </button>
  
        <div className="topbar-search">
          <Search size={19} />
  
          <input
            type="text"
            placeholder="Search anything..."
          />
  
          <span className="search-shortcut">
            Ctrl K
          </span>
        </div>
  
        <div className="topbar-actions">
          <button className="icon-button notification">
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>
  
          <div className="user-profile">
            <div className="avatar">
              DF
            </div>
  
            <div className="user-info">
              <strong>Farm Admin</strong>
              <span>Administrator</span>
            </div>
          </div>
  
          <UserCircle
            className="mobile-user"
            size={26}
          />
        </div>
      </header>
    );
  }