"use client";
import React, { useState } from 'react';
import { RenderInfo } from '@/components/RenderInfo-Eventos'
import infoStyles from '@/Style/Styles-Informacion.module.css'
import { OptionList } from '@/components/OptionList-Informacion';

const options = ['EXPOTEC', 'Maria Axuiliadora', 'Aniversario Don Bosco'];

const Eventos: React.FC = () => {

	const [inputValue, setInputValue] = useState('');
	const [showOptions, setShowOptions] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		setShowOptions(true);
	};

	const handleOptionSelect = (option: string) => {
		setInputValue(option);
		setShowOptions(!showOptions);
		setSelectedOption(option);
		console.log(`Opción seleccionada: ${option}`);
	};

	return (
		<>
			<section className={infoStyles.Screen}>

				<header className={infoStyles.Header}>
					EVENTOS / INFORMACION
				</header>

				<div className={infoStyles.Browser}>
					<div className={infoStyles.BrowserContainerInput}>
						<input
							type="text"
							value={inputValue}
							onChange={handleInputChange}
							placeholder="Escribe aqui..."
							className={infoStyles.BrowserInput}
							onFocus={() => setShowOptions(true)}
						/>
						{showOptions && (<OptionList options={options} onSelect={handleOptionSelect} />)}
					</div>
				</div>

				{selectedOption && (<RenderInfo option={selectedOption} />)}
			</section>
		</>
	);
}

export default Eventos;
