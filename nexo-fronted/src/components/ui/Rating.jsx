export default function Rating({ value = 5 }) {
  const stars = Array.from({ length: 5 }, (_, index) => index < value);
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {stars.map((filled, index) => (
        <span key={index}>{filled ? "?" : "?"}</span>
      ))}
    </div>
  );
}
