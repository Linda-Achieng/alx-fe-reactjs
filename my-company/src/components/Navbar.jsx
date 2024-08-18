function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#333',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px'
      }}
    >
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

export default Navbar;
