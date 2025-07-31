export default function SimpleLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <nav className="bg-black/50 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Savely.in</h1>
          <div className="space-x-4">
            <a href="/" className="text-white hover:text-blue-400">Home</a>
            <a href="/tools" className="text-white hover:text-blue-400">Tools</a>
            <a href="/chatbot" className="text-white hover:text-blue-400">Chat</a>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}