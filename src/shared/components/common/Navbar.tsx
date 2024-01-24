import { useNavigate } from "react-router-dom";
import { logo_profile_W } from "../../../assets/images"
const Navbar = () => {
  const navigate = useNavigate();
  const routeTo = (path) => {
    navigate(path);
  };

  return (
    <header className=" bg-[#333] p-2 ">
      <div className=" flex items-center justify-between max-w-[1140px] m-auto ">
      <div className="flex items-center w-[180px] h-[30px] " >
        <img src={logo_profile_W} className=""/>
      </div>
      <nav className=" flex items-center font-bold">
        <div className=" mr-7 text-base text-white cursor-pointer" >หน้าแรก</div>
        <div className=" mr-7 text-base text-white cursor-pointer" >ผลงาน</div>
        <div className=" mr-7 text-base text-white cursor-pointer" >เกี่ยวกับเรา</div>
        <div className=" mr-7 text-base text-white cursor-pointer" >บทความ</div>
        <div onClick={() => routeTo("/userlogin")} className=" w-[70px] bg-white text-center rounded m-2 p-1 cursor-pointer">Sign in</div>
        <div onClick={() => routeTo("/register")} className=" w-[70px] bg-blue-500 text-center rounded m-2 p-1 text-white cursor-pointer" >Sign up</div>
      </nav>
      </div>
    </header>
  );
};
export default Navbar;
