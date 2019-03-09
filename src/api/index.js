

export const getNews = async (timestamp) => {
    const url = `https://mashup.tobit.com/api/news/v2.0/${chayns.env.site.locationId}?timestamp=${timestamp}&count=10&past=true&locationOnly=true&TappID=91958`;
    const response = await fetch(url);
    const json = await response.json();
    console.log("fetch news", json);
    return json;
};
