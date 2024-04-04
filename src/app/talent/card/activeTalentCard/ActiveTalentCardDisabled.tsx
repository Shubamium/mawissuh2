'use client'
import playAudio from '@/app/library/audioplayer'
import Link from 'next/link'
import React from 'react'
import { TbLockAccessOff } from 'react-icons/tb'

type Props = {}

export default function ActiveTalentCardDisabled({}: Props) {
	return (
		<Link href={'#'} className="active-entry-card no-access"
		onPointerEnter={()=>{
			playAudio({
				src:'/sound/hoverselect1.wav',
				volume:1
			}).play()
		}}
		onClick={()=>{
			playAudio({
				src:'/sound/denied1.wav',
				volume:1
			}).play()
		}}

		>
			<span className='logo'>
				<img src="/decors/rune_higher.png" alt="" className='decor_rune' />
				<TbLockAccessOff/>
			</span> 
			<span className='rune-text'>HIEROPHA</span>
			<span className='title'>- ACCESS DENIED -</span>
			<span className='tier-text'><span className='tier'>TIER 3</span> Clearance is needed</span>
		</Link>
	)
}