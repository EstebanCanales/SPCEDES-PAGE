import styles from '@/Style/Styles-Graficos.module.css'

const GraficosHome = () => {
	return (
		<>
			<section className={styles.Screen}>
				<header className={styles.Header}>
					<div className={styles.Title}>
						GRAFICOS
					</div>
				</header>
				<main className={styles.MainContainer}>
					<Analisis />
					<Graficos />
				</main>
			</section>
		</>
	);
}

export default GraficosHome;


interface analisisProps {

}
const Analisis = () => {
	return (
		<>
			<section className={styles.AnalisisSection}>
				<header className={styles.Header}>
					<div className={styles.SubTitle}>
						Análisis
					</div>
				</header>
				<div className={styles.AnalisisContent}>
					<div className={styles.CountOfCards}>
						<div className={styles.AnalisisTitle}>
							Cantidad de tarjetas
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

const Graficos = () => {
	return (
		<>
			<section className={styles.GraficosSection}>
				<header className={styles.Header}>
					<div className={styles.SubTitle}>
						Graficos
					</div>
				</header>
				<div className={styles.Content}>
					<div className={styles.GrafFristSection}>
						<div className={styles.GrafPersonalData}></div>
						<div className={styles.GrafCompanios}></div>
					</div>
					<div className={styles.GrafSecondSection}>

					</div>
				</div>
			</section>
		</>
	)
}
