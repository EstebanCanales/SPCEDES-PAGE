"use client";
import React, { useState } from "react";
import infoStyles from "@/Style/Styles-Informacion.module.css";
import styles from '@/Style/ComponentStyle-EXPOTEC.module.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { SECTION_PATHS as PATH } from "@/ui/constants/paths";
import { expotecRender, mariaRender, donBoscoRender } from '@/ui/constants/infoPaths'

import {
	// DONBOSCO RENDERS
	DONBOSCO_Detalles, DONBOSCO_Mapa, DONBOSCO_Entradas, DONBOSCO_Horarios, DONBOSCO_Actividades,
	// EXPOTEC RENDERS
	EXPOTEC_Detalles, EXPOTEC_Mapa, EXPOTEC_Entradas, EXPOTEC_Horarios, EXPOTEC_Actividades, EXPOTEC_Expositores,
	// MARIA RENDERS 
	MARIA_Mapa, MARIA_Detalles, MARIA_Entradas, MARIA_Horarios, MARIA_Actividades
}
	from './components/'


const Eventos: React.FC = () => {
	const [selectedSection, setSelectedSection] = useState(PATH[0]);
	const [expotecOpen, setExpotecOpen] = useState(true)
	const [mariaOpen, setMariaOpen] = useState(true)
	const [donBoscoOpen, setDonBoscoOpen] = useState(true)

	const clickExpotec = () => { setExpotecOpen(!expotecOpen) }
	const clickMaria = () => { setMariaOpen(!mariaOpen) }
	const clickDonBosco = () => { setDonBoscoOpen(!donBoscoOpen) }

	const renderContent = () => {
		switch (selectedSection) {
			case PATH[0]: return <EXPOTEC_Detalles />;
			case PATH[1]: return <EXPOTEC_Mapa />;
			case PATH[2]: return <EXPOTEC_Expositores />;
			case PATH[3]: return <EXPOTEC_Actividades />;
			case PATH[4]: return <EXPOTEC_Horarios />;
			case PATH[5]: return <EXPOTEC_Entradas />;
			case PATH[6]: return <MARIA_Detalles />;
			case PATH[7]: return <MARIA_Mapa />;
			case PATH[8]: return <MARIA_Actividades />;
			case PATH[9]: return <MARIA_Horarios />;
			case PATH[10]: return <MARIA_Entradas />;
			case PATH[11]: return <DONBOSCO_Detalles />;
			case PATH[12]: return <DONBOSCO_Mapa />;
			case PATH[13]: return <DONBOSCO_Actividades />;
			case PATH[14]: return <DONBOSCO_Horarios />;
			case PATH[15]: return <DONBOSCO_Entradas />;
			default: return <EXPOTEC_Detalles />;
		}
	};

	return (
		<>
			<section className={infoStyles.Screen}>
				<header className={infoStyles.Header}>
					<div className={infoStyles.Title}>EVENTOS / INFORMACION</div>
				</header>
				<main className={styles.MainContainer}>
					<nav className={styles.Nav}>
						<header
							className={styles.Header}
							onClick={clickExpotec}
						>
							<strong className={styles.Title}>EXPOTEC </strong>
							<i className={styles.Icon} style={{ transform: expotecOpen ? 'rotate(-90deg)' : 'rotate(0deg)' }}><TiArrowSortedDown size={"1.3rem"} /></i>
						</header>

						<div className={styles.ButtonContainer} style={{ display: expotecOpen ? '' : 'none' }}>
							{expotecRender.map((path) => {
								return (
									<button
										key={path.key}
										className={styles.Button}
										onClick={() => setSelectedSection(path.section)}
										style={{
											backgroundColor: selectedSection === path.section ? '#18c89d' : '',
											color: selectedSection === path.section ? '#1f2b39' : '#fff',
											fontWeight: selectedSection === path.section ? 'bolder' : 'normal'
										}}
									><span className={styles.Text}>{path.name}</span>
									</button>
								)
							})}
						</div>


						<header className={styles.Header} onClick={clickMaria}>
							<strong className={styles.Title}>Maria Auxiliadora </strong>
							<i className={styles.Icon} style={{ transform: mariaOpen ? 'rotate(-90deg)' : 'rotate(0deg)' }}><TiArrowSortedDown size={"1.3rem"} /></i>
						</header>
						<div className={styles.ButtonContainer} style={{ display: mariaOpen ? '' : 'none' }}>
							{mariaRender.map((path) => {
								return (
									<button
										key={path.key}
										className={styles.Button}
										onClick={() => setSelectedSection(path.section)}
										style={{
											backgroundColor: selectedSection === path.section ? '#18c89d' : '',
											color: selectedSection === path.section ? '#1f2b39' : '#fff',
											fontWeight: selectedSection === path.section ? 'bolder' : 'normal'
										}}
									><span className={styles.Text}>{path.name}</span>
									</button>
								)
							})}
						</div>

						<header className={styles.Header} onClick={clickDonBosco}>
							<strong className={styles.Title}>Don Bosco </strong>
							<i className={styles.Icon} style={{ transform: donBoscoOpen ? 'rotate(-90deg)' : 'rotate(0deg)' }}><TiArrowSortedDown size={"1.3rem"} /></i>
						</header>

						<div className={styles.ButtonContainer} style={{ display: donBoscoOpen ? '' : 'none' }}>
							{donBoscoRender.map((path) => {
								return (
									<button
										key={path.key}
										className={styles.Button}
										onClick={() => setSelectedSection(path.section)}
										style={{
											backgroundColor: selectedSection === path.section ? '#18c89d' : '',
											color: selectedSection === path.section ? '#1f2b39' : '#fff',
											fontWeight: selectedSection === path.section ? 'bolder' : 'normal'
										}}
									><span className={styles.Text}>{path.name}</span>
									</button>
								)
							})}
						</div>
					</nav>
					<section className={styles.InfoContainer}>
						{renderContent()}
					</section>
				</main >
			</section>
		</>
	);
};

export default Eventos;
