import { Table, Space } from "antd";

export default function DataTable({ data, index, setData }) {
  const columns = [
    {
      title: "V 1",
      dataIndex: "v1",
      key: "v1",
    },
    {
      title: "V 2",
      dataIndex: "v2",
      key: "v2",
    },
    {
      title: "I 1",
      dataIndex: "i1",
      key: "i1",
    },
    {
      title: "V 1",
      dataIndex: "v1",
      key: "v1",
    },
    {
      title: "V 2",
      dataIndex: "v2",
      key: "v2",
    },
    {
      title: "I 2",
      dataIndex: "i2",
      key: "i2",
    },
    {
      title: "V 1",
      dataIndex: "v1",
      key: "v1",
    },
    {
      title: "V 2",
      dataIndex: "v2",
      key: "v2",
    },
    {
      title: "I 3",
      dataIndex: "i3",
      key: "i3",
    },
    {
      title: "If = I1 + I2",
      dataIndex: "final",
      key: "final",
    },

    {
      title: "Remove",
      key: "remove",
      render: (text, record) => (
        <Space size="middle">
          <a className="text-red-600" onClick={deleteItem}>
            Delete
          </a>
        </Space>
      ),
    },
  ];

  const deleteItem = (e) => {
    e.preventDefault();
    let tempData = [...data];
    if (index !== -1) {
      tempData.splice(index, 1);
      setData(tempData);
      console.log(tempData);
    }
  };

  return (
    <div className="w-full">
      <h3 className="h3 py-4">Observation Table</h3>
      <div className="border rounded-xl overflow-hidden w-full">
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ position: ["none", "none"] }}></Table>
      </div>
    </div>
  );
}
