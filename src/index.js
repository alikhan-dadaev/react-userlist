import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";


const initialState = {
    users: [{
        offLine: true
    }],

}

const reducer = ((state = initialState, action) => {
    switch (action.type) {
        case 'users':
            return {
                ...state,
                users: action.payload
            };
        case 'delete':
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            };
        case 'checked':
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            offLine: !user.offLine
                        }
                    }

                    return user
                })
            }

        default: {
            return state
        }
    }
})
const store = createStore(reducer, applyMiddleware(thunk))
console.log(initialState)
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

