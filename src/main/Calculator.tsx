import React, { Component, Props } from 'react';
import './Calculator.scss'
import { Button } from '../components/Button/Button';
import { Display } from '../components/Display/Display';
export interface CalculatorProps { }

export default class Calculator extends Component {

    constructor(props: CalculatorProps) {
        super(props);
        this.clear = this.clear.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addNumber = this.addNumber.bind(this);
    }

    clear() {

    }

    setOperation() {

    }

    addNumber(n: number) {

    }

    render() {
        return (
            <div className='calculator'>
                <Display value="100"></Display>
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