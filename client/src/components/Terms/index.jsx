import PropTypes from 'prop-types';
import './Terms.style.css';

export function Terms({ subtitle, content }) {
    return (
        <section className="term_container">
            <h4 className="subtitle">{subtitle}</h4>
            <p className="content">{content}</p>
        </section>
    );
}

Terms.propTypes = {
    subtitle: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
