export const combineUrlParams = (movie, key, url) => {
  const query = `${movie.title} trailer`;
  // using new URLSearchParams for easy connect queries togethers
  const params = new URLSearchParams({
    part: "snippet",
    type: "video",
    q: query,
    key: key,
  });
  return `${url}?${params}`
}
// get random number for Hero features
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}