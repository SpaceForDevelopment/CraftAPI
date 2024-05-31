import './Home.style.css';
import { useEffect } from 'react';
import { ProfileCard } from '../../components/ProfileCard';
import { PageTitle } from '../../components/PageTitle';
import commandBlockPhoto from '../../assets/images/Home/commandBlock.jpg';
import arturAvatar from '../../assets/images/Home/artur.png';
import leticiaAvatar from '../../assets/images/Home/leticia.png';

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="content">
            <PageTitle title="Sejam bem-vindos!" />
            <div className="presentation_section">
                <div className="div_content">
                    <p>
                        Bem-vindo ao nosso hub de Minecraft! 🎮 <br />
                        <br />
                        Este site nasceu de uma missão: criar uma API útil para
                        um trabalho escolar e apresentá-la da melhor forma
                        possível em uma página da web.
                        <br />
                        <br />
                        Aqui, mergulhamos de cabeça no universo do Minecraft
                        para trazer dados e informações que podem tornar sua
                        experiência no jogo ainda mais incrível. Seja você um
                        aventureiro que adora explorar minas, um guerreiro que
                        enfrenta mobs, ou um construtor que cria mundos
                        maravilhosos, nossa API tem algo especial para você.
                        <br />
                        <br />
                        Obrigado por visitar e bom jogo! 🛠️🗺️🚀
                    </p>
                </div>
                <div>
                    <img
                        src={commandBlockPhoto}
                        alt="Bloco de Comando"
                        className="command_block"
                    />
                </div>
            </div>
            <h2 className="title_developers">Nossos Desenvolvedores</h2>
            <div className="all_cards">
                <ProfileCard
                    profilePhoto={arturAvatar}
                    name="Artur Bomtempo"
                    githubLink="https://github.com/ArturColen"
                    portfolioLink="https://arturbomtempo.dev/"
                    linkedinLink="https://www.linkedin.com/in/artur-bomtempo/"
                />
                <ProfileCard
                    profilePhoto={leticiaAvatar}
                    name="Letícia França"
                    githubLink="https://github.com/LeticiaSFranca"
                    portfolioLink="https://www.leticiafranca.com.br/"
                    linkedinLink="https://www.linkedin.com/in/leticiasfranca/"
                />
            </div>
        </section>
    );
}
