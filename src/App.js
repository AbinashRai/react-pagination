import { useState } from "react";
import "./App.css";
import { getUsers, getLength } from "./api/users";
import Table from "./components/table";
import Pagination from "./components/pagination";

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  let totalPage = Math.ceil(getLength() / limit)
  
  return (
    <div className="container">
      <Table users={getUsers(page, limit)} />
      <Pagination />
    </div>
  );
}

export default App;
