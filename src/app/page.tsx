import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Notes App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A simple and elegant way to manage your notes
        </p>
        <div className="space-x-4">
          <Link
            href="/notes/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Create New Note
          </Link>
          <Link
            href="/notes"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            View All Notes
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Create Notes
          </h3>
          <p className="text-gray-600">
            Quickly create and organize your notes with our intuitive interface.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Edit & Manage
          </h3>
          <p className="text-gray-600">
            Easily edit, update, and manage all your notes in one place.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Secure Storage
          </h3>
          <p className="text-gray-600">
            Your notes are securely stored and accessible whenever you need them.
          </p>
        </div>
      </div>
    </div>
  );
}