import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Nav.css'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  background ">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="">LOGO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="./">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="./Contact">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="./about">ABOUT</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar





// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../Navbar/Nav.css'
// function Navbar() {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg  background ">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand text-light" to="">LOGO</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link text-light active" aria-current="page" to="./">HOME</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link text-light" to="./Contact">CONTACT</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link text-light" to="./about">ABOUT</Link>
//                             </li>


//                         </ul>

//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar