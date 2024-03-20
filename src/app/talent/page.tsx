import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import './entry.scss'
import Link from 'next/link'
import { TbAccessibleOff, TbAccessibleOffFilled, TbLockAccessOff } from 'react-icons/tb'
type Props = {}

export default function Entry({}: Props) {
	return (
		<main className="entry" id='page_entry'>
				<div className="confine">
					<article className="section-title-card">
						<div className="title">
							<h2>UNDER INVESTIGATION</h2> <BsStarFill/><BsStarFill/><BsStarFill/>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
					</article>
					<section className="entry-section">

						<div className="entry-title">
							<img src="/decors/entry-title-decor.png" alt="" className='decor_title' />
							<h2>ACTIVE</h2>
						</div>
						<div className="active-entry-list">
								<Link href={'/entry-detail/user'} className="active-entry-card">
										<img src="/graphics/entry_placeholder.webp" alt="" className='pfp' />
										<span className='name'>Person Name</span>
										<span className='decor_overlay'></span>
										<span className='decor-line'></span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card">
										<img src="/graphics/entry_placeholder.webp" alt="" className='pfp' />
										<span className='name'>Person Name</span>
										<span className='decor_overlay'></span>
										<span className='decor-line'></span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card">
										<img src="/graphics/entry_placeholder.webp" alt="" className='pfp' />
										<span className='name'>Person Name</span>
										<span className='decor_overlay'></span>
										<span className='decor-line'></span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card">
										<img src="/graphics/entry_placeholder.webp" alt="" className='pfp' />
										<span className='name'>Person Name</span>
										<span className='decor_overlay'></span>
										<span className='decor-line'></span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card">
										<img src="/graphics/entry_placeholder.webp" alt="" className='pfp' />
										<span className='name'>Person Name</span>
										<span className='decor_overlay'></span>
										<span className='decor-line'></span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card">
										<img src="/graphics/entry_placeholder.webp" alt="" className='pfp' />
										<span className='name'>Person Name</span>
										<span className='decor_overlay'></span>
										<span className='decor-line'></span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card no-access">
									<span className='logo'>
										<img src="/decors/rune_higher.png" alt="" className='decor_rune' />
										<TbLockAccessOff/>
									</span>
									<span className='rune-text'>HIEROPHA</span>
									<span className='title'>- ACCESS DENIED -</span>
									<span className='tier-text'><span className='tier'>TIER 3</span> Clearance is needed</span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card no-access">
									<span className='logo'>
										<img src="/decors/rune_higher.png" alt="" className='decor_rune' />
										<TbLockAccessOff/>
									</span>
									<span className='rune-text'>HIEROPHA</span>
									<span className='title'>- ACCESS DENIED -</span>
									<span className='tier-text'><span className='tier'>TIER 3</span> Clearance is needed</span>
								</Link>
						</div>

						<div className="entry-title inactive">
							<img src="/decors/entry-title-decor.png" alt="" className='decor_title' />
							<h2>INACTIVE</h2>
						</div>
						<div className="active-entry-list inactive">
								<Link href={'/entry-detail/user'} className="active-entry-card inactive">
										<img src="/graphics/entry_placeholder.webp" alt="" className='pfp' />
										<span className='name'>Person Name</span>
										<span className='decor_overlay'></span>
										<span className='decor-line'></span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card inactive">
										<img src="/graphics/entry_placeholder.webp" alt="" className='pfp' />
										<span className='name'>Person Name</span>
										<span className='decor_overlay'></span>
										<span className='decor-line'></span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card inactive">
										<img src="/graphics/entry_placeholder.webp" alt="" className='pfp' />
										<span className='name'>Person Name</span>
										<span className='decor_overlay'></span>
										<span className='decor-line'></span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card inactive no-access">
									<span className='logo'>
										<img src="/decors/rune_higher.png" alt="" className='decor_rune' />
										<TbLockAccessOff/>
									</span>
									<span className='title'>- ACCESS DENIED -</span>
									<span className='tier-text'><span className='tier'>TIER 3</span> CLEARANCE NEEDED</span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card inactive no-access">
									<span className='logo'>
										<img src="/decors/rune_higher.png" alt="" className='decor_rune' />
										<TbLockAccessOff/>
									</span>
									<span className='title'>- ACCESS DENIED -</span>
									<span className='tier-text'><span className='tier'>TIER 3</span> CLEARANCE NEEDED</span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card inactive no-access">
									<span className='logo'>
										<img src="/decors/rune_higher.png" alt="" className='decor_rune' />
										<TbLockAccessOff/>
									</span>
									<span className='title'>- ACCESS DENIED -</span>
									<span className='tier-text'><span className='tier'>TIER 3</span> CLEARANCE NEEDED</span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card inactive no-access">
									<span className='logo'>
										<img src="/decors/rune_higher.png" alt="" className='decor_rune' />
										<TbLockAccessOff/>
									</span>
									<span className='title'>- ACCESS DENIED -</span>
									<span className='tier-text'><span className='tier'>TIER 3</span> CLEARANCE NEEDED</span>
								</Link>
								<Link href={'/entry-detail/user'} className="active-entry-card inactive no-access">
									<span className='logo'>
										<img src="/decors/rune_higher.png" alt="" className='decor_rune' />
										<TbLockAccessOff/>
									</span>
									<span className='title'>- ACCESS DENIED -</span>
									<span className='tier-text'><span className='tier'>TIER 3</span> CLEARANCE NEEDED</span>
								</Link>
						</div>
						
					</section>
				</div>
		</main>
	)
}