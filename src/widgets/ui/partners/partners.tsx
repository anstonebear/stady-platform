import React from 'react'

import { Container } from '~/shared/ui/container'

import style from './partners.module.scss'

import {
	logoAdobe,
	logoAmazon,
	logoNetflix,
	logoNotion,
	logoSpotify,
	logoZapier,
	logoZoom
} from '~/shared/assets/img'

const Partners: React.FC = () => {
	return (
		<div className={style.partners}>
			<Container>
				<div className={style.partners_wrapper}>
					<div className={style.partners_items}>
						<div>
							<img
								src={logoZapier}
								alt='logoZapier'
								className={style.partners_item}
							/>
						</div>
						<div>
							<img
								src={logoSpotify}
								alt='logoSpotify'
								className={style.partners_item}
							/>
						</div>
						<div>
							<img
								src={logoZoom}
								alt='logoZoom'
								className={style.partners_item}
							/>
						</div>
						<div>
							<img
								src={logoAmazon}
								alt='logoAmazon'
								className={style.partners_item}
							/>
						</div>
						<div>
							<img
								src={logoAdobe}
								alt='logoAdobe'
								className={style.partners_item}
							/>
						</div>
						<div>
							<img
								src={logoNotion}
								alt='logoNotion'
								className={style.partners_item}
							/>
						</div>
						<div>
							<img
								src={logoNetflix}
								alt='logoNetflix'
								className={style.partners_item}
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Partners
