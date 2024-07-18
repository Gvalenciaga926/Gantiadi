import React, {useEffect , useState} from 'react'
import './Navbar.css'
import logo from '../../assets/განთიადი.png'
import menu from '../../assets/list.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky ,setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll' , () => {
      window.scrollY > 230 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [menuBtn , setMenuBtn] = useState(false)
  const toggleMenu = () => {
    menuBtn ? setMenuBtn(false) : setMenuBtn(true)
  }

  return (
    <nav className={`container  ${sticky ? 'darcnav' : ''}`}>
        <img src={logo} alt="განთიადი" className='logo' />

        <ul className={menuBtn ? '' : 'hide-menu'}>
            <li><Link to='hero' smooth={true} duration={500} offset={0} className='navbarel'>მთავარი</Link></li>
            <li><Link to='cardsection' smooth={true} duration={500} offset={-135} className='navbarel'>კურსები</Link></li>
            <li><Link to='aboutus' smooth={true} duration={500} offset={-135} className='navbarel'>ჩვენს შესახებ</Link></li>
            <li><Link to='carousel' smooth={true} duration={500} offset={-70} className='navbarel'>კამპუსი</Link></li>
            <li><Link to='contactus' smooth={true} duration={500} offset={-120}><button className='btn'>კონტაქტი</button></Link></li>
        </ul>
        <img src={menu} className='menubtn' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar