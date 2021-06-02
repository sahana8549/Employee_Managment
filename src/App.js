import { ToastContainer } from "react-toastify";
import "./App.css";
import Employee from "./Components/Employee";
import Loading from "./Components/Loader";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="">
      <Employee />
      <Loading />
      <ToastContainer />
    </div>
  );
}

export default App;
