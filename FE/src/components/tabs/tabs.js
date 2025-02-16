import "./index.css";

export const tabsTitles = [
  { text: "Авто", id: "auto" },
  { text: "Авиа", id: "avia" },
  { text: "Ж/Д", id: "train" },
  { text: "Мультимодальные", id: "multi" },
];

export const Tabs = ({ onChange, selectedItem }) => {
  return (
    <div className="tabs-layout__container">
      <div className="tabs-layout__buttons-container">
        {tabsTitles.map(({ text, id }) => (
          <button
            className={`tabs-layout__button tabs-layout__button${id === selectedItem ? "--active" : ""}`}
            onClick={() => onChange(id)}
          >
            <span className="tabs-layout__button-text f f--m">{text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
