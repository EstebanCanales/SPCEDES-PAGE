import infoStyles from './../Style/Styles-Informacion.module.css'
import { EXPOTEC } from './EventInfo-EXPOTEC'
import { PATHS_EVENTINFO } from './constants/paths.js'

interface renderInfoProps {
	option: string;
}

export const RenderInfo: React.FC<renderInfoProps> = ({ option }) => {
	switch (option) {
		case PATHS_EVENTINFO[0]:
			return (
				<div className={infoStyles.CaseConatiner}>
					<EXPOTEC />
				</div>
			);
		case PATHS_EVENTINFO[1]:
			return (
				<div className={infoStyles.CaseConatiner}>
					<h1>
						TU MAMA2
					</h1>
				</div>
			);
		case PATHS_EVENTINFO[2]:
			return (
				<div className={infoStyles.CaseConatiner}>
					<h1>
						TU MAMA3
					</h1>
				</div>
			);
		default:
			return null;
	}
};


