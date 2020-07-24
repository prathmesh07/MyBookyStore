import React from 'react'
import Heading from "../Reusable/Heading"
import {Link} from "gatsby"

export default function Creator() {
    return (
       
        <section className="bg-theme my-5 py-4">
        <div className="container">
        <Heading title="Created By" />
            <div className="row">
            
                <div className="containerr">
                             <div className="card" >
                            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGbCZ-a9ridGw/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=jXdnAf5xcwDxeviOKmikXmInHEIh5zmMYOUPnoXybZ4" class="card-img-top" alt="image goes here"/>
                            <div className="card-body">
                                <h5 className="card-title text-success">Hi ,there</h5>
                                <p className="card-text">These site created by Prathmesh Asole..</p>
                                <Link to="https://in.linkedin.com/in/prathmesh-asole-749961189/" className="btn btn-warning btn-block">
                                        Get Connect on linkedin
                         </Link>
                            </div>
                            </div>
                </div>
                <div className="col-8 mx-auto">
                    <p className="lead text-white mb-5 text-justify">
                    myBooky is the fastest site to see trending book ,compare book prices and buy books from good read site. We provide aggregate information like best deals, reviews and ratings when you click on buy now from popular Indian online bookstores.
                    </p>
                </div>
                </div>
                </div>
                </section>
       
    )
}
