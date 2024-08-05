import React from "react";
import { Link } from "react-router-dom";
let Editcontact = ()=>{
    return(
        <>
        <section className="add-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-success fw-bold">Edit Contact</p>
                        <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio exercitationem ad aliquam labore autem atque nesciunt beatae cupiditate, cum unde assumenda voluptate! Consequuntur, recusandae. Iure ab minus similique quis eaque.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder="Mobile-Number"/>
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" placeholder="E-Mail"/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="image-url"/>
                            </div>
                            <div className="mb-2">
                                <select className="form-control">
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                    </select>                            
                                    </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-primary" value="create"/>
                                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Back</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};
export default Editcontact;