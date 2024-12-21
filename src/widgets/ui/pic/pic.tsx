import React from 'react'

import { Container } from '~/shared/ui/container'

import pic from '../../../shared/public/pic.png'

const Pic = () => {
	return (
		<div style={{ marginTop: 100 }}>
			<Container>
				<img
					src={pic}
					alt=''
					style={{
						maxWidth: 'clamp(16.625rem, 0.013rem + 83.06vw, 99.688rem)',
						maxHeight: 'clamp(8.188rem, -0.05rem + 41.19vw, 49.375rem)',
						cursor: 'pointer'
					}}
				/>
			</Container>
		</div>
	)
}

export default Pic
