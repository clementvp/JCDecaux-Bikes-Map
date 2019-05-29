const cleanStationsNames = (stations) => {
  stations.map((station) => {
    const newStation = station;
    newStation.name = station.name.replace('#', '').replace(/\d*/i, '').replace('-', '').trim();
    return newStation;
  });
  return stations;
};
export default cleanStationsNames;
