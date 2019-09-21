import React, {Component} from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker2';

export default class ReactClass extends Component {
  constructor(props) {
    super(props);
    this.state = { value: moment() };
  }
  render() {
    return <div className="App2" >
         <DatePicker 
      onChange={value => this.setState({ value })}
      value={this.state.value}
    ReactClass="msd" />
    </div>
  }
}