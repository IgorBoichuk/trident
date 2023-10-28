import { mocAboutUsList } from '@/assets/mocdata/mocAboutUsList'
import Image from 'next/image'
import React from 'react'

export const List = ({ listItems }) => {
	return (
		<ul className=' z-10 relative grid gap-[38px] py-[50px]'>
			<div className='absolute z-[-100] bg-[#F5F5F5]  h-full  left-[-12px] right-[-12px] top-0 bottom-0 '></div>
			{listItems?.map(item => (
				<li className='grid grid-cols-[50px_1fr] pl-2 ' key={item.title}>
					<div className='relative w-[30px] h-[30px]'>
						<Image fill src={item.icon} alt={item.title} />
					</div>
					<div>
						<p className='text-mainBg text-sm font-bold tracking-[3.6px] mb-2'>{item.title}</p>
						<p className='text-mainBg text-base font-light'>{item.text}</p>
					</div>
				</li>
			))}
		</ul>
	)
}
