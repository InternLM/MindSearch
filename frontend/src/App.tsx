import style from "./App.module.less";
import Logo from "@/assets/logo.svg";
import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "@/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <div className={style.app} id="app">
        <div className={style.header}>
          <div className={style.headerNav}>
            <img src={Logo} />
          </div>
        </div>
        <div className={style.content}>
          <RouterRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
