export const getFilterMilhojas = (array, filterProperty) => {
  const tranformArray = array.reduce((acc, obj) => {
    const exist = acc.filter((item) => item === obj.taste).length;
    if (!exist) {
      return [...acc, obj[filterProperty]];
    }
    return acc;
  }, []);
  return tranformArray;
};




