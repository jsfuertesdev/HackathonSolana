import './dashboard.scss';
import Card from '../card/Card'
import data_js from '../../data/data'

async function loadPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/3/photos')
    // const data = await res.json()
    // data.json
    const data = data_js
    return data
 }

async function Dashboard() {
    const posts = await loadPosts()
    // const posts = data_js
    console.log(data_js)
  return (
    <div className='dashboard'>
        {posts.map((post)=>(
            <Card id={post.id} title={post.title} author={post.author}
            description={post.description} exercise={post.url} tags={post.tags}/>
        ))}
    </div>
  )
}

export default Dashboard