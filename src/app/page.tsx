import Link from 'next/link';
import './home.scss'
export default function Home() {
  return (
    <main className={'home'} id='page_home'>
			<div className="logo-part">
				<video src="/graphics/marilogo750m.webm"  className='logo-animation glow-filter' autoPlay loop />
			</div>
			<article className="welcome-part glow-filter">
				<h2> <strong>Welcome,</strong>  user001 </h2>
				<p>A description text on what this is. An interdimensional investigator tasked with the duty of tracking down threats that transcend the boundaries of worlds.</p>
			</article>
			<div className="main-nav">
				<Link href='/investigator' className='btn btn-nav-main' >Investigator</Link>
				<Link href='/entry' className='btn btn-nav-main' >Entry</Link>
				<div  className='btn btn-nav-main disabled' >Worlds</div>
				<div  className='btn btn-nav-main disabled' >Archive</div>
				<div  className='btn btn-nav-main disabled' >Records</div>
			</div>
    </main>
  );
}
