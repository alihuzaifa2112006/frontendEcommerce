export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-black">E</div>
            <span className="text-xl font-bold tracking-widest text-gradient">ELVÉRA</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Premium quality, ethically sourced, and fashion-forward clothing that speaks to your individuality. Wear your identity with pride.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wider">SHOP</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Men's Collection</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Women's Collection</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Limited Edition</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wider">SUPPORT</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wider">NEWSLETTER</h4>
          <p className="text-gray-400 text-sm mb-4">Join our elite list for exclusive early access and luxury offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:border-primary w-full"
            />
            <button className="bg-primary text-black font-bold px-4 py-2 rounded-r-md text-sm hover:bg-opacity-90 transition-all">
              JOIN
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-xs">
        <p>© 2026 ELVÉRA. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}
