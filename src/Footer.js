import React from 'react';

const Footer = () => {
    const year = new Date();
  return (
    <div>
        <h1>Copyright &copy; {year.getFullYear()}</h1>
    </div>
  )
}

export default Footer