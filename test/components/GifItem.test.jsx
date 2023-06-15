import { GifItem } from "../../src/components";
import { render } from '@testing-library/react';

describe('Pruebas del <GifItem />', () =>
{
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe hacer match con el snapshot', () => 
    {
        const { container } = render( <GifItem  title= {title} url={url} ></GifItem>);
        expect(container).toMatchSnapshot();
    });
})