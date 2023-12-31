import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => 
{

    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={ (result)=> { console.log(result)}} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input , { target : { value : 'Saitama' } })

        expect(input.value). toBe('Saitama');
        
    });
    
    test('Debe de llamar OnNewCategory si el input tiene valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory= { onNewCategory} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input , { target : { value : inputValue } });
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
        
    });
});