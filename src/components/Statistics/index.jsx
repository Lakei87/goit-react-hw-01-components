import PropTypes from 'prop-types';

const Statistics = ({
    title,
    stats
}) => {
    return (
        <section className="statistics">
            {title && (<h2 className="title">{title}</h2>)}

            <ul className="stat-list">
                {stats.map( el => {
                    return <li className="item" key={el.id}>
                            <span className="label">{el.label}</span>
                            <span className="percentage">{el.percentage}</span>
                        </li>
                })}
            </ul>
        </section>)
}

export default Statistics;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })).isRequired,
};