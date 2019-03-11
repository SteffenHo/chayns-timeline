

export const getNews = async (timestamp) => {
    const url = `https://mashup.tobit.com/api/news/v2.0/${chayns.env.site.locationId}?timestamp=${timestamp}&count=10&past=true&locationOnly=true&TappID=91958`;
    const response = await fetch(url);
    const json = await response.json();
    console.log("fetch news", json);
    return json;
};




export const getEvents = async (skip, take) => {
    const url = ` https://mashup.tobit.com/api/events/v0.1/${chayns.env.site.id}/statistic/past?skip=${skip}&take=${take}&excludeTickets=true`;
    const config =  {
        headers: {
            Authorization : `Bearer ${chayns.env.user.tobitAccessToken}`,
            ContentType: "application/json",
        }
    };
    const response = await fetch(url, config);
    const json = await response.json();
    console.log("fetch events", json);
    return json;
};
