'use client'
import React, { useState } from 'react'

import './serviceAssign.scss'
import MainService from './mainService/MainService'
type Props = {}

export default function ServiceAssign({}: Props) {
	const [activeMenu,setActiveMenu] = useState(-1)
	return (
		<>
				<div className="assign-edge">
					<img src="/decors/assign-edge.png" alt="" className='decor-assign-edge t' />
				</div>
				<section className='service-assign'>
						<div className="confine">
							<div className="service-nav">
								<button onClick={() => setActiveMenu(-1)} className={`btn btn-service ${activeMenu === -1 ? 'active' : ''}`}>
									MAIN SERVICE
								</button>
								<button onClick={() => setActiveMenu(0)} className={`btn btn-service ${activeMenu === 0 ? 'active' : ''}`}>
									ADDITIONAL SERVICE
								</button>
								<button onClick={() => setActiveMenu(1)} className={`btn btn-service ${activeMenu === 1 ? 'active' : ''}`}>
									EXPERIMENTAL
								</button>
							</div>
							{
								activeMenu === -1 ? <MainService/> : null
							}
						</div>
				</section>
				<div className="assign-edge">
					<img src="/decors/assign-edge.png" alt="" className='decor-assign-edge b' />
				</div>
		</>
	)
}