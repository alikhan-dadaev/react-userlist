export const loadUsers = () =>{
    return (dispatch) => {
        dispatch({type: 'start'})
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => {
            dispatch ({
                type: 'users',
                payload: json
            })
        })
    }
}

export const removeUser = (id) => {
    return (dispatch) => {
        dispatch({type: 'start_deleting', payload: id})
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then((json) => {
                dispatch ({
                    type: 'delete',
                    payload: id
                })
            })
    }
}

export const checkUser = (id, offLine) => {
    return function (dispatch) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({offLine: !offLine}),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'check',
                    payload: id
                })
            })
    }
}
