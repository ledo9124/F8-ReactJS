import { useEffect , useState } from 'react'

//1. useEffect(callback)
// - Gọi callcback mỗi khi re-render
// - Gọi callback sau khi thêm elemet vào DOM
//2. useEffect(callback , [])
//- Chỉ gọi lại callback 1 lần sau khi component được mounted
//useEffect(callback , [deps])

//1. Callback luôn được gọi sau khi component mounted

function Content() {

    const [title , setTitle] = useState('')
    const [posts , setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    } , [])

    return (
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={posts.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;