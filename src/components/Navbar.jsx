import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    const isAuthenticated = useSelector(state => state.isAuthenticated)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">  Clothes's Shop</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    {isAuthenticated === false ?
                        <div className="buttons text-center">
                            <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>

                        </div>
                        :
                        <div className="buttons text-center">
                            <NavDropdown title="Setting" id="basic-nav-dropdown">

                                <NavDropdown.Item as={Link} to='/cart' className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1" />Cart({state.length})</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/logout" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i>Log out</NavDropdown.Item>
                            </NavDropdown>

                        </div>
                    }
                </div>


            </div>
        </nav>
    )
}

export default Navbar