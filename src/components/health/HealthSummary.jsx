```jsx
import {
  HeartPulse,
  Syringe,
  Stethoscope,
} from "lucide-react";

export default function HealthSummary({
  animal,
  healthRecords = [],
  vaccinations = [],
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
      }}
    >
      <div className="stat-card">
        <div className="stat-icon">
          <HeartPulse size={22} />
        </div>

        <div>
          <div className="stat-label">
            Health Records
          </div>

          <div className="stat-value">
            {healthRecords.length}
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <Syringe size={22} />
        </div>

        <div>
          <div className="stat-label">
            Vaccinations
          </div>

          <div className="stat-value">
            {vaccinations.length}
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <Stethoscope size={22} />
        </div>

        <div>
          <div className="stat-label">
            Animal
          </div>

          <div className="stat-value">
            {animal?.name || "-"}
          </div>
        </div>
      </div>
    </div>
  );
}
```
