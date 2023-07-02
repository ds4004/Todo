import React from 'react'
// type 2 to import css by making usual css file
// import './Footer.css'

export const Footer = () => {
  // let footerStyle = {
  //   position: "realtive",
  //   top: "70vh",
  //   width: "100%"
  // }
  return (
    // <footer className='bg-dark text-light py-3' style={footerStyle}>
    <footer className='bg-dark text-light py-1'>
      <p className="text-center"> Copyright &copy; MyToDoList.com </p>
    </footer>
  )
}