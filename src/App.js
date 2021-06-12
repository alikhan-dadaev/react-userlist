import {checkUser, loadUsers, removeUser} from "./Actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import './style.css'

function App() {
  const user = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  const handleDelete = (id) => {
    dispatch(removeUser(id))
  }

  const handleCheck = (id, offLine) => {
    dispatch(checkUser(id, offLine))
  }

  return (
    <div className="App">
      <div className="header">
        Список пользователей
      </div>
      {user.map(item => {
        return(
            <div className="main">
              <input
                  type="checkbox"
                  checked={item.id}
                  onChange={() => handleCheck(item.id, item.offline)}/>
              <div className="userName">
                {item.name}
              </div>
              <button onClick={() => handleDelete(item.id)}>
                Удалить пользователя
              </button>
            </div>
        )
      })}
    </div>
  );
}

export default App;
