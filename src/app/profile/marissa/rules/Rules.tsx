'use client'
import React, { useState } from 'react'
import { RulesCategory } from '../page'
type Props = {
	ruleList:RulesCategory[]
}


// const ruleList:RulesCategory[] = [
// 	{
// 		title:'Payment',
// 		rule:[
// 			{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			},	{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			},	{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			}
// 		]
// 	},
// 	{
// 		title:'Other',
// 		rule:[
// 			{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			},	{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			},	{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			}
// 		]
// 	},
// 	{
// 		title:'Other',
// 		rule:[
// 			{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			},	{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			},	{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			}
// 		]
// 	},
// 	{
// 		title:'Other',
// 		rule:[
// 			{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			},	{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			},	{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			}
// 		]
// 	},{
// 		title:'Other',
// 		rule:[
// 			{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			},	{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			},	{
// 				title:'Rule 1',
// 				description:'This is a rule'
// 			}
// 		]
// 	}
// ]
export default function Rules({ruleList}: Props) {
	const [activeRule,setActiveRule] = useState(0)
	
	return (
		<section className='rules' id='rules'>
			<div className="rules-title confine">
				<h2>CODE OF CONDUCT</h2>
				<div className="box-decor">
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
				</div>
				<p className='rune-text'>AONEDEMPCIAUCBR</p>
			</div>
			<div className="main-rules confine">
				<div className="rules-list">
					{ruleList[activeRule].rules?.map((rulei,index)=>{
						return 		<div className="rules-card" key={'rule-card'+index}>
						<div className="rules-panel">
							<h2>{rulei.title}</h2>
							<p>{rulei.description}</p>
						</div>
					</div>
					})}
					{/* <div className="rules-card">
						<div className="rules-panel">
							<h2>RULES TITLE</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					<div className="rules-card">
						<div className="rules-panel">
							<h2>RULES TITLE</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					<div className="rules-card">
						<div className="rules-panel">
							<h2>RULES TITLE</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div> */}
				</div>
				<div className="rule-navigation">
					<div className="rule-nav">
						<div className="rule-list">
							{ruleList.map((rule,index)=>{
								return <button 
									key={'rule-list'+index}
									onClick={()=>setActiveRule(index)}
									className={`btn btn-rule ${activeRule === index ? 'active' : ''}`}>
									<div className="text">
											{rule.name}
									</div>
									<div className="decor-bottom">
										<div className="lis l"></div>
										<div className="lis r"></div>
									</div>
							</button>
							})}
						</div>
					</div>

					<img src="/decors/decor_rule.png" alt="" className='decor-rule' />
				</div>
			</div>
		</section>
	)
}