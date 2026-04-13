interface GalleryImage {
  src: string;
  alt: string;
  span?: "normal" | "wide" | "tall";
}

interface GalleryGridProps {
  images: GalleryImage[];
  label: string;
}

// Placeholder grid — swap image src values for real photos
// All images should go in public/images/gallery/
export function GalleryGrid({ images, label }: GalleryGridProps) {
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
            className={`rounded-xl overflow-hidden aspect-square relative ${
              img.span === "wide" ? "col-span-2" : ""
            } ${img.span === "tall" ? "row-span-2" : ""}`}
            style={{ backgroundColor: "rgba(61,43,31,0.4)" }}
          >
            {/* Replace this placeholder div with <Image> once photos are available */}
            {/* <Image src={img.src} alt={img.alt} fill className="object-cover" /> */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4"
              style={{ backgroundColor: "rgba(61,43,31,0.3)" }}
              aria-label={img.alt}
            >
              <svg
                className="w-8 h-8 opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "#D89B3C" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p
                className="text-xs text-center leading-tight opacity-40"
                style={{ color: "#F6EFE0" }}
              >
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
