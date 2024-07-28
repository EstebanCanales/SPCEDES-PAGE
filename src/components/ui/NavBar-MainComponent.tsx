"use client";

// ICONS
import styles from "@/Style/ComponentStyle-Navbar.module.css";
import { FiMenu } from "react-icons/fi";
import { FaHouse } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { IoChatbubbleSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import {
	eventLinks,
	entreisLinks
} from '@/components/constants/paths'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";

export const NavBar = () => {
	const [MenuOpen, MenuSetOpen] = useState(true);
	const MenuClick = () => {MenuSetOpen(!MenuOpen);};
	const pathname = usePathname();

	return (
		<>
			<div className={styles.MenuIconContainer} onClick={MenuClick}>
				<i className={styles.MenuIcon}>
					<FiMenu size={"1.7rem"} />
				</i>
			</div>

			<section id="MenuContainer" className={styles.MenuContainer}
				style={{ transform: MenuOpen ? "translateX(-16rem)" : "translateX(0)" }}
			>
				<div className={styles.Logo} onClick={MenuClick}>
					<i className={styles.MenuIcon}><FiMenu size={"1.7rem"} /></i>
					<h1 className={styles.SPNAME}>SP-CEDES</h1>
				</div>

				<nav className={styles.SubContainer}>

					<Link
						href="/inicio"
						className={styles.Link}
						style={{
							backgroundColor: pathname === '/inicio' ? '#16A17F' : '#263546',
							color: pathname === '/inicio' ? '#263546' : 'white',
						}}
					>
						<i className={styles.Icon}>
							<FaHouse size={"1.3rem"} />
						</i>
						<span className={styles.Title}>Inicio</span>
					</Link>

					<div className={styles.Links}>
						<i className={styles.Icon}><MdEvent size={"1.3rem"} /></i>
						<span className={styles.Title}>Eventos</span>
					</div>

					<div className={styles.LinksDisplay}>
						{eventLinks.map((link) => {
							return (
								<Link
									key={link.key}
									className={styles.SubLink}
									href={link.href}
									style={{
										backgroundColor: pathname === link.href ? '#16A17F' : '#263546',
										color: pathname === link.href ? '#263546' : 'white',
									}}
								>
									<h3 className={styles.AnchorTitle}>{link.name}</h3>
								</Link>
							)
						})}
					</div>

					<div className={styles.Links}>
						<i className={styles.Icon}><BsFillPersonVcardFill size={"1.3rem"} /></i>
						<span className={styles.Title}>Entradas</span>
					</div>

					<div className={styles.LinksDisplay}>
						{entreisLinks.map((link) => {
							return (
								<Link
									key={link.key}
									href={link.href}
									className={styles.SubLink}
									style={{
										backgroundColor: pathname === link.href ? '#16A17F' : '#263546',
										color: pathname === link.href ? '#263546' : 'white',
									}}
								>
									<h3 className={styles.AnchorTitle}>{link.name}</h3>
								</Link>
							)
						})}
					</div>

					<Link href="/chat" className={styles.Link}>
						<i className={styles.Icon}>
							<IoChatbubbleSharp size={"1.3rem"} />
						</i>
						<span className={styles.Title}>Chat</span>
					</Link>
				</nav>
			</section>
			<div
				className={styles.BackGround}
				onClick={MenuClick}
				style={{ transform: MenuOpen ? "translateX(-100%)" : "translateX(0)" }}
			></div>
		</>
	);
};
