import React, { useState } from 'react';

export const Tabela = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [showTableData, setShowTableData] = useState(false);

  return(
    <div id='app'>
      <input 
        type="text"
        placeholder='Внеси Име'
        value={name}
        onChange={(event) => {setName(event.target.value)}}
      />
      <br />
      <input 
        type='text'
        placeholder='Презиме'
        value={surname}
        onChange={(event)=>{setSurname(event.target.value)}}
      />
      <br />
      <input
        type='Password'
        placeholder='Лозинка'
        id='password'
        value={password}
        onChange={(event) =>{setPassword(event.target.value)}}
      />
      <br />
      <input
        type='text'
        placeholder='емаил адреса'
        value={email}
        onChange={(event) => {setEmail(event.target.value)}}
      />
      <br />
      <input
        type='text'
        placeholder='Возраст'
        value={age}
        onChange={(event) => {setAge(event.target.value)}}
      />
      <br/>
      <br/>
      <button onClick={()=>{setShowTableData(!showTableData)}}>
          {showTableData === true ? "Сокриј!" : "Појави!"}
      </button>
      <br/>
      {showTableData && <table border='2'>
        <thead>
          <tr>
            <th>Име</th>
            <th>Презиме</th>
            <th>Лозинка</th>
            <th>Емаил адреса</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{password}</td>
            <td>{email}</td>
            <td> {age} </td>
          </tr>
        </tbody>
        </table>}
    </div>
  )
}