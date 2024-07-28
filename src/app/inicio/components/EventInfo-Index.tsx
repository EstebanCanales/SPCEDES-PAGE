import styles from '@/Style/Styles-Index.module.css'

interface EventInfoProps {
	Title: string,
	Paragraph: string
}

const EventInfo = ({ Title, Paragraph }: EventInfoProps) => {
	return (
		<>
			<div className={styles.ActualEventHeader}>
				<h2 className={styles.ActualEventText}>
					{Title}
				</h2>
			</div>

			<div className={styles.Paragraph}>
				{Paragraph}
			</div>
		</>
	)

}

export default EventInfo
