'use client';
export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container py-10 flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="text-white/60">© Beard Bros</div>
        <div className="flex gap-4 text-white/60">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Email</a>
        </div>
      </div>
    </footer>
  );
}
