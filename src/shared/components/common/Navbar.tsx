import { useNavigate } from "react-router-dom";
import { logo_profile } from "../../../assets/images"
const Navbar = () => {
  const navigate = useNavigate();
  const routeTo = (path) => {
    navigate(path);
  };

  return (
    <header className=" bg-gray-700 p-2 flex ">
      <div className=" " style={{ backgroundImage: `url(${logo_profile})`}}>ert</div>
      <nav className=" flex justify-end">
        <div onClick={() => routeTo("/userlogin")} className=" w-[70px] bg-white text-center rounded m-2 p-1 font-bold cursor-pointer">Sign in</div>
        <div onClick={() => routeTo("/register")} className=" w-[70px] bg-blue-500 text-center rounded m-2 p-1 text-white font-bold cursor-pointer" >Sign up</div>
      </nav>
    </header>
  );
};
export default Navbar;
