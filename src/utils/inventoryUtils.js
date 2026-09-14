export function getInventoryStatus(item) {
  if (!item) return "UNKNOWN";
  if (item.quantityOnHand <= 0) return "OUT_OF_STOCK";
  if (item.reorderLevel && item.quantityOnHand <= item.reorderLevel) return "LOW_STOCK";
  return "IN_STOCK";
}

export function getInventoryStatusBadge(status) {
  switch (status) {
    case "OUT_OF_STOCK": return { label: "Out of Stock", color: "bg-red-100 text-red-700" };
    case "LOW_STOCK": return { label: "Low Stock", color: "bg-amber-100 text-amber-700" };
    case "IN_STOCK": return { label: "In Stock", color: "bg-green-100 text-green-700" };
    default: return { label: "Unknown", color: "bg-slate-100 text-slate-700" };
  }
}
