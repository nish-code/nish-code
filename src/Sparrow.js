import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Header from './Header';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Sparrow = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        separation: 100.00,
        cohesion: 43.00,
        quantity: 3.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div style={{ height: "100vh" }} ref={myRef}>
    <p>
      <Header />
    </p>

    <header className="App-header">
      <p>
        Portfolio Under Construction
      </p>
      <p>
        <a
          className="App-link"
          href='https://github.com/nishanthprabhu2'
          rel="noopener noreferrer">
          Github
        </a>
      </p>
      <p>
        <a
          className="App-link"
          href='https://www.linkedin.com/in/nishanth-prabhu26/'
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <Footer />
      </p>

    </header>
  </div>
}

export default Sparrow;