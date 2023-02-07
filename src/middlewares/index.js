export const logger = (store) => (next) => (action) => {
  console.log(action);
  console.log("pasa por logger");
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "eddie" }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};
