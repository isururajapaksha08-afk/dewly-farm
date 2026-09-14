export default function PageHeader({
    title,
    description,
    action,
  }) {
    return (
      <div className="page-header">
        <div>
          <div className="breadcrumb">
            Dewly Farm / Management
          </div>
  
          <h1>{title}</h1>
  
          {description && (
            <p>{description}</p>
          )}
        </div>
  
        {action && (
          <div className="page-header-action">
            {action}
          </div>
        )}
      </div>
    );
  }