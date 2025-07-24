import logo from '../assets/react.svg';

const Header = () => (
  <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="h-8 mr-2" />
      <h1 className="text-xl font-bold">PneumoCare</h1>
    </div>
  </header>
);

export default Header;