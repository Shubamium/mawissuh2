'use client'
import React, { useEffect, useRef, useState } from 'react'

import {motion, useAnimate} from 'framer-motion'
import { Odor_Mean_Chey } from 'next/font/google'
type Props = {
	children:React.ReactNode
	className:string,
	onlyOnObject?:boolean,
	offset?:number
}


export function getScale(offset:number,scale:number){
	return offset === 0 ? 0 : (offset * (scale*2)) - scale
}
export default function MouseMoveScale({
	children,
	className,
	onlyOnObject,
	offset
}: Props) {
	const elRef = useRef<HTMLDivElement>(null);

	const [mousePos,setMousePos] = useState<{x:number,y:number}>({x:0,y:0}) 
	useEffect(()=>{
			const mouseState = (e:MouseEvent)=>{
				const xOffset = e.clientX / window.innerWidth
				const yOffset = e.clientY / window.innerHeight
	
				setMousePos({x:xOffset,y:yOffset})
				// console.log({x:xOffset,y:yOffset})
			}
			if(!onlyOnObject){
				window.addEventListener('mousemove',mouseState)
			}
		return () => {
			window.removeEventListener('mousemove',mouseState)
		}
	},[])
	useEffect(()=>{
		if(elRef.current){
			elRef.current.style.transform = `perspective(200px) rotateX(${getScale(mousePos.y,offset ? -offset : -1)}deg) rotateY(${getScale(mousePos.x,offset ? offset : 1)}deg)`	
		}
	},[mousePos])

	return (
		<div 
			ref={elRef}
			className={className}
			// className='mouse-move-scale-transform' 
			onMouseMoveCapture={(e)=>{
				if(onlyOnObject && elRef.current){
						const xOffset = e.clientX / window.innerWidth
						const yOffset = e.clientY / window.innerHeight
						setMousePos({x:xOffset,y:yOffset})
				}				
			}}
			onMouseLeave={()=>{
				if(onlyOnObject && elRef.current){
					setMousePos({x:0,y:0})
					console.log('resetingg')
				}
			}}
			>
				{
				children
				}
		</div>
	)
}