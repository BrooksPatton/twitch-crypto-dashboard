function getHighestOrder(orderArr) {
  try {
    return orderArr.reduce((highest, order) => {
      return Number(order[0]) > Number(highest) ? order[0] : highest;
    }, orderArr[0][0]);

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
