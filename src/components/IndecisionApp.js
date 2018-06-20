import React, { Component } from 'react';

//COMPONENTS
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class IndecisionApp extends Component {
  constructor(props) {
    super(props);

    this.handlerDeleteOptions = this.handlerDeleteOptions.bind(this);
    this.handlerPick = this.handlerPick.bind(this);
    this.handlerAddOption = this.handlerAddOption.bind(this);
    this.handlerRemoveItem = this.handlerRemoveItem.bind(this);

    this.state = {
      options: []
    }
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));

      if(options) {
        this.setState(() => ({
          options
        }))
      }
    } catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);

      localStorage.setItem('options', json);
    }
  }

  handlerDeleteOptions() {
    this.setState((prevState) => ({
      options: []
    }));
  }

  handlerPick() {
    const whatDo = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[whatDo]);
  }

  handlerAddOption(option) {
    option.preventDefault();

    const optionValue = option.target.elements.option.value.trim();
    option.target.elements.option.value = '';
    
    if(!optionValue) {
      alert('Enter valid value')
    } else if (this.state.options.indexOf(optionValue) > -1) {
      alert('This option already')
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat([optionValue])
      }));
    }
  }

  handlerRemoveItem(optionText) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => (
        !(option.indexOf(optionText) > -1)
      ))
    }))
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlerPick={this.handlerPick}
        />
        <Options 
          options={this.state.options} 
          handlerDeleteOptions={this.handlerDeleteOptions} 
          handlerRemoveItem={this.handlerRemoveItem}
        />
        <AddOption handlerAddOption={this.handlerAddOption} />
      </div>
    );
  }
}

export default IndecisionApp;