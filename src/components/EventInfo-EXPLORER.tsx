import { useState } from "react";
import EXPOTECStyle from '@/Style/ComponentStyle-EXPOTEC.module.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { SECTION_PATHS as PATH } from "../components/constants/paths.js";

import {
	DetallesContent as EXPOTEC_Detalles,
	MapaContent as EXPOTEC_Mapa,
	ExpositoresContent as EXPOTEC_Expositores,
	ActividadesContent as EXPOTEC_Actividades,
	HorarioContent as EXPOTEC_Horario,
	EntradasContent as EXPOTEC_Entradas
} from '@/components/EXPOTEC-RENDERS'

import {
	DetallesContent as MARIA_Detalles,
	MapaContent as MARIA_Mapa,
	ExpositoresContent as MARIA_Expositores,
	HorarioContent as MARIA_Horario,
	EntradasContent as MARIA_Entradas
} from '@/components/MARIA-RENDERS'

import {
	DetallesContent as DONBOSCO_Detalles,
	MapaContent as DONBOSCO_Mapa,
	ExpositoresContent as DONBOSCO_Expositores,
	HorarioContent as DONBOSCO_Horario,
	EntradasContent as DONBOSCO_Entradas
} from './../components/DONBOSCO-RENDERS'


export const EXPLORER = () => {
	const [selectedSection, setSelectedSection] = useState(PATH[0]);
	const [EXPOTECOpen, setEXPOTECOpen] = useState(!false)
	const [MARIAOpen, setMARIAOpen] = useState(!false)
	const [DONBOSCOOpen, setDONBOSCOOpen] = useState(!false)

	const ClickEXPOTEC = () => { setEXPOTECOpen(!EXPOTECOpen) }
	const ClickMARIA = () => { setMARIAOpen(!MARIAOpen) }
	const ClickDONBOSCO = () => { setDONBOSCOOpen(!DONBOSCOOpen) }



	const renderContent = () => {
		switch (selectedSection) {
			case PATH[0]:
				return <EXPOTEC_Detalles />;
			case PATH[1]:
				return <EXPOTEC_Mapa />;
			case PATH[2]:
				return <EXPOTEC_Expositores />;
			case PATH[3]:
				return <EXPOTEC_Actividades />;
			case PATH[4]:
				return <EXPOTEC_Horario />;
			case PATH[5]:
				return <EXPOTEC_Entradas />;

			case PATH[6]:
				return <MARIA_Detalles />;
			case PATH[7]:
				return <MARIA_Mapa />;
			case PATH[8]:
				return <MARIA_Expositores />;
			case PATH[9]:
				return <MARIA_Horario />;
			case PATH[10]:
				return <MARIA_Entradas />;

			case PATH[11]:
				return <DONBOSCO_Detalles />;
			case PATH[12]:
				return <DONBOSCO_Mapa />;
			case PATH[13]:
				return <DONBOSCO_Expositores />;
			case PATH[14]:
				return <DONBOSCO_Horario />;
			case PATH[15]:
				return <DONBOSCO_Entradas />;

			default:
				return <EXPOTEC_Detalles />;
		}
	};

	return (
		<>
			<main className={EXPOTECStyle.MainContainer}>
				<nav className={EXPOTECStyle.Nav}>


					<header className={EXPOTECStyle.Header} onClick={ClickEXPOTEC}>
						<strong className={EXPOTECStyle.Title}>EXPOTEC </strong>
						<i className={EXPOTECStyle.Icon} style={{ transform: EXPOTECOpen ? 'rotate(-90deg)' : 'rotate(0deg)' }}><TiArrowSortedDown size={"1.3rem"} /></i>
					</header>
					<div className={EXPOTECStyle.ButtonContainer} style={{ display: EXPOTECOpen ? '' : 'none' }}>


						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("DetallesExpotec")}
							style={{
								backgroundColor: selectedSection === 'DetallesExpotec' ? '#18c89d' : '',
								color: selectedSection === 'DetallesExpotec' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'DetallesExpotec' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Detalles</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("MapaExpotec")}
							style={{
								backgroundColor: selectedSection === 'MapaExpotec' ? '#18c89d' : '',
								color: selectedSection === 'MapaExpotec' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'MapaExpotec' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Mapa</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("ExpositoresExpotec")}
							style={{
								backgroundColor: selectedSection === 'ExpositoresExpotec' ? '#18c89d' : '',
								color: selectedSection === 'ExpositoresExpotec' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'ExpositoresExpotec' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Expositores</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("ActividadesExpotec")}
							style={{
								backgroundColor: selectedSection === 'ActividadesExpotec' ? '#18c89d' : '',
								color: selectedSection === 'ActividadesExpotec' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'ActividadesExpotec' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Actividades</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("HorarioExpotec")}
							style={{
								backgroundColor: selectedSection === 'HorarioExpotec' ? '#18c89d' : '',
								color: selectedSection === 'HorarioExpotec' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'HorarioExpotec' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Horarios</span>
						</button>

						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("EntradasExpotec")}
							style={{
								backgroundColor: selectedSection === 'EntradasExpotec' ? '#18c89d' : '',
								color: selectedSection === 'EntradasExpotec' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'EntradasExpotec' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Entradas</span>
						</button>


					</div>


					<header className={EXPOTECStyle.Header} onClick={ClickMARIA}>
						<strong className={EXPOTECStyle.Title}>Maria Auxiliadora </strong>
						<i className={EXPOTECStyle.Icon} style={{ transform: MARIAOpen ? 'rotate(-90deg)' : 'rotate(0deg)' }}><TiArrowSortedDown size={"1.3rem"} /></i>
					</header>
					<div className={EXPOTECStyle.ButtonContainer} style={{ display: MARIAOpen ? '' : 'none' }}>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("DetallesMaria")}
							style={{
								backgroundColor: selectedSection === 'DetallesMaria' ? '#18c89d' : '',
								color: selectedSection === 'DetallesMaria' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'DetallesMaria' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Detalles</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("MapaMaria")}
							style={{
								backgroundColor: selectedSection === 'MapaMaria' ? '#18c89d' : '',
								color: selectedSection === 'MapaMaria' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'MapaMaria' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Mapa</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("ActividadesMaria")}
							style={{
								backgroundColor: selectedSection === 'ActividadesMaria' ? '#18c89d' : '',
								color: selectedSection === 'ActividadesMaria' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'ActividadesMaria' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Actividades</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("HorarioMaria")}
							style={{
								backgroundColor: selectedSection === 'HorarioMaria' ? '#18c89d' : '',
								color: selectedSection === 'HorarioMaria' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'HorarioMaria' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Horarios</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("EntradasMaria")}
							style={{
								backgroundColor: selectedSection === 'EntradasMaria' ? '#18c89d' : '',
								color: selectedSection === 'EntradasMaria' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'EntradasMaria' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Entradas</span>
						</button>


					</div>

					<header className={EXPOTECStyle.Header} onClick={ClickDONBOSCO}>
						<strong className={EXPOTECStyle.Title}>Maria Auxiliadora </strong>
						<i className={EXPOTECStyle.Icon} style={{ transform: DONBOSCOOpen ? 'rotate(-90deg)' : 'rotate(0deg)' }}><TiArrowSortedDown size={"1.3rem"} /></i>
					</header>
					<div className={EXPOTECStyle.ButtonContainer} style={{ display: DONBOSCOOpen ? '' : 'none' }}>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("DetallesDonBosco")}
							style={{
								backgroundColor: selectedSection === 'DetallesDonBosco' ? '#18c89d' : '',
								color: selectedSection === 'DetallesDonBosco' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'DetallesDonBosco' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Detalles</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("MapaDonBosco")}
							style={{
								backgroundColor: selectedSection === 'MapaDonBosco' ? '#18c89d' : '',
								color: selectedSection === 'MapaDonBosco' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'MapaDonBosco' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Mapa</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("ActividadesDonBosco")}
							style={{
								backgroundColor: selectedSection === 'ActividadesDonBosco' ? '#18c89d' : '',
								color: selectedSection === 'ActividadesDonBosco' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'ActividadesDonBosco' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Actividades</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("HorarioDonBosco")}
							style={{
								backgroundColor: selectedSection === 'HorarioDonBosco' ? '#18c89d' : '',
								color: selectedSection === 'HorarioDonBosco' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'HorarioDonBosco' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Horarios</span>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection("EntradasDonBosco")}
							style={{
								backgroundColor: selectedSection === 'EntradasDonBosco' ? '#18c89d' : '',
								color: selectedSection === 'EntradasDonBosco' ? '#1f2b39' : '#fff',
								fontWeight: selectedSection === 'EntradasDonBosco' ? 'bolder' : 'normal'
							}}
						><span className={EXPOTECStyle.Text}>Entradas</span>
						</button>


					</div>


				</nav>
				<section className={EXPOTECStyle.InfoContainer}>
					{renderContent()}
				</section>
			</main >
		</>
	);
};



