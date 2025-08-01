export default function TestHome() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">🎉 NeoCred is Working!</h1>
      <p className="text-xl mb-6">Frontend is successfully running</p>
      <div className="space-y-4">
        <div className="bg-white/10 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">✅ React Router</h2>
          <p>Navigation is working</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">✅ Tailwind CSS</h2>
          <p>Styling is applied</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">✅ Components</h2>
          <p>JSX rendering correctly</p>
        </div>
      </div>
    </div>
  );
}