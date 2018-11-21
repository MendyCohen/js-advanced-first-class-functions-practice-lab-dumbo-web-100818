// Code your solution in this file!

const logDriverNames = function(drivers){
  drivers.map(driver => console.log(driver.name));
};

// function logDriverNames(drivers){
//   console.log(drivers.map(driver => driver.name));
// }

function logDriversByHometown(drivers, location){
  names = drivers.filter(drive => drive.hometown === location)
  names.map(driversName => console.log(driversName.name))
}

function driversByRevenue(drivers){
  const byRevenue = drivers.slice(0);
  byRevenue.sort(function(a, b){
    return a.revenue - b.revenue
  })
  return byRevenue;
}

function driversByName(drivers){
  const byName = drivers.slice(0);
  byName.sort(function (a, b) {
  return a.name.localeCompare(b.name);
  });
  return byName;
}

function totalRevenue(drivers){
  let total = 0
  drivers.map(driver => total += driver.revenue)
  return total
}

function averageRevenue(drivers){
  total = []
  drivers.map(driver => total.push(driver.revenue))
  return totalRevenue(drivers) / total.length
}
