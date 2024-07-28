"use client";
import { useState } from "react";

// COMPONENTS
import { Marquee } from "@devnomic/marquee";
import { EventInfo, IndexImage, ImageEvent } from './components'

//STYLES AND ICONS
import "@devnomic/marquee/dist/index.css";
import { TiArrowSortedDown } from "react-icons/ti";
import styles from "@/Style/Styles-Index.module.css";

export default function home() {
  const [MoreInfoOpen, MoreInfoSetOpen] = useState(
    localStorage.getItem("Abierto") === "true"
  );

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
      <section className={styles.Screen}>
        <main className={styles.Images}>
          <Marquee direction="up" pauseOnHover={true}>
            <IndexImage
              ImagesTitle={"EXPOTEC 2024 | SP-CEDES"}
              Info={"EXPOTEC 2024 | SP-CEDES"}
              Source={
                "https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg"
              }
              Alt={"Tumama"}
            />
            <IndexImage
              ImagesTitle={"EXPOTEC 2024 | HowMuch"}
              Info={"EXPOTEC 2024 | HowMuch"}
              Source={
                "https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg"
              }
              Alt={"Tumama"}
            />
            <IndexImage
              ImagesTitle={"EXPOTEC 2024 | KAMALA"}
              Info={"EXPOTEC 2024 | KAMALA"}
              Source={
                "https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg"
              }
              Alt={"Tumama"}
            />
          </Marquee>
        </main>

        <div className={styles.Info}>
          <ImageEvent
            Title={"EXPOTEC 2024"}
            Source={
              "https://www.bisonequipmentandexcavators.com/wp-content/uploads/2024/01/landscape-placeholder-svgrepo-com.svg"
            }
            Alt={"Tumama"}
          />

          <section className={styles.ActualEventInfo}>
            <EventInfo
              Title={"EXPOTEC - 2024"}
              Paragraph="EXPOTEC - 2024 es un evento..."
            />
            <header className={styles.Container}>
              <div
                className={styles.MoreInfo}
                style={{ height: MoreInfoOpen ? "auto" : "3rem" }}
              >
                <footer>
                  <button className={styles.MoreInfoTitle} onClick={ClickMoreInfo}>
                    <span>ESPECIFICACIONES</span>
                    <i
                      className={styles.MoreInfoTitleIcon}
                      style={{
                        transform: MoreInfoOpen
                          ? "rotate(-180deg)"
                          : "rotate(0deg)",
                      }}
                    >
                      <TiArrowSortedDown size={"2rem"} />
                    </i>
                  </button>
										<p className={styles.Paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae, esse culpa voluptatem alias veritatis delectus maiores, quas est ea, voluptates minus veniam ad aperiam architecto. Fugiat saepe totam cum.</p>
                </footer>
              </div>
            </header>
          </section>
        </div>
      </section>
    </>
  );
}
