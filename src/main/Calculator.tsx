import React, { Component } from 'react';
import './Calculator.scss'
import { Button } from '../components/Button/Button';
import { Display } from '../components/Display/Display';
export interface CalculatorProps { }


const InitialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...InitialState }

    constructor(props: CalculatorProps) {
        super(props);
        this.clear = this.clear.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addNumber = this.addNumber.bind(this);
    }

    clear() {
        this.setState({ ...InitialState })
    }

    setOperation() {

    }

    addNumber(n: string) {
        if (n === '.' && this.state.displayValue.includes('.')) { return; }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;

        this.setState({ displayValue: displayValue, clearDisplay: false });
    }

    render() {
        return (
            <div className='calculator'>
                <Display value={this.state.displayValue}></Display>
                <Button label='AC' click={this.clear} triple></Button>
                <Button label='/' click={this.setOperation} operator></Button>
                <Button label='7' click={this.addNumber}></Button>
                <Button label='8' click={this.addNumber}></Button>
                <Button label='9' click={this.addNumber}></Button>
                <Button label='*' click={this.setOperation} operator></Button>
                <Button label='4' click={this.addNumber}></Button>
                <Button label='5' click={this.addNumber}></Button>
                <Button label='6' click={this.addNumber}></Button>
                <Button label='-' click={this.setOperation} operator></Button>
                <Button label='1' click={this.addNumber}></Button>
                <Button label='2' click={this.addNumber}></Button>
                <Button label='3' click={this.addNumber}></Button>
                <Button label='+' click={this.setOperation} operator></Button>
                <Button label='0' click={this.addNumber} double></Button>
                <Button label='.' click={this.addNumber}></Button>
                <Button label='=' click={this.setOperation} operator></Button>
            </div>
        )
    }
}