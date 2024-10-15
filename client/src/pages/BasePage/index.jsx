import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Common/Header';
import { Footer } from '../../components/Common/Footer';
import { Container } from '../../components/Common/Container';

export function BasePage() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}
