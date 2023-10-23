import React from 'react';

function Content() {

    function nameChange(){
        const name = ['Health', 'Wealth', 'Money'];
        const int = Math.floor(Math.random()*3);
  
        return name[int];
      }
  return (
    <div>
        <p>Lets Grow {nameChange()}</p>
    </div>
  )
}

export default Content