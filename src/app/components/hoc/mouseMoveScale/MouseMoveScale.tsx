'use client'
import React, { useEffect, useRef, useState } from 'react'

import {motion} from 'framer-motion'
type Props = {
	children:React.ReactNode
	className:string
}


export function getScale(offset:number,scale:number){
	return (offset * (scale*2)) - scale
}
export default function MouseMoveScale({
	children,
	className,
}: Props) {

	const [mousePos,setMousePos] = useState<{x:number,y:number}>({x:0,y:0}) 
	useEffect(()=>{
			const mouseState = (e:MouseEvent)=>{
				const xOffset = e.clientX / window.innerWidth
				const yOffset = e.clientY / window.innerHeight
	
				setMousePos({x:xOffset,y:yOffset})
				// console.log({x:xOffset,y:yOffset})
			}
			window.addEventListener('mousemove',mouseState)
		return () => {
			window.removeEventListener('mousemove',mouseState)
		}
	},[])
	useEffect(()=>{
		if(elRef.current){
			elRef.current.style.transform = `perspective(200px) rotateX(${getScale(mousePos.y,-1)}deg) rotateY(${getScale(mousePos.x,1)}deg)`	
		}
	},[mousePos])
	const elRef = useRef<HTMLDivElement>(null);

	return (
		<div 
			ref={elRef}
			className={className}>
				{
				children
				}
		</div>
	)
}