import styles from "@/Style/Styles-Index.module.css";
import Image from "next/image";
interface ActualEventProps {
  Alt: string;
  Title: string;
  Source: string;
}

const ImageEvent = ({ Title, Source, Alt }: ActualEventProps) => {
  return (
    <section className={styles.ActualEventImage}>
      <header className={styles.ActualEventHeader}>
        <h2 className={styles.ActualEventText}>{Title}</h2>
      </header>
      <div className={styles.ActualEventDiv}>
        <Image
          style={{ borderRadius: "5px" }}
          width={350}
          height={350}
          alt={Alt}
          src={Source}
        />
      </div>
			<div className={styles.Paragraph}>
			Expotec es un evento donde se celebran las...
			</div>
    </section>
  );
};

export default ImageEvent
