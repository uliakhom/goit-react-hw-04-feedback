import PropTypes from 'prop-types';
import s from './statistics.module.css'

const Statistics = ({good, neutral, bad, total, percent}) => {
    return (
        <div>
            <p className={s.item}>Good: {good}</p>
            <p className={s.item}>Neutral: {neutral}</p>
            <p className={s.item}>Bad: {bad}</p>
            <p className={s.item}>Total: {total}</p>
            <p className={s.item}>Positive feedback: { percent}%</p>
    </div>
)
}

export default Statistics

Statistics.defaultProps = {
    good: 0, neutral: 0, bad: 0, total: 0, percent: 0
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
}