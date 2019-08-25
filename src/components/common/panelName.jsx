import React, {Component} from 'react';

class PanelName extends Component {
  constructor (props) {
    super (props);
    this.state = {addClass: false};
  }
  toggle () {
    this.setState ({addClass: !this.state.addClass});
  }
  render () {
    let boxClass = ['fa fa-bars menu-icon box'];
    if (this.state.addClass) {
      boxClass.push ('green');
    }
    return (
      <li key="1" className="change-mode">
        <span>{this.props.panelName}</span>
        <i className={boxClass.join (' ')} onClick={this.toggle.bind (this)} />
      </li>
    );
  }
}

export default PanelName;
