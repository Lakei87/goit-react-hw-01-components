import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({
    title,
    stats
}) => {
    return (
        <section className={styles.statistics}>
            {title && (<h2 className={styles.title}>{title}</h2>)}

            <ul className={styles.statList}>
                {stats.map(el => {
                    const bgc = getRandomHexColor();
                    
                    return <li className={styles.item} style={{backgroundColor: bgc}} key={el.id}>
                            <span className={styles.label}>{el.label}</span>
                            <span className={styles.percentage}>{el.percentage}%</span>
                        </li>
                })}
            </ul>
        </section>)
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};

export default Statistics;