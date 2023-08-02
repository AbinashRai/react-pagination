import { useState } from "react";
import "./App.css";
import { getUsers, getLength } from "./api/users";
import Table from "./components/table";
import Pagination from "./components/pagination";

function App() {
  const [page, setPage] = useState(5);
  const [limit, setLimit] = useState(5);

  let totalPage = Math.ceil(getLength() / limit);
  function handlePageChange(value) {
    console.log(value);
  } 

  return (
    <div className="container">
      <Table users={getUsers(page, limit)} />
      <Pagination
        totalPage={totalPage}
        page={page}
        limit={limit}
        siblings={1}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
