import { useState } from "react";
import { Footprints } from "lucide-react";
import { asset } from "../catalog";

export default function ProductImage({ image, alt, className, loading }) {
  const [failedImage, setFailedImage] = useState(null);

  if (failedImage === image) {
    return (
      <div className={`grid place-items-center text-primary/45 ${className ?? ""}`} role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
        <Footprints className="size-1/2 max-h-32 max-w-32" strokeWidth={1.25} />
      </div>
    );
  }

  return <img className={className} src={asset(image)} alt={alt} loading={loading} onError={() => setFailedImage(image)} />;
}
