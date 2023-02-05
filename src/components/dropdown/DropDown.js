import React, { useContext } from "react";

import { ExperimentsContext } from "../../context/experimentContext";

import { Select } from "antd";

const { Option } = Select;

function DropDown() {
  const { setDropdown, dropdown } = useContext(ExperimentsContext);
 
  return (
    <div className="m-[10px]">
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a semester"
        optionFilterProp="children"
        onChange={setDropdown}
        value={dropdown}
        defaultValue="two"
        filterOption={(input, option) =>
          option.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
        <Option value="three">Three</Option>
        <Option value="four">Four</Option>
        <Option value="five">Five</Option>
        <Option value="six">Six</Option>
        <Option value="seven">Seven</Option>
        <Option value="eight">Eight</Option>
      </Select>
    </div>
  );
}

export default DropDown;
