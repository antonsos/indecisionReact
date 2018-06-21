import React, { Component } from 'react';

//COMPONENTS
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
  constructor(props) {
    super(props);

    this.handlerDeleteOptions = this.handlerDeleteOptions.bind(this);
    this.handlerPick = this.handlerPick.bind(this);
    this.handlerAddOption = this.handlerAddOption.bind(this);
    this.handlerRemoveItem = this.handlerRemoveItem.bind(this);
    this.handlerCloseModal = this.handlerCloseModal.bind(this);

    this.state = {
      options: [],
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer',
      error: undefined,
      modalLogic: ''
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
    this.setState(() => ({
      modalLogic: this.state.options[whatDo]
    }));
  }

  handlerCloseModal() {
    this.setState(() => ({
      modalLogic: ''
    }));
  }

  handlerAddOption(option) {
    option.preventDefault();
    this.setState({ error: undefined });
    const optionValue = option.target.elements.option.value.trim();
    option.target.elements.option.value = '';

    
    
    if(!optionValue) {
      this.setState(() => ({ error: 'Enter valid value to add item' }));
    } else if(this.state.options.indexOf(optionValue) > -1) {
      this.setState(() => ({ error: 'This option already exists' }));
    } else if(optionValue) {
      this.setState((prevState) => ({
        options: prevState.options.concat(optionValue)
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
    
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <div className='container'>
          <Action 
            hasOptions={this.state.options.length > 0} 
            handlerPick={this.handlerPick}
          />
          <div className='widget'>
            <Options 
              options={this.state.options} 
              handlerDeleteOptions={this.handlerDeleteOptions} 
              handlerRemoveItem={this.handlerRemoveItem}
            />
            <AddOption 
              error={this.state.error}
              handlerAddOption={this.handlerAddOption} 
            />
          </div>
        </div>
        <OptionModal
         modalLogic={this.state.modalLogic}
         modalText={this.state.modalText}
         handlerCloseModal={this.handlerCloseModal}
        />
      </div>
    );
  }
}

export default IndecisionApp;