import {
  HeartPulse,
  Package,
  DollarSign,
  CalendarDays,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Sprout,
  Users,
  Milk,
} from "lucide-react";

const stats = [
  {
    title: "Total Animals",
    value: "124",
    change: "+8.2%",
    positive: true,
    icon: HeartPulse,
    label: "vs last month",
  },
  {
    title: "Active Fields",
    value: "24",
    change: "+4.5%",
    positive: true,
    icon: Sprout,
    label: "currently active",
  },
  {
    title: "Stock Items",
    value: "89",
    change: "-2.1%",
    positive: false,
    icon: Package,
    label: "items in inventory",
  },
  {
    title: "Total Sales",
    value: "LKR 125,000",
    change: "+12.8%",
    positive: true,
    icon: DollarSign,
    label: "this month",
  },
];

const events = [
  {
    title: "Cow 001 - Expected Calving",
    date: "Today",
    type: "HIGH",
    icon: HeartPulse,
  },
  {
    title: "Corn Field Harvest",
    date: "Tomorrow",
    type: "MEDIUM",
    icon: Sprout,
  },
  {
    title: "Veterinary Checkup",
    date: "Sep 15",
    type: "NORMAL",
    icon: Activity,
  },
];

const months = [
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
];

const production = [
  42,
  58,
  48,
  72,
  63,
  88,
  76,
  94,
  81,
  100,
  87,
  96,
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
            Good morning, Admin 👋
          </h2>

          <p>
            Here's what's happening across
            your farm today.
          </p>
        </div>

        <div className="hero-date">
          <CalendarDays size={18} />
          <span>
            September 14, 2026
          </span>
        </div>
      </div>

      {/* STATS */}

      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              className="stat-card"
              key={stat.title}
            >
              <div className="stat-top">
                <div className="stat-icon">
                  <Icon size={21} />
                </div>

                <span
                  className={`stat-change ${
                    stat.positive
                      ? "positive"
                      : "negative"
                  }`}
                >
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

      {/* PRODUCTION + HEALTH */}

      <div className="dashboard-grid">

        {/* PRODUCTION */}

        <div className="dashboard-card production-card">
          <div className="card-header">
            <div>
              <h3>
                Farm Production
              </h3>

              <p>
                Monthly production overview
              </p>
            </div>

            <select defaultValue="6">
              <option value="6">
                Last 6 months
              </option>

              <option value="12">
                Last 12 months
              </option>
            </select>
          </div>

          <div className="production-chart">
            <div className="chart-value">
              <strong>
                8,420
              </strong>

              <span>
                Litres
              </span>
            </div>

            <div className="chart-bars">
              {production.map(
                (height, index) => (
                  <div
                    className="chart-column"
                    key={months[index]}
                  >
                    <div
                      className="chart-bar"
                      style={{
                        height: `${height}%`,
                      }}
                    />

                    <span>
                      {months[index]}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* HEALTH */}

        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>
                Farm Health
              </h3>

              <p>
                Current system status
              </p>
            </div>
          </div>

          <div className="health-list">

            <HealthItem
              icon={<HeartPulse size={19} />}
              iconClass="green"
              title="Livestock Health"
              description="Excellent condition"
              value="94%"
            />

            <HealthItem
              icon={<Milk size={19} />}
              iconClass="blue"
              title="Milk Production"
              description="Above monthly target"
              value="87%"
            />

            <HealthItem
              icon={<Package size={19} />}
              iconClass="orange"
              title="Inventory Health"
              description="3 low-stock items"
              value="76%"
            />

            <HealthItem
              icon={<Users size={19} />}
              iconClass="purple"
              title="Team Activity"
              description="12 employees active"
              value="91%"
            />

          </div>
        </div>
      </div>

      {/* EVENTS + NOTIFICATIONS */}

      <div className="dashboard-grid bottom-grid">

        {/* EVENTS */}

        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>
                Upcoming Farm Events
              </h3>

              <p>
                Important activities and reminders
              </p>
            </div>

            <button
              type="button"
              className="text-button"
            >
              View all
            </button>
          </div>

          <div className="events-list">
            {events.map(
              (event) => {
                const Icon = event.icon;

                return (
                  <div
                    className="event-item"
                    key={event.title}
                  >
                    <div className="event-icon">
                      <Icon size={18} />
                    </div>

                    <div className="event-info">
                      <strong>
                        {event.title}
                      </strong>

                      <span>
                        <CalendarDays
                          size={13}
                        />

                        {event.date}
                      </span>
                    </div>

                    <span
                      className={`priority ${event.type.toLowerCase()}`}
                    >
                      {event.type}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* NOTIFICATIONS */}

        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>
                System Notifications
              </h3>

              <p>
                Latest farm alerts
              </p>
            </div>

            <button
              type="button"
              className="text-button"
            >
              See all
            </button>
          </div>

          <div className="notification-list">

            <SystemNotification
              type="warning"
              icon={<Bell size={17} />}
              title="Stock Alert"
              message="Cattle feed quantity has dropped below reorder level."
              time="15 minutes ago"
            />

            <SystemNotification
              type="success"
              icon={<Activity size={17} />}
              title="Health Check Complete"
              message="8 livestock health records updated successfully."
              time="1 hour ago"
            />

            <SystemNotification
              type="info"
              icon={<DollarSign size={17} />}
              title="New Sale Recorded"
              message="A new livestock sale worth LKR 42,000 was recorded."
              time="3 hours ago"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   COMPONENTS
   ============================================================ */

function HealthItem({
  icon,
  iconClass,
  title,
  description,
  value,
}) {
  return (
    <div className="health-item">
      <div
        className={`health-icon ${iconClass}`}
      >
        {icon}
      </div>

      <div className="health-content">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <b>{value}</b>
    </div>
  );
}

function SystemNotification({
  type,
  icon,
  title,
  message,
  time,
}) {
  return (
    <div
      className={`system-notification ${type}`}
    >
      <div className="notification-symbol">
        {icon}
      </div>

      <div>
        <strong>{title}</strong>

        <p>{message}</p>

        <span>{time}</span>
      </div>
    </div>
  );
}