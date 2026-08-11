function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {year} The Journal. All rights reserved.</span>
        <span className="footer-note">Built with React &amp; TypeScript</span>
      </div>
    </footer>
  );
}

export default Footer;
