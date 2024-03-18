import React from 'react'
import './entryDetail.scss'
import { FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import Surveillance from './surveillance/Surveillance'
type Props = {}

export default function page({}: Props) {
	return (
		<main id="page_entry-detail">
				<div className="confine">
					<div className="detail-tab">
							<div className="detail-panel">
								<div className="profile">
									<div className="image glow-filter">
										<img src="/graphics/entry_placeholder.webp" alt="" className='pfp' />
									</div>
								</div>
								<div className="entry-info">
									<p className='handles'> @ HANDLES</p>
									<div className="name">
										<hr />
										<p>PERSON NAME</p>
										<hr />
									</div>
								</div>

								<div className="entry-status">
									<div className="status cleared">
										<h2>STATUS</h2>
										<p>CLEARED</p>
									</div>
									<div className="status bottom">
										<h2>UNDER INVESTIGATION</h2>
										<p>139d 25h 32m</p>
									</div>
								</div>

								<div className="entry-contact">
									<a href="#" target='_blank' className='contact'>
										<FaTwitter/>
									</a>
									<a href="#" target='_blank' className='contact'>
										<FaTwitter/>
									</a>
									<a href="#" target='_blank' className='contact'>
										<FaTwitter/>
									</a>
									<a href="#" target='_blank' className='contact'>
										<FaTwitter/>
									</a>
								</div>
							</div>
							<Link href={'/entry'} className='btn btn-back glow-filter'>
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
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene
									</div>
								</div>
						</div>
						<Surveillance/>
					</div>
				</div>
		</main>
	)
}