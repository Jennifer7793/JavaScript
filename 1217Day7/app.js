async function getYouBike() {
  const api =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
  const result = await fetch(api);
  const data = await result.json();

  console.log(data);
}
 
getYouBike();