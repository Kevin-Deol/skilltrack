import { useState } from 'react';

const Post = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting:', { content });

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (response.ok) {
        alert('Post created successfully!');
      } else {
        alert(`Post creation failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during post creation.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Post</h2>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Create Post
        </button>
      </form>
    </div>
  );
}