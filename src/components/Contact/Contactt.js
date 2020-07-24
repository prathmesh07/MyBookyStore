import React from 'react'
import Heading from "../Reusable/Heading"
import "../layout.css"

export default function Contactt() {
    return (
       <section className="py-6 contactt  ">
           <Heading title="Get Connect with us" />
           <div className="col-10 col-sm-8 mx-auto">
               <form action="https://formspree.io/18prathmeshasole@gmail.com" method="POST">
                   <div className="form-group">
                       <input 
                       type="text"
                       name="name"
                       id="name"
                       placeholder="Your Name"
                       className="form-control"
                       />
                  
                   </div>

                   <div className="form-group">
                       <input 
                       type="email"
                       name="email"
                       id="email"
                       placeholder="Your Email id"
                       className="form-control"
                       />
                  
                   </div>

                   <div className="form-group">
                       <input 
                       type="text"
                       name="mobile"
                       id="mobile"
                       placeholder="Your mobile"
                       className="form-control"
                       />
                  
                   </div>

                   <div className="form-group">
                       <textarea 
                       type="text"
                       name="description"
                       id="description"
                       placeholder="Your message..."
                       className="form-control"
                       />
                  
                   </div>
                   <button type="submit" className="btn btn-block btn-outline-info btn-warning">Submit</button>
               </form>
           </div>

       </section>
    )
}
