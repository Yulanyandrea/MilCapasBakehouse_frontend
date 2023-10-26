import { useState,useEffect } from "react"
import Header from "@/components/Header/Header"
import Cart from "@/components/Cart/Cart"
import Load from "@/components/Load/Load"

const CheckOut = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  },[] )
  return (
    <>
    {
      isLoading ? (<Load/>) : <>
        <Header />
        <Cart />


      </>
    }

    </>
  )
}

export default CheckOut
