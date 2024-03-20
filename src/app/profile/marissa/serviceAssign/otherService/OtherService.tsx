import React from 'react'
import './otherService.scss'
import { BsPlayBtn } from 'react-icons/bs'
import { BiPlay } from 'react-icons/bi'
type Props = {}

export default function OtherService({}: Props) {
	return (
		<div className='other-service'>
			<div className="other-service-list">
				<div className="other-service-card">
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
				</div>
				<div className="other-service-card">
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
				</div>
			</div>

		</div>
	)
}