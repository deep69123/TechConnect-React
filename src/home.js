// Home.js

import React from 'react';
import './home.css';  // Assuming you have custom styles in Home.css


const Home = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-light">
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <a className="navbar-brand" href="#home">My E-Commerce</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#shop">Shop</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                        <div className="navbar-icons">
                            <i className='bx bx-search'></i>
                            <i className='bx bx-user'></i>
                            <i className='bx bx-cart'></i>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Carousel Section */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/1500x500" className="d-block w-100" alt="Slide 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1500x500" className="d-block w-100" alt="Slide 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1500x500" className="d-block w-100" alt="Slide 3"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* Featured Products Section */}
            <section className="featured-products container mt-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 1"/>
                            <div className="card-body">
                                <h5 className="card-title">Product 1</h5>
                                <p className="card-text">$50.00</p>
                                <a href="#!" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 2"/>
                            <div className="card-body">
                                <h5 className="card-title">Product 2</h5>
                                <p className="card-text">$60.00</p>
                                <a href="#!" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 3"/>
                            <div className="card-body">
                                <h5 className="card-title">Product 3</h5>
                                <p className="card-text">$70.00</p>
                                <a href="#!" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter bg-light py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Subscribe to Our Newsletter</h2>
                    <form className="form-inline justify-content-center">
                        <input type="email" className="form-control mr-2" placeholder="Enter your email"/>
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-light py-4">
                <div className="container text-center">
                    <p>&copy; 2023 My E-Commerce. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
