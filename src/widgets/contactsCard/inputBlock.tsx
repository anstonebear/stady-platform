import React from 'react'

import Input from '~/shared/ui/input'

import style from './contactsCard.module.scss'

interface InputBlockProps {
	title: string
	type: string
	placeholderText: string
	className?: string
}
const InputBlock: React.FC<InputBlockProps> = ({
	type,
	title,
	placeholderText,
	className
}) => {
	return (
		<div className={style.inputBlock}>
			<span className={style.inputBlock_title}>{title}</span>
			<Input className={className} type={type} placeholder={placeholderText} />
		</div>
	)
}

export default InputBlock
