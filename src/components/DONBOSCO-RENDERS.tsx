import DONBOSCOStyle from './../Style/ComponentStyle-DONBOSCO.module.css'
import { Map } from '@/components/Map-DONBOSCO'

export const DetallesContent = () => {
	return (
		<>
			<header className={DONBOSCOStyle.SubHeader}>
				<strong className={DONBOSCOStyle.HeaderTitle}>
					Detalles / Aniversario Don Bosco / 2024
				</strong>
			</header>
			<main className={DONBOSCOStyle.Content}>
				<p className={DONBOSCOStyle.paragraph} style={{ marginTop: "1rem" }}>
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
			<header className={DONBOSCOStyle.SubHeader}>
				<strong className={DONBOSCOStyle.HeaderTitle}>
					Mapa / Aniversario Don Bosco / 2024
				</strong>
				<Map />
			</header>
		</>
	);
}

export const ExpositoresContent = () => {
	return (
		<>
			<header className={DONBOSCOStyle.SubHeader}>
				<strong className={DONBOSCOStyle.HeaderTitle}>
					Actividades / Aniversario Don Bosco / 2024
				</strong>
			</header>
			<div className={DONBOSCOStyle.ContainerExhibitors}>
				<div className={DONBOSCOStyle.gallery}>
				</div>
			</div>
		</>
	);
};


export const HorarioContent = () => {
	return (
		<header className={DONBOSCOStyle.SubHeader}>
			<strong className={DONBOSCOStyle.HeaderTitle}>
				{" "}
				Horario / Aniversario Don Bosco / 2024
			</strong>
		</header>
	);
};

export const EntradasContent = () => {
	return (
		<header className={DONBOSCOStyle.SubHeader}>
			<strong className={DONBOSCOStyle.HeaderTitle}>
				{" "}
				Entradas / Aniversario Don Bosco / 2024
			</strong>
		</header>
	);
};
