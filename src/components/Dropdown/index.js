import React from 'react';
import { toggleValue } from '../../utils';
import OptionSelection from './OptionSelection';
import OptionsList from './OptionsList';
import '../../css/Dropdown.css';

class Dropdown extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dropdownOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    const toggleFn = toggleValue(true, false);
    const {
      dropdownOpen
    } = this.state;
    this.setState({
      dropdownOpen: toggleFn(dropdownOpen)
    });
  }

  handleClick(value) {
    this.toggleDropdown();
    this.props.onChange(value);
  }

  render() {
    const {
      dropdownOpen
    } = this.state;
    
    const {
      options,
      defaultText,
      selected,
      onChange
    } = this.props;
    
    let selectedOption = options.filter(({
      value
    }) => value === selected)[0];

    const clearSelection = () => {
      selectedOption = void 0;
      onChange(void 0);
    };

    return (<div className="dropdown dropdown__root">
          <OptionSelection text={ selectedOption
                                    ? selectedOption.text
                                    : defaultText || "Select an Option" }
                           dropdownOpen={ dropdownOpen }
                           onOpenOptions={ this.toggleDropdown }
                           onClearOption={ clearSelection } />
          <OptionsList dropdownOpen={ dropdownOpen }
                      options={ options }
                      onClick={ this.handleClick }/>
          </div>);
  }
}

Dropdown.propTypes = {
  options: React.PropTypes.array,
  defaultText: React.PropTypes.string,
  selected: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  onChange: React.PropTypes.func
};

export default Dropdown;
