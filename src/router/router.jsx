import { createBrowserRouter } from "react-router-dom"

// Router setup for site navigation
const router = createBrowserRouter([
	{ path: "/", element: <div className="text-red-500">This is Main</div> }
])

export default router;
