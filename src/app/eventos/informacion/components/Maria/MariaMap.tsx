import { Map } from './Map-MARIA' 
import styles from '@/Style/ComponentStyle-MARIA.module.css'

const MapaContent = () => {
	return (
		<>
			<header className={styles.SubHeader}>
				<strong className={styles.HeaderTitle}>
					Mapa / Maria Auxiliadora / 2024
				</strong>
				<Map />
			</header>
		</>
	);
}

export default MapaContent
