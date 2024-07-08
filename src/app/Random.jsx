import React from "react";
import styles from "./ActionItemDetails.module.css";

const Random = ({ val, setObj1 }) => {
  const { label, text, textarea,star } = val;

  let textValues = null;

  if (typeof text === "object" && text !== null && !Array.isArray(text)) {
    textValues = Object.values(text);
  }

  return (
    <div className={styles.card}>
      <div className={styles.reportDescription}>
        <h1 className="card-title">
          <b>{label}</b>
        </h1>{" "}
        <br />
        {typeof text === "string" && <p className="card-text">{text}</p>}
        {typeof text === "object" && (
          <ul>
            {textValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        )}
        {textarea && (
          <textarea 
            name="action-item-description"
            style={{ width: "100%",borderBottom: "1px solid"}}
          />
        )}
      </div>
    </div>
  );
};

export default Random;
