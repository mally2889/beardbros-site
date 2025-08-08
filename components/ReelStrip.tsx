'use client';
export default function ReelStrip() {
  return (
    <div className="glass p-6">
      <h3 className="text-2xl font-medium">Creative reel</h3>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[1,2,3,4].map(i => (
          <div key={i} className="aspect-[9/16] bg-white/5 rounded-xl flex items-center justify-center text-white/30">
            Video {i}
          </div>
        ))}
      </div>
    </div>
  );
}
