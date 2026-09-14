import React from "react";
import {
  HeartPulse,
  MapPin,
  Package,
  DollarSign,
  CalendarDays,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Sprout,
  Users,
  Milk
} from "lucide-react";

const stats = [
  {
    title: "Total Animals",
    value: "124",
    change: "+8.2%",
    positive: true,
    icon: HeartPulse,
    label: "vs last month"
  },
  {
    title: "Active Fields",
    value: "24",
    change: "+4.5%",
    positive: true,
    icon: Sprout,
    label: "currently active"
  },
  {
    title: "Stock Items",
    value: "89",
    change: "-2.1%",
    positive: false,
    icon: Package,
    label: "items in inventory"
  },
  {
    title: "Total Sales",
    value: "LKR 125,000",
    change: "+12.8%",
    positive: true,
    icon: DollarSign,
    label: "this month"
  }
];

const events = [
  {
    title: "Cow 001 - Expected Calving",
    date: "Today",
    type: "HIGH",
    icon: HeartPulse
  },
  {
    title: "Corn Field Harvest",
    date: "Tomorrow",
    type: "MEDIUM",
    icon: Sprout
  },
  {
    title: "Veterinary Checkup",
    date: "Sep 15",
    type: "NORMAL",
    icon: Activity
  }
];

export default function DashboardPage() {
  return (
    <div className="dashboard">

      {/* HERO */}
      <div className="dashboard-hero">
        <div>
          <span className="hero-label">
            <Activity size={15} />
            FARM OVERVIEW
          </span>

          <h2>
            Good morning, Admin <span>👋</span>
          </h2>

          <p>
            Here's what's happening across your farm today.
          </p>
        </div>

        <div className="hero-date">
          <CalendarDays size={18} />
          <span>September 12, 2026</span>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="stat-card" key={stat.title}>
              <div className="stat-top">
                <div className="stat-icon">
                  <Icon size={21} />
                </div>

                <span className={`stat-change ${
                  stat.positive ? "positive" : "negative"
                }`}>
                  {stat.positive ? (
                    <ArrowUpRight size={14} />
                  ) : (
                    <ArrowDownRight size={14} />
                  )}
                  {stat.change}
                </span>
              </div>

              <div className="stat-value">
                {stat.value}
              </div>

              <div className="stat-title">
                {stat.title}
              </div>

              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* MAIN GRID */}
      <div className="dashboard-grid">

        {/* PRODUCTION */}
        <div className="dashboard-card production-card">
          <div className="card-header">
            <div>
              <h3>Farm Production</h3>
              <p>Monthly production overview</p>
            </div>

            <select>
              <option>Last 6 months</option>
              <option>Last 12 months</option>
            </select>
          </div>

          <div className="production-chart">

            <div className="chart-value">
              <strong>8,420</strong>
              <span>Litres</span>
            </div>

            <div className="chart-bars">
              {[42, 58, 48, 72, 63, 88, 76, 94, 81, 100, 87, 96].map(
                (height, index) => (
                  <div className="chart-column" key={index}>
                    <div
                      className="chart-bar"
                      style={{ height: `${height}%` }}
                    />
                    <span>
                      {["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"][index]}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* QUICK OVERVIEW */}
        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>Farm Health</h3>
              <p>Current system status</p>
            </div>
          </div>

          <div className="health-list">

            <div className="health-item">
              <div className="health-icon green">
                <HeartPulse size={19} />
              </div>

              <div className="health-content">
                <strong>Livestock Health</strong>
                <span>Excellent condition</span>
              </div>

              <b>94%</b>
            </div>

            <div className="health-item">
              <div className="health-icon blue">
                <Milk size={19} />
              </div>

              <div className="health-content">
                <strong>Milk Production</strong>
                <span>Above monthly target</span>
              </div>

              <b>87%</b>
            </div>

            <div className="health-item">
              <div className="health-icon orange">
                <Package size={19} />
              </div>

              <div className="health-content">
                <strong>Inventory Health</strong>
                <span>3 low-stock items</span>
              </div>

              <b>76%</b>
            </div>

            <div className="health-item">
              <div className="health-icon purple">
                <Users size={19} />
              </div>

              <div className="health-content">
                <strong>Team Activity</strong>
                <span>12 employees active</span>
              </div>

              <b>91%</b>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM GRID */}
      <div className="dashboard-grid bottom-grid">

        {/* EVENTS */}
        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>Upcoming Farm Events</h3>
              <p>Important activities and reminders</p>
            </div>

            <button className="text-button">
              View all
            </button>
          </div>

          <div className="events-list">
            {events.map((event, index) => {
              const Icon = event.icon;

              return (
                <div className="event-item" key={index}>
                  <div className="event-icon">
                    <Icon size={18} />
                  </div>

                  <div className="event-info">
                    <strong>{event.title}</strong>
                    <span>
                      <CalendarDays size={13} />
                      {event.date}
                    </span>
                  </div>

                  <span className={`priority ${event.type.toLowerCase()}`}>
                    {event.type}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>System Notifications</h3>
              <p>Latest farm alerts</p>
            </div>

            <button className="text-button">
              See all
            </button>
          </div>

          <div className="notification-list">

            <div className="system-notification warning">
              <div className="notification-symbol">
                <Bell size={17} />
              </div>

              <div>
                <strong>Stock Alert</strong>
                <p>
                  Cattle feed quantity has dropped below reorder level.
                </p>
                <span>15 minutes ago</span>
              </div>
            </div>

            <div className="system-notification success">
              <div className="notification-symbol">
                <Activity size={17} />
              </div>

              <div>
                <strong>Health Check Complete</strong>
                <p>
                  8 livestock health records updated successfully.
                </p>
                <span>1 hour ago</span>
              </div>
            </div>

            <div className="system-notification info">
              <div className="notification-symbol">
                <DollarSign size={17} />
              </div>

              <div>
                <strong>New Sale Recorded</strong>
                <p>
                  A new livestock sale worth LKR 42,000 was recorded.
                </p>
                <span>3 hours ago</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
