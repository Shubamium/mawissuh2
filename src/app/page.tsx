import Link from "next/link";
import "./home.scss";
import MouseMoveScale from "./components/hoc/mouseMoveScale/MouseMoveScale";
export default function Home() {
  return (
    <main className={"home"} id="page_home">
      <div className="confine">
        <div className="logo-part">
          <video
            src="/graphics/marilogo750m.webm"
            className="logo-animation glow-filter"
            autoPlay
            loop
          />
        </div>
        <article className="welcome-part glow-filter">
          <h2>
            {" "}
            <strong>Welcome,</strong> user001{" "}
          </h2>
          <p>
            This service is a luxury and <strong>NOT</strong> a requirement to
            be a creator!
          </p>
        </article>
        <div className="main-nav">
          <p>
            This is an optional clarity of mind as I will assist you in your
            content creation, handle your scheduling, organize collabs, provide
            you support and ensure all your needs and goals are met!
          </p>
          {/* <Link href='/investigator' className='btn btn-nav-main' >Investigator</Link> */}
          {/* <Link href='/entry' className='btn btn-nav-main' >Entry</Link> */}
          {/* <div  className='btn btn-nav-main disabled' >Worlds</div> */}
          {/* <div  className='btn btn-nav-main disabled' >Archive</div> */}
          {/* <div  className='btn btn-nav-main disabled' >Records</div> */}
        </div>
      </div>
    </main>
  );
}
