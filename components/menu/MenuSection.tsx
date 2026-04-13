import { MenuItemCard } from "./MenuItem";
import type { MenuCategory } from "@/lib/menu-data";

interface MenuSectionProps {
  category: MenuCategory;
}

export function MenuSection({ category }: MenuSectionProps) {
  return (
    <section
      id={category.id}
      className="mb-16 scroll-mt-28"
      aria-labelledby={`menu-${category.id}`}
    >
      <div className="mb-6">
        <h2
          id={`menu-${category.id}`}
          className="text-3xl font-bold mb-1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#F6EFE0",
          }}
        >
          {category.label}
        </h2>
        {category.description && (
          <p className="text-sm" style={{ color: "#8A7A6A" }}>
            {category.description}
          </p>
        )}
        <div
          className="mt-3 h-px"
          style={{ backgroundColor: "rgba(193,127,36,0.25)" }}
        />
      </div>

      <div>
        {category.items.map((item) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
