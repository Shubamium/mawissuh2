'use client'
import playAudio from '@/app/library/audioplayer'
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
												const delay = (index*1000 + (charIndex*50))
										
												return <span 
												key={'spell-word'+charIndex} style={{animationDelay:delay+'ms'}}>{word}</span>
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
							if(isCasted) return
							setIsCasted(true);
							const interv = setInterval(()=>{
								playAudio({src:'/sound/softclick.ogg',destroy:0.2,volume:0.2}).play()
							},50)
							playAudio({src:'/sound/spell2.wav',volume:0.8}).play()
							playAudio({src:'/sound/shine.wav',volume:0.5,destroy:6,loop:true}).play()

							setTimeout(()=>{
								clearInterval(interv)
								playAudio({src:'/sound/reveal.wav',destroy:0.3,volume:1}).play(0.5)

							},5000)


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