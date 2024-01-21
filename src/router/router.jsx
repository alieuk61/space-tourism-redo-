import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import Destinations from 'src/pages/destinations';
import Crew from 'src/pages/crew';
import Technology from 'src/pages/technology';

// Router setup for site navigation
const router = createBrowserRouter([
	{ path: "/", element: <Homepage /> },
	{ path: "/destinations", element: <Destinations /> },
	{ path: "/technology", element: <Technology /> },
	{ path: "/crew", element: <Crew /> }
])

export default router;
