import React from 'react';
import shortid from 'shortid';
import ClockList from '../clocksList/ClocksList';
import './appWorldClock.css';

export default class AppWorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameClock: '',
      timeZone: '',
      clocks: [],
    };
  }

  handleNameSityChange = ({ target }) => {
    const { value } = target;
    this.setState({ nameClock: value });
  };

  handleTimeZoneChange = ({ target }) => {
    const { value } = target;
    this.setState({ timeZone: value });
  };

  addClock = (e) => {
    e.preventDefault();
    const { nameClock, timeZone, clocks } = this.state;
    if (timeZone === '') {
      return;
    }
    this.setState({ clocks: [...clocks, { timeZone, nameClock, id: shortid.generate() }] });
    this.setState({ nameClock: '', timeZone: '' });
  };

  deleteClock = (id) => {
    const { clocks } = this.state;
    const sortClocks = clocks.filter((clock) => clock.id !== id);
    this.setState((prevState) => ({ ...prevState, clocks: sortClocks }));
  };

  render() {
    const { nameClock, timeZone, clocks } = this.state;
    return (
      <form className="wrapper" onSubmit={this.addClock}>
        <div className="controlPanel">
          <div className="input_wrapper">
            <label htmlFor="nameSity">Название</label><br />
            <input id="nameSity" type="text" value={nameClock} onChange={this.handleNameSityChange} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="timeZone">Временная зона</label><br />
            <input id="timeZone" type="text" value={timeZone} onChange={this.handleTimeZoneChange} />
          </div>
          <input className="addTime" type="submit" value="Добавить" />
        </div>
        <ClockList clocks={clocks} deleteClock={this.deleteClock} />
      </form>
    );
  }
}
