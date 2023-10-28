import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import { Container } from '@/app/shared/Container'
import catalogue from '../../assets/galary/catalogue/catalogue.png'
import pdf from '../../assets/galary/catalogue/pdf.svg'

export const Catalogue = ({ custom }) => {
	return (
		<section className={`${custom} `}>
			<Container>
				<div className='border-[1px] border-[#F5F5F5] rounded-[5px] pt-[23px] pb-[68px] shadow-md shadow-grey'>
					<p className='font-Lato font-light text-mainBg text-[24px] text-center mb-6 px-1'>
						Order our catalogue for free
					</p>
					<p className='text-mainBg font-Lato text-center px-[21px] font-light text-[14px] mb-[24px]'>
						Lorem ipsim dolor set amet lorem ipsim dolor set amet lorem ipsim dolor set amet{' '}
					</p>
					<div className=' relative w-full'>
						<Image src={catalogue} alt='' placeholder='blur' className='w-full' />
						<Image src={pdf} alt='' className='absolute left-[50%] translate-x-[-50%] bottom-[20%]' />
					</div>
					<button className=' bg-mainBg flex gap-4 text-white py-4 px-7 font-medium m-auto'>
						Order now
						<MoveRight />
					</button>
				</div>
			</Container>
		</section>
	)
}
