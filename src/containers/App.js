import React from 'react'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import '../containers/App.css'
import Accardion from '../components/accardion/Accardion'
import { useEffect, useState } from 'react'
import API from '../https/api'
import shearLogo from '../assets/img/Vector.svg'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { ArrowBackIos } from '@mui/icons-material'

function App() {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    API('FAQ/List').then((res) => {
      setApiData(res.data.content)
    })
  }, [])
 
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="section">

          <header className="header d-flex justify-content-between align-items-end mt-5">
            <div>
              <h1 className="faq">سوالات متداول</h1>
              <div>
                <ul className="mb-3 p-0">
                  <li className="d-flex">
                    <NavLink to="/">صفحه اصلی </NavLink>
                    <p className="mb-0">
                      <ArrowBackIos className="mx-2 breadCrump" />
                    </p>
                    <NavLink to="/FAQ">سوالات متداول</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="left-header">
              <div className="shearLogo rounded d-flex justify-content-center align-items-center ">
                <img src={shearLogo} alt="shearLogo" />
              </div>
            </div>
          </header>

          <div className="hr"></div>

          <div className="row section-box">
            <div className="col-md-6 col-12">
              <div className="row">
                {apiData.items

                  ?.slice(0, Math.ceil(apiData.count / 2))

                  .map((item, index) => {
                    return (
                      <div className="col-12" key={index}>
                        <Accardion data={item} />
                      </div>
                    )
                  })}
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="row">
                {apiData.items

                  ?.slice(Math.ceil(apiData.count / 2), apiData.count)

                  .map((item, index) => {
                    return (
                      <div className="col-12" key={index}>
                        <Accardion data={item} />
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
