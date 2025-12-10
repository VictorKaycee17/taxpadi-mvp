import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Card Component
 * Mobile-first responsive card with fintech styling
 */
const Card = ({ children, className = '', title = '', subtitle = '' }) => {
    return (
        <div className={`card ${className} animate-fade-in`}>
            {(title || subtitle) && (
                <div className="mb-6">
                    {title && (
                        <h2 className="text-2xl font-bold text-text mb-1">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-text-light text-sm">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default Card;
