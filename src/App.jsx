import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    fetch("")
      .then(res => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  })

  return (
    <>
      <h1>Posts</h1>

      {loading && <p>Loading...</p>} {/* Mostra un messaggio di caricamento */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostra un messaggio di errore */}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
