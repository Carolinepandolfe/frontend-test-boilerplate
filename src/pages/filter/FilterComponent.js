import React, { Component } from 'react';
import Select from 'react-select';
import '../../style/FilterComponent.css'

const Filter = () => {

    const options = [
        { defaultValue: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <Select className='select'
        options={options}
        placeholder={'Carro'}/>
      );
}

export default Filter;