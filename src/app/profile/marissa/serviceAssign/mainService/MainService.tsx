'use client'
import React from 'react'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { ImCheckmark } from 'react-icons/im'
type Props = {}
import {motion} from 'framer-motion'
export type MainServiceData = {
	title:string;
	description:string;
	price:string;
	rate:string;
	unit:string;
	includes:string[];
}
export default function MainService({
	title,
	description,
	price,
	rate,
	unit,
	includes
}: MainServiceData) {
	return (
		<motion.div 
			initial={{opacity:0,y:200}}
			animate={{opacity:1,y:0}}
			exit={{opacity:0,y:-200}}
			transition={{duration:0.5}}
		key={'service-main'}
		className="service-main">
			<div className="include-list">
				<div className="include-title">
					<p className='rune-text'>AONE</p>
					<h2><FaPlus/> INCLUDE <FaPlus/></h2>
					<p className='rune-text'>ENOA</p>
				</div>
				<div className="includes">
					{includes.map((item,index) => {
						return 				<motion.div
						initial={{scale:0,opacity:0}}
						animate={{scale:1,opacity:1}}
						transition={{duration:0.2,delay:(index+1)*0.2}}
						style={{transformOrigin:'left'}}
						className="include" key={'include-list'+index}>
						<div className="icon">
							<img src="/decors/include-edge.svg" alt="" className='icon-edge' />
							<ImCheckmark/>
						</div>
						<div className="text-part">
							<p>{item}</p>
						</div>
					</motion.div>
					})}
					{/* <div className="include">
						<div className="icon">
							<img src="/decors/include-edge.svg" alt="" className='icon-edge' />
							<ImCheckmark/>
						</div>
						<div className="text-part">
							<p>Project Management</p>
						</div>
					</div>
					<div className="include">
						<div className="icon">
							<img src="/decors/include-edge.svg" alt="" className='icon-edge' />
							<ImCheckmark/>
						</div>
						<div className="text-part">
							<p>Project Management</p>
						</div>
					</div>
					<div className="include">
						<div className="icon">
							<img src="/decors/include-edge.svg" alt="" className='icon-edge' />
							<ImCheckmark/>
						</div>
						<div className="text-part">
							<p>Project Management</p>
						</div>
					</div>
					<div className="include">
						<div className="icon">
							<img src="/decors/include-edge.svg" alt="" className='icon-edge' />
							<ImCheckmark/>
						</div>
						<div className="text-part">
							<p>Project Management</p>
						</div>
					</div>
					<div className="include">
						<div className="icon">
							<img src="/decors/include-edge.svg" alt="" className='icon-edge' />
							<ImCheckmark/>
						</div>
						<div className="text-part">
							<p>Project Management</p>
						</div>
					</div> */}
				</div>
			</div>

			<div className="request-detail">
				<article>
					<div className="request-title">
						<h2>{title}</h2>
					</div>
					<p>{description}</p>
				</article>
				<div className="pricing-detail">
					<div className="price">
						<h2>{price}</h2>
						<div className="rate">
							<p className='rate-type'>{rate}</p>
							<div className="unit">
								<p>{unit}</p>
							</div>
						</div>
					</div>
					<button className='btn btn-assign'>
						ASSIGN
						<FaPlay/>
					</button>
					<p className='note'>
					*Prices are Firm, Non-Negotiable and No Hidden / Additional Fees.
					</p>
				</div>
			</div>
		</motion.div>
	)
}