import React from "react";
import moment from "moment-timezone";

const TableData = (props) => {
  return props.achievments.map((el, index) => (
    <tr key={el.key + index}>
      <th scope="row"></th>
      <td>{el.activity}</td>
      <td>{el.type}</td>
      <td>
        {moment(el.date, ["DD.MM.YYYY HH:mm"])
          .local()
          .startOf("seconds")
          .fromNow()}
      </td>
    </tr>
  ));
};

export default TableData;
