'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { adminApi, Note } from '@/lib/api';

export default function AdminDashboard() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllNotes();
  }, []);

  const fetchAllNotes = async () => {
    try {
      const response = await adminApi.getAllNotes();
      setNotes(response.data);
    } catch (err: any) {
      setError('Failed to fetch notes. Admin access required.');
      console.error('Error fetching admin notes:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this note?')) return;
    
    try {
      await adminApi.deleteNote(id);
      setNotes(notes.filter(note => note.id !== id));
    } catch (err: any) {
      setError('Failed to delete note');
      console.error('Error deleting note:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-800">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage all users' notes</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            All Notes ({notes.length})
          </h2>
        </div>
        
        {notes.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-500">
            No notes found
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {notes.map((note) => (
              <div key={note.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {note.title}
                    </h3>
                    <p className="text-gray-600 mb-2 line-clamp-2">
                      {note.description}
                    </p>
                    <div className="text-sm text-gray-500">
                      Created: {new Date(note.created_at).toLocaleDateString()}
                      {note.updated_at !== note.created_at && (
                        <span className="ml-4">
                          Updated: {new Date(note.updated_at).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <Link
                      href={`/notes/${note.id}/edit`}
                      className="text-blue-600 hover:text-blue-800 px-3 py-1 text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="text-red-600 hover:text-red-800 px-3 py-1 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}