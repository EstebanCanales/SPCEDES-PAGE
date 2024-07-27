import indexStyles from "../Style/Styles-Index.module.css";
import Image from "next/image";
interface ActualEventProps {
  Alt: string;
  Title: string;
  Source: string;
}

export const ImageEvent = ({ Title, Source, Alt }: ActualEventProps) => {
  return (
    <section className={indexStyles.ActualEventImage}>
      <header className={indexStyles.ActualEventHeader}>
        <h2 className={indexStyles.ActualEventText}>{Title}</h2>
      </header>
      <div className={indexStyles.ActualEventDiv}>
        <Image
          style={{ borderRadius: "5px" }}
          width={350}
          height={350}
          alt={Alt}
          src={Source}
        />
      </div>
			<div className={indexStyles.Paragraph}>
			Expotec es un evento donde se celebran las...
			</div>
    </section>
  );
};
