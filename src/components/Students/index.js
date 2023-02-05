import { Table, Tag, Space } from "antd";
import { StudentsData } from "./data";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Enrollnment No.",
    dataIndex: "enrollnmentNo",
    key: "enrollnmentNo",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "completed") {
            color = "green";
          }
          if (tag === "incomplete") {
            color = "red";
          }
          if (tag === "under review") {
            color = "geekblue";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];


export default function StudentsList() {
  return (
      <div className="border rounded-xl overflow-hidden bg-gray-100">
          <Table columns={columns}   pagination={{ position: ["bottomCenter", "bottomCenter"] }} dataSource={StudentsData} />
      </div>
  );
}
