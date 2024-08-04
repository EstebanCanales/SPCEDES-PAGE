import styles from '@/Style/Styles-Graficos.module.css'
import { Analisis } from './components/'
import { donutData, barData, horizontalData} from '@/ui/constants/graphInfo'
import BarGraph from './components/barGraph';
import DonutGraph from './components/donutGraph'
import VerticalGraph from './components/verticalGraph'


const GraficosHome = () => {
	return (
		<>
			<section className={styles.Screen}>
				{/*<header className={styles.Header}>
				<div className={styles.Title}>
						GRAFICOS
					</div>
				</header>*/}
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
						Graficos semanales
					</div>
				</header>
				<div className={styles.GrafFristSection}>
					<DonutGraph data={donutData} />
					<VerticalGraph data={horizontalData}/>
				</div>
				<BarGraph data={barData}/>
			</section>
		</>
	)
}
