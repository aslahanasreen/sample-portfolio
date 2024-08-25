import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-dark text-center text-white'>
          <div className="container p-4 pb-0">
            <section className='mb-4'>
              <a href="" className='btn btn-outline-light btn-floating m-1' role='button'>
              <i class="fa-brands fa-twitter"></i>
              </a>

              <a href="" className='btn btn-outline-light btn-floating m-1' role='button'>
              <i class="fa-brands fa-facebook"></i>
              </a>

              <a href="" className='btn btn-outline-light btn-floating m-1' role='button'>
              <i class="fa-brands fa-google"></i>
              </a>

              <a href="" className='btn btn-outline-light btn-floating m-1' role='button'>
              <i class="fa-brands fa-instagram"></i>
              </a>

              <a href="" className='btn btn-outline-light btn-floating m-1' role='button'>
              <i class="fa-brands fa-linkedin"></i>
              </a>

              <a href="" className='btn btn-outline-light btn-floating m-1' role='button'>
              <i class="fa-brands fa-github"></i>
              </a>

            </section>
          </div>
          <div className='text-center p-3' style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
          © 2024 Copyright:
          <a href="" className='text-white'>aslahanasreen.com</a>
          </div>
        </footer>
    </>
  )
}

export default Footer