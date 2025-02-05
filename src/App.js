 import { useEffect, useState } from 'react';
import './App.css';
import { Button, EditableText } from '@blueprintjs/core';


function App() {
  const[users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => setUsers(json))

  },[])
  return (
    <div className="App">
      <table className='bp4-html-table modifier'>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.map(user =>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td><EditableText value={user.email}/></td>
            <td>{user.website}</td>
            <td>
              <Button intent='primary'>Update</Button>
              <Button intent='danger'>Delete</Button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
