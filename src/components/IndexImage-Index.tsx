'use client'

import indexStyles from './../Style/Styles-Index.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { FaCopy } from "react-icons/fa6";
import { MdOutlineCheckCircle } from "react-icons/md";

interface IndexImageProps {
	ImagesTitle: string
	Alt: string
	Source: string
	Info: string
}

export const IndexImage = ({ ImagesTitle, Alt, Source, Info }: IndexImageProps) => {

	const [visibility, setVisibility] = useState<'hiddenAlert' | 'visible'>('hiddenAlert');

	const handleClick = () => {
		navigator.clipboard.writeText(Info)
		setTimeout(() => {
			setVisibility('visible');
			setTimeout(() => {
				setVisibility('hiddenAlert');
			}, 3000);
		}, 0);
	};


	return (
		<>
			<div className={indexStyles.ImagesContainer}>
				<div className={indexStyles.Alert} style={{ opacity: visibility === 'hiddenAlert' ? '0' : '1' }}>
					<div className={indexStyles.AlertIcon}><MdOutlineCheckCircle size={'1.6rem'} /></div>
					<div className={indexStyles.AlertText}>Informacion copia</div>
				</div>
				<Image style={{ height: '90%', width: '100%', borderRadius: '10px' }} width={1} height={1} alt={Alt} src={Source} />
				<footer className={indexStyles.ImageFooter}>
					<h3 className={indexStyles.ImagesTitle}>{ImagesTitle}</h3>
					<div className={indexStyles.ImagesAction}>
						<div className={indexStyles.Icon} onClick={handleClick}>
							<FaCopy size={'2rem'} color={'072E33'} />
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}

