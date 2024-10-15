import PropTypes from 'prop-types';
import './PageTitle.style.css';

export function PageTitle({ title }) {
    return <h1 className="title">{title}</h1>;
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
};
