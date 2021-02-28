import React from "react";
import s from "./TransactionHistory.module.css";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const TransactionHistory = ({ items }) => {
  return (
    <div className={s.transactionHistory}>
    <Table striped bordered hover size="sm" >
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </div>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string,
      currency: PropTypes.string.isRequired,
    })
  ),
};
