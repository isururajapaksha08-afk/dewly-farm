import {
    ArrowRight,
    BarChart3,
    Database,
    Plus,
  } from "lucide-react";
  
  import PageLayout from "../components/common/PageLayout";
  import PageHeader from "../components/common/PageHeader";
  
  export default function ModulePage({
    title,
    description,
    icon: Icon = Database,
    modules = [],
  }) {
    return (
      <PageLayout>
        <PageHeader
          title={title}
          description={description}
          action={
            <button className="primary-button">
              <Plus size={18} />
              Add New
            </button>
          }
        />
  
        <div className="module-hero">
          <div className="module-hero-icon">
            <Icon size={32} />
          </div>
  
          <div>
            <span>DEWLY FARM MANAGEMENT</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
  
        <div className="module-grid">
          {modules.map((module) => {
            const ModuleIcon = module.icon || BarChart3;
  
            return (
              <div
                className="module-card"
                key={module.title}
              >
                <div className="module-card-icon">
                  <ModuleIcon size={23} />
                </div>
  
                <h3>{module.title}</h3>
  
                <p>{module.description}</p>
  
                <button className="module-link">
                  Open Module
                  <ArrowRight size={17} />
                </button>
              </div>
            );
          })}
        </div>
      </PageLayout>
    );
  }
  