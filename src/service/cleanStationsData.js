const cleanStationsData = (stations) => {
  stations.map((station) => {
    const newStation = station;
    if (station.status === 'OPEN') {
      newStation.status = 'OUVERTE';
    } else {
      newStation.status = 'FERMÉE';
    }
    newStation.name = station.name.replace('#', '').replace(/\d*/i, '').replace('-', '').trim();
    return newStation;
  });
  return stations;
};
export default cleanStationsData;
