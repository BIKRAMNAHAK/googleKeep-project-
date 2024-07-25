import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaArrowRotateRight } from 'react-icons/fa6'
import { IoSettingsOutline } from 'react-icons/io5'
import { PiDotsNineBold } from 'react-icons/pi'
import { RxHamburgerMenu } from 'react-icons/rx'
import profile from '../../assets/images/profile.jpg'
import logo from '../../assets/images/Logo.png'
import './header.css'

function Header() {
  return (
    <Container fluid className='borderd fixed-top'>
      <Row className='py-2 align-items-center'>
        <div className="col-2  d-flex">
          <div className="col-3">
            <div className=' logo fs-5'>
              <RxHamburgerMenu />
            </div>
          </div>
          <div className="col-8  d-flex justify-content-start align-items-cente">
            <a href="#"  className='d-flex align-items-center text-decoration-none'>
              <span><img src={logo} alt={logo} className='img-fluid img' /></span>
              <h4 className='m-0 light-dark ps-2'>Keep</h4>
            </a>
          </div>
        </div>


        <div className="col-7">
          <div className='w-80 main-serch-box'>
            <div className="group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
              <input placeholder="Search" type="search" className="input" />
            </div>
          </div>
        </div>

        <div className="col-3 d-flex align-items-center">
          <div className="col-8 d-flex justify-content-center fs-4 gap-3 light-dark">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <div className='logo'>
                <FaArrowRotateRight />
              </div>
            </div>

            <div className="col-2 d-flex justify-content-center align-items-center">
              <div className='fs-4 logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-view-stacked" viewBox="0 0 16 16">
                  <path d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                </svg>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <div className='logo'>
                <IoSettingsOutline />
              </div>
            </div>
          </div>

          <div className="col-4 d-flex justify-content-end ">
            <div className="col-12 d-flex justify-content-end align-items-center  ">
              <span className='fs-4 logo light-dark me-2'><PiDotsNineBold /></span>
              <div className='pro-img'>
                <img src={profile} alt={profile} />
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>

  )
}

export default Header
