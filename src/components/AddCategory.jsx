import { useImperativeHandle } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => 
{
    const [ inputValue , setInputValue ] = useState('');    

    const onInputChanged = (event) => setInputValue(event.target.value); 
    const onSubmitForm = (event) => 
    {   
        event.preventDefault();        

        const value = inputValue.trim();
        if(value.length == 0) return;

        onNewCategory( value );
        setInputValue('');
    }

    return(
        <>
        <form onSubmit={ onSubmitForm } aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gifs"
                value = {inputValue}
                onChange={ (event) => onInputChanged(event) }
            >
            </input>
        </form>
        
        </>
    );
}

AddCategory.proptypes = {
    onNewCategory : PropTypes.func.isRequired
}