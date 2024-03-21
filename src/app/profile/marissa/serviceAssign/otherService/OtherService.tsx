'use client'
import React from 'react'
import './otherService.scss'
import { BsPlayBtn } from 'react-icons/bs'
import { BiPlay } from 'react-icons/bi'
import { service } from '../ServiceAssign'
import {AnimatePresence, motion} from 'framer-motion'
type Props = {
	list:service[],
	categoryId:any
}

export default function OtherService({list,categoryId}: Props) {
	return (
		<div className='other-service' key={'service-other'}>
			<div className="other-service-list">
				<AnimatePresence mode='wait'>
					{list?.map((service,index)=>{
						return <motion.div 
						
							initial={{x:-100,opacity:0}}
							animate={{x:0,opacity:1}}
							exit={{x:100,opacity:0}}
							transition={{duration:0.5,delay:(index+1)*0.1}}

							className="other-service-card" 
							key={'service-list-item'+categoryId+'-'+index}>
						<div className="panel">
							<div className="title-part">
								<h2>{service.title}</h2>
								<p>{service.description}</p>
							</div>
							<div className="service-detail">
								<div className="top-detail">
									<h2 className='price'>{service.price}</h2>
									<div className="rate">
										<h2>{service.rate}</h2>
										<div className="unit">
											{service.unit}
										</div>
									</div>
								</div>
								<div className="bottom-detail">
									<button className="btn-request-service">
										<div className="button-itself">
											REQUEST SERVICE <BiPlay/>
										</div>
										<div className="decor line">
											<hr />
										</div>
									</button>
								</div>
							</div>
						</div>
					</motion.div>
					})}
				</AnimatePresence>
				{/* <div className="other-service-card">
					<div className="panel">
						<div className="title-part">
							<h2>DIFFERENT SERVICE</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.</p>
						</div>
						<div className="service-detail">
							<div className="top-detail">
								<h2 className='price'>$125</h2>
								<div className="rate">
									<h2>Fixed Rate</h2>
									<div className="unit">
										USD/month
									</div>
								</div>
							</div>
							<div className="bottom-detail">
								<button className="btn-request-service">
									<div className="button-itself">
										REQUEST SERVICE <BiPlay/>
									</div>
									<div className="decor line">
										<hr />
									</div>
								</button>
							</div>
						</div>
					</div>
				</div> */}
			</div>

		</div>
	)
}