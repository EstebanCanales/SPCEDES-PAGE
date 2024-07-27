"use client";
import React from "react";
import infoStyles from "@/Style/Styles-Informacion.module.css";
import { EXPLORER } from '@/components/EventInfo-EXPLORER'

const Eventos: React.FC = () => {

	return (
		<>
			<section className={infoStyles.Screen}>
				<header className={infoStyles.Header}>
					<div className={infoStyles.Title}>
						EVENTOS / INFORMACION
					</div>
				</header>
				<EXPLORER />
			</section>
		</>
	);
};

export default Eventos;
