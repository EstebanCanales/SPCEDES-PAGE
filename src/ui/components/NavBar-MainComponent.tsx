"use client";
import styles from "@/Style/ComponentStyle-Navbar.module.css";
import {
	FiMenu, FaHouse, BsFillPersonVcardFill,
	TiInfo, FaChartPie, BsFillPersonLinesFill,
	MdEvent, IoChatbubbleSharp, 
	BsPersonFillDash, BsPersonFillGear 

} from '@/ui/Icons/'
import { eventLinks, entreisLinks } from '@/ui/constants/paths'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";

const MiniMenuPath = [
	{ href: '/inicio', icon: <FaHouse size="1.7rem" /> },
	{ href: '/eventos/informacion', icon: <TiInfo size="1.7rem" /> },
	{ href: '/eventos/graficos', icon: <FaChartPie size="1.7rem" /> },
	{ href: '/entradas/encurso', icon: <BsPersonFillDash size='1.7rem' /> },
	{ href: '/entradas/pendientes', icon: <BsPersonFillGear size='1.7rem' />},
	{ href: '/entradas/historial', icon: <BsFillPersonLinesFill size='1.7rem' />},
	{ href: '/chat', icon: <IoChatbubbleSharp size="1.7rem" />}
];


export const NavBar: React.FC = () => {
	const [MenuOpen, MenuSetOpen] = useState(true);
	const MenuClick = () => { MenuSetOpen(!MenuOpen); };
	const pathname = usePathname();

	return (
		<>
			<div className={styles.MiniMenu}>
				<div className={styles.MenuIconContainer} onClick={MenuClick}>
					<i className={styles.MenuIcon}>
						<FiMenu size={"1.7rem"} />
					</i>
				</div>
				{MiniMenuPath.map((path, index) => {
					return (
						<Link
							key={index}
							style={{
								color: pathname === path.href ? '#16A17F' : '#fff'
							}}
							href={path.href}
							className={styles.SubMenuIconContainer}>
							<i className={styles.SubMenuIcon}>
								{path.icon}
							</i>
						</Link>
					)
				})}
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
							color: pathname === '/inicio' ? '#16A17F' : '',
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
										color: pathname === link.href ? '#16A17F' : '',
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
										color: pathname === link.href ? '#16A17F' : '',
									}}
								>
									<h3 className={styles.AnchorTitle}>{link.name}</h3>
								</Link>
							)
						})}
					</div>

					<Link
						style={{
							color: pathname === '/chat' ? '#16A17F' : '',
						}}
						href="/chat" className={styles.Link}>
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
