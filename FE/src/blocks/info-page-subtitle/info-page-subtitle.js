import style from "./info-page-subtitle.module.css";

export const InfoPageSubtitle = ({ text }) => {
  return (
    <div className={style.container}>
      <span className={style.content}>{text}</span>
    </div>
  );
};
