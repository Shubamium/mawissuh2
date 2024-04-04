'use client'
import Link from 'next/link'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import './header.scss'
import playAudio from '@/app/library/audioplayer'
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
				<Link className='nav-btn' href={'/'}
					onClick={()=>{
						playAudio({src:'/sound/click2.wav'}).play()
					}}
					onPointerEnter={()=>{
						playAudio({volume:0.2,src:'/sound/hoverselect2.mp3'}).play()
					}}
				
				>MENU</Link>
				<Link className='nav-btn' href={'/profile/marissa'}
					onClick={()=>{
						playAudio({src:'/sound/click2.wav'}).play()
					}}
					onPointerEnter={()=>{
						playAudio({volume:0.2,src:'/sound/hoverselect2.mp3'}).play()
					}}
				>INVESTIGATOR</Link>
				<Link className='nav-btn' href={'/talent'}
					onClick={()=>{
						playAudio({src:'/sound/click2.wav'}).play()
					}}
					onPointerEnter={()=>{
						playAudio({volume:0.2,src:'/sound/hoverselect2.mp3'}).play()
					}}
				>TALENT</Link>
				
			</nav>
			<div className="misc">
					<a href="https://twitter.com/shubamium2" target='#_blank' className='attribution'>website design <br />by <b>SHUBAMIUM</b></a>
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