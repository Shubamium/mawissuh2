'use client'
import React, { useEffect, useRef } from 'react'
import { Achievement } from '../page'
import { FaTwitter } from 'react-icons/fa6'
import { MdAssignment } from 'react-icons/md'
import { TbPointerHeart } from 'react-icons/tb'
import { AiOutlinePartition } from 'react-icons/ai'
import { useAnimate, useInView } from 'framer-motion'
import { stagger } from 'framer-motion/dom'
import playAudio from '@/app/library/audioplayer'

type Props = {
	achievementList:Achievement[]
}

export default function MainProfile({achievementList}: Props) {

	const achievementRef = useRef<HTMLDivElement>(null);
	const isAchievementOnView = useInView(achievementRef,{once:false});

	const pfpRef = useRef<HTMLDivElement>(null)
	const isPfpInView = useInView(pfpRef)
	
	const [scope,animate] = useAnimate()

	const animateAchievements = async () => {
		 await animate('.log-title',{
			opacity:0,
			rotate:'-0.5turn',
			x:-500,
		},{
			duration:0
		})
		await animate('.log-list .log',{
			opacity:0,
			y:300,
		},{
			duration:0
		})
		await animate('.log-title',{
			opacity:1,
			rotate:'0turn',

			x:0
		},{
			duration:0.7
		})
	
		await animate('.log-list .log',{
			y:0,
			opacity:1,

		},{
			duration:1,
			delay:stagger(0.2)
		})
	}
	useEffect(() => {
		if(isAchievementOnView){
			animateAchievements()
		}
	},[isAchievementOnView])


	const animatePfp = async ()=>{
		await animate('.pfp .logo',{
			x:100,
			transform:'scale(1.4) rotate(-1turn)',
		},{
			duration:0,
		})
		await animate('.pfp .logo',{
			x:0,
			transform:'scale(1) rotate(0turn)',
		},{
			duration:2,
			type:'spring',
			damping:18,
			stiffness:150
			
		})
	}
	useEffect(()=>{
		if(isPfpInView){
			animatePfp()
		}
	},[isPfpInView])

	
	return (
		<section ref={scope} className='investigator-profile' id='profile'>

							<div className="sub-title">
								<div className="confine">
									<p className='rune-text'>HIEROPHANT</p>
								</div>
							</div>

							<div className="profile-title confine">
								<article>
									<div className="main-text">
										<div className="title">
											<h2>INVESTIGATOR PROFILE</h2>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									</div>
									<div className="additional-detail">
										<div className="detail">
												<h2>DETAIL</h2>
												<p>Other Detail</p>
											</div>
											<div className="contact-list">
												<a href="#" target='_blank' className='contact'
														onPointerEnter={()=>{
															playAudio({src:'/sound/softclick.ogg',volume:0.1}).play()
														}}
														onClick={()=>{
															playAudio({src:'/sound/swoosh2.wav',volume:0.5}).play()
														}}
												>
													<FaTwitter/>
												</a>
												<a href="#" target='_blank' className='contact'
														onPointerEnter={()=>{
														playAudio({src:'/sound/softclick.ogg',volume:0.1}).play()
													}}
												>
													<FaTwitter/>
												</a>
												<a href="#" target='_blank' className='contact'
														onPointerEnter={()=>{
														playAudio({src:'/sound/softclick.ogg',volume:0.1}).play()
													}}
												>
													<FaTwitter/>
												</a>
												<a href="#" target='_blank' className='contact'
														onPointerEnter={()=>{
														playAudio({src:'/sound/softclick.ogg',volume:0.1}).play()
													}}
												>
													<MdAssignment/>
												</a>
												<a href="#" target='_blank' className='contact'
														onPointerEnter={()=>{
														playAudio({src:'/sound/softclick.ogg',volume:0.1}).play()
													}}
												>
													<TbPointerHeart/>
												</a>
												<a href="#" target='_blank' className='contact'
														onPointerEnter={()=>{
														playAudio({src:'/sound/softclick.ogg',volume:0.1}).play()
													}}
												>
													<AiOutlinePartition/>
												</a>
											</div>
									</div>
								</article>
								<figure className='pfp' ref={pfpRef}>
										<div className="logo">
											<img src="/graphics/profile-placeholder.jpg" alt=""  className='pfp'/>
										</div>
									</figure>
							</div>

							<div className="profile-info-list">
								<div className="confine">
									{/* <div className="info-list">
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
									</div> */}
								<div className="activity-log">
										<div className="log-title">
												<h2>ACTIVITY <br/> LOG</h2>
												<p>MILESTONES</p>
										</div>
										<div className="log-list" ref={achievementRef}>
												{achievementList.map((achievement,index)=>{
													return 	<div 
													onPointerEnter={()=>{
														playAudio({src:'/sound/beebop.wav'}).play()
													}}
													className="log" key={'achievement'+index}>
													<h2>{achievement.name}</h2>
													<p>{achievement.description}</p>
												</div>
												})}
												{/* <div className="log">
													<h2>ACHIEVEMENTS</h2>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
												</div>
								
												<div className="log">
													<h2>ACHIEVEMENTS</h2>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
												</div>
												<div className="log">
													<h2>ACHIEVEMENTS</h2>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
												</div>
												<div className="log">
													<h2>ACHIEVEMENTS</h2>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
												</div>
												<div className="log">
													<h2>ACHIEVEMENTS</h2>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
												</div> */}
										</div>
								</div>
								
								</div>
							</div>

							{/* <div className="additional-info">
								<div className="confine">
									<div className="left">
										<div className="title">
											<h2>ADDITIONAL INFORMATION</h2>
											<div className="box-decor">
												<div className="box"></div>
												<div className="box"></div>
												<div className="box"></div>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.</p>
									</div>
									<div className="right">
								
									</div>
								</div>
							</div> */}

				
				</section>
	)
}