'use client'
import MouseMoveScale from '@/app/components/hoc/mouseMoveScale/MouseMoveScale'
import TopTitle from '@/app/components/topTitle/TopTitle'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Surveillance from '../surveillance/Surveillance'
import { TalentData } from '@/app/talent/page'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { FaDoorClosed } from 'react-icons/fa'
import { urlFor } from '@/db/db'
import { AnimationSequence, useAnimate } from 'framer-motion'
import { stagger } from 'framer-motion/dom'
import playAudio from '@/app/library/audioplayer'

type Props = {
	talentData: TalentData
}
dayjs.extend(duration)


const status = {
	'active':{
		title:'ACTIVE',
		color:'#3EB643'
	},
	'inactive':{
		title:'MISSING',
		color:'#FF3636'
	}
}
	
export default function DetailPanel({talentData}: Props) {

	const  startTime = dayjs(talentData.data.active_time)
	const endTime = dayjs();
	console.log(endTime.format('YYYY-MM-DD HH:mm:ss'))
	const duration = endTime.diff(startTime)
	const durationjs = dayjs.duration(duration)
	const [scope,animate] = useAnimate();

	
	const entranceAnimation = async () => {

		const initialSequence:AnimationSequence = [
			['.detail-tab',
				{
					scaleY:0,
					transformOrigin:'top'
				},{
					duration:0
				}
			],[
				'.detail-tab .profile',{
					opacity:0,
						rotate:'-50deg',
				},{
					duration:0
				}
			],	[
				'.detail-tab .entry-info',{
					scaleY:0,
				},{
					duration:0,
					// delay:0.4
				}
			],[
				'.detail-tab  .entry-status',{
					scaleY:0,
					transformOrigin:'top'
				},{
					duration:0,
					// delay:0.2
				}
			],	[
				'.detail-tab .entry-contact a',{
					y:100,
					opacity:0,
				},{
					duration:0,
					// at:'-0.5'
				}
			],
			[
				'.briefing-tab .decor_diamond',{
					rotate:-180,
					scale:0,
					opacity:0,
					// transformOrigin:'top'
				},{
					duration:0,
					// at:'-0.5',
					// delay:stagger(0.3)
					// delay:0.2
				}
			],[
				'.briefing-tab .briefing-panel',{
					transformOrigin:'left',
					scaleX:0,
					opacity:0,
				},{
					duration:0,
					// at:'-2',
					// delay:stagger(0.3)
					// delay:0.2
				}
			],
			[
				'.briefing-tab .briefing-panel .title, .briefing-tab .briefing-panel .description ',{
					transformOrigin:'left',
					scaleX:1,
					x:300,
					opacity:0,

				},{
					duration:0,
					// ease:'easeIn',
					// at:'0.2',
					// delay:0.4,
					// delay:stagger(0.3)
					// type:'spring',
					// damping:12,
					// stiffness:200,
					// delay:0.2
				}
			],[
				'.surveillance',{
					// transformOrigin:'left',
					// scaleX:0,
					y:400,
					opacity:0,
				},{
					duration:0,
					// at:'-2',
					// delay:stagger(0.3)
					// delay:0.2
				}
			],
		]

		const animateSequence:AnimationSequence = [
			[
				'.detail-tab',{
					scaleY:1,
				},{
					duration:0.6,
					delay:0.5,
					type:'spring',
					damping:15,
					stiffness:200
				}
			],[
				'.detail-tab .profile',{
					opacity:1,
					rotate:'0deg',
				},{
					duration:.5,
					at:'-0.5'
				}
			],
			[
				'.detail-tab .entry-info',{
					scaleY:1,
				},{
					duration:1,
					delay:0.2
				}
			],[
				'.detail-tab .entry-status',{
					scaleY:1,
					transformOrigin:'top'
				},{
					duration:0.5,
					at:'-0.8'
					// delay:0.2
				}
			],
			[
				'.detail-tab .entry-contact a',{
					y:0,
					opacity:1,
					transformOrigin:'top'
				},{
					duration:0.5,
					at:'-0.2',
					delay:stagger(0.3),
					type:'spring',	
					damping:9,
					stiffness:100,
					// delay:0.2
				}
			],
			[
				'.briefing-tab .decor_diamond',{
					rotate:0,
					scale:1,
					opacity:1,
					outline:'4px solid white',
					outlineOffset:'-15px',
					// transformOrigin:'top'
				},{
					duration:0.5,
					at:'-2',
					// delay:stagger(0.3)
					// delay:0.2
				}
			],
			[
				'.briefing-tab .briefing-panel',{
					transformOrigin:'left',
					scaleX:1,
					// mask:'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100% )',
					opacity:1,

				},{
					duration:0.8,
					ease:'easeIn',
					// at:'0.2',
					delay:0.4,
					// delay:stagger(0.3)
					type:'spring',
					damping:12,
					stiffness:200,
					// delay:0.2
				}
			],
			[
				'.briefing-tab .briefing-panel .title,.briefing-tab .briefing-panel .description',{
					x:0,
					// mask:'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100% )',
					opacity:1,

				},{
					duration:0.7,
					// ease:'easeIn',
					at:'-0.2',
					delay:stagger(0.5),
					// delay:stagger(0.3)
					// type:'spring',
					// damping:12,
					// stiffness:200,
					// delay:0.2
				}
			],[
				'.surveillance',{
					// transformOrigin:'left',
					// scaleX:0,
					y:0,
					opacity:1,
				},{
					duration:0.8,
					at:'-2',
					// delay:stagger(0.3)
					// delay:0.2
				}
			],
			
		]
	
		console.log('entrance')
	

		animate([...initialSequence,...animateSequence])
			// Animate
			// await animate('.detail-tab', {
			// 	scaleY:1
			// },{
			// 	duration:1,
			// 	delay:0.4
			// })
			// await animate('.detail-tab .profile', {
			// 	opacity:1,
			// 	rotate:'0deg',
			// },{
			// 	duration:0.5,
			// })
	}
	useEffect(()=>{
		console.log('hey')
		entranceAnimation()
	},[])
	return (
		<main id="page_entry-detail" ref={scope}>
				<TopTitle title='TALENT DETAIL'/>
				<MouseMoveScale className="confine">
					<div className="detail-tab">
							<div className="detail-panel">
								<div className="profile" >
									<div className="image glow-filter">
										<img src={urlFor(talentData.data.profile).url()} alt="" className='pfp' />
									</div>
								</div>
								<div className="entry-info">
									{/* <p className='handles'> @ HANDLES</p> */}
									<div className="name">
										<hr />
										<p>{talentData.name}</p>
										<hr />
									</div>
								</div>

								<div className="entry-status">
									<div className="status ">
										<h2>STATUS</h2>
										<p style={{color:status[talentData.data.status].color}}>{status[talentData.data.status].title}</p>
									</div>
									<div className="status bottom">
										<h2>UNDER INVESTIGATION</h2>
										{
											talentData.data.status === 'active' ? 
												<p>{durationjs.days()}d {durationjs.hours()}h {durationjs.minutes()}m</p>
											: <p className='rune-text'>UNKNOWN</p>
										}
									</div>
								</div>

								<div className="entry-contact">
									{talentData.data.socials.map((social,index) => {
										return 	<a href="#"
										onPointerEnter={()=>{
											playAudio({src:'/sound/softclick.ogg',volume:0.6}).play()
											// console.count('over')
										}}
										onClick={()=>{
											playAudio({src:'/sound/click2.wav'}).play()
										}}
										target='_blank' className='contact' key={'talent-social'+index}>
											{social.icon ? <img src={urlFor(social.icon).url()} alt="" className='contact-icon-img' />: <FaDoorClosed/>}
										</a>
									})}
								</div>

							</div>
							<Link href={'/talent'} className='btn btn-back glow-filter'>
								<svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30.9688 19H6.96875L18.4688 2" stroke="black" strokeWidth="7"/>
								</svg>
								ENTRY LIST
							</Link>
					</div>	
					<div className="briefing-tab">
						<div className="briefing">
								<div className="decor_diamond">

								</div>
								<div className="briefing-panel">
									<div className="title">
										<h2>ENTRY <br/> BRIEFING</h2>
									</div>
									<div className="description">
										{talentData.data.briefing}
									</div>
								</div>
						</div>
						<Surveillance videoId={talentData.data.surveillance}/>
					</div>
				</MouseMoveScale>
		</main>
	)
}