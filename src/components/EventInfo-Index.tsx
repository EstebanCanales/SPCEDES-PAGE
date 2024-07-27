import indexStyles from '../Style/Styles-Index.module.css'

interface EventInfoProps {
	Title: string,
	Paragraph: string
}

export const EventInfo = ({ Title, Paragraph }: EventInfoProps) => {

	return (
		<>
			<div className={indexStyles.ActualEventHeader}>
				<h2 className={indexStyles.ActualEventText}>
					{Title}
				</h2>
			</div>

			<div className={indexStyles.Paragraph}>
				{Paragraph}
			</div>
		</>
	)

}

