import React from "react";

export default function Card(parameter) {
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: "540" }} id={parameter.id}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={parameter.image} className="img-fluid rounded-start" alt="book logo" height="200" width="200"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                            <h5 className="card-title">{parameter.title}</h5>
                            <p><small>{parameter.author}</small> </p>
                            
                            <p className="card-text">{parameter.text}</p>
                           <a target="_blank"  href={parameter.buylink}><button type="button" class="btn btn-outline-success">Buy this Book</button></a> 
        
                </div>
                </div>
            </div>
            </div>

           
        </>
    );
}