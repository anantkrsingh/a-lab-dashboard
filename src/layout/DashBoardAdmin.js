import DashBoardHeader from "../components/Header/DashBoardHeader";
import { Menu } from "antd";

import { DigitalElectronicsLabs } from "../pages/experiments/DigitalElectronicsLabs";
import StudentsList from "../components/Students";

export default function DashBoardAdmin() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Shubham Raj
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Amity University Patna
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          BTech CSE 5th semester
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <DashBoardHeader name="Shubham Raj" menu={menu} />

      <StudentsList/>
    </div>
  );
}
