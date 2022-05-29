import PropTypes from 'prop-types';
import s from './section.module.css'

const Section = ({title, children}) => {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <h2 className={s.title}>{ title }</h2>
                {children}
            </div>
            
        </section>
    )
}

export default Section

Section.propTypes = {
    title: PropTypes.string.isRequired
}