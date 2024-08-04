import styles from '@/Style/Styles-Graficos.module.css'

interface HorizontalGraphProps {
	data: {
		label: string;
		value: number;
		color: string;
	}[];
}

const HorizontalGraph: React.FC<HorizontalGraphProps> = ({ data }) => {
	return (
		<div className={styles.GrafCompanios}>
			<h3 className={styles.grafTitle}>
			Estimaciones de tiempo
			</h3>
			<div className={styles.horizontalGrafContainer}>
				<div className={styles.horizontalGraf}>
					<div className={styles.startGraf}>
						<ul className={styles.horazontalsegmentsContainer}>
							{data.map((item, index) => (
								<li
									key={index}
									className={styles.horizontalSegment}
									style={{
										width: `${item.value * .2}rem`,
										backgroundColor: item.color
									}}
								>
									<span
										style={{ marginLeft: '-4.6rem' }}
										className={styles.horizontalMetric}>
										{item.label}
									</span>
								</li>
							))}
						</ul>
						<div className={styles.legendHorizontalGraph}>
							{data.map((item, index) => (
								<div key={index} className={styles.legendItem}>
									<span className={styles.colorBox} style={{ backgroundColor: item.color }}></span>
									<span style={{ fontWeight: 'bolder' }}>{item.label}: {item.value}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default HorizontalGraph

