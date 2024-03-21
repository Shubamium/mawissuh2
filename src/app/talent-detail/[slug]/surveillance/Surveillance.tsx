'use client'
import React, { useState } from 'react'

type Props = {
	videoId:string
}

const spells:string[] = [
	'OKCENUAHDOMBYVHFG',
	'DMKEMCN NEIINNINE',
	'pUTNNVNN BZOKKEU e',
	'OKCENUAHDOM YVHFG'
]
export default function Surveillance({
	videoId
}: Props) {
	const [isCasted,setIsCasted] = useState(false);
	// const [toRenderSpell,setToRenderSpell] = useState<string[]>([]);
	return (
		<div className="surveillance">
				<div className="surv-head">
					<h2>SURVEILLANCE</h2>
					<hr />
				</div>
				<div className={`surv-body ${isCasted ? 'casted' : 'preparing'}`}>
					<div className="spell-part">
						<div className="spell rune-text">
							{
								isCasted && spells.map((spellLine,index)=>{
									return <p key={'spell-line'+(index+1)} className='spell-line'>
										{
											spellLine.split('').map((word,charIndex)=>{
												return <span  key={'spell-word'+charIndex} style={{animationDelay:(index*1000 + (charIndex*50))+'ms'}}>{word}</span>
											})
										}
									</p>
								})
							}
							{/* <p><span>OKCENUAHDOMBYVHFG</span></p>
							<p>DMKEMCN NEIINNINE</p>
							<p>pUTNNVNN BZOKKEU e </p>
							<p>OKCENUAHDOM YVHFG</p> */}
						</div>
						<button className="btn btn-cast" onClick={()=>{
							setIsCasted(true);
						}}>
							CAST
							<img src="/decors/small_rune.png" alt="" className='decor_btn-rune' />
						</button>
					</div>
					<iframe className='vid-frame' src={`https://www.youtube.com/embed/${videoId}`} frameBorder={0}></iframe>
				</div>
			</div>
	)
}