import {
  TiHeartFullOutline,
  TiHeartHalfOutline,
  TiHeartOutline,
} from "react-icons/ti";

function ProductRating({ rating }: { rating: number }) {
  const maxRating = 5;
  const filledHearts = Math.floor(rating);
  const halfHeart = rating % 1 !== 0;
  const emptyHearts = maxRating - filledHearts - (halfHeart ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(filledHearts)
        .fill(0)
        .map((_, index) => (
          <TiHeartFullOutline
            key={`filled-${index}`}
            className="text-red-900"
          />
        ))}
      {halfHeart && <TiHeartHalfOutline className="text-black" />}
      {Array(emptyHearts)
        .fill(0)
        .map((_, index) => (
          <TiHeartOutline key={`empty-${index}`} className="text-red-900" />
        ))}
    </div>
  );
}

export default ProductRating;
