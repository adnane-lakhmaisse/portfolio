"use client"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Adnane Lakhmaisse. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Built with Next.js, Tailwind CSS, and Framer Motion • Beni Mellal, Morocco 🇲🇦
          </p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-white/30">
            Code with passion, build with purpose 🚀
          </p>
        </div>
      </div>
    </footer>
  )
}

