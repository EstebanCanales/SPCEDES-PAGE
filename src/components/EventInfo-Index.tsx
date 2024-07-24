import indexStyles from '../Style/Styles-Index.module.css'

interface EventInfoProps {
	Title: string,
	Paragraph: string
}

export const EventInfo = ({ Title, Paragraph }: EventInfoProps) => {

	return (
		<>
			<div className={indexStyles.Title}>
				<h2 className={indexStyles.Text}>
					{Title}
				</h2>
			</div>

			<div className={indexStyles.Paragraph}>
				{Paragraph}
			</div>
		</>
	)

}

