const url = 'https://shazam.p.rapidapi.com/charts/track?locale=tr&pageSize=20&startFrom=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b177e6c854msh5c42f6e690c20edp117beajsn5b9c88a075ff',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

export const getPopular = async () => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data.tracks;
}