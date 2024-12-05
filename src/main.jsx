import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import './navbar.css'
import Navbar from './navbar.jsx'
import Information from './Information.jsx'
import './information2.css'
import FORM from './form.jsx'
import './collab.css'
import Collab from './collabs.jsx'
import Problems from './Problems.jsx'
import './Problems.css'
import './footer.css'
import Footer from './footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Information />
    <FORM />
    <Problems />
    <Collab />
    <Footer></Footer>
  </StrictMode>,
)
