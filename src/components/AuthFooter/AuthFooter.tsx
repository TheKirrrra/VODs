import React from "react";
import styles from "./AuthFooter.module.css";

const AuthFooter: React.FC = () => {
    return (
        <div className={styles.footer}>
          <h3>Contacts</h3>
          <div>
            E-Mail: coolname@email.com
            <br />
            Phonenumber: +7771337666
            <br />
            Adress: BakersStreet 121
          </div>
        </div>
      );
    };

export default AuthFooter;