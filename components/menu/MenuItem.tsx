import { Badge } from "@/components/ui/Badge";
import type { MenuItem as MenuItemType } from "@/lib/menu-data";

interface MenuItemProps {
  item: MenuItemType;
}

const BADGE_MAP: Record<string, "amber" | "red" | "green" | "dark"> = {
  "Fan Favorite": "amber",
  Spicy: "red",
  New: "green",
};

export function MenuItemCard({ item }: MenuItemProps) {
  return (
    <div
      className="flex items-start justify-between gap-4 py-5 border-b"
      style={{ borderColor: "rgba(193,127,36,0.1)" }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h3
            className="text-base font-semibold"
            style={{ color: "#F6EFE0" }}
          >
            {item.name}
          </h3>
          {item.badge && (
            <Badge
              label={item.badge}
              variant={BADGE_MAP[item.badge] ?? "amber"}
            />
          )}
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "#8A7A6A" }}>
          {item.description}
        </p>
      </div>
      <span
        className="text-base font-bold shrink-0"
        style={{ color: "#D89B3C" }}
      >
        {item.price}
      </span>
    </div>
  );
}
