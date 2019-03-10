import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Timeline.css';

const Timeline = ({ animate, children, className, lineColor }) => (
  <div className="timeline--wrapper">
    <div
      className={classNames(className, 'timeline', 'chayns__color--white-3', {
        'timeline--animate': animate,
      })}
    >
      {children}
    </div>
  </div>
);

Timeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  lineColor: PropTypes.string,
  animate: PropTypes.bool,
};

Timeline.defaultProps = {
  animate: true,
  className: '',
  lineColor: '#000',
};

export default Timeline;
