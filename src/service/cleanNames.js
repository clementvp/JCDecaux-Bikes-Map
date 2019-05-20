const cleanStationsNames = (stations) => {
  stations.map((station) => {
    const newStation = station;
    newStation.name = station.name.replace('#', '').substring(5).replace('-', '').trim();
    return newStation;
  });
  return stations;
};
export default cleanStationsNames;
