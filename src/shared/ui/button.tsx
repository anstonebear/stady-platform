import * as React from 'react'

import { Link } from 'react-router'

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
	to?: string
	className?: string
	type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
	className,
	to,
	type,
	children,
	...props
}) => {
	if (to) {
		return (
			<Link to={to} className={className} type={type} {...props}>
				{children}
			</Link>
		)
	}
	{
		return (
			<button className={className} type={type} {...props}>
				{children}
			</button>
		)
	}
}

export default Button
