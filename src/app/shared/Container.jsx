import React from 'react'

export const Container = ({ children, custom }) => {
	return <div className={`${custom} px-3 max-w-[1220px] mx-auto `}>{children}</div>
}
