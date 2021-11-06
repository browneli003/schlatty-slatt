import React from "react";
import Nav from "../Nav";
import coverImage from "../../assests/cover/cover-image.jpg"

function Header() {
    
    return (
    <section >
        <h1 id="my-1" className="header" >
        
            My Portfolio
          
        {/*<Nav/> */}
        </h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    )
}

export default Header;