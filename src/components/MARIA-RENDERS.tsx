import MARIAStyle from '@/Style/ComponentStyle-MARIA.module.css'
import { Map } from '@/components/Map-MARIA' 

export const DetallesContent = () => {
	return (
		<>
			<header className={MARIAStyle.SubHeader}>
				<strong className={MARIAStyle.HeaderTitle}>
					Detalles / Maria Auxiliadora / 2024
				</strong>
			</header>
			<main className={MARIAStyle.Content}>
				<p className={MARIAStyle.paragraph} style={{ marginTop: "1rem" }}>
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
			<header className={MARIAStyle.SubHeader}>
				<strong className={MARIAStyle.HeaderTitle}>
					Mapa / Maria Auxiliadora / 2024
				</strong>
				<Map />
			</header>
		</>
	);
}

export const ExpositoresContent = () => {
	return (
		<>
			<header className={MARIAStyle.SubHeader}>
				<strong className={MARIAStyle.HeaderTitle}>
					Actividades / Maria Auxiliadora / 2024
				</strong>
			</header>
			<div className={MARIAStyle.ContainerExhibitors}>
				<div className={MARIAStyle.gallery}>
				</div>
			</div>
		</>
	);
};


export const HorarioContent = () => {
	return (
		<header className={MARIAStyle.SubHeader}>
			<strong className={MARIAStyle.HeaderTitle}>
				{" "}
				Horario / Maria Auxiliadora / 2024
			</strong>
		</header>
	);
};

export const EntradasContent = () => {
	return (
		<header className={MARIAStyle.SubHeader}>
			<strong className={MARIAStyle.HeaderTitle}>
				{" "}
				Entradas / Maria Auxiliadora / 2024
			</strong>
		</header>
	);
};
