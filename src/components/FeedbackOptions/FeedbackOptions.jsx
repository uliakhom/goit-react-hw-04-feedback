import PropTypes from 'prop-types';
import s from './feedbackOptions.module.css'

const feedbackOptions = ({ options, onLeaveFeedback }) => {
    const elements = options.map((option, index) => (
        <p key={index} className={s.item}><button className={s.btn} onClick={() => onLeaveFeedback(option)}>{ option}</button></p>
    ))

    return (
        <div className={s.container}>
            {elements}
        </div>
    )
}

export default feedbackOptions

feedbackOptions.defaultProps = {
    onLeaveFeedback: function () {}
}

feedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired)
}