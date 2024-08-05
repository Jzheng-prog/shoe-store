import CartItem from "@/components/myCart/cartItem"
import CheckOut from "@/components/myCart/CheckOut"
import ShippingInfo from "@/components/myCart/ShippingInfo"

const MyCart = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold justify-center flex items-center mt-10 mb-4'>Shopping Cart</h1>
      <CartItem/>
      <div className='lg:w-[900px] lg:justify-center items-center mx-auto'>
        <ShippingInfo/>
        <CheckOut/>
      </div>
    </div>
  )
}

export default MyCart
