"use client";

import styles from "@/Style/Styles-Index.module.css";
import Image from "next/image";
import { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { MdOutlineCheckCircle } from "react-icons/md";

interface IndexImageProps {
	ImagesTitle: string;
	Alt: string;
	Source: string;
	Info: string;
}

const IndexImage = ({
	ImagesTitle,
	Alt,
	Source,
	Info,
}: IndexImageProps) => {
	const [visibility, setVisibility] = useState<"hiddenAlert" | "visible">(
		"hiddenAlert"
	);

	const handleClick = () => {
		navigator.clipboard.writeText(Info);
		setTimeout(() => {
			setVisibility("visible");
			setTimeout(() => {
				setVisibility("hiddenAlert");
			}, 3000);
		}, 0);
	};

	return (
		<>
			<div className={styles.ImagesContainer}>
				<div
					className={styles.Alert}
					style={{
						opacity: visibility === "hiddenAlert" ? "0" : "1"
					}}
				>
					<div className={styles.AlertIcon}><MdOutlineCheckCircle size={"1.6rem"} /></div>
					<div className={styles.AlertText}>Informacion copia</div>
				</div>
				<Image
					style={{ height: "91%", width: "100%", borderRadius: "10px" }}
					width={1}
					height={1}
					alt={Alt}
					src={Source}
				/>
				<footer className={styles.ImageFooter}>
					<h3 className={styles.ImagesTitle}>{ImagesTitle}</h3>
					<div className={styles.ImagesAction}>
						<div className={styles.Icon} onClick={handleClick}>
							<FaCopy size={"1.2rem"}/>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};

export default IndexImage
