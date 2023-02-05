import { Input, Button } from "antd";
import { IoPersonCircleOutline, IoEyeOff, IoEye, IoKey } from "react-icons/io5";

export default function Login({}) {
  let imgSrc =
    "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";

  let logoSrc =
    "https://a-lab.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fa-lab%2Fimage%2Fupload%2Fv1628666821%2Flanding-page%2Flogo-light_oxz1tr.svg&w=384&q=75";

  return (
    <div className="flex ">
      <div className="w-2/5 p-5 flex flex-col justify-around align-center">
        <img src={logoSrc} alt="logo" className="w-[100px] mx-auto" />

        <div className="w-[60%] mx-auto">
          <Input
            size="large"
            className="my-4"
            placeholder="User Id"
            prefix={<IoPersonCircleOutline className="icon-medium" />}
          />
          <Input.Password
            size="large"
            className="my-4"
            placeholder="password"
            prefix={<IoKey className="icon-medium" />}
            iconRender={(visible) => (visible ? <IoEye /> : <IoEyeOff />)}
          />
          <Button type="primary" size="large" block className="my-4">
            Submit
          </Button>
        </div>
        <div className="">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
      </div>

      <div className="w-3/5">
        <img
          src={imgSrc}
          alt="login banner"
          className="h-screen object-cover"
        />
      </div>
    </div>
  );
}
