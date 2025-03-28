import { useState, useEffect } from 'react'
const api_url = 'http://localhost:3001/posts'

function App() {
  //parentesi quadre perché React restituisce un array con due elementi, quando useState viene chiamato. questo array viene destrutturato utilizzando la sintassi delle parentesi quadre
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    fetchData(api_url)
  }, []);
  
  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data)
      })
  }
  return (
    <>
      <h1>Posts</h1>

      <main>
        <section className="posts">
          <div className="container">
            <div className="row">
                {posts.map(post => (
                  <div className="col" key={`post-${post.id}`}>
                    <div className="card">
                      <img className='card-img-top' src={api_url + post.img} alt="" />
                      <div className="card-body">
                        {post.title}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default App
