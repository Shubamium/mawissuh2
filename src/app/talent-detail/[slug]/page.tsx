import React from 'react'
import './entryDetail.scss'
import { FaDoorClosed, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import Surveillance from './surveillance/Surveillance'
import { fetchData, urlFor } from '@/db/db'
import { TalentData } from '@/app/talent/page'
import { redirect } from 'next/navigation'
import duration from 'dayjs/plugin/duration'

import dayjs from 'dayjs'
type Props = {
	params:{
		slug:string;
	}
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
	
export default async function page({
	params
}: Props) {
	const activeList = await fetchData<TalentData[]>(`
		*[_type in ['inactive_talents','active_talents']  && slug.current == '${params.slug}' ] {
			name,
			slug,
			data,
		}
	`);
	const talentData = activeList[0];

	if(activeList.length === 0){
		redirect('/')
	}

	const  startTime = dayjs(talentData.data.active_time)
	const endTime = dayjs();
	console.log(endTime.format('YYYY-MM-DD HH:mm:ss'))
	const duration = endTime.diff(startTime)
	const durationjs = dayjs.duration(duration)
	return (
		<main id="page_entry-detail">
				<div className="confine">
					<div className="detail-tab">
							<div className="detail-panel">
								<div className="profile">
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
										return 	<a href="#" target='_blank' className='contact' key={'talent-social'+index}>
											{social.icon ? <img src={urlFor(social.icon).url()} alt="" className='contact-icon-img' />: <FaDoorClosed/>}
										</a>
									})}
								</div>
							</div>
							<Link href={'/talent'} className='btn btn-back glow-filter'>
								<svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30.9688 19H6.96875L18.4688 2" stroke="black" stroke-width="7"/>
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
				</div>
		</main>
	)
}