import { Route, Routes } from "react-router-dom";
import Container from "./components/layout/Container";
import SidebarMenu from "./components/layout/Sidebar";
import UserTable from "./components/table/User";
const App = () => {
  return (
    <div>
      <Container>
        <div className="flex items-start w-full">
          <SidebarMenu />
          <Routes>
            <Route path="/users" element={<UserTable />} />
          </Routes>
        </div>
      </Container>
    </div>
  );
};

export default App;
