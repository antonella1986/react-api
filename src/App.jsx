import { useState, useEffect } from 'react'
import './App.css'

function App() {
  //parentesi quadre perché React restituisce un array con due elementi, quando useState viene chiamato. questo array viene destrutturato utilizzando la sintassi delle parentesi quadre
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
