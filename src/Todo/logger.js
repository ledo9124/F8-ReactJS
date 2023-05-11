

function logger(reducer) {

    return (pverState , action) => {
        console.group(action.type)
        console.log('Pver state: ' , pverState)
        console.log('Action: ' , action)

        const newState = reducer(pverState , action) 

        console.log('Next state: ' , newState)

        console.groupEnd()

        return newState
    }
}

export default logger