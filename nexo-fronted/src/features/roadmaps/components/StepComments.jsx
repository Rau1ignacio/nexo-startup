export default function StepComments({ comments = [] }) {
  if (comments.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
      <p className="text-sm font-semibold text-slate-800">Comentarios</p>
      <div className="mt-3 space-y-2 text-sm text-gray-600">
        {comments.map((comment, index) => (
          <p key={`${comment}-${index}`}>• {comment}</p>
        ))}
      </div>
    </div>
  );
}
