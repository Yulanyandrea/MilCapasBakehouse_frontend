export const getFilterMilhojas = async (array, filter) => {
  const finalArray = array.reduce((acc,obj)=> {
    const variable = acc.filter((item) => item.taste).length
    if(!variable){
      return [... acc,obj[filter]]
    }
    return acc
    },[])
    return finalArray
}

