import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  span?: "normal" | "wide" | "tall";
}

interface GalleryGridProps {
  images: GalleryImage[];
  label: string;
}

export function GalleryGrid({ images, label }: GalleryGridProps) {
  if (images.length === 0) return null;

  return (
    <section aria-label={label} className="mb-16">
      <h2
        className="text-2xl font-bold mb-6"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          color: "#F6EFE0",
        }}
      >
        {label}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className={`rounded-xl overflow-hidden relative group ${
              img.span === "wide" ? "col-span-2" : ""
            } ${img.span === "tall" ? "row-span-2" : ""}`}
            style={{
              aspectRatio: img.span === "wide" ? "2 / 1" : "1 / 1",
              backgroundColor: "rgba(61,43,31,0.4)",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={
                img.span === "wide"
                  ? "(max-width: 768px) 100vw, 66vw"
                  : "(max-width: 768px) 50vw, 25vw"
              }
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
              style={{
                background:
                  "linear-gradient(to top, rgba(14,9,5,0.75) 0%, transparent 60%)",
              }}
            >
              <p className="text-xs leading-tight" style={{ color: "rgba(216,155,60,0.8)" }}>
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
