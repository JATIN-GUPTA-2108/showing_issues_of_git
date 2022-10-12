
// https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues
//token: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
import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { userColumns } from "./columns";
import { useTableSearch } from "./useTableSearch";

const { Search } = Input;
const token = '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';

const requestReposIssues = () => {
   fetch(`https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues?page=1&per_page=200'
    `,
        {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            
          })
          // return { data };
        // .catch(error => console.error(error))
}
const fetchUsers = async () => {
  const { data } = await axios.get(
    "https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues?page=1&per_page=300"
  );
  return { data };
};
function App() {

const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers
  });

  return (
    // <div>
    // {/* {requestReposIssues()} */}
    //  i am working
    // </div>
  <>
{console.log(filteredData)}
{console.log()}

    <Search
        onChange={e => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        style={{ position: "sticky", top: "0", left: "0" }}
      />
      <br /> <br />
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={userColumns}
        loading={loading}
        pagination={false}
      />
  </>
    );
}

export default App;
