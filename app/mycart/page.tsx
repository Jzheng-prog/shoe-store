import Heading from "@/components/Heading";
import CartItem from "@/components/myCart/CartItem";
import Button from "@/components/Button";
import ShippingInfo from "@/components/myCart/ShippingInfo";
import NavBar from "@/components/NavBar";
import XNavBar from "@/components/XNavBar";
import { navElement } from "@/data";

const MyCart = () => {
  return (
    <div className="h-screen w-full">
      <div className="pb-16 md:p-0">
        <div className="md:ml-[100px]">
          <Heading title={"Shopping Cart"} />
          <CartItem />
          <ShippingInfo />

          <div className="lg:w-[900px] lg:justify-center items-center mx-auto">
            <p className="p-5 flex justify-between lg:justify-end font-bold">
              total:<span>$199.99</span>
            </p>
          </div>
          <div className="pb-5 flex justify-center">
            <Button dynamicClass="bg-red-500 lg:w-[900px]" title={"CheckOut"} />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <XNavBar />
      </div>
      <NavBar navElement={navElement} />
    </div>
  );
};

export default MyCart;
