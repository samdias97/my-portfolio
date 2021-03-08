const ACCESS_TOKEN_MAP_BOX = `access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`;

// eslint-disable-next-line import/prefer-default-export
export const fetchLocalMapBox = (local: string): Promise<void> =>
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`,
  )
    .then(response => response.json())
    .then(data => data);
