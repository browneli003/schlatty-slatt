import React from "react";
import Nav from "../Nav";
import coverImage from "../../assets/cover/cover-image.jpg"
import "./style.css";

function Header() {
    
    return (
    <section >
        <h1 id="my-1" className="header" >
        
            My Portfolio
          
            <nav>
<ul id="nav" className="nav">
     <li>
      <a href="#About-Me">About Me</a>    
     </li>   
     <li>
      <a href="#Contact">Contact</a>
     </li>
</ul>
</nav>
        </h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    )
}

export default Header;