import React from 'react'
import { Collapse } from 'react-collapse'
export const AccordionItem = ({ open, toggle, title, text }) => {
	return (
		<div className='pt-[2px] text-mainBg border-b-2'>
			<div
				className='bg-white py-[10px]  md:px-[50px] grid grid-cols-[1fr_40px] justify-between items-center cursor-pointer'
				onClick={toggle}
			>
				<p className=' text-[15px] md:text-[22px] font-semibold '>{title}</p>
				<div className='text-center font-light text-[24px]'>{open ? '-' : '+'}</div>
			</div>
			<Collapse isOpened={open}>
				<div className='bg-white font-light text-[14px] px-4 md:px-[50px] pb-[20px] '>{text}</div>
			</Collapse>
		</div>
	)
}
