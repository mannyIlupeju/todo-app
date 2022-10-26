import React from "react"
import { NavLink } from "react-router-dom"
//start by adding an array of objects (containing all your links items) above the return statement

const Navbar = () => {
  const links = [
    {
      id:1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    }
  ]

  return (
  <nav className="navBar">
    <ul>
      {links.map(link => {
        return(
         <li key={link.id}>
           <NavLink to={link.path} activeClassName = "active-link" exact>
             {link.text}
           </NavLink>
         </li>
        )
      })}
    </ul>
  </nav>
)
}

export default Navbar




// const links = [
//   {
//     id: 1,
//     path: "/",
//     text: "Home",
//   },
//   {
//     id: 2,
//     path: "/about",
//     text: "About",
//   }
// ]

// return (
//   <nav className="navBar">
//     <ul>
//       {links.map(link => {
//         return <li key={link.id}>{link.text}</li>
//       })}
//     </ul>
//   </nav>
// )