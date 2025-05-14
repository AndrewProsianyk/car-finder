import { Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CarPage from "./pages/carPage/CarPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import FindCarPage from "./pages/findCarPage/FindCarPage";
import FavoritePage from "./pages/favoritePage/FavoritePage";

function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find" element={<FindCarPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/car/:id" element={<CarPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
