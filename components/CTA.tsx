'use client';
export default function CTA() {
  return (
    <div className="glass p-8">
      <h3 className="text-3xl font-semibold">Free 30-min Growth Tear-Down</h3>
      <p className="mt-2 text-white/70">Drop your brand URL. We’ll record a loom with quick wins.</p>
      <form className="mt-6 grid gap-3 md:grid-cols-3">
        <input required placeholder="Your name" className="bg-white/5 rounded-xl px-4 py-3 outline-none" />
        <input required placeholder="Work email" className="bg-white/5 rounded-xl px-4 py-3 outline-none" />
        <input required placeholder="Brand URL" className="bg-white/5 rounded-xl px-4 py-3 outline-none md:col-span-3" />
        <textarea placeholder="Goals / problems" className="bg-white/5 rounded-xl px-4 py-3 outline-none md:col-span-3 min-h-[100px]" />
        <button className="glass px-5 py-3 md:col-span-1">Request audit</button>
      </form>
    </div>
  );
}
