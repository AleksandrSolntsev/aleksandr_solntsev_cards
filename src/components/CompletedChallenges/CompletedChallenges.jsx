import React from "react";
import styles from "./CompletedChallenges.module.css";
import TableData from "./TableDatas";

const CompletedChallenges = (props) => 
    <div className={styles.CompletedChallengesBlock}>
      <h2>Completed Challenges:</h2>
      <div className={styles.CompletedChallengesTable}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tHead}>
              <td>&nbsp;</td>
              <th className={styles.titleTh} scope="col">
                Title
              </th>
              <th scope="col">Type</th>
              <th scope="col">When</th>
            </tr>
          </thead>
          <tbody className={styles.tBody}>
            <TableData achievments={props.achievments} />
          </tbody>
        </table>
      </div>
    </div>

export default CompletedChallenges;
