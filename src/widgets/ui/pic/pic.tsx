import React from 'react'

import pic from '../../../shared/assets/img/pic.png'

const Pic = () => {
	return (
		<div className=''>
			<img
				src={pic}
				alt=''
				style={{ maxWidth: '1200px', maxHeight: '760px' }}
			/>
		</div>
	)
}

export default Pic
