import { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Filter,
  Sprout,
  Beef,
  Hexagon,
  Users,
  Wrench,
  Droplets,
  Tractor,
  Clock3,
  MapPin,
  CheckCircle2,
  Circle,
  AlertTriangle,
  X,
  MoreHorizontal,
  ListFilter,
  CalendarCheck2,
} from "lucide-react";

const EVENT_TYPES = {
  crop: {
    label: "Crop",
    icon: Sprout,
    className: "calendar-type-crop",
  },
  livestock: {
    label: "Livestock",
    icon: Beef,
    className: "calendar-type-livestock",
  },
  beekeeping: {
    label: "Beekeeping",
    icon: Hexagon,
    className: "calendar-type-beekeeping",
  },
  employee: {
    label: "Employee",
    icon: Users,
    className: "calendar-type-employee",
  },
  maintenance: {
    label: "Maintenance",
    icon: Wrench,
    className: "calendar-type-maintenance",
  },
};

const INITIAL_EVENTS = [
  {
    id: 1,
    title: "Morning Milking",
    type: "livestock",
    date: "2026-09-14",
    start: "06:00",
    end: "08:00",
    location: "Milking Shed",
    priority: "high",
    completed: true,
    assignee: "Livestock Team",
    description: "Complete morning milking and record milk production.",
  },
  {
    id: 2,
    title: "Irrigation - Field A",
    type: "crop",
    date: "2026-09-14",
    start: "08:30",
    end: "10:00",
    location: "Field A",
    priority: "medium",
    completed: false,
    assignee: "Farm Team",
    description: "Irrigate vegetable cultivation area.",
  },
  {
    id: 3,
    title: "Hive Inspection",
    type: "beekeeping",
    date: "2026-09-14",
    start: "09:30",
    end: "11:00",
    location: "Apiary Zone 01",
    priority: "medium",
    completed: false,
    assignee: "Bee Team",
    description: "Inspect hive health, queen activity and honey stores.",
  },
  {
    id: 4,
    title: "Staff Briefing",
    type: "employee",
    date: "2026-09-14",
    start: "10:30",
    end: "11:00",
    location: "Farm Office",
    priority: "low",
    completed: false,
    assignee: "Farm Manager",
    description: "Daily team briefing and task allocation.",
  },
  {
    id: 5,
    title: "Tractor Service",
    type: "maintenance",
    date: "2026-09-15",
    start: "08:00",
    end: "10:30",
    location: "Workshop",
    priority: "high",
    completed: false,
    assignee: "Maintenance Team",
    description: "Scheduled service for main farm tractor.",
  },
  {
    id: 6,
    title: "Fertilizer Application",
    type: "crop",
    date: "2026-09-15",
    start: "09:00",
    end: "12:00",
    location: "Field B",
    priority: "high",
    completed: false,
    assignee: "Crop Team",
    description: "Apply scheduled fertilizer treatment.",
  },
  {
    id: 7,
    title: "Vaccination - Cattle",
    type: "livestock",
    date: "2026-09-16",
    start: "07:30",
    end: "10:00",
    location: "Cattle Shed",
    priority: "high",
    completed: false,
    assignee: "Veterinary Team",
    description: "Scheduled cattle vaccination program.",
  },
  {
    id: 8,
    title: "Honey Harvest",
    type: "beekeeping",
    date: "2026-09-17",
    start: "08:00",
    end: "11:00",
    location: "Apiary Zone 02",
    priority: "medium",
    completed: false,
    assignee: "Bee Team",
    description: "Harvest mature honey frames.",
  },
  {
    id: 9,
    title: "Vegetable Harvest",
    type: "crop",
    date: "2026-09-18",
    start: "06:30",
    end: "10:30",
    location: "Field C",
    priority: "high",
    completed: false,
    assignee: "Harvest Team",
    description: "Harvest mature vegetables and move produce to storage.",
  },
  {
    id: 10,
    title: "Water Pump Inspection",
    type: "maintenance",
    date: "2026-09-19",
    start: "08:00",
    end: "09:30",
    location: "Pump House",
    priority: "medium",
    completed: false,
    assignee: "Maintenance Team",
    description: "Inspect water pump and irrigation system.",
  },
  {
    id: 11,
    title: "Weekly Farm Meeting",
    type: "employee",
    date: "2026-09-20",
    start: "09:00",
    end: "10:00",
    location: "Farm Office",
    priority: "low",
    completed: false,
    assignee: "Management",
    description: "Review weekly production and operational performance.",
  },
];

const WEEKDAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function pad(number) {
  return String(number).padStart(2, "0");
}

function formatDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
}

function parseDateKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function addDays(date, amount) {
  const result = new Date(date);
  result.setDate(result.getDate() + amount);
  return result;
}

function startOfWeek(date) {
  return addDays(date, -date.getDay());
}

function endOfWeek(date) {
  return addDays(startOfWeek(date), 6);
}

function formatMonthYear(date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function formatLongDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatShortDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${pad(minute)} ${suffix}`;
}

function getEventType(type) {
  return EVENT_TYPES[type] || EVENT_TYPES.employee;
}

function EventIcon({ type, size = 16 }) {
  const config = getEventType(type);
  const Icon = config.icon;
  return <Icon size={size} strokeWidth={2.2} />;
}

function TypeBadge({ type }) {
  const config = getEventType(type);

  return (
    <span className={`calendar-type-badge ${config.className}`}>
      <EventIcon type={type} size={13} />
      {config.label}
    </span>
  );
}

function PriorityBadge({ priority }) {
  return (
    <span className={`calendar-priority ${priority}`}>
      <span />
      {priority}
    </span>
  );
}

function EventCard({ event, compact = false, onToggle, onSelect }) {
  const config = getEventType(event.type);

  return (
    <button
      type="button"
      className={`calendar-event ${config.className} ${
        event.completed ? "completed" : ""
      } ${compact ? "compact" : ""}`}
      onClick={() => onSelect(event)}
    >
      <div className="calendar-event-icon">
        <EventIcon type={event.type} size={compact ? 13 : 15} />
      </div>

      <div className="calendar-event-content">
        <div className="calendar-event-title-row">
          <span className="calendar-event-title">{event.title}</span>

          {!compact && (
            <span
              className="calendar-event-check"
              onClick={(e) => {
                e.stopPropagation();
                onToggle(event.id);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                  onToggle(event.id);
                }
              }}
            >
              {event.completed ? (
                <CheckCircle2 size={15} />
              ) : (
                <Circle size={15} />
              )}
            </span>
          )}
        </div>

        {!compact && (
          <span className="calendar-event-time">
            <Clock3 size={12} />
            {formatTime(event.start)}
          </span>
        )}
      </div>
    </button>
  );
}

function EventModal({ event, onClose, onSave }) {
  const [form, setForm] = useState(
    event || {
      title: "",
      type: "crop",
      date: formatDateKey(new Date()),
      start: "09:00",
      end: "10:00",
      location: "",
      priority: "medium",
      assignee: "",
      description: "",
      completed: false,
    }
  );

  const update = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    onSave({
      ...form,
      title: form.title.trim(),
      id: event?.id || Date.now(),
    });
  };

  return (
    <div className="calendar-modal-backdrop" onMouseDown={onClose}>
      <div
        className="calendar-modal"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="calendar-modal-header">
          <div>
            <div className="calendar-modal-icon">
              <CalendarCheck2 size={21} />
            </div>
            <div>
              <h2>{event ? "Edit Farm Event" : "Create Farm Event"}</h2>
              <p>
                {event
                  ? "Update the details of this farm activity."
                  : "Schedule a new activity for your farm team."}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="calendar-modal-close"
            onClick={onClose}
          >
            <X size={19} />
          </button>
        </div>

        <form className="calendar-form" onSubmit={handleSubmit}>
          <div className="calendar-form-section">
            <div className="calendar-form-section-title">Activity Details</div>

            <div className="calendar-form-grid">
              <label className="calendar-field calendar-field-full">
                <span>Activity name *</span>
                <input
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  placeholder="e.g. Cattle health check"
                  required
                />
              </label>

              <label className="calendar-field">
                <span>Category</span>
                <select
                  value={form.type}
                  onChange={(e) => update("type", e.target.value)}
                >
                  <option value="crop">Crop</option>
                  <option value="livestock">Livestock</option>
                  <option value="beekeeping">Beekeeping</option>
                  <option value="employee">Employee</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </label>

              <label className="calendar-field">
                <span>Priority</span>
                <select
                  value={form.priority}
                  onChange={(e) => update("priority", e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>

              <label className="calendar-field">
                <span>Date</span>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                />
              </label>

              <label className="calendar-field">
                <span>Assigned to</span>
                <input
                  value={form.assignee}
                  onChange={(e) => update("assignee", e.target.value)}
                  placeholder="e.g. Crop Team"
                />
              </label>

              <label className="calendar-field">
                <span>Start time</span>
                <input
                  type="time"
                  value={form.start}
                  onChange={(e) => update("start", e.target.value)}
                />
              </label>

              <label className="calendar-field">
                <span>End time</span>
                <input
                  type="time"
                  value={form.end}
                  onChange={(e) => update("end", e.target.value)}
                />
              </label>

              <label className="calendar-field calendar-field-full">
                <span>Location</span>
                <input
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  placeholder="e.g. Field A / Cattle Shed"
                />
              </label>

              <label className="calendar-field calendar-field-full">
                <span>Description</span>
                <textarea
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  placeholder="Add notes about this activity..."
                  rows="4"
                />
              </label>
            </div>
          </div>

          <div className="calendar-modal-footer">
            <button
              type="button"
              className="calendar-secondary-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="calendar-primary-button">
              <CalendarCheck2 size={17} />
              {event ? "Save Changes" : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function CalendarPage() {
  const today = useMemo(() => new Date(), []);
  const [currentDate, setCurrentDate] = useState(today);
  const [view, setView] = useState("month");
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalEvent, setModalEvent] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const todayKey = formatDateKey(today);

  const filteredEvents = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return events.filter((event) => {
      const matchesFilter =
        activeFilter === "all" || event.type === activeFilter;

      if (!normalizedSearch) {
        return matchesFilter;
      }

      const searchable = [
        event.title,
        event.location,
        event.assignee,
        event.description,
        getEventType(event.type).label,
      ]
        .join(" ")
        .toLowerCase();

      return matchesFilter && searchable.includes(normalizedSearch);
    });
  }, [events, activeFilter, search]);

  const stats = useMemo(() => {
    const total = filteredEvents.length;
    const completed = filteredEvents.filter((event) => event.completed).length;
    const pending = total - completed;
    const highPriority = filteredEvents.filter(
      (event) => event.priority === "high" && !event.completed
    ).length;

    return {
      total,
      completed,
      pending,
      highPriority,
    };
  }, [filteredEvents]);

  const upcomingEvents = useMemo(() => {
    return [...filteredEvents]
      .filter((event) => !event.completed)
      .sort((a, b) => {
        const aValue = `${a.date} ${a.start}`;
        const bValue = `${b.date} ${b.start}`;
        return aValue.localeCompare(bValue);
      })
      .slice(0, 6);
  }, [filteredEvents]);

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const firstDay = startOfWeek(monthStart);

    return Array.from({ length: 42 }, (_, index) => {
      const date = addDays(firstDay, index);

      return {
        date,
        key: formatDateKey(date),
        isCurrentMonth: date.getMonth() === currentDate.getMonth(),
        isToday: formatDateKey(date) === todayKey,
      };
    });
  }, [currentDate, todayKey]);

  const weekDays = useMemo(() => {
    const first = startOfWeek(currentDate);

    return Array.from({ length: 7 }, (_, index) => {
      const date = addDays(first, index);

      return {
        date,
        key: formatDateKey(date),
        isToday: formatDateKey(date) === todayKey,
      };
    });
  }, [currentDate, todayKey]);

  const getEventsForDate = (dateKey) =>
    filteredEvents.filter((event) => event.date === dateKey);

  const goPrevious = () => {
    setCurrentDate((previous) => {
      const next = new Date(previous);

      if (view === "month") {
        next.setMonth(next.getMonth() - 1);
      } else if (view === "week") {
        next.setDate(next.getDate() - 7);
      } else {
        next.setDate(next.getDate() - 1);
      }

      return next;
    });
  };

  const goNext = () => {
    setCurrentDate((previous) => {
      const next = new Date(previous);

      if (view === "month") {
        next.setMonth(next.getMonth() + 1);
      } else if (view === "week") {
        next.setDate(next.getDate() + 7);
      } else {
        next.setDate(next.getDate() + 1);
      }

      return next;
    });
  };

  const goToday = () => {
    setCurrentDate(new Date(today));
  };

  const handleToggle = (id) => {
    setEvents((previous) =>
      previous.map((event) =>
        event.id === id
          ? {
              ...event,
              completed: !event.completed,
            }
          : event
      )
    );
  };

  const handleSaveEvent = (event) => {
    setEvents((previous) => {
      const exists = previous.some((item) => item.id === event.id);

      if (exists) {
        return previous.map((item) =>
          item.id === event.id ? event : item
        );
      }

      return [...previous, event];
    });

    setModalEvent(null);
    setSelectedEvent(null);
  };

  const headerTitle = () => {
    if (view === "month") {
      return formatMonthYear(currentDate);
    }

    if (view === "week") {
      const start = startOfWeek(currentDate);
      const end = endOfWeek(currentDate);

      if (start.getMonth() === end.getMonth()) {
        return `${start.toLocaleDateString("en-US", {
          month: "long",
        })} ${start.getDate()}â€“${end.getDate()}, ${start.getFullYear()}`;
      }

      return `${formatShortDate(start)} â€“ ${formatShortDate(end)}, ${
        end.getFullYear()
      }`;
    }

    return formatLongDate(currentDate);
  };

  const renderMonthView = () => (
    <div className="calendar-month">
      <div className="calendar-weekdays">
        {WEEKDAY_NAMES.map((day) => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-month-grid">
        {calendarDays.map((day) => {
          const dayEvents = getEventsForDate(day.key);

          return (
            <div
              key={day.key}
              className={`calendar-day ${
                !day.isCurrentMonth ? "outside-month" : ""
              } ${day.isToday ? "today" : ""}`}
              onDoubleClick={() => {
                setModalEvent({
                  title: "",
                  type: "crop",
                  date: day.key,
                  start: "09:00",
                  end: "10:00",
                  location: "",
                  priority: "medium",
                  assignee: "",
                  description: "",
                  completed: false,
                });
              }}
            >
              <div className="calendar-day-header">
                <span className="calendar-day-number">{day.date.getDate()}</span>

                {day.isToday && (
                  <span className="calendar-today-label">TODAY</span>
                )}
              </div>

              <div className="calendar-day-events">
                {dayEvents.slice(0, 3).map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    compact
                    onToggle={handleToggle}
                    onSelect={setSelectedEvent}
                  />
                ))}

                {dayEvents.length > 3 && (
                  <button
                    type="button"
                    className="calendar-more-events"
                    onClick={() => {
                      setCurrentDate(day.date);
                      setView("day");
                    }}
                  >
                    +{dayEvents.length - 3} more
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderWeekView = () => (
    <div className="calendar-week-view">
      {weekDays.map((day) => {
        const dayEvents = getEventsForDate(day.key);

        return (
          <div
            key={day.key}
            className={`calendar-week-column ${
              day.isToday ? "today-column" : ""
            }`}
          >
            <div className="calendar-week-header">
              <span>{day.date.toLocaleDateString("en-US", { weekday: "short" })}</span>
              <strong>{day.date.getDate()}</strong>
            </div>

            <div className="calendar-week-events">
              {dayEvents.length === 0 ? (
                <div className="calendar-empty-day">
                  <span>No activities</span>
                </div>
              ) : (
                dayEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onToggle={handleToggle}
                    onSelect={setSelectedEvent}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderDayView = () => {
    const dayEvents = getEventsForDate(formatDateKey(currentDate));

    return (
      <div className="calendar-day-view">
        <div className="calendar-day-view-header">
          <div>
            <span className="calendar-day-view-label">FARM ACTIVITIES</span>
            <h2>{formatLongDate(currentDate)}</h2>
          </div>

          <div className="calendar-day-summary">
            <span>{dayEvents.length} activities</span>
          </div>
        </div>

        {dayEvents.length === 0 ? (
          <div className="calendar-large-empty">
            <div className="calendar-empty-icon">
              <CalendarDays size={34} />
            </div>
            <h3>No activities scheduled</h3>
            <p>This day is free. Add a new farm activity to your calendar.</p>
            <button
              type="button"
              className="calendar-primary-button"
              onClick={() =>
                setModalEvent({
                  title: "",
                  type: "crop",
                  date: formatDateKey(currentDate),
                  start: "09:00",
                  end: "10:00",
                  location: "",
                  priority: "medium",
                  assignee: "",
                  description: "",
                  completed: false,
                })
              }
            >
              <Plus size={17} />
              Add Activity
            </button>
          </div>
        ) : (
          <div className="calendar-day-list">
            {dayEvents.map((event) => (
              <div key={event.id} className="calendar-day-list-item">
                <div className="calendar-day-time">
                  <strong>{formatTime(event.start)}</strong>
                  <span>{formatTime(event.end)}</span>
                </div>

                <div className="calendar-day-line" />

                <div className="calendar-day-event-card">
                  <EventCard
                    event={event}
                    onToggle={handleToggle}
                    onSelect={setSelectedEvent}
                  />

                  <div className="calendar-day-event-meta">
                    <TypeBadge type={event.type} />
                    <PriorityBadge priority={event.priority} />

                    {event.location && (
                      <span>
                        <MapPin size={13} />
                        {event.location}
                      </span>
                    )}

                    {event.assignee && (
                      <span>
                        <Users size={13} />
                        {event.assignee}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="calendar-page">
      {/* HERO */}
      <section className="calendar-hero">
        <div className="calendar-hero-content">
          <div className="calendar-hero-icon">
            <CalendarDays size={28} />
          </div>

          <div>
            <div className="calendar-eyebrow">FARM OPERATIONS</div>
            <h1>Farm Calendar</h1>
            <p>
              Plan, track and manage every important activity across Dewly Farm.
            </p>
          </div>
        </div>

        <div className="calendar-hero-actions">
          <button
            type="button"
            className="calendar-secondary-button hero-button"
            onClick={goToday}
          >
            <CalendarCheck2 size={16} />
            Today
          </button>

          <button
            type="button"
            className="calendar-primary-button hero-button"
            onClick={() =>
              setModalEvent({
                title: "",
                type: "crop",
                date: formatDateKey(currentDate),
                start: "09:00",
                end: "10:00",
                location: "",
                priority: "medium",
                assignee: "",
                description: "",
                completed: false,
              })
            }
          >
            <Plus size={17} />
            Add Event
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="calendar-stats">
        <div className="calendar-stat-card">
          <div className="calendar-stat-icon">
            <CalendarDays size={20} />
          </div>
          <div>
            <span>Total Activities</span>
            <strong>{stats.total}</strong>
            <small>Scheduled tasks</small>
          </div>
        </div>

        <div className="calendar-stat-card">
          <div className="calendar-stat-icon completed-stat">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <span>Completed</span>
            <strong>{stats.completed}</strong>
            <small>Tasks completed</small>
          </div>
        </div>

        <div className="calendar-stat-card">
          <div className="calendar-stat-icon pending-stat">
            <Clock3 size={20} />
          </div>
          <div>
            <span>Pending</span>
            <strong>{stats.pending}</strong>
            <small>Needs attention</small>
          </div>
        </div>

        <div className="calendar-stat-card">
          <div className="calendar-stat-icon urgent-stat">
            <AlertTriangle size={20} />
          </div>
          <div>
            <span>High Priority</span>
            <strong>{stats.highPriority}</strong>
            <small>Priority activities</small>
          </div>
        </div>
      </section>

      {/* TOOLBAR */}
      <section className="calendar-toolbar-card">
        <div className="calendar-toolbar-top">
          <div className="calendar-navigation">
            <button
              type="button"
              className="calendar-nav-button"
              onClick={goPrevious}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className="calendar-nav-button"
              onClick={goNext}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>

            <div className="calendar-current-period">
              <CalendarDays size={17} />
              <strong>{headerTitle()}</strong>
            </div>
          </div>

          <div className="calendar-view-switcher">
            <button
              type="button"
              className={view === "month" ? "active" : ""}
              onClick={() => setView("month")}
            >
              Month
            </button>

            <button
              type="button"
              className={view === "week" ? "active" : ""}
              onClick={() => setView("week")}
            >
              Week
            </button>

            <button
              type="button"
              className={view === "day" ? "active" : ""}
              onClick={() => setView("day")}
            >
              Day
            </button>
          </div>
        </div>

        <div className="calendar-toolbar-bottom">
          <div className="calendar-search">
            <Search size={17} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search activities, locations or teams..."
            />

            {search && (
              <button
                type="button"
                className="calendar-search-clear"
                onClick={() => setSearch("")}
              >
                <X size={15} />
              </button>
            )}
          </div>

          <button
            type="button"
            className={`calendar-filter-button ${
              showFilters ? "active" : ""
            }`}
            onClick={() => setShowFilters((previous) => !previous)}
          >
            <Filter size={16} />
            Filters
            {activeFilter !== "all" && <span />}
          </button>
        </div>

        {showFilters && (
          <div className="calendar-filter-panel">
            <div className="calendar-filter-label">
              <ListFilter size={15} />
              Activity type
            </div>

            <div className="calendar-filter-options">
              <button
                type="button"
                className={activeFilter === "all" ? "active" : ""}
                onClick={() => setActiveFilter("all")}
              >
                All Activities
              </button>

              {Object.entries(EVENT_TYPES).map(([key, config]) => {
                const Icon = config.icon;

                return (
                  <button
                    key={key}
                    type="button"
                    className={activeFilter === key ? "active" : ""}
                    onClick={() => setActiveFilter(key)}
                  >
                    <Icon size={14} />
                    {config.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* MAIN CONTENT */}
      <div className="calendar-main-layout">
        <section className="calendar-board-card">
          <div className="calendar-board-header">
            <div>
              <span>OPERATIONS PLANNER</span>
              <h2>{view === "month" ? "Monthly Schedule" : headerTitle()}</h2>
            </div>

            <div className="calendar-board-header-info">
              <span>
                <Droplets size={14} />
                Live planning
              </span>
            </div>
          </div>

          {view === "month" && renderMonthView()}
          {view === "week" && renderWeekView()}
          {view === "day" && renderDayView()}
        </section>

        {/* UPCOMING */}
        <aside className="calendar-sidebar-card">
          <div className="calendar-sidebar-header">
            <div>
              <span>UP NEXT</span>
              <h2>Upcoming Activities</h2>
            </div>

            <div className="calendar-sidebar-header-icon">
              <Clock3 size={17} />
            </div>
          </div>

          <div className="calendar-upcoming-list">
            {upcomingEvents.length === 0 ? (
              <div className="calendar-upcoming-empty">
                <CheckCircle2 size={28} />
                <strong>All caught up!</strong>
                <span>No pending activities.</span>
              </div>
            ) : (
              upcomingEvents.map((event) => {
                const eventDate = parseDateKey(event.date);

                return (
                  <button
                    type="button"
                    key={event.id}
                    className="calendar-upcoming-item"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className={`calendar-upcoming-date ${getEventType(event.type).className}`}>
                      <strong>{eventDate.getDate()}</strong>
                      <span>
                        {eventDate.toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </span>
                    </div>

                    <div className="calendar-upcoming-content">
                      <div className="calendar-upcoming-title">
                        {event.title}
                      </div>

                      <div className="calendar-upcoming-meta">
                        <span>
                          <Clock3 size={12} />
                          {formatTime(event.start)}
                        </span>

                        {event.location && (
                          <span>
                            <MapPin size={12} />
                            {event.location}
                          </span>
                        )}
                      </div>

                      <TypeBadge type={event.type} />
                    </div>

                    <MoreHorizontal size={17} />
                  </button>
                );
              })
            )}
          </div>

          <div className="calendar-sidebar-footer">
            <div className="calendar-progress">
              <div className="calendar-progress-header">
                <span>Today's progress</span>
                <strong>
                  {stats.total > 0
                    ? Math.round((stats.completed / stats.total) * 100)
                    : 0}
                  %
                </strong>
              </div>

              <div className="calendar-progress-track">
                <div
                  className="calendar-progress-fill"
                  style={{
                    width: `${
                      stats.total > 0
                        ? (stats.completed / stats.total) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            <button
              type="button"
              className="calendar-view-all-button"
              onClick={() => {
                setView("day");
                setCurrentDate(new Date(today));
              }}
            >
              View today's schedule
              <ChevronRight size={15} />
            </button>
          </div>
        </aside>
      </div>

      {/* SELECTED EVENT */}
      {selectedEvent && (
        <div
          className="calendar-event-drawer-backdrop"
          onMouseDown={() => setSelectedEvent(null)}
        >
          <div
            className="calendar-event-drawer"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="calendar-drawer-header">
              <div className={`calendar-drawer-icon ${getEventType(selectedEvent.type).className}`}>
                <EventIcon type={selectedEvent.type} size={23} />
              </div>

              <button
                type="button"
                className="calendar-modal-close"
                onClick={() => setSelectedEvent(null)}
              >
                <X size={19} />
              </button>
            </div>

            <TypeBadge type={selectedEvent.type} />

            <h2>{selectedEvent.title}</h2>

            <p className="calendar-drawer-description">
              {selectedEvent.description || "No description added for this activity."}
            </p>

            <div className="calendar-drawer-details">
              <div>
                <Clock3 size={17} />
                <span>
                  <strong>Time</strong>
                  {formatTime(selectedEvent.start)} â€“{" "}
                  {formatTime(selectedEvent.end)}
                </span>
              </div>

              <div>
                <CalendarDays size={17} />
                <span>
                  <strong>Date</strong>
                  {formatLongDate(parseDateKey(selectedEvent.date))}
                </span>
              </div>

              <div>
                <MapPin size={17} />
                <span>
                  <strong>Location</strong>
                  {selectedEvent.location || "Not specified"}
                </span>
              </div>

              <div>
                <Users size={17} />
                <span>
                  <strong>Assigned to</strong>
                  {selectedEvent.assignee || "Not assigned"}
                </span>
              </div>

              <div>
                <AlertTriangle size={17} />
                <span>
                  <strong>Priority</strong>
                  <PriorityBadge priority={selectedEvent.priority} />
                </span>
              </div>
            </div>

            <div className="calendar-drawer-actions">
              <button
                type="button"
                className="calendar-secondary-button"
                onClick={() => {
                  setModalEvent(selectedEvent);
                  setSelectedEvent(null);
                }}
              >
                Edit Event
              </button>

              <button
                type="button"
                className="calendar-primary-button"
                onClick={() => {
                  handleToggle(selectedEvent.id);
                  setSelectedEvent((previous) =>
                    previous
                      ? {
                          ...previous,
                          completed: !previous.completed,
                        }
                      : previous
                  );
                }}
              >
                {selectedEvent.completed ? (
                  <>
                    <Circle size={16} />
                    Mark Pending
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={16} />
                    Mark Complete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE / EDIT MODAL */}
      {modalEvent && (
        <EventModal
          event={modalEvent.id ? modalEvent : null}
          onClose={() => setModalEvent(null)}
          onSave={handleSaveEvent}
        />
      )}
    </div>
  );
}
