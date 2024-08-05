import styles from '@/Style/Styles-Graficos.module.css';

interface DonutChartProps {
	data: {
		label: string;
		value: number;
		color: string;
	}[];
}

const DonutGraph: React.FC<DonutChartProps> = ({ data }) => {
	const total = data.reduce((sum, item) => sum + item.value, 0);
	let currentAngle = 0;

	const radius = 50;
	const strokeWidth = 20;
	const innerRadius = radius - strokeWidth;

	return (
		<div className={styles.GrafPersonalData}>
			<h3 className={styles.grafTitle}>
				Áreas más visitadas
			</h3>
			<div className={styles.donutChartContainer}>
				<svg viewBox="0 0 100 100" className={styles.donutChart}>
					<g transform={`rotate(-90 ${radius} ${radius})`}>
						{data.map((item, index) => {
							const startAngle = currentAngle;
							const sliceAngle = (item.value / total) * 360;
							currentAngle += sliceAngle;

							const x1 = radius + innerRadius * Math.cos((Math.PI * startAngle) / 180);
							const y1 = radius + innerRadius * Math.sin((Math.PI * startAngle) / 180);
							const x2 = radius + innerRadius * Math.cos((Math.PI * currentAngle) / 180);
							const y2 = radius + innerRadius * Math.sin((Math.PI * currentAngle) / 180);

							const largeArcFlag = sliceAngle > 180 ? 1 : 0;

							const pathData = [
								`M ${x1} ${y1}`,
								`A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
								`L ${x2 + (x2 - radius) * (strokeWidth / innerRadius)} ${y2 + (y2 - radius) * (strokeWidth / innerRadius)}`,
								`A ${radius} ${radius} 0 ${largeArcFlag} 0 ${x1 + (x1 - radius) * (strokeWidth / innerRadius)} ${y1 + (y1 - radius) * (strokeWidth / innerRadius)}`,
								'Z'
							].join(' ');

							return (
								<path
									key={index}
									d={pathData}
									fill={item.color}
									className={styles.donutSegment}
									style={{
										animationDelay: `${index * 0.1}s`,
									}}
								/>
							);
						})}
					</g>
				</svg>
				<div className={styles.legend}>
					{data.map((item, index) => (
						<div key={index} className={styles.legendItem}>
							<span className={styles.colorBox} style={{ backgroundColor: item.color }}></span>
							<span style={{ fontWeight: 'bolder' }}>{item.label}: {item.value}</span>
						</div>
					))}
				</div>
			</div>

		</div>
	);
};

export default DonutGraph;
