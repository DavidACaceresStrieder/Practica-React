
export const getGifs = async ( category )=> 
{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uVwEj8oQs1F5SM9Q71Dn71rQb7Q3bOaf&q=${category}&limit=5`;
    const resp = await fetch(url);

    const { data } = await resp.json()
    const gifs =  data.map(img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url,
        height : img.images.downsized_medium.height,
        width : img.images.downsized_medium.width

    }));
    
    return gifs;
}
 