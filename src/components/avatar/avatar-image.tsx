import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type AvatarSize = "xs" | "sm";

type AvatarImageProps = Omit<ImageProps, "height" | "width"> & {
  size?: AvatarSize;
};

const avatarSize = {
  xs: "size-5",
  sm: "size-9",
};

export function AvatarImage({
  src,
  alt,
  size = "xs",
  ...rest
}: AvatarImageProps) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          "relative overflow-hidden rounded-full border-blue-200 border",
          avatarSize[size]
        )}
        {...rest}
      />
    </div>
  );
}
