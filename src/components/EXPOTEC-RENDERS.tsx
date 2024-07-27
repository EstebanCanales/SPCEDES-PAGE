import EXPOTECStyle from '@/Style/ComponentStyle-EXPOTEC.module.css'
import { Map } from "../components/Map-EXPOTEC";
import Image from "next/image";

export const DetallesContent = () => {
	return (
		<>
			<header className={EXPOTECStyle.SubHeader}>
				<strong className={EXPOTECStyle.HeaderTitle}>
					Detalles / EXPOTEC / 2024
				</strong>
			</header>
			<main className={EXPOTECStyle.Content}>
				<p className={EXPOTECStyle.paragraph} style={{ marginTop: "1rem" }}>
					<span>
						Soluta, voluptatibus voluptates enim nulla ducimus eligendi tempore
						rem nihil necessitatibus eius aliquam nobis praesentium minus hic,
						totam sunt placeat. Suscipit repudiandae nesciunt ducimus laborum,
						hic ad perspiciatis itaque facere!
					</span>
					<span>
						Eligendi error maxime amet reprehenderit magnam, eveniet esse illum
						officia totam corrupti quibusdam repudiandae voluptatibus ut dolorum
						obcaecati, incidunt, ex accusantium harum deleniti ducimus
						assumenda? Vitae omnis illo blanditiis molestiae?
					</span>
				</p>
			</main>
		</>
	);
};

export const MapaContent = () => {
	return (
		<>
			<header className={EXPOTECStyle.SubHeader}>
				<strong className={EXPOTECStyle.HeaderTitle}>
					Mapa / EXPOTEC / 2024
				</strong>
			</header>
			<Map></Map>
		</>
	);
}

export const ExpositoresContent = () => {
	return (
		<>
			<header className={EXPOTECStyle.SubHeader}>
				<strong className={EXPOTECStyle.HeaderTitle}>
					Expositores / EXPOTEC / 2024
				</strong>
			</header>
			<div className={EXPOTECStyle.ContainerExhibitors}>
				<div className={EXPOTECStyle.gallery}>
				</div>
			</div>
		</>
	);
};

export const ActividadesContent = () => {
	return (
		<>
			<header className={EXPOTECStyle.SubHeader}>
				<strong className={EXPOTECStyle.HeaderTitle}>
					Actividades / EXPOTEC / 2024
				</strong>
			</header>
			<div className={EXPOTECStyle.ContainerExhibitors}>
				<div className={EXPOTECStyle.gallery}>
				</div>
			</div>
		</>
	);
};

export const HorarioContent = () => {
	return (
		<header className={EXPOTECStyle.SubHeader}>
			<strong className={EXPOTECStyle.HeaderTitle}>
				{" "}
				Horario / EXPOTEC / 2024
			</strong>
		</header>
	);
};

export const EntradasContent = () => {
	return (
		<header className={EXPOTECStyle.SubHeader}>
			<strong className={EXPOTECStyle.HeaderTitle}>
				{" "}
				Entradas / EXPOTEC / 2024
			</strong>
		</header>
	);
};
