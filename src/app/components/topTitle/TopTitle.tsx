'use client'
import React from 'react'
import './topTitle.scss'
import {motion} from 'framer-motion'
type Props = {
	title:string
}

export default function TopTitle({
	title
}: Props) {
	return (
		<div className='top-title'>
			<motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.5}} className="title-container">
				<div className="icon">
					<svg width="59" height="51" viewBox="0 0 59 51" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M29.5 51L0.488151 0.749998L58.5118 0.749993L29.5 51Z" fill="white"/>
					</svg>
				</div>
				<p className='title'>{title}</p>
			</motion.div>
		</div>
	)
}