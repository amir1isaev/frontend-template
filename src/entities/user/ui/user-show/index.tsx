import { FC } from 'react'
import { IUser } from 'entities/user'
import styles from './styles.module.scss'

interface IProps {
	user: IUser
}

export const UserShow: FC<IProps> = (p) => {
	const { user } = p

	return <div className={styles.user}>{user.name}</div>
}
