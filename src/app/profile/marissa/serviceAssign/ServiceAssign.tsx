'use client'
import React, { useState } from 'react'

import './serviceAssign.scss'
import MainService, { MainServiceData } from './mainService/MainService'
import OtherService from './otherService/OtherService'
type Props = {
	mainService:MainServiceData,
	otherService:OtherServiceData[],
}
export type service = {
	title: string;
	description: string;
	price: string;
	rate: string;
	unit: string;
}
export type OtherServiceData = {
	title:string,
	services:service[]
}

export default function ServiceAssign({mainService,otherService}: Props) {
	const [activeMenu,setActiveMenu] = useState(-1)
	return (
		<>
				<div className="assign-edge" id='service'>
					<img src="/decors/assign-edge.png" alt="" className='decor-assign-edge t' />
				</div>
				<section className='service-assign'>
						<div className="confine">
							<div className="service-nav">
								<button onClick={() => setActiveMenu(-1)} className={`btn btn-service ${activeMenu === -1 ? 'active' : ''}`}>
									MAIN SERVICE
								</button>
								{otherService.map((service,index)=>{
									return <button onClick={() => setActiveMenu(index)} className={`btn btn-service ${activeMenu === index ? 'active' : ''}` } key={'service-nav'+index}>
											{service.title}
									</button>
								})}
								{/* <button onClick={() => setActiveMenu(0)} className={`btn btn-service ${activeMenu === 0 ? 'active' : ''}`}>
									ADDITIONAL SERVICE
								</button>
								<button onClick={() => setActiveMenu(1)} className={`btn btn-service ${activeMenu === 1 ? 'active' : ''}`}>
									EXPERIMENTAL
								</button> */}
							</div>
							{
								activeMenu === -1 ? <MainService {...mainService}/> : 
								<OtherService list={otherService[activeMenu].services}  />
							}
						</div>
				</section>
				<div className="assign-edge">
					<img src="/decors/assign-edge.png" alt="" className='decor-assign-edge b' />
				</div>
		</>
	)
}