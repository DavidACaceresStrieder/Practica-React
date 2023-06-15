import { GifGrid } from "../../src/components/GifGrid";
import { render, screen} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe("Pruebas de <GifGrid/>" , () =>
{
    const category = 'One punch man';

    test("Debe mostrar el loading inicialmente", () => 
    {

        useFetchGifs.mockReturnValue({
            images : [],
            isLoading : true
        });

        render(<GifGrid category={category}></GifGrid>);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test("Debe mostrar items", () => 
    {

        const gifs = [
            {
                id : 'asd',
                title : 'Saitama',
                url : 'https://localhost/saitama.jpg'
            },
            {
                id : '123',
                title : 'Goku',
                url : 'https://localhost/Goku.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            images : gifs,
            isLoading : false
        });

        render(<GifGrid category={category}></GifGrid>);        
        expect(screen.getByText(category));
    });

})