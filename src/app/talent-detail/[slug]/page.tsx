import React from 'react'
import './entryDetail.scss'
import { FaDoorClosed, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import Surveillance from './surveillance/Surveillance'
import { fetchData, urlFor } from '@/db/db'
import { TalentData } from '@/app/talent/page'
import { redirect } from 'next/navigation'

import dayjs from 'dayjs'
import TopTitle from '@/app/components/topTitle/TopTitle'
import MouseMoveScale from '@/app/components/hoc/mouseMoveScale/MouseMoveScale'
import DetailPanel from './detailPanel/DetailPanel'
type Props = {
	params:{
		slug:string;
	}
}

export default async function page({
	params
}: Props) {
	const activeList = await fetchData<TalentData[]>(`
		*[_type in ['inactive_talents','active_talents']  && slug.current == '${params.slug}' ] {
			name,
			slug,
			data,
		}
	`);
	const talentData = activeList[0];

	if(activeList.length === 0){
		redirect('/')
	}

	
	return (
		<DetailPanel talentData={talentData}/>
	)
}