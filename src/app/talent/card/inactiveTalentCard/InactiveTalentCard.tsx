'use client'
import playAudio from '@/app/library/audioplayer'
import Link from 'next/link'
import React from 'react'


type Props = {
	href:string,
	src:string,
	name:string,

}
export default function InactiveTalentCard({href,name,src}: Props) {
	return (
		<Link href={href} className="active-entry-card inactive"
		onPointerEnter={()=>{
			playAudio({
				src:'/sound/hoverselect1.wav',
				volume:1
			}).play()
		}}
		onClick={()=>{
			playAudio({
				src:'/sound/click2.wav',
				volume:1
			}).play()
		}}
		>
				<img src={src} alt="" className='pfp' />
				<span className='name'>{name}</span>
				<span className='decor_overlay'></span>
				<span className='decor-line'></span>
		</Link>
	)
}