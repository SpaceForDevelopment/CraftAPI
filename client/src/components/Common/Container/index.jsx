import PropTypes from 'prop-types';
import './Container.style.css';

export function Container({ children }) {
    return <section className="container">{children}</section>;
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};
