import React from "react";

export class ClassTabela extends React.Component{
    
    constructor(props){
    super(props)

    this.state={
      name: "",
      surname: "",
      email: "",
      password: "",
      age: "",
      showTableData: false
    }    //// ovde vo this.state objektot gi definirame propertijata od values //
  } 

  handleInput = (event) => {
    console.log(event)
    this.setState({ 
      [event.target.name]: event.target.value 
    })
  }
 
  render() {
    return(
      <div id='class-table'> 
        <h2>Class Tabela</h2>
        <input 
            type="text"
            placeholder='Внеси Име'
            value={this.state.name}
            onChange={this.handleInput}
            name="Name"
        />
        <input 
            type='text'
            placeholder='Презиме'
            value={this.state.surname}
            onChange={this.handleInput}
            name="Surname"
        />
        <input
            type='Password'
            placeholder='Лозинка'
            id='password'
            value={this.state.password}
            onChange={this.handleInput}
            name="Password"
        />
        <input
            type='text'
            placeholder='емаил адреса'
            value={this.state.email}
            onChange={this.handleInput}
            name="email"
        />
        <input
            type='text'
            placeholder='Возраст'
            value={this.state.age}
            onChange={this.handleInput}
            name="age"
        />
        <br />
        <br />
        <button onClick={() => {
          this.setState({showTableData: !this.state.showTableData}) }}>
          {this.state.showTableData === true ? "Сокриј!" : "Појави!"}
        </button>
        <br />
        {this.state.showTableData && <table border='2'>
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
            <td>{this.state.name}</td>
            <td>{this.state.surname}</td>
            <td>{this.state.password}</td>
            <td>{this.state.email}</td>
            <td>{this.state.age} </td>
          </tr>
        </tbody>
        </table>}
        </div>
      )
    }
  }