import { memo } from 'react'

//1. useEffect(callback)
// - Gọi callcback mỗi khi re-render
// - Gọi callback sau khi thêm elemet vào DOM
//2. useEffect(callback , [])
//- Chỉ gọi lại callback 1 lần sau khi component được mounted
//3. useEffect(callback , [deps])
// - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

//1. Callback luôn được gọi sau khi component mounted
//2. Cleanup function luôn được gọi trước khi component unmounted
//3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần monted)


// VD event scroll
// const tabs = ['posts' , 'comments' , 'albums']

// VD useEffect with fake chat App
// const lessons = [
//     {
//         id: 1,
//         name: 'React JS'
//     },
//     {
//         id: 2,
//         name: 'Javascript'
//     },
//     {
//         id: 3,
//         name: 'HTML & CSS'
//     }
// ];

function Content({ onIncrease }) {

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

    // const [countdown , setCountdown] = useState(180)
    // const [countdown1 , setCountdown1] = useState(180)

    // useEffect(() => {
    //     const timerID = setInterval(() => {
    //         setCountdown(pver => pver - 1);
    //     } , 1000)

    //     return () => {
    //         clearInterval(timerID)
    //     }
    // } , [])

    // useEffect(() => {
    //     const timerID = setTimeout(() => {
    //         setCountdown1(countdown1 - 1);
    //     } , 1000)

    //     return () => {
    //         clearInterval(timerID)
    //     }
    // } , [countdown1])

    // return (
    //     <div>
    //         {countdown}
    //         {countdown1}
    //     </div>
    // )

// useEffect with preview avatar


    // const [avatar , setAvatar] = useState()

    // useEffect(() => {
    //     return () => {
    //         avatar && URL.revokeObjectURL(avatar.preview)
    //         console.log('clear');
    //     }
    // } , [avatar])

    // const handlePreviewAvatar = (e) => {
    //     const file = e.target.files[0]

    //     file.preview = URL.createObjectURL(file)

    //     setAvatar(file)
    // }

    // return (
    //     <div>
    //         <input 
    //             type="file"
    //             onChange={handlePreviewAvatar}
    //         />

    //         {avatar && (
    //             <img src={avatar.preview}  width="80%" />
    //         )}
    //     </div>
    // )

    // useEffect with fake chat App

    // const [lessonID , setLessonID] = useState(1)

    // useEffect(() => {

    //     const handleEvent = ({ detail }) => {
    //         console.log(detail);
    //     }

    //     window.addEventListener(`lesson-${lessonID}` , handleEvent)

    //     return () => {
    //         window.removeEventListener(`lesson-${lessonID}` , handleEvent)
    //     }
    // } , [lessonID])

    // return (
    //     <div>
    //         {lessons.map(lesson => (
    //             <li
    //                 key={lesson.id}
    //                 style={{
    //                     color: lesson.id === lessonID ?
    //                     'red' : 'black',
    //                     cursor: 'pointer'
    //                 }}
    //                 onClick={() => setLessonID(lesson.id)}
    //             >
    //                 {lesson.name}
    //             </li>
    //         ))}
    //     </div>
    // )

    //useLayoutEffect hook

    // const [count , setCount] = useState(0)

    // useLayoutEffect(() => {
    //     if (count > 3) {
    //         setCount(0)
    //     }
    // } , [count])

    // const handleRun = () => {
    //     setCount(count + 1)
    // }

    // return (
    //     <div>
    //         <h1>{count}</h1>
    //         <button
    //             onClick={handleRun}
    //         >
    //             Run
    //         </button>
    //     </div>
    // )

    // useRef hook

    // const [count , setCount] = useState(60)

    // const timerID = useRef()

    // const handleStart = () => {
    //     timerID.current = setInterval(() => {
    //         setCount(pver => pver - 1)
    //     } , 1000)
    // }

    // const handleStop = () => {
    //     clearInterval(timerID.current)
    // }

    // return (
    //     <div style={{ padding: 20}}>
    //         <h1>{count}</h1>
    //         <button onClick={handleStart}>Start</button>
    //         <button onClick={handleStop}>Stop</button>
    //     </div>
    // )

    // React.memo HOC

    console.log('Hello Guys!');

    return (
        <>
            <h1>Hello Guys!</h1>
            <button onClick={onIncrease}>Click Me!</button>
        </>
    )
    


}

export default memo(Content);