export const getFilterMilhojas = (array, filterProperty) => {
  const tranformArray = array.reduce((acc, obj) => {
    const exist = acc.filter((item) => item === obj.taste|| item=== obj.size).length;
    if (!exist) {
      return [...acc, obj[filterProperty]];
    }
    return acc;
  }, []);
  return tranformArray;
};




