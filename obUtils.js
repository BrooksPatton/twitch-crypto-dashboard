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
  try {
    return orderArr.reduce((lowest, order) => {
      return Number(order[0]) < Number(lowest) ? order[0] : lowest;
  }, orderArr[0][0]);
  } catch(e) {
    throw e;
  }
}

module.exports = {
  getHighestOrder,
  getLowestOrder
};
