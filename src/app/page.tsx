"use client"
import { useState } from "react";

// COMPONENTS
import { Marquee } from "@devnomic/marquee";
import { EventInfo } from "./../components/EventInfo-Index";
import { IndexImage } from "./../components/IndexImage-Index";
import { ImageEvent } from "./../components/ImageEvent-Index";


//STYLES AND ICONS
import "@devnomic/marquee/dist/index.css";
import { TiArrowSortedDown } from "react-icons/ti";
import indexStyles from "@/Style/Styles-Index.module.css";


export default function home() {
	const [MoreInfoOpen, MoreInfoSetOpen] = useState(localStorage.getItem("Abierto") === "true");

	const ClickMoreInfo = () => {
		if (MoreInfoOpen) {
			MoreInfoSetOpen(false);
			localStorage.setItem("Abierto", "false");
		} else {
			MoreInfoSetOpen(true);
			localStorage.setItem("Abierto", "true");
		}
	};

	return (
		<>
			<section className={indexStyles.Screen}>

				<main className={indexStyles.Images}>
					<Marquee direction="up" pauseOnHover={true}>
						<IndexImage
							ImagesTitle={'EXPOTEC 2024 | SP-CEDES'}
							Info={'EXPOTEC 2024 | SP-CEDES'}
							Source={'https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg'}
							Alt={'Tumama'}
						/>
						<IndexImage
							ImagesTitle={'EXPOTEC 2024 | HowMuch'}
							Info={'EXPOTEC 2024 | HowMuch'}
							Source={'https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg'}
							Alt={'Tumama'}
						/>
						<IndexImage
							ImagesTitle={'EXPOTEC 2024 | KAMALA'}
							Info={'EXPOTEC 2024 | KAMALA'}
							Source={'https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg'}
							Alt={'Tumama'}
						/>
					</Marquee>
				</main>

				<div className={indexStyles.Info}>

					<ImageEvent
						Title={'EXPOTEC 2024'}
						Source={'https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg'}
						Alt={'Tumama'}
					/>

					<section className={indexStyles.ActualEventInfo}>
						<EventInfo
							Title={"EXPOTEC - 2024"}
							Paragraph="EXPOTEC - 2024 es un evento..."
						/>
						<header className={indexStyles.Container}>
							<div className={indexStyles.MoreInfo} style={{ height: MoreInfoOpen ? "19.7rem" : "3.4rem" }}>

								<footer><button className={indexStyles.MoreInfoTitle} onClick={ClickMoreInfo}>
									<span>ESPECIFICACIONES</span>
									<i className={indexStyles.MoreInfoTitleIcon} style={{ transform: MoreInfoOpen ? "rotate(-180deg)" : "rotate(0deg)" }}><TiArrowSortedDown size={"2.2rem"} /></i>
								</button></footer>

							</div>
						</header>
					</section>

				</div>
			</section>
		</>
	);
}
