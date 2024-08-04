import styles from '@/Style/Styles-Graficos.module.css'


interface BarGraphData {
	data: {
		label: string;
		value: number;
		color: string;
	}[];
}
const BarGraph: React.FC<BarGraphData> = ({ data }) => {
	return (
		<>
			<div className={styles.GrafSecondSection}>
				<h3 className={styles.grafTitle}>
					Frecuencia de entrada
				</h3>
				<ul className={styles.Metric}>
					<li className={styles.MetricNumber} style={{ paddingTop: '0' }}>50</li>
					<li className={styles.MetricNumber}>40</li>
					<li className={styles.MetricNumber}>30</li>
					<li className={styles.MetricNumber}>20</li>
					<li className={styles.MetricNumber}>10</li>
					<li className={styles.MetricNumber}>0</li>
				</ul>
				<div className={styles.Body}>
					<div className={styles.barChart}>
						{data.map((item, index) => (
							<div
								key={index}
								className={styles.item}
								style={{ '--val': item.value, '--col': item.color }}
							>
								<div className={styles.label}>{item.label}</div>
								<div className={styles.value}>{item.value}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default BarGraph;

