import React from "react";
import { Link } from "react-router-dom";
let Contactlist = ()=>{
    return(
        <>
        <section className="contact-search p-3">
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Contact Manager
                                <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                <i className="fa fa-plus-circle me-2"/>
                                New</Link>
                            </p>
                            <p className="fst-italic">Life is very beautiful, sometimes it laughs, sometimes it cries . 19. Chhoti si zindagi hai, hans ke jio, Bhula ke gam sare dil se jio, Live for yourself not rightly for your loved If you work hard, you become destiny . Just our thinking changes! Today the time is bad, what happened sir, I will change it tomorrow.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="row">
                                <div className="col">
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Search Names"/>
                                </div>
                                </div>
                                <div className="col">
                                <div className="mb2">
                                    <input type="submit" className="btn btn-outline-dark" value="search"/>
                                </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-list">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                <div className="col-md-4">
                                    <img src="https://th.bing.com/th/id/OIP.k7dE2dftQijg3KbpTyIObAHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
                                </div>
                                <div className="col-md-7">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name : <span className="fw-bold">Praveen</span>
                                        </li>
                                    </ul>
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Mobile : <span className="fw-bold">765489321</span>
                                        </li>
                                    </ul>
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            E-Mail : <span className="fw-bold">praveen67@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-1">
                                    <Link to={'contacts/view'} className="btn btn-warning my-1">
                                    <i className="fa fa-eye"></i></Link>
                                    <Link to={'contacts/edit'} className="btn btn-success my-1">
                                    <i className="fa fa-pencil"></i></Link>
                                    <button className="btn btn-primary my-1 ">
                                    <i className="fa fa-trash"></i></button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};
export default Contactlist;