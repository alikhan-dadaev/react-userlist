import {checkUser, loadUsers, removeUser} from "./Actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import './style.css'

function App() {
  const user = useSelector(state => state.users);

  const loading = useSelector(state => state.loading)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  const handleDelete = (id) => {
    dispatch(removeUser(id))
  }

  const handleChange = (id, offLine) => {
      dispatch(checkUser(id, offLine))
  }


  return (
    <div className="App">
      <div className="header">
        Список пользователей
      </div>
      <div className="loading">
        {loading ? 'Идет загрузка....': (user.map(item => {
        return(
            <div className="main">
                <input
                    type="checkbox"
                    checked={user.offline}
                    onChange={() => handleChange (user.id, user.offLine)}
                />
              <div className="userName">
                {item.name}
              </div>
              <button
                  onClick={() => handleDelete(item.id)}
                  disabled={item.deleting}
              >
                Удалить пользователя
              </button>
            </div>
        )
      }))}
      </div>

    </div>
  );
}

export default App;
