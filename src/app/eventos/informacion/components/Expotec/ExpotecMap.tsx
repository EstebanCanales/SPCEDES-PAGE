import { Map } from "./Map-EXPOTEC";
import styles from '@/Style/ComponentStyle-EXPOTEC.module.css'

const MapaContent = () => {
	return (
		<>
			<header className={styles.SubHeader}>
				<strong className={styles.HeaderTitle}>
					Mapa / EXPOTEC / 2024
				</strong>
			</header>
			<Map></Map>
		</>
	);
}

export default MapaContent
