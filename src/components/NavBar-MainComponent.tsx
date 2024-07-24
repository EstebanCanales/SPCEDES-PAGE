"use client";

// ICONS
import { FiMenu } from "react-icons/fi";
import { FaHouse } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { IoChatbubbleSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
// REACT
import Link from "next/link";
import { useState } from "react";
// STYLES
import LBarStyles from "./../Style/ComponentStyle-Navbar.module.css";

export const NavBar = () => {
  //////////////ESTADOS DE USESTATE////////////////

  const [MenuOpen, MenuSetOpen] = useState(!false); // Estado para abrir y cerrar el menú lateral
  const MenuClick = () => {
    MenuSetOpen(!MenuOpen);
  };

  const [EventosOpen, EventosSetOpen] = useState(false); // Estado para abrir y cerrar el menú de los Eventos
  const EventosClick = () => {
    EventosSetOpen(!EventosOpen);
  };

  const [EntriesOpen, EntriesSetOpen] = useState(false); // Estado para abrir y cerrar el menú lateral de las Entradas
  const EntriesClick = () => {
    EntriesSetOpen(!EntriesOpen);
  };

  return (
    <>
      <div className={LBarStyles.MenuIconContainer} onClick={MenuClick}>
        <i className={LBarStyles.MenuIcon}>
          <FiMenu size={"1.7rem"} />
        </i>
      </div>

      <section
        id="MenuContainer"
        className={LBarStyles.MenuContainer}
        style={{ transform: MenuOpen ? "translateX(-16rem)" : "translateX(0)" }}
      >
        <div className={LBarStyles.Logo} onClick={MenuClick}>
          <i className={LBarStyles.MenuIcon}>
            <FiMenu size={"1.7rem"} />
          </i>
          <h1 className={LBarStyles.SPNAME}>SP-CEDES</h1>
        </div>

        <nav className={LBarStyles.SubContainer}>
          <Link href="/" className={LBarStyles.Link}>
            <i className={LBarStyles.Icon}>
              <FaHouse size={"1.5rem"} />
            </i>
            <span className={LBarStyles.Title}>Inicio</span>
          </Link>

          <div
            className={LBarStyles.Links}
            onClick={EventosClick}
            style={{
              borderRadius: EventosOpen ? "0.75rem 0.75rem 0 0" : "0.75rem",
            }}
          >
            <i className={LBarStyles.Icon}>
              <MdEvent size={"1.5rem"} />
            </i>
            <span className={LBarStyles.Title}>Eventos</span>
          </div>

          <div
            className={LBarStyles.LinksDisplay}
            style={{ display: EventosOpen ? "block" : "none" }}
          >
            <Link href="/eventos/informacion/" className={LBarStyles.SubLink}>
              <h3 className={LBarStyles.AnchorTitle}>Informacion</h3>
            </Link>
            <Link href="/eventos/graficos" className={LBarStyles.SubLink}>
              <h3 className={LBarStyles.AnchorTitle}>Graficos</h3>
            </Link>
          </div>

          <div
            className={LBarStyles.Links}
            onClick={EntriesClick}
            style={{
              borderRadius: EntriesOpen ? "0.75rem 0.75rem 0 0" : "0.75rem",
            }}
          >
            <i className={LBarStyles.Icon}>
              <BsFillPersonVcardFill size={"1.5rem"} />
            </i>
            <span className={LBarStyles.Title}>Entradas</span>
          </div>

          <div
            className={LBarStyles.LinksDisplay}
            style={{ display: EntriesOpen ? "block" : "none" }}
          >
            <Link href="/entradas/encurso" className={LBarStyles.SubLink}>
              <h3 className={LBarStyles.AnchorTitle}>Citas en curso</h3>
            </Link>
            <Link href="/entradas/pendientes" className={LBarStyles.SubLink}>
              <h3 className={LBarStyles.AnchorTitle}>Citas pendientes</h3>
            </Link>
            <Link href="/entradas/historial" className={LBarStyles.SubLink}>
              <h3 className={LBarStyles.AnchorTitle}>Historial</h3>
            </Link>
          </div>

          <Link href="/chat" className={LBarStyles.Link}>
            <i className={LBarStyles.Icon}>
              <IoChatbubbleSharp size={"1.5rem"} />
            </i>
            <span className={LBarStyles.Title}>Chat</span>
          </Link>
        </nav>
      </section>
      <div
        className={LBarStyles.BackGround}
        onClick={MenuClick}
        style={{ display: MenuOpen ? "none" : "flex" }}
      ></div>
    </>
  );
};
