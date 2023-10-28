import React from 'react'

export const Title = ({ title, custom }) => {
	return <p className={`${custom} text-[26px] lg:text-[46px]  text-mainBg`}>{title}</p>
}
