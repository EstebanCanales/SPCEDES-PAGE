import styles from '@/Style/Styles-Graficos.module.css'
import {
	Analisis, VerticalGraph, DonutGraph, BarGraph
} from './components/'
import { donutData, barData, horizontalData } from '@/ui/constants/graphInfo'

const GraficosHome = () => {
	return (
		<>
			<section className={styles.Screen}>
				<main className={styles.MainContainer}>
					<Analisis />
					<Graficos />
				</main>
			</section>
		</>
	);
}

export default GraficosHome;
const Graficos = () => {
	return (
		<>
			<section className={styles.GraficosSection}>
				<header className={styles.Header}>
					<div className={styles.SubTitleGrap}>
						Gráficos semanales
					</div>
				</header>
				<div className={styles.GrafFristSection}>
					<DonutGraph data={donutData} />
					<VerticalGraph data={horizontalData} />
				</div>
				<BarGraph data={barData} />
			</section>
		</>
	)
}
