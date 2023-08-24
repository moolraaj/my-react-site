import React, { useState } from 'react'
import { Link} from 'react-router-dom'
function Navbar() {
const [showcompo, setShowCompo] = useState(false)

  const hideMyButton=()=>{
    let page=document.getElementById('collapsemybutton')
    page.click()===false?setShowCompo(true):setShowCompo(false)
  }
  return (
     <>


<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" id='collapsemybutton' type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>



     <div className="collapse " id="navbarToggleExternalContent" data-bs-theme="dark">
  <div className="bg-dark p-4">
    <ul>
      <li><Link to='/' onClick={hideMyButton}>{showcompo?'false':'home'}</Link></li>
      <li><Link to='/about' onClick={hideMyButton}>{showcompo?'false':'about us'}</Link></li>
      <li><Link to='/services' onClick={hideMyButton}>{showcompo?'false':'services'}</Link></li>
      <li><Link to='/my-song' onClick={hideMyButton}>{showcompo?'false':'my song'}</Link></li>
      <li><Link to='/test' onClick={hideMyButton}>{showcompo?'false':'test'}</Link></li>
      <li><Link to='/slider' onClick={hideMyButton}>{showcompo?'false':'slider'}</Link></li>
      
    </ul>
  </div>
</div>

     </>
  )
}

export default Navbar
