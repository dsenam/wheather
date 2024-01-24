export const API_PATHS = {
  WEATHER: {
    GET: `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}`,
    GET_FORECAST: `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q={0}&days={1}&aqi=no&alerts=no`
  },
  GOOGLE_MAPS: {
    GET: `https://maps.googleapis.com/maps/api/geocode/json?latlng={0},{1}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`,
  },
};
