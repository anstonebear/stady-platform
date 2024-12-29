import React from 'react'

import Input from '~/shared/ui/input'

import style from './form.module.scss'

interface InputBlockProps {
	title: string
	type: string
	placeholderText: string
	className?: string
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const InputBlock: React.FC<InputBlockProps> = ({
	type,
	title,
	placeholderText,
	className,
	value,
	onChange
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event)
		}
	}

	return (
		<div className={style.inputBlock}>
			<span className={style.inputBlock_title}>{title}</span>
			<Input
				className={className}
				type={type}
				placeholder={placeholderText}
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}

export default InputBlock
