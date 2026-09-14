export default function StatCard({
    title,
    value,
    icon: Icon,
    change,
    description,
    className = "",
  }) {
    return (
      <div className={`stat-card ${className}`}>
        <div className="stat-card-top">
          <div className="stat-icon">
            <Icon size={22} />
          </div>
  
          {change && (
            <span className="stat-change">
              {change}
            </span>
          )}
        </div>
  
        <div className="stat-content">
          <span className="stat-title">
            {title}
          </span>
  
          <strong className="stat-value">
            {value}
          </strong>
  
          {description && (
            <span className="stat-description">
              {description}
            </span>
          )}
        </div>
      </div>
    );
  }