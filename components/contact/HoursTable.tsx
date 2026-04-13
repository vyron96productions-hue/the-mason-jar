import { SITE_CONFIG } from "@/lib/site-config";

export function HoursTable() {
  // Determine today's day name
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div>
      <h3
        className="text-sm font-semibold tracking-widest uppercase mb-4"
        style={{ color: "#D89B3C" }}
      >
        Hours
      </h3>
      <ul className="space-y-2">
        {SITE_CONFIG.hours.map(({ day, open, close }) => {
          const isToday = day === today;
          return (
            <li
              key={day}
              className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                isToday ? "ring-1" : ""
              }`}
              style={
                isToday
                  ? {
                      backgroundColor: "rgba(193,127,36,0.1)",
                      outline: "1px solid rgba(193,127,36,0.4)",
                    }
                  : {}
              }
            >
              <span
                className="text-sm font-medium"
                style={{ color: isToday ? "#F2B857" : "#F6EFE0" }}
              >
                {day}
                {isToday && (
                  <span
                    className="ml-2 text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(193,127,36,0.2)",
                      color: "#D89B3C",
                    }}
                  >
                    Today
                  </span>
                )}
              </span>
              <span className="text-sm" style={{ color: "#8A7A6A" }}>
                {open} – {close}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
