import { useEffect , useState } from 'react'

//1. useEffect(callback)
// - Gọi callcback mỗi khi re-render
// - Gọi callback sau khi thêm elemet vào DOM
//2. useEffect(callback , [])
//- Chỉ gọi lại callback 1 lần sau khi component được mounted
//3. useEffect(callback , [deps])
// - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

//1. Callback luôn được gọi sau khi component mounted


// VD event scroll
// const tabs = ['posts' , 'comments' , 'albums']

function Content() {

//     const [title , setTitle] = useState('')
//     const [posts , setPosts] = useState([])
//     const [type , setType] = useState('posts')
//     const [showGoToTop , setShowGoToTop] = useState(false)

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/' + type)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts);
//             })
//     } , [type])

//     useEffect(() => {

//         const handleScroll = () => {
//             setShowGoToTop(window.scrollY >= 200)
//         }

//         window.addEventListener('scroll' , handleScroll)

//         //cleanup function
//         return () => {
//             window.removeEventListener('scroll' , handleScroll)
//             console.log(1);
//         }
//     } , [])

//     return (
//         <div>

//             {tabs.map(tab => (
//                 <button 
//                     key={tab}
//                     style={type === tab ? {
//                         color: '#fff',
//                         backgroundColor: '#333'
//                     } : {}}
//                     onClick={() => setType(tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}

//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />

//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id || post.name}>{post.title || post.name}</li>
//                 ))}
//             </ul>

//             {showGoToTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20,
//                     }}
//                 >
//                     Go To Top
//                 </button>
//             )}
//         </div>
//     )


// VD resize

//     const [width , setWidth] = useState(window.innerWidth)

//     useEffect(() => {

//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }

//         window.addEventListener('resize' , handleResize)

//         return () => {
//             window.removeEventListener('resize' , handleResize)
//         }
//     })

//     return (
//         <div>
//             <h1>{width}</h1>
//         </div>
//     )

// useEffect with timer functions

    const [countdown , setCountdown] = useState(180)
    const [countdown1 , setCountdown1] = useState(180)

    useEffect(() => {
        const timerID = setInterval(() => {
            setCountdown(pver => pver - 1);
        } , 1000)

        return () => {
            clearInterval(timerID)
        }
    } , [])

    useEffect(() => {
        const timerID = setTimeout(() => {
            setCountdown1(countdown1 - 1);
        } , 1000)

        return () => {
            clearInterval(timerID)
        }
    } , [countdown1])

    return (
        <div>
            {countdown}
            {countdown1}
        </div>
    )


}

export default Content;