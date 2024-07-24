import { useState } from 'react'
import Image from 'next/image'
import { TiArrowSortedDown } from 'react-icons/ti'
import EXPOTECStyle from '../Style/ComponentStyle-EXPOTEC.module.css'
import { Map } from '../components/Map-EXPOTEC'
import { PATHS_EXPOTEC } from '../components/constants/paths.js'

export const EXPOTEC = () => {

	const [selectedSection, setSelectedSection] = useState(PATHS_EXPOTEC[0]);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleSection = (section: string) => {
		if (selectedSection === section) {
			setIsOpen(!isOpen);
		} else {
			setSelectedSection(section);
			setIsOpen(true);
		}
	};

	const renderContent = () => {
		switch (selectedSection) {
			case PATHS_EXPOTEC[0]: return <DetallesContent />;
			case PATHS_EXPOTEC[1]: return <MapaContent />;
			case PATHS_EXPOTEC[2]: return <ExpositoresContent />;
			case PATHS_EXPOTEC[3]: return <HorarioContent />;
			case PATHS_EXPOTEC[4]: return <EntradasContent />;
			default: return <DetallesContent />;
		}
	};

	return (
		<>
			<main className={EXPOTECStyle.MainContainer}>
				<nav className={EXPOTECStyle.Nav}>
					<div className={EXPOTECStyle.ButtonContainer}>
						<button className={EXPOTECStyle.Button}
							onClick={() => toggleSection('detalles')}> {/*Path to detalles*/}
							<span className={EXPOTECStyle.Text}><strong>Detalles / </strong> EXPOTEC / 2024</span>
							<i className={EXPOTECStyle.Icon}><TiArrowSortedDown size={"2.2rem"} /></i>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection('mapa')}>
							<span className={EXPOTECStyle.Text}><strong>Mapa / </strong> EXPOTEC / 2024</span>
							<i className={EXPOTECStyle.Icon}><TiArrowSortedDown size={"2.2rem"} /></i>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection('expositores')}>
							<span className={EXPOTECStyle.Text}><strong>Expositores / </strong> EXPOTEC / 2024</span>
							<i className={EXPOTECStyle.Icon}><TiArrowSortedDown size={"2.2rem"} /></i>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection('horarios')}>
							<span className={EXPOTECStyle.Text}><strong>Horarios / </strong> EXPOTEC / 2024</span>
							<i className={EXPOTECStyle.Icon}><TiArrowSortedDown size={"2.2rem"} /></i>
						</button>
						<button className={EXPOTECStyle.Button} onClick={() => setSelectedSection('entradas')}>
							<span className={EXPOTECStyle.Text}><strong>Entradas / </strong> EXPOTEC / 2024</span>
							<i className={EXPOTECStyle.Icon}><TiArrowSortedDown size={"2.2rem"} /></i>
						</button>
					</div>
				</nav>
				<section className={EXPOTECStyle.InfoContainer}>
					{renderContent()}
				</section>
			</main >
		</>
	)
}

const DetallesContent = () => {
	return (
		<>
			<header className={EXPOTECStyle.SubHeader}>
				<strong className={EXPOTECStyle.HeaderTitle}> Detalles / EXPOTEC / 2024</strong>
			</header>
			<main className={EXPOTECStyle.Content}>
				<p className={EXPOTECStyle.paragraph}>
					<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium similique quo consequatur sed fugit officia quos. Quam animi laborum magnam voluptates vero obcaecati maiores eveniet! Laboriosam atque tempore facilis.</span>
					<span>Soluta, voluptatibus voluptates enim nulla ducimus eligendi tempore rem nihil necessitatibus eius aliquam nobis praesentium minus hic, totam sunt placeat. Suscipit repudiandae nesciunt ducimus laborum, hic ad perspiciatis itaque facere!</span>
					<span>Eligendi error maxime amet reprehenderit magnam, eveniet esse illum officia totam corrupti quibusdam repudiandae voluptatibus ut dolorum obcaecati, incidunt, ex accusantium harum deleniti ducimus assumenda? Vitae omnis illo blanditiis molestiae?</span>
				</p>
				<p className={EXPOTECStyle.paragraph} style={{ marginTop: "1rem" }}>
					<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium similique quo consequatur sed fugit officia quos. Quam animi laborum magnam voluptates vero obcaecati maiores eveniet! Laboriosam atque tempore facilis.</span>
					<span>Soluta, voluptatibus voluptates enim nulla ducimus eligendi tempore rem nihil necessitatibus eius aliquam nobis praesentium minus hic, totam sunt placeat. Suscipit repudiandae nesciunt ducimus laborum, hic ad perspiciatis itaque facere!</span>
					<span>Eligendi error maxime amet reprehenderit magnam, eveniet esse illum officia totam corrupti quibusdam repudiandae voluptatibus ut dolorum obcaecati, incidunt, ex accusantium harum deleniti ducimus assumenda? Vitae omnis illo blanditiis molestiae?</span>
				</p>
				<div className={EXPOTECStyle.Images}>
					<div className={EXPOTECStyle.ImageDiv}>
						<Image width={400} height={400} alt='123' src='https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg' />
					</div>
					<div className={EXPOTECStyle.ImageDiv}>
						<Image width={400} height={400} alt='123' src='https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg' />
					</div>
					<div className={EXPOTECStyle.ImageDiv}>
						<Image width={400} height={400} alt='123' src='https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg' />
					</div>
				</div>
			</main>
		</>
	)
}

const MapaContent = () => {
	return (
		<>
			<header className={EXPOTECStyle.SubHeader}>
				<strong className={EXPOTECStyle.HeaderTitle}> Mapa / EXPOTEC / 2024</strong>
			</header>
			<Map></Map>
		</>
	)
}

const ExpositoresContent = () => {
	return (
		<>
			<header className={EXPOTECStyle.SubHeader}>
				<strong className={EXPOTECStyle.HeaderTitle}>  Expositores / EXPOTEC / 2024</strong>
			</header>
			<div className={EXPOTECStyle.ContainerExhibitors}>
				<div className={EXPOTECStyle.gallery}>
					<div className={EXPOTECStyle.galleryItem}>
						<Image
							width={100}
							height={100}
							src=""
							alt="Imagen minimalista 1"
						/>
					</div>
					<div className={EXPOTECStyle.galleryItem}>
						<Image
							width={100}
							height={100}
							src=""
							alt="Imagen minimalista 2"
						/>
					</div>
					<div className={EXPOTECStyle.galleryItem}>
						<Image
							width={100}
							height={100}
							src=""
							alt="Imagen minimalista 3"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

const HorarioContent = () => {
	return (
		<header className={EXPOTECStyle.SubHeader}>
			<strong className={EXPOTECStyle.HeaderTitle}> Horario / EXPOTEC / 2024</strong>
		</header>
	)
}

const EntradasContent = () => {
	return (
		<header className={EXPOTECStyle.SubHeader}>
			<strong className={EXPOTECStyle.HeaderTitle}> Entradas / EXPOTEC / 2024</strong>
		</header>
	)
}


