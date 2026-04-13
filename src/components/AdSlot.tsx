interface AdSlotProps {
  id: string;
  type: "banner" | "rectangle" | "in-article" | "sidebar";
  className?: string;
}

const sizes: Record<string, string> = {
  banner: "min-h-[90px] w-full",
  rectangle: "min-h-[250px] w-full max-w-[300px] mx-auto",
  "in-article": "min-h-[250px] w-full",
  sidebar: "min-h-[250px] w-[300px]",
};

export default function AdSlot({ id, type, className = "" }: AdSlotProps) {
  return (
    <>
      {/* GOOGLE ADSENSE : {type} */}
      <div
        id={id}
        className={`ad-slot ${sizes[type]} ${className}`}
        data-ad-slot={id}
      >
        <span>Espace publicitaire</span>
      </div>
    </>
  );
}
