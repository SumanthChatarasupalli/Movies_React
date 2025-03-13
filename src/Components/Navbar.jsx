import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css"



// //this method is to navigate using href links by using Link 
function Navbar(){
    return(
         <nav className="navbar">
            <div className="navbar-brand">
                <Link to ="/" className="nav-link">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to ="/" className="nav-link">Home</Link>
                <Link to ="/favourites" className="nav-link">Favourites</Link>
            </div>
         </nav>
    )
}


// //This is a method to navigate using the buttons and usenavigate hook 
// function Navbar(){
//     const navigate=useNavigate();
//     const onclickhomepage=()=>{
//        navigate("/");
//     }
//     const onclickfavpage=()=>{
//         navigate("/favourites")
//     }
//     return(
//         <nav>
//             <div>
//                 <button onclick={onclickhomepage}>Movies App</button>
//             </div>
//             <div>
//                 <button onClick={onclickhomepage}>Home</button>
//                 <button onClick={onclickfavpage}>Favourites</button>
//                 {/* <button onc></button> */}
//             </div>
//         </nav>
//     )
// }

export default Navbar
