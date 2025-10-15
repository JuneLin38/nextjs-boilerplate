export default function Home() {
  return (
    <div id="root"> 
      <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center gap-12 px-6 py-8 text-center">

        {/* Fixed Navigation */}
        <nav className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-4 py-4 bg-black/50 backdrop-blur-md">
          <div className="flex items-left">
            <h1 className="text-xl font-bold text-white ml-1">Jurno</h1>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-6 text-center">
          <div className="text-[#6A7282] text-[15px] tracking-[3px] uppercase font-medium text-center mb-5">
               <p>The AI Memory behind what you save</p>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl text-white font-semibold mb-6 leading-tight tracking-tighter">
                Your saved Tiktoks/Reels, finally useful.
              </h1>
              <div className="flex items-center justify-center text-gray-400 text-lg md:text-x1 mb-12 gap-3">
                <p> Jurno remembers what you save, learns your taste, and turns your saved TikToks and Reels into organized, shareable plans - helping you act on what inspires you.</p>
              </div>
            </div>

            {/* Join Waitlist */}
            <div className="flex flex-col items-center text-center">
              <form className="mt-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                />
                <button className="px-4 py-2 bg-white text-black rounded-r-md hover:bg-gray-200">Join Waitlist</button>
              </form>
            </div>


            {/* Footer */}
            <div className="absolute bottom-4 w-full px-6">
              <div className="relative flex items-center justify-between w-full text-sm text-gray-500">
                <span> ©2025 Jurno Labs</span>
                <div className="flex items-center gap-3">
                  <a className="hover:text-gray-700 transition-colors duration-200"
                  href="/privacy" data-discover="true">Privacy</a>
                  <a className="hover:text-gray-700 transition-colors duration-200"
                  href="/terms" data-discover="true">Terms</a>
                  <a className="hover:text-gray-700 transition-colors duration-200"
                  href="/contact" data-discover="true">Cookie Settings</a>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
}
