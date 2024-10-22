import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Common/Container';
import { Footer } from '../../components/Common/Footer';
import { Header } from '../../components/Common/Header';

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
