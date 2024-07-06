import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Responsive Page Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js App</h1>
        <p className="text-lg mb-4">
          This is a responsive page example using Next.js and Tailwind CSS.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-blue-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Section 1</h2>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis lorem ut libero malesuada feugiat.
            </p>
          </div>
          <div className="bg-green-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Section 2</h2>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis lorem ut libero malesuada feugiat.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        © 2024 My Next.js App. All rights reserved.
      </footer>
    </div>
  )
}
