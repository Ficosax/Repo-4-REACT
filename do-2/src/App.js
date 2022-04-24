import React from 'react';
// import { Tabela } from './components/Tabela';
import { ClassTabela } from './components/ClassTabela';

export function App() {

  return(
    <div id='app'>
      <h2>App</h2>
      {/* <Tabela /> */}
      <ClassTabela />
    </div>
  )
}



// da se kreiraat 5 input polinja (ime,prezime,email,password,godini)
// za koi vrednostite ke se prikazat vo tabela i na krajot od formata da ima eden
// button koj sto na klik ke ja krie/pokazuva tabelata