import * as React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string
	defaultValue?: string
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
	return <input className={className} {...props} />
}

export default Input
