export default function Header() {
  return (
    <header className="bg-white p-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img src="/yes-logo.png" alt="YES Logo" className="w-28" />
        <nav className="space-x-4">
          <a href="#sobre">A YES!</a>
          <a href="#cursos">Cursos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
