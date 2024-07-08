"use client";

import { useState , useEffect} from "react";
import styles from "./ActionItemDetails.module.css";
import Random from "./Random";

const ActionItemDetails = () => {
  const [notify, setNotify] = useState(false);
  const handleNotify = () => {
    setNotify(true);
  };

  const [obj1, setObj1] = useState([
    {
      label: "Report Description",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, aspernatur!",
      textarea: false
    },
    { label: "Action ID", text: "116416" },
    { label: "Report Number:", text: "2020-00109",
      textarea: false
     },
    {
      label: "Recommendation Level",
      text: "- Address the casual factor",
      textarea: false
    },
    {
      label: "Action Item Description *",
      text: "Action Item Description: *",
      textarea: true
    },
    { label: "Assigned To *", text: "Bhupender Sharma +",textarea: false },
    { label: "Preventive/ Corrective", text: "Preventive",textarea: false },
    { label: "Priority:", text: {Level1: "1st Level",Level2: "2nd Level",Level3: "3rd Level"},textarea: false},
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <b>Action Item Details</b>
        </h1>
      </div>
      {obj1.map((val, index) => (
        <Random key={index} val={val} setObj1={setObj1} />
      ))}
      

      <div className={styles.buttonRow}>
        <button className={styles.button1} onClick={handleNotify}>
          Save Only
        </button>
        <button className={styles.button2} onClick={handleNotify}>
          Save & Notify
        </button>
        <button className={styles.button3} onClick={handleNotify}>
          Notify
        </button>
        {notify && <span>Notification sent!</span>}
      </div>
    </div>
  );
};

export default ActionItemDetails;
