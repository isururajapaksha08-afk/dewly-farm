```javascript
export function daysUntil(date) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const target = new Date(date);

  target.setHours(0, 0, 0, 0);

  return Math.ceil(
    (target - today) /
      (1000 * 60 * 60 * 24)
  );
}

export function getPriority(date) {
  const days = daysUntil(date);

  if (days < 0) {
    return "CRITICAL";
  }

  if (days <= 1) {
    return "CRITICAL";
  }

  if (days <= 7) {
    return "WARNING";
  }

  return "NORMAL";
}

export function getEventLabel(type) {
  const labels = {
    CALVING: "Expected Calving",
    BIRTH: "Animal Birth",
    VACCINATION: "Vaccination",
    BREEDING: "Breeding",
    HEALTH: "Health Check",
    HARVEST: "Harvest",
    PLANTING: "Planting",
    SILAGE: "Silage Cutting",
    HIVE_INSPECTION: "Hive Inspection",
    HONEY_HARVEST: "Honey Harvest",
    INVENTORY: "Inventory",
    EQUIPMENT: "Equipment Service",
    TASK: "Farm Task",
  };

  return labels[type] || "Farm Event";
}
```
