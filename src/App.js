import { useReducer, useRef } from 'react'
// import Content from './Content'
 
// const gifts = [
//   'CPU i9' ,
//   'RAM 32GB RBG',
//   'RGB Keybroad',
// ]

// const courses = [
//   {
//     id: 1,
//     name: 'HTML , CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'React JS'
//   },
// ]


//1. Init state
const initState = {
  job: '',
  jobs: []
}

//2. actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

//3. Reducer
const reducer = (state , action) => {

  console.log('Action:', action);
  console.log('Pver state:', state);
  
  let newState

  switch(action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs , action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]

      newJobs.splice(action.payload , 1)

      newState = {
        ...state,
        jobs: newJobs
      }
      break
    default: 
        throw new Error('Invalid action.')  
  }

  console.log('New state:' , newState);
    
  return newState
}

function App() {
  // const [info , setInfo] = useState({
  //   name: 'Lê Minh Độ',
  //   age: 18,
  //   address: 'Hà Nội'
  // });

  // const handleUpdate = () => {
  //   setInfo({
  //     ...info,
  //     dream: 'Lấy vợ BB'
  //   });
  // }

  // return (
  //   <div className="App" style={{ padding : 20 + 'px' }}>
  //     <h1>{JSON.stringify(info)}</h1>
  //     <button onClick={handleUpdate}>Update</button>

  //   </div>
  // );

  // const [gift , setGift] = useState();

  // const handleGifts = () => {
  //   setGift(gifts[Math.floor(Math.random() * gifts.length)]);
  // };



  // return (
  //   <div style={{padding : 20}}>
  //     <h1>{gift || 'Chưa có phần thưởng'}</h1>
  //     <button onClick={handleGifts}>Lấy thưởng</button>
  //   </div>
  // )


  // const [name , setName] = useState('')

  // const handleSubmit = () => {
  //   //Call API
  //   console.log({
  //     name,
  //   });
  // }

  // return (
  //   <div style={{ padding: 20 }}>
  //     <input 
  //       value={name}
  //       onChange={e => setName(e.target.value)}
  //     />

  //     <button onClick={handleSubmit}>Register</button>

  //   </div>
  // )

  // const [checked , setChecked] = useState([])

  // const handleSubmit = () => {
  //   console.log(checked);
  // }

  // const handleCheck = (id) => {
  //   setChecked(pver => {
  //     const isChecked = checked.includes(id);
  //     if (isChecked) {
  //       return checked.filter(item => item !== id)
  //     } else {
  //       return ([...pver , id]);
  //     }
  //   })
  // }

  // return (
  //   <div style={{ padding:20 }}>
  //     {courses.map(course => (
  //       <div key={course.id}>
  //         <input 
  //           type='checkbox'
  //           checked={checked.includes(course.id)}
  //           onChange={() => handleCheck(course.id)}
  //         />
  //         {course.name}
  //       </div>
  //     ))}

  //     <button onClick={handleSubmit}>Register</button>
  //   </div>
  // )

  //Todolist with useState
  // const [job , setJob] = useState('')

  // const [jobs , setJobs] = useState(() => {
  //   const storageJobs = JSON.parse(localStorage.getItem('jobs'))

  //   return storageJobs ?? []
  // })


  // const handleSubmit = () => {
  //   setJobs(pver => {
  //     const newJobs = [...pver , job];

  //     const jsonJobs = JSON.stringify(newJobs)

  //     localStorage.setItem('jobs' , jsonJobs)

  //     return newJobs
  //   })
  //   setJob('')
  // }

  // const handleDLT = (id) => {
  //   jobs.splice(id , 1)
  //   let jobsDLT = [...jobs]
    
  //   localStorage.setItem('jobs' , JSON.stringify(jobsDLT))

  //   setJobs(jobsDLT);
  // }

  // return (
  //   <div style={{ padding:20 }}>
  //     <input 
  //       value={job}
  //       onChange={e => setJob(e.target.value)}
  //     />
  //     <button onClick={handleSubmit}>Add</button>

  //     <ul>
  //       {jobs.map((job , index) => (
  //         <div className='job' key={index}>
  //           <li>{job}</li>
  //           <button
  //             style={{cursor:'pointer'}}
  //             onClick={() => handleDLT(index)}
  //           >X</button>
  //         </div>
  //       ))}
  //     </ul>
  //   </div>
  // )

  //Mounted & Unmounted  => Gắn vào và Tháo ra

  // const [show , setShow] = useState(false)

  // return (
  //   <div style={{ padding:20 }}>
  //     <button onClick={() => setShow(!show)}>Toggle</button>
  //     {show && <Content />}
  //   </div>
  // )


  //useEffect

  // const [count , setCount] = useState(0)

  // const handleIncrease = useCallback(() => {
  //   setCount(pver => pver + 1)
  // }, [])  

  // return (
  //   <div style={{ padding: 20}}>
  //     <Content 
  //       onIncrease={handleIncrease} 
  //     />
  //     <h1>{count}</h1>
  //   </div>
  // )

  // const [name , setName] = useState('')
  // const [price , setPrice] = useState('')
  // const [products , setProducts] = useState([])

  // const nameRef = useRef()

  // const handleSubmit = () => {
  //   setProducts([
  //     ...products , {
  //       name,
  //       price: +price
  //     }
  //   ])
  //   setName('')
  //   setPrice('')

  //   nameRef.current.focus()
  // }

  // const total = useMemo(() => {
  //   const result = products.reduce((result , prod) => 
  //     result + prod.price,
  //     0
  //   )

  //   return result
  // } , [products])

  // return (
  //   <div style={{ padding:20 }}>
  //     <input 
  //       ref={nameRef}
  //       value={name}
  //       placeholder='Enter name...'
  //       onChange={e => setName(e.target.value)}  
  //     />
  //     <br />
  //     <input 
  //       value={price}
  //       placeholder='Enter price...'
  //       onChange={e => setPrice(e.target.value)}  
  //     />
  //     <br />
  //     <button onClick={handleSubmit} >Add</button>
  //     <br />
  //     Total: {total}
  //     <ul>
  //       {products.map((product , index) => (
  //         <li key={index}>{product.name} - {product.price}</li>
  //       ))}
  //     </ul>
  //   </div>
  // )

  // Todo App with useReducer hook

  const [state , dispatch] = useReducer(reducer , initState)

  const inputRef = useRef()

  const { job , jobs } = state

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Todo</h3>
      <input 
        value={job}
        ref={inputRef}
        placeholder='Enter todo...'
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job , index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}> 
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App;
