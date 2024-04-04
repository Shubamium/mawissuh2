'use client'
import React, { useState } from 'react'
import './sidebar.scss'
import Link from 'next/link';
import {motion, AnimatePresence } from 'framer-motion';
import playAudio from '@/app/library/audioplayer';
type Props = {}

export default function Sidebar({}: Props) {
	const [isOpen,setIsOpen] = useState(false);
	const closeSidebar = () =>{
		setIsOpen(false)
	}
	const openSidebar = () =>{
		setIsOpen(true)
	}
	const btnAnim = {
		initial: {
			x: -200,
			opacity:0
		},
		visible: {
			x: 0,
			opacity:1,
			scale:1

		},
		exit:{
			x:100,
			scale:1,
			opacity:0,
			transition:{
				duration:0.5,
				// dela:0.5
			}
		},
		topinit: {
			y: -200
		},
		topvisible: {
			y: 0,
			scale:1

		},
	}
	const btnTransition = (index:number)=>({
			duration: 0.5,
			delay:index*0.2
	})

	const sidebarAudio = {
		onClick:()=>{
			playAudio({src:'/sound/beebop.wav'}).play()
			closeSidebar()
			playAudio({volume:0.4,src:'/sound/swoosh.wav'}).play()
		},
		onPointerEnter:()=>{
			playAudio({volume:1,src:'/sound/hoverselect1.wav'}).play()
		}
	}
	return (
		<div className='sidebars'>
			<div className="sidebar-button">
				<button 
						onClick={()=>{
							playAudio({src:'/sound/click2.wav'}).play()
							openSidebar()
							playAudio({volume:0.7,src:'/sound/swoosh2.wav'}).play()
						}}
						onPointerEnter={()=>{
							playAudio({volume:0.2,src:'/sound/hoverselect2.mp3'}).play()
						}}
				className="btn btn-sideaccess" >a</button>
			</div>
			<aside className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}>
					<div className="sidebar-content">
						<div className="sidebar-overlay" onClick={closeSidebar}></div>
						<AnimatePresence>
							{isOpen && <>
								<motion.div initial="topinit" animate="topvisible" variants={btnAnim} transition={{duration:1,ease:'easeOut'}}  className="sidebar-head">
								<h2>JUMP TO SECTION</h2>
								<motion.button initial={{rotate:'-180deg'}} animate={{rotate:'0deg'}}  className="btn btn-close" 
										onClick={()=>{
											playAudio({volume:0.4,src:'/sound/click2.wav'}).play()
											closeSidebar()
											playAudio({volume:0.7,src:'/sound/swoosh.wav'}).play()
										}}
										onPointerEnter={()=>{
											playAudio({volume:0.2,src:'/sound/softclick.ogg'}).play()
										}}

								> CLOSE </motion.button>
						</motion.div>
							</>}
						</AnimatePresence>
						<motion.div className="sidebar-nav" transition={{duration: 0.5}} >
							<AnimatePresence >
								{isOpen && <>
									<motion.div {...sidebarAudio} initial="initial" animate="visible" exit={'exit'} variants={btnAnim} transition={btnTransition(1)} className="sidebar-btn-container">
										<Link onClick={closeSidebar} href={'#intro'} scroll={true} className='sidebar-btn'><span>INTRO</span></Link>
									</motion.div>
									<motion.div {...sidebarAudio} initial="initial" animate="visible" exit={'exit'} variants={btnAnim} transition={btnTransition(2)} className="sidebar-btn-container">
										<Link onClick={closeSidebar} href={'#profile'} scroll={true} className='sidebar-btn'><span>PROFILE</span></Link>
									</motion.div>
									<motion.div {...sidebarAudio} initial="initial" animate="visible" exit={'exit'} variants={btnAnim} transition={btnTransition(3)} className="sidebar-btn-container">
										<Link onClick={closeSidebar} href={'#skills'} scroll={true} className='sidebar-btn'><span>SKILLS</span></Link>
									</motion.div>
									<motion.div {...sidebarAudio} initial="initial" animate="visible" exit={'exit'} variants={btnAnim} transition={btnTransition(4)} className="sidebar-btn-container">
										<Link onClick={closeSidebar} href={'#rules'} scroll={true} className='sidebar-btn'><span>RULES</span></Link>
									</motion.div>
									<motion.div {...sidebarAudio} initial="initial" animate="visible" exit={'exit'} variants={btnAnim} transition={btnTransition(5)} className="sidebar-btn-container">
											<Link onClick={closeSidebar} href={'#service'} scroll={true} className='sidebar-btn'><span>SERVICE</span></Link>
									</motion.div>
								</>}
							</AnimatePresence>
						</motion.div>
					</div>
			</aside>
		</div>
	)
}