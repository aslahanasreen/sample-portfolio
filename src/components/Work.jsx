import React from 'react'
import './work.css'
import c1 from '../assets/c12.jpeg'
// import c13 from '../assets/c13.jpeg'

function Work() {
  return (
    <>
        <h4 className='hh text-center'>My Works</h4>

        <div className='d1 p-4'>
            <div className="card shadow" style={{ width: '18rem' }}>
                <img src={c1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Work 1</h5>
                    <p className="card-text n2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card shadow" style={{ width: '18rem' }}>
                <img src={c1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Work 2</h5>
                    <p className="card-text n2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card shadow" style={{ width: '18rem' }}>
                <img src={c1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Work 3</h5>
                    <p className="card-text n2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card shadow" style={{ width: '18rem' }}>
                <img src={c1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Work 4</h5>
                    <p className="card-text n2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Work