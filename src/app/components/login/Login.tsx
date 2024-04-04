'use client'

import React, { useEffect, useRef, useState } from 'react'
import './login.scss'
import playAudio from '@/app/library/audioplayer'
type Props = {}

export default function Login({}: Props) {
	const [typingPassword, setTypingPassword] = useState('- - WAITING FOR INPUT - -')
	const [isLogin, setIsLogin] = useState(false);
	const [isEnd, setIsEnd] = useState(false);
	const password = useRef(null);
	
	useEffect(()=>{

		playAudio({
			src:'/sound/bgm.mp3',
			loop:true,
			destroy:false,
			volume:0.035
		}).play(5);
		setTimeout(()=>{
			const passwordTypingDelay = 100
			const passwordTypingDuration = 1800
			setTypingPassword('')
			const passwordTyping = setInterval(()=>{
				setTypingPassword((prev) => prev + '*')
			},passwordTypingDelay)

			const type = playAudio({
				src:'/sound/typebeep1.wav',
				volume:0.6
			})
			const access = playAudio({
				src:'/sound/access1.wav',
				volume:1
			})
			type.play()
			setTimeout(()=>{
				clearInterval(passwordTyping)
				type.pause()
				setTimeout(()=>{
					setIsLogin(true)
					access.play()
					setTimeout(()=>{
						setIsEnd(true)
					},1500)
				},500)
			},passwordTypingDuration)
			
		},500)
	},[]);
	return (
		<div id="login" className={` ${isEnd ? 'end' : ''}`}>
				<div className="login-field ">
					{!isLogin ? (
							<div className="form-part">
							<img src="/decors/rune.png" alt="" className='decor_spell' />
								<div className="title">
									<div className="line"></div>
									<div className="diamond"></div>
									<h2>LOGIN</h2>
									<div className="diamond"></div>
									<div className="line"></div>
								</div>
								<p className='sub-title'>I.D ENTRY REQUIREMENTS</p>
								<div className="password-field">
									<svg className='field-arrow l' xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 45 40" fill="none">
										<path d="M2.62347e-07 20L45 0.947442L45 39.0526L2.62347e-07 20Z" fill="#D9D9D9"/>
									</svg>
									<div className="field">
										<p>{typingPassword}</p>
									</div>
									<svg className='field-arrow r' xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 45 40" fill="none">
										<path d="M2.62347e-07 20L45 0.947442L45 39.0526L2.62347e-07 20Z" fill="#D9D9D9"/>
									</svg>
								</div>
								<div className="action">
									<div className="decor-block"></div>
									<button className='fake-btn'>CONNECTING</button>
									<div className="decor-block"></div>
								</div>
						</div>
					) : (
						<div className="success-part">
							<p>ACCESS GRANTED</p>
						</div>
					)}
				</div>
		</div>
	)
}