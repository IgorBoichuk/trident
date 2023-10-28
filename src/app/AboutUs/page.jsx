'use client'
import React, { useState } from 'react'

import { Container } from '../shared/Container'
import { Title } from '../shared/Title'
import img from '../../../public/images/aboutUsHome.png'
import Image from 'next/image'

import { Accordion } from '../shared/Accordion/Accordion'
import { List } from '../shared/List/List'
import { mocAboutUsList } from '@/assets/mocdata/mocAboutUsList'
import { Catalogue } from '@/components/Home/Catalogue'
const AboutUs = () => {
	return (
		<Container custom='bg-white'>
			<Title title='About us' custom='mb-2 pt-[18px]' />
			<p className='text-mainBg text-[26px] font-light mb-6 leading-[29.8px]'>
				Trident Modular Housing produce and assemble modular houses that are very high quality and they can be used as
				temporary as well as permanent residence.
			</p>
			<Image className='mb-[33px]' alt='about us' src={img} />
			<p className='text-[14px] font-light text-mainBg'>
				An enterprise combining the joint expertise of a UK-based chartered architectural practice and an experienced
				Ukrainian manufacturer.
			</p>
			<p className='text-[14px] font-light text-mainBg mb-6'>
				Trident Modular Housing LTD : Trident Modular Housing is a bespoke garden room, modular building designer, and
				manufacturer.
			</p>
			<p className='text-[14px] font-light text-mainBg mb-6'>
				Our high-quality, energy-saving products are designed with the end user in mind and can be customized to meet
				any specific client’s requirements.
			</p>
			<p className='text-[14px] font-light text-mainBg mb-[55px]'>
				Our main aim is to provide our customers with a fast, cost-effective service. We are able to achieve this with
				the help of the newest building technologies for manufacturing and assembly.
			</p>
			<List listItems={mocAboutUsList} />
			<Title title='FAQ' custom='mb-8 mt-[55px]' />
			<Accordion custom='pb-25' />
			<Catalogue custom='py-[100px]' />
		</Container>
	)
}

export default AboutUs
