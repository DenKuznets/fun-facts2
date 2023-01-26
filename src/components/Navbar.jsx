import './Navbar.css'
import logoUrl from '../assets/reactjs-icon.png'

export default function Navbar() {
  return (
    <nav className='nav'>
      <div className='container-flex-row'>
        <img src={logoUrl} className='nav--logo' alt='logo'/>
        <h2 className='nav--h2'>ReactFacts</h2>
      </div>
      <h3 className='nav--h3'>React Course - Project 1</h3>
    </nav>
  )
}