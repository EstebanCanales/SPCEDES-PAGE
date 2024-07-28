import styles from '@/Style/ComponentStyle-DONBOSCO.module.css'
import { Map } from './Map-DONBOSCO'

const MapaContent = () => {
	return (
		<>
			<header className={styles.SubHeader}>
				<strong className={styles.HeaderTitle}>
					Mapa / Aniversario Don Bosco / 2024
				</strong>
				<Map />
			</header>
		</>
	);
}

export default MapaContent
