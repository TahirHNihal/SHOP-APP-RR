import { RouterProvider } from "react-router-dom";
import publicRoute from "./routes/publicRoutes";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBrands } from "./redux/Shop/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={publicRoute} />
    </>
  );
}

export default App;
