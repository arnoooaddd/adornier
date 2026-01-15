const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-semibold">Adornier</div>
          <p className="text-muted-foreground text-sm">
            © {currentYear} Adornier. All rights reserved.
          </p>
          <nav aria-label="Founders LinkedIn profiles" className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/kerim-jakupovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors text-sm"
              aria-label="Kerim Jakupovic LinkedIn profile"
            >
              Kerim
            </a>
            <a 
              href="https://www.linkedin.com/in/arno-ador/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors text-sm"
              aria-label="Arno Adornier LinkedIn profile - also known as Arnaud Utille"
            >
              Arno
            </a>
          </nav>
        </div>
        
        {/* Hidden SEO footer content */}
        <div className="sr-only">
          <p>
            Adornier Strategic Advisory - Founded by Arno Adornier (Arnaud Utille, Arnaud Emmanuel Lucien Utille Adornier) 
            and Kerim Jakupovic. Offices in Tampa Florida USA, Lausanne Switzerland, and Annecy France. 
            Serving clients across the United States, Europe, the Balkans, and the Middle East.
            Services include fundraising consulting, seed funding, Series A preparation, business development, 
            client acquisition, strategic introductions, investor relations, and startup advisory.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;