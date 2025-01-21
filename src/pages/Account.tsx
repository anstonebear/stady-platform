import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { removeUser } from '../store/slices/userSlice'
import { useAppDispatch } from '../hooks/redux-hooks'
import Button from '../shared/ui/button'

const Account: React.FC = () => {
	const dispatch = useAppDispatch()

	const { isAuth, email } = useAuth()

	return isAuth ? (
		<div>
			<h1>Welcome {email}</h1>
			<div className='favorites'>
				<h2>избранное</h2>
			</div>

			<Button onClick={() => dispatch(removeUser())} to='/signin'>
				выйти из аккаунта{' '}
			</Button>
		</div>
	) : (
		<Navigate to='/signin' />
	)
}

export default Account
