import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const DealsPage = () => {
    return (
        <>
        <NavBar/>
            <div className="container-fluid">
        <h2>Deals and Promotions</h2>
        <p>Shop Today{'’'}s Deals, Lightning Deals, and limited-time discounts</p>
        <div className="row mt-5 mb-3">
            <div className="col-md-2 p-2 ms-3" style={{background:'#f5f5f5'}}>
                <h5>Categories</h5>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Arts, Crafts {'&'} Sewing
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                        Mobile
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                       Laptop
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                       Television
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                    <label className="form-check-label" htmlFor="flexCheckDefault4">
                       Kitchen Accessories
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                    <label className="form-check-label" htmlFor="flexCheckDefault5">
                        Fashion
                    </label>
                  </div>
                  <h5>Deal Type</h5>
                  <ul className="deals-type">
                      <li className="list-unstyled"><Link to="#" className="text-decoration-none">Deal of the Day</Link></li>
                      <li className="list-unstyled"><Link to="#" className="text-decoration-none">Lightning Deals</Link></li>
                      <li className="list-unstyled"><Link to="#" className="text-decoration-none">Saving {'&'} Sales</Link></li>
                      <li className="list-unstyled"><Link to="#" className="text-decoration-none">Prime Early Access Deals</Link></li>
                  </ul>
            </div>
            <div className="col-md-8">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <div className="card shadow-lg">
                        <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <button className="btn btn-success">View Details</button>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-lg">
                        <img src="https://myrepublica.nagariknetwork.com/uploads/media/eeee_20210524140327.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <button className="btn btn-success">View Details</button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-lg">
                        <img src="https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <button className="btn btn-success">View Details</button>
                      </div>
                    </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-lg">
                        <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <button className="btn btn-success">View Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

        </div>
    </div>
<Footer/>
        </>
    )
}

export default DealsPage
