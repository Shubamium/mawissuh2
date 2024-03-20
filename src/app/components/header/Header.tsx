import Link from 'next/link'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import './header.scss'
type Props = {}

export default function Header({}: Props) {
	return (
		<header id='header'>
			<h1 style={{display:'none'}}>MAWISSUH</h1>
	
			<nav id='nav'>
				<div className="decor_stroke">
					<div className="rect"></div>
					<div className="line"></div>
				</div>
				<Link className='nav-btn' href={'/'}>MENU</Link>
				<Link className='nav-btn' href={'/profile/marissa'}>INVESTIGATOR</Link>
				<Link className='nav-btn' href={'/talent'}>TALENT</Link>
				
			</nav>
			<div className="misc">
					<a href="" className='attribution'>website design <br />by <b>SHUBAMIUM</b></a>
					<div className="contact-list">
						<a href="#" className='contact-link'><FaTwitter/></a>
						<a href="#" className='contact-link'><FaTwitter/></a>
						<a href="#" className='contact-link'><FaTwitter/></a>
					</div>
					<div className="decor_stroke end">
						<div className="rect"></div>
						<div className="line"></div>
					</div>
			</div>
		</header>
	)
}