import { Option } from './Option-Informacion'
import infoStyles from '../Style/Styles-Informacion.module.css'

interface OptionListProps {
	options: string[];
	onSelect: (option: string) => void;
}

export const OptionList: React.FC<OptionListProps> = ({ options, onSelect }) => {
	return (
		<div className={infoStyles.optionListConatiner}>
			<ul className={infoStyles.optionList}>
				{options.map((option, index) => (
					<Option key={index} option={option} onSelect={onSelect} />
				))}
			</ul>
		</div>
	);
};
