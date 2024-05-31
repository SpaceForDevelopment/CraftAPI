import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasePage } from './pages/BasePage';
import { Home } from './pages/Home';
import { Mobs } from './pages/Mobs';
import { MobDetails } from './pages/MobDetails';
import { Equipment } from './pages/Equipment';
import { EquipmentDetails } from './pages/EquipmentDetails';
import { Ores } from './pages/Ores';
import { OreDetails } from './pages/OreDetails';
import { TermsOfService } from './pages/TermsOfService';
import { Page404 } from './pages/Page404';

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/mobs" element={<Mobs />}></Route>
                        <Route
                            path="/detalhes-mob/:id"
                            element={<MobDetails />}
                        />
                        <Route
                            path="/equipamentos"
                            element={<Equipment />}
                        ></Route>
                        <Route
                            path="/detalhes-equipamento/:id"
                            element={<EquipmentDetails />}
                        />
                        <Route path="/minerios" element={<Ores />}></Route>
                        <Route
                            path="/detalhes-minerio/:id"
                            element={<OreDetails />}
                        />
                        <Route path="/terms" element={<TermsOfService />} />
                    </Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
