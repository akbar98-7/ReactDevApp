import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function Main(props) {
  return (
    <div><Header/>
    <div>
        {props.children}
    </div>
    <Footer/>
    </div>
  )
}
