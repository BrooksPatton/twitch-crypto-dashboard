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

function getLowestOrder(orderArr) {
  return orderArr.reduce((lowest, order) => {
    if(Number(order[0]) < Number(lowest)) return order[0];

    return lowest;
  }, orderArr[0][0]);
}

module.exports = {
  getHighestOrder,
  getLowestOrder
};
