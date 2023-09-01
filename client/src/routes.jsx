import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import MobsList from './pages/MobsList';
import MobDetails from './pages/MobDetails';
import BasePage from './pages/BasePage';

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/mobs" element={<MobsList />}></Route>
                        <Route path="/detalhes-mob" element={<MobDetails />}></Route>
                        <Route path="*" element={<Page404 />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;