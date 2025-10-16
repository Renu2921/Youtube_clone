import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import Store from "./utils/store/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const MainContainer =lazy(()=>import("./components/MainContainer"));
const VideoWatch = lazy(() => import("./components/VideoWatch"));

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
       element: (
        <>
          <Header />     
          <Body />       
        </>
      ),
      children: [
        { path: "/",  
          element:<Suspense fallback={<h1>Loading...... </h1>}> <MainContainer/> </Suspense>},
        {
          path: "/watch",
          element: (
            <Suspense fallback={<h1>Loading......</h1>}>
              <VideoWatch />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <Provider store={Store}>
      <div>
       <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
