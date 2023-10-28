import { designess } from '@/assets/mocdata/mocForSlider'
import Image from 'next/image'
import React from 'react'
import { Container } from '../shared/Container'
import { Title } from '../shared/Title'

const Gallary = () => {
	return (
		<Container>
			<Title title='Gallery' custom='mb-[18px]' />
			<ul className=' mx-auto px-2 mb-20 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{designess.map(({ picture, id }) => (
					<Image key={id} alt={picture} src={picture} className='w-full h-full' />
				))}
			</ul>
		</Container>
	)
}

export default Gallary
