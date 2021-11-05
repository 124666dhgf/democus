import React from 'react';
import TableHeader from './tableheader';
import TableBody from './tablebody';
const Table= (props)=> {
    
    const{characterData,removeCharacter} =props
      
      return (
        <table className="Table">
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
      )
    
  }
  export default Table;