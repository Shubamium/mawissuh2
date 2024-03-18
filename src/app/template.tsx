'use client'
import React, { useEffect, useState } from 'react'
import Login from './components/login/Login'
import {motion} from 'framer-motion'
import { usePathname } from 'next/navigation'
type Props = {
	children:React.ReactNode
}

export default function Template({children}: Props) {
		useEffect(()=>{
			console.log('heyaaa')
		})
	const pathname = usePathname();
	return (
		<>
			<motion.div initial={{top:'-150%'}} animate={{top:'150%'}} exit={{top:'-100%'}} transition={{delay:0, duration:.5, ease:'circIn'}} className='slide'>
			</motion.div>
			<motion.div initial={{scale:1,x:-100,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{delay:.8,duration:.5}} exit={{y:200,opacity:0}} key={pathname}>
				{children}
			</motion.div>
		</>
	)
}