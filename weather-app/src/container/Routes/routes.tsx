import { createBrowserRouter } from "react-router-dom";
import DisplayWeather from "../DisplayWeather/DisplayWeather";
import App from "../../App";
import Hourly from "../Hourly/hourly"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path:"", element: <DisplayWeather/>},
            {path:"hourly", element: <Hourly />},

        ]
    }
])