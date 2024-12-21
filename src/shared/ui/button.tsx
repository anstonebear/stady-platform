import * as React from 'react'

import { Link } from 'react-router'

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
	to?: string
	className?: string
}

const Button: React.FC<ButtonProps> = ({
	className,
	to,
	children,
	...props
}) => {
	if (to) {
		return (
			<Link to={to} className={className} {...props}>
				{children}
			</Link>
		)
	} else {
		return (
			<button className={className} {...props}>
				{children}
			</button>
		)
	}
}

export default Button
