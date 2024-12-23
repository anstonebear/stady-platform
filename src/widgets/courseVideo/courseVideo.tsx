import React from 'react'

import { Container } from '~/shared/ui/container'

interface ICourseVideoProps {
	image: string
}

const CourseVideo: React.FC<ICourseVideoProps> = ({ image }) => {
	return (
		<div style={{ marginTop: 100 }}>
			<Container>
				<img
					src={image}
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

export default CourseVideo
