"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <main className="flex flex-col items-center justify-center text-center max-w-2xl w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg mb-4">
          Meu Primeiro App
        </h1>
        <p className="text-lg sm:text-xl text-blue-100/90 mb-10">
          Criado com Next.js e Claude
        </p>
        <button
          type="button"
          onClick={() => alert("Funcionou!")}
          className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold text-lg shadow-xl hover:bg-blue-50 hover:scale-105 active:scale-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
        >
          Clique aqui
        </button>
      </main>
    </div>
  );
}
