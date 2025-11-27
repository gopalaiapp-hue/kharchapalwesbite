
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/kharchapal-logo.png" alt="KharchaPal Logo" className="h-8 w-auto" />
            <span className="text-orange-600">KharchaPal</span>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all">
            Download App
          </button>
        </div>
      </div>
    </header>
  );
}
