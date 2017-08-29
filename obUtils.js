function getHighestOrder(orderArr) {
  try {
    let highest = 0;

    orderArr.forEach(o => {
      const value = Number(o[0]);
      if(value > Number(highest)) highest = o[0];
    });

    return highest;
  } catch(e) {
    throw e;
  }
}

module.exports = {
  getHighestOrder
};
