import React from "react";
import { BsStarFill } from "react-icons/bs";
import "./entry.scss";
import Link from "next/link";
import {
  TbAccessibleOff,
  TbAccessibleOffFilled,
  TbLockAccessOff,
} from "react-icons/tb";
import { fetchData, urlFor } from "@/db/db";
import TopTitle from "../components/topTitle/TopTitle";
import ActiveTalentCard from "./card/activeTalentCard/ActiveTalentCard";
import ActiveTalentCardDisabled from "./card/activeTalentCard/ActiveTalentCardDisabled";
import InactiveTalentCard from "./card/inactiveTalentCard/InactiveTalentCard";
import InactiveTalentCardDisabled from "./card/inactiveTalentCard/InactiveTalentCardDisabled";
import MouseMoveScale from "../components/hoc/mouseMoveScale/MouseMoveScale";
type Props = {};

interface Social {
  icon: string; // Assuming the icon is a URL to an image
  link: any; // Assuming the link is a URL
}

interface Talent {
  profile: string; // Assuming the profile is a URL to an image
  briefing: string;
  surveillance: string;
  status: "active" | "inactive"; // Assuming status can only be 'active' or 'inactive'
  active_time: string; // Assuming active_time is a string representing a datetime
  socials: Social[]; // Assuming socials is an array of objects with icon and link fields
}

export type TalentData = {
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  data: Talent;
};
export default async function Entry({}: Props) {
  const activeList = await fetchData<TalentData[]>(`
		*[_type == 'active_talents'] {
			name,
			slug,
			data,
		}
	`);

  const inactiveList = await fetchData<TalentData[]>(`
		*[_type == 'inactive_talents'] {
			name,
			slug,
			data,
		}
	`);

  return (
    <main className="entry" id="page_entry">
      <TopTitle title="TALENT LIST" />

      <MouseMoveScale className="confine">
        <article className="section-title-card">
          <div className="title">
            <h2>UNDER INVESTIGATION</h2> <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene
          </p>
        </article>
        <section className="entry-section">
          <div className="entry-title">
            <img
              src="/decors/entry-title-decor.png"
              alt=""
              className="decor_title"
            />
            <h2>ACTIVE</h2>
          </div>
          <div className="active-entry-list">
            {activeList?.map((talent, index) => (
              <ActiveTalentCard
                src={urlFor(talent.data.profile).url()}
                name={talent.name}
                href={`/talent-detail/${talent.slug.current}`}
                key={"active-talent-card" + index}
              />
            ))}
            {/* <Link href={'/entry-detail/user'} className="active-entry-card">
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
								</Link> */}

            {new Array(Math.ceil(activeList.length / 4) * 4 - activeList.length)
              .fill(0)
              .map((denied, index) => {
                return (
                  <ActiveTalentCardDisabled
                    key={"active-denied" + index}
                  ></ActiveTalentCardDisabled>
                );
              })}
          </div>

          <div className="entry-title inactive">
            <img
              src="/decors/entry-title-decor.png"
              alt=""
              className="decor_title"
            />
            <h2>INACTIVE</h2>
          </div>
          <div className="active-entry-list inactive">
            {inactiveList?.map((talent, index) => {
              return (
                <InactiveTalentCard
                  src={urlFor(talent.data.profile).url()}
                  name={talent.name}
                  href={`/talent-detail/${talent.slug.current}`}
                  key={"inactive-talent" + index}
                />
              );
            })}

            {new Array(
              Math.ceil(inactiveList.length / 5) * 5 - inactiveList.length
            )
              .fill(0)
              .map((_, index) => {
                return (
                  <InactiveTalentCardDisabled
                    key={"inactive-denied" + index}
                  ></InactiveTalentCardDisabled>
                );
              })}

            {/* <Link href={'/entry-detail/user'} className="active-entry-card inactive">
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
								</Link> */}
          </div>
        </section>
      </MouseMoveScale>
    </main>
  );
}
