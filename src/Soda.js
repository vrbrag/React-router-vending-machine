import React from 'react'
import { Link } from 'react-router-dom'

function Soda() {
   return (
      <div>
         <h1>Quench your thirst!</h1>
         <h3><Link to="/">go back</Link></h3>
      </div>
   )
};
export default Soda;