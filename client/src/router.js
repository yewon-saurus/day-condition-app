import { createBrowserRouter } from "react-router-dom";

import ConditionList from "./pages/List/ConditionList";
import ConditionDetail from "./pages/Detail/ConditionDetail";

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