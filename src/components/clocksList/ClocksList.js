import React from 'react';
import PropTypes from 'prop-types';
import ClockClass from '../clock/ClockClass';

import './clocksList.css';

class Clockslist extends React.Component {
  render() {
    const { clocks, deleteClock } = this.props;
    return (
      <ul className="clocks">
        {clocks.map((clock) => (
          <ClockClass
            timeZone={Number(clock.timeZone)}
            nameClock={clock.nameClock}
            deleteClock={() => deleteClock(clock.id)}
            key={clock.id}
          />
        ))}
      </ul>

    );
  }
}

Clockslist.propTypes = {
  clocks: PropTypes.arrayOf(PropTypes.shape({
    timeZone: PropTypes.string,
    nameClock: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
  deleteClock: PropTypes.func.isRequired,
};

export default Clockslist;
