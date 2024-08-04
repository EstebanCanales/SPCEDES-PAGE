import styles from '@/Style/Styles-Graficos.module.css'
import { graphStats, permissions } from '@/ui/constants/graphInfo'
export default function Analisis() {
	return (
		<>
			<section className={styles.AnalisisSection}>
				<header className={styles.Header}>
					<div className={styles.SubTitleAna}>
						Analisis
					</div>
				</header>
				<div className={styles.AnalisisContent}>
					{graphStats.map((item, index) => {
						return (
							<>
								<div key={index} className={styles.CountOfCards}>
									<div className={styles.AnalisisTitle}>
										{item.title}
									</div>
									<span className={styles.Data}>
										{item.fristStat} de {item.secondStat}
									</span>
									<div className={styles.StatContainer}>
										<div
											className={styles.StatOne}
											style={{ width: `${item.fristStatProcent}` }}
										>
										</div>
										<div
											className={styles.StatTwo}
											style={{ width: `${item.secondStatProcent}` }}
										>
										</div>
									</div>
								</div>
							</>
						)
					})}
					{permissions.map((item) => {
						return (
							<>
								<div className={styles.CountOfCards}>
									<div className={styles.AnalisisTitle}>
										{item.title}
									</div>
								</div>
								<div
									style={{ 
										justifyContent: item.perm ? "flex-start" : "flex-end",
									}}
									className={styles.PermContainer}>
									<div className={styles.PermInfo}
									style={{
										paddingTop: item.perm ? ".3rem" : ".3rem", 
										padding: item.perm ? ".5rem" : ".3rem"
									}}

									>
										{item.perm === true
											? "Si"
											: "No"
										}
									</div>
								</div>
							</>
						)
					})}
				</div>
			</section>
		</>
	)
}

