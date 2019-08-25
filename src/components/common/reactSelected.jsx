import React from 'react';
import Select from 'react-select';

class ReactSelected extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({selectedOption});
  };
  render() {
    const {selectedOption} = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.props.options}
        placeholder="10"
        isSearchable="false"
      />
    );
  }
}

export default ReactSelected;
