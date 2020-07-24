import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"

export default function DualInfoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
        <div className="container">
            <Heading title={heading} />
            <div className="row">
                <div className="col-8 mx-auto">
                    <p className="lead text-white mb-5 text-justify">
                    The light of a team’s unity is so powerful that it is able to irradiate the whole world. Together our team will achieve more milestones.

Consistency and persistence are two main things build a strong team. And we’re lucky to have a team of greats to be great.

Together we’re a great team with having trust, respect and understanding for each other. In the end, success will be ours.
We make a great team that sweats together, survive together and win together. We believe in vision, harmony and consistency.

Our team is like a family where each member’s strength is the team and the team’s strength is every individual member of it.

A powerful team is made by perusing their dream and not giving up hopes. The team that plays together reaches its goal

Our target is for inspiring our action, but we can achieve more than what is predicted with our belief. So have faith in yourself and your team.
                    </p>
                </div>
                <div className="col-4">
                             <div className="card" >
                            <img src="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80" class="card-img-top" alt="image goes here"/>
                            <div className="card-body">
                                <h5 className="card-title text-success">Reading as Habit</h5>
                                <p className="card-text">One of the greatest gifts adults can give—to their offspring and to their society—is to read to children.</p>
                                <Link to="/about/" className="btn btn-warning btn-block">
                                        Know more
                         </Link>
                            </div>
                            </div>
                </div>
                </div>
                </div>
                </section>
    )
}
