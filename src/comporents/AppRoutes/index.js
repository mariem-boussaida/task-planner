import { BrowserRouter, Route, Routes } from "react-router-dom";

Fonction AppRouter(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={task}></Route>
          </Routes>
        
        </BrowserRouter>
    )
}
export default AppRouter;