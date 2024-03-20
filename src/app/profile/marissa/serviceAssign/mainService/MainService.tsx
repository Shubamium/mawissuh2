import React from 'react'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { ImCheckmark } from 'react-icons/im'
type Props = {}

export default function MainService({}: Props) {
	return (
		<div className="service-main">
			<div className="include-list">
				<div className="include-title">
					<p className='rune-text'>AONE</p>
					<h2><FaPlus/> INCLUDE <FaPlus/></h2>
					<p className='rune-text'>ENOA</p>
				</div>
				<div className="includes">
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
				</div>
			</div>

			<div className="request-detail">
				<article>
					<div className="request-title">
						<h2>REQUEST SERVICE</h2>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.</p>
				</article>
				<div className="pricing-detail">
					<div className="price">
						<h2>$125</h2>
						<div className="rate">
							<p className='rate-type'>Fixed Rate</p>
							<div className="unit">
								<p>USD/MONTH</p>
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
		</div>
	)
}