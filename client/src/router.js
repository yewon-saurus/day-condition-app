import { createBrowserRouter } from "react-router-dom";

import ConditionList from "./pages/ConditionList";
import ConditionDetail from "./pages/ConditionDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ConditionList />
    },
    {
        path: "/detail/:id",
        element: <ConditionDetail />
    }
])

export default router;