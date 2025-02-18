import { useEffect, useState } from 'react'

import { Container } from '~/shared/ui/container'
import CurriculumCard from './curriculumCard'
import { tryThrow } from '~/shared/lib/utils'
import { courseService } from '~/shared/services/courses'

import style from './curriculum.module.scss'

interface ISubCoursesProps {
	number: number
	title: string
	id: number
}

const Curriculum: React.FC = () => {
	const [subCourses, setSubCourses] = useState<ISubCoursesProps[]>([])

	const getSubCourses = async () => {
		const data = await tryThrow({ fn: () => courseService.dataSubCourses() })

		setSubCourses(data)
	}

	useEffect(() => {
		getSubCourses()
	}, [])

	return (
		<div className={style.curriculum}>
			<Container>
				<div className={style.curriculum_wrapper}>
					{subCourses.map(subCourses => (
						<CurriculumCard
							key={subCourses.id}
							number='01'
							title={subCourses.title}
						/>
					))}
				</div>
			</Container>
		</div>
	)
}

export default Curriculum
