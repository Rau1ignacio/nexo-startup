export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} NEXO</span>
        <span>Hecho para emprendedores en Chile y LATAM</span>
      </div>
    </footer>
  );
}
