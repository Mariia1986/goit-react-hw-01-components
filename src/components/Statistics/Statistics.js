import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map((el) => {
          return (
            <li
              key={el.id}
              style={{
                background:
                  "#" +
                  (Math.random().toString(16) + "000000")
                    .substring(2, 8)
                    .toUpperCase(),
              }}
              className={s.item}
            >
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
