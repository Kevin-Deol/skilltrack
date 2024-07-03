import Image from "next/image";
import MyLogo from "./components/logo";
import Link from "next/link";
import {SignIn} from "./components/login";
import MyLogout from "./components/logout";
import MyRegister from "./components/register";


export default function Home() {
  return (
    <div>
      <MyRegister />
    </div>
  );
}
