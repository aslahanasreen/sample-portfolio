import React from 'react'
import './about.css'


function About() {
  return (
    <>
      <h4 className="b1 text-center pt-5">About Me</h4>

      <div className='d-flex justify-content-center align-items-center'>
        <div className="row w-75 container border shadow m-5">
          <div className="col-6 p-5">
            <h4 className='n1'>I'm Aslaha. A software developer.</h4>
            <br />
            <p className='n2' style={{textAlign:'justify'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, cupiditate explicabo. Laboriosam iure placeat labore iste ad modi esse, aliquid ab aperiam asperiores rerum cupiditate mollitia similique quisquam, illo saepe!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime harum quisquam suscipit aperiam reiciendis sequi, facilis incidunt laborum, itaque nostrum? Facere ut esse iste molestiae reiciendis quasi pariatur possimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea perspiciatis quidem reiciendis obcaecati ut voluptate aut tempora. Officia corrupti, reprehenderit magni doloremque aliquid odio at atque ab laborum, facere omnis.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quis a id nulla corporis ipsam inventore voluptas? Reiciendis cum, vel illum, aperiam consequuntur inventore officia odit dolorem quas, distinctio earum!
            </p>
            <h5 className='n1'>Experiance</h5>
            <p className='n2'>-Master's in Computer Application <br />
            -Currently working as an software developer intern
            </p>
            <h5 className='n1'>Skills</h5>
            <p className='n2' style={{textAlign:'justify'}}>Lorem ipsum / dolor sit amet / consectetur / adipisicing elit / Dolor nihil / debitis et magni / laborum enim / Enim / fugit maiores / fugiat ipsum / optio minima / omnis nemo / alias aspernatur / Obcaecati / quasi / beatae itaque.</p>
            <button className='btn btn-dark px-5 rounded-pill'>My CV</button>
          </div>
          <div className="col-6 c1">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default About