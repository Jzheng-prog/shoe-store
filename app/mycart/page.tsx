import Heading from "@/components/Heading";
import CartItem from "@/components/myCart/CartItem";
import Button from "@/components/Button";
import ShippingInfo from "@/components/myCart/ShippingInfo";
import NavBar from "@/components/NavBar";
import XNavBar from "@/components/XNavBar";
import { navElement } from "@/data";

const MyCart = () => {
  return (
    <div className="bg-slate-200 h-screen w-full">
      <div className="md:ml-[100px]">
        <Heading title={"Shopping Cart"} />
        <CartItem />
        <ShippingInfo />
        <div className="lg:w-[900px] lg:justify-center items-center mx-auto">
          <p className="p-5 flex justify-between lg:justify-end font-bold">
            total:<span>$199.99</span>
          </p>
        </div>
        <Button title={"CheckOut"} />
      </div>
      <NavBar navElement={navElement} />
    </div>
  );
};

export default MyCart;
