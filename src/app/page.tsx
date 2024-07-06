"use client";

import { useState } from 'react';
import styles from './ActionItemDetails.module.css';

const ActionItemDetails = () => {
  const [notify, setNotify] = useState(false);

  const handleNotify = () => {
    setNotify(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1><b>Action Item Details</b></h1>
      </div>
      <div className={styles.card}>
        <div className={styles.reportDescription}>
          <h1><b>Report Description</b></h1><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.reportDescription}>
          <h1><b>Action ID</b></h1><br />
          <p>116416</p> 
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.reportDescription}>
          <h1><b>Report Number:</b></h1><br />
          <p>2020-00109</p> 
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.reportDescription}>
          <h1><b>Recommendation Level</b></h1><br />
          <p>- Address the casual factor</p> 
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.reportDescription}>
          <h1><b>Action Item Description <span className={styles.redAsterisk}>*</span></b></h1><br />
          <p>Action Item Description:</p>
        </div>
        <textarea className={styles.textarea}></textarea>
      </div>

      <div className={styles.card}>
        <div className={styles.reportDescription}>
          <h1><b>Assigned To <span className={styles.redAsterisk}>*</span></b></h1><br />
          <p>Bhupender Sharma <span className={styles.AddIcon}>+</span></p> 
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.reportDescription}>
          <h1><b>Preventive/Corrective</b></h1><br />
          <p>Preventive</p> 
        </div>
      </div>

      
      <div className={styles.card}>
        <div className={styles.reportDescription}>
          <h1><b>Priority:</b></h1><br />
          <p>- 1st Level</p>
          <p>- 2nd Level</p> 
          <p>- 3rd Level</p> 
        </div>
      </div>
      
      <div className={styles.buttonRow}>
        <button className={styles.button1} onClick={handleNotify}>Save Only</button>
        <button className={styles.button2} onClick={handleNotify}>Save & Notify</button>
        <button className={styles.button3} onClick={handleNotify}>Notify</button>
        {notify && <span>Notification sent!</span>}
      </div>
    </div>
  );
};

export default ActionItemDetails;
