import { useEffect , useState } from 'react'

//1. useEffect(callback)
// - Gọi callcback mỗi khi re-render
// - Gọi callback sau khi thêm elemet vào DOM
//2. useEffect(callback , [])
//- Chỉ gọi lại callback 1 lần sau khi component được mounted
//3. useEffect(callback , [deps])
// - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

//1. Callback luôn được gọi sau khi component mounted

const tabs = ['posts' , 'comments' , 'albums']

function Content() {

    const [title , setTitle] = useState('')
    const [posts , setPosts] = useState([])
    const [type , setType] = useState('posts')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + type)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    } , [type])

    return (
        <div>

            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id || post.name}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;