import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";
import { Suspense, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";

const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpen(!isOpen)}>toggle</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          12uih u1i3 qhui13 hr4u23ih ui32h 4u2i3 rhiu24r5 ubg24i u2ih rui23
          hgr2iuvgiu2 gviu 24gv
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
