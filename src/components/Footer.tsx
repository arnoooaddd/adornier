const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-semibold">Adornier</div>
          <p className="text-muted-foreground text-sm">
            © {currentYear} Adornier. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/kerim-jakupovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors text-sm"
            >
              Kerim
            </a>
            <a 
              href="https://www.linkedin.com/in/arno-ador/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors text-sm"
            >
              Arno
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
