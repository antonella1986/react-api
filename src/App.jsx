import { useState, useEffect } from 'react'
const base_api_url = 'http://localhost:3001'
const post_endpoint = '/posts'

function App() {
  //parentesi quadre perché React restituisce un array con due elementi, quando useState viene chiamato. questo array viene destrutturato utilizzando la sintassi delle parentesi quadre
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    fetchData(base_api_url + post_endpoint)
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
            <div className="row row-cols-1 row-cols-md-3 g-3">
                {posts.map(post => (
                  <div className="col" key={`post-${post.id}`}>
                    <div className="card">
                      <img className='card-img-top' src={base_api_url + post.image} alt="" style={{ height: '240px', objectFit: 'cover' }} />
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
