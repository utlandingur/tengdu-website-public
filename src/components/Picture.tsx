export type Image = {
  ALT: string;
  SMALL_PNG: string;
  LARGE_PNG: string;
  SMALL_WEBP?: string;
  LARGE_WEBP?: string;
};

interface PictureProps {
  image: Image;
  className?: string;
}

export const Picture: React.FC<PictureProps> = ({ image, className }) => {
  return (
    <picture className={className}>
      {image.SMALL_WEBP && (
        <source srcSet={image.SMALL_WEBP} type="image/webp" />
      )}
      {image.LARGE_WEBP && (
        <source
          media="(min-width: 800px)"
          srcSet={image.LARGE_WEBP}
          type="image/webp"
        />
      )}
      <img
        src={image.SMALL_PNG}
        srcSet={`${image.SMALL_PNG} 799w, ${image.LARGE_PNG} 800w`}
        alt={image.ALT}
        className="w-full h-full object-cover"
      />
    </picture>
  );
};
