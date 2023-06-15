import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe(' Pruebas en el hoock UseFetchGifs ', () => {
    
    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('OnePunch'));
        const { images , isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy;
    });

    test('WaitFor', async () => {
        const { result } = renderHook( () => useFetchGifs('OnePunch'));
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
            
        const { images , isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy;
    });

})