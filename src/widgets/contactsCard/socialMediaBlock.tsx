import React from 'react'

import style from './contactsCard.module.scss'

interface SocialMediaBlockProps {
	imgs?: string[]
	text: string
}

const SocialMediaBlock: React.FC<SocialMediaBlockProps> = ({ imgs, text }) => {
	return (
		<div className={style.socialMediaBlock}>
			<div className={style.socialMediaBlock_imgs}>
				{imgs &&
					imgs.map((img, index) => (
						<img
							src={img}
							alt=''
							key={index}
							className={style.socialMediaBlock_img}
						/>
					))}
			</div>
			<span className={style.socialMediaBlock_text}>{text}</span>
		</div>
	)
}
export default SocialMediaBlock
