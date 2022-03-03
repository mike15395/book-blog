import React from "react";


export default function Navbar(){
    return(
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{backgroundColor:"red"}}>
                <div className="container-fluid">
                    <div style={{display:"flex",flexDirection: "row"}}>
                         <img src="https://media.istockphoto.com/vectors/open-book-color-vector-template-icon-vector-id1197901679?k=20&m=1197901679&s=612x612&w=0&h=QjmxcWwrj_D_IHgwt-9dvAdChyI1Vtr8bmQquYVkLE4=" alt ="book logo" width="50" height="50"/>
                        <p className="navbar-brand">My Book Blog</p>
                    </div>
                    <div>
                        Home
                    </div>
                    <div>About Us</div>
                    <div>Contact Us</div>
                    <div class="dropdown">
                            <a class="dropdown-toggle text-dark m-2" href="/"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Books
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="list">
                                <li><a class="dropdown-item" href="#book1">Book 1</a></li>
                                <li><a class="dropdown-item" href="#book2">Book 2</a></li>
                            <li><a class="dropdown-item" href="#book3">Book 3</a></li>
                            <li><a class="dropdown-item" href="#book4">Book 4</a></li>
                            </ul>
                        </div>

                    </div>

            </nav> 

        </>
    );
}