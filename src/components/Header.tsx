const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Modern Shop
            </h1>
            <span className="ml-2 text-sm text-muted-foreground hidden md:inline">
              ร้านค้าออนไลน์โมเดิร์น
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
