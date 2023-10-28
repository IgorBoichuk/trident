'use client'
import React, { useState } from 'react'
import { AccordionItem } from './AccordionItem'
import { accordionData } from '@/assets/mocdata/accordion'

export const Accordion = ({ custom }) => {
	const [open, setOpen] = useState(false)
	const toggleItem = itemIndex => {
		if (open === itemIndex) {
			return setOpen(null)
		}
		setOpen(itemIndex)
	}

	return (
		<section className={`${custom} bg-white`}>
			{accordionData.map((item, index) => (
				<AccordionItem {...item} toggle={() => toggleItem(index)} open={index === open} key={item.id} />
			))}
		</section>
	)
}
