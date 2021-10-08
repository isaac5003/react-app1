export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dYWlKy6gYdZIcEad73KDUC6wGEj2ATrc&q=${encodeURI(category)}&limit=5`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    //console.log(gifts);
    return gifts;
};