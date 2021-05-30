/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter((trip) => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if (filters.duration) {
    const minDuration = filters.duration.from;
    const maxDuration = filters.duration.to;

    output=output.filter((trip)=>trip.days>= minDuration && trip.days <= maxDuration);
  }
  // TODO - filter by tags
  if (filters.tags){
    for (let tag of filters.tags){
      output=output.filter((trip)=>trip.tags.indexOf(tag)>-1);
    }
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  // TODO - filter trips by tripId
  const filtered = trips.filter((trip) => trip.id === tripId);

  console.log('filtering trips by tripId:', tripId, filtered);

  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  // TODO - filter trips by countryCode
  const filtered = trips.filter((trip) => trip.country.code === countryCode);
  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;
// action types
export const GET_TRIP = createActionName('GET_TRIP');
// action creators
export const createAction_getTrip = (payload) => ({
  payload,
  type: GET_TRIP,
});
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case GET_TRIP:
      return [action.payload]
    default:
      return statePart;
  }
}
 */
