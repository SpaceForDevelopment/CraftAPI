import styles from './Home.module.css';
import { useEffect } from 'react';
import { ProfileCard } from '../../components/ProfileCard';
import { PageTitle } from '../../components/PageTitle';
import blocoComando from '../../assets/images/Img/bloco_de_comando.jpg';
import Artur from '../../assets/images/Img/Artur.png';
import Leticia from '../../assets/images/Img/Leticia.png';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <section className={styles.content}>
            <PageTitle title='Sejam bem-vindos!' />

             <div className={styles.inicio}>
                <div className={styles.div_content}>
                    <p>
                        Bem-vindo ao nosso cantinho do Minecraft! 🎮✨ <br />
                        Este site nasceu de uma missão épica: criar uma API super útil para um trabalho escolar e mostrá-la em 
                        toda a sua glória em uma página da web. E olha só, conseguimos!

                        <br /><br />
                        Aqui, nós mergulhamos de cabeça no universo do Minecraft para trazer dados e informações que podem tornar
                        sua experiência no jogo ainda mais incrível. Seja você um aventureiro que adora explorar minas, um guerreiro
                        que enfrenta mobs, ou um construtor que cria mundos maravilhosos, nossa API tem algo especial para você.

                        <br /><br />
                        Obrigado por visitar e bom jogo! 🛠️🗺️🚀 <br />
                        Equipe CraftAPI
                    </p>
                </div>

                <div>
                    <img src={blocoComando} alt="Bloco de Comando" className={styles.img_bloco_comando} />
                </div>
             </div>

            <h2 className={styles.tittle_developers}>Nossos Desevnvolvedores</h2>

            <div className={styles.all_cards}>
                <ProfileCard
                    profilePhoto={Artur}
                    name='Artur Bomtempo'
                    githubLink='https://github.com/ArturColen'
                    portfolioLink='https://arturbomtempo.dev/'
                    linkedinLink='https://www.linkedin.com/in/artur-bomtempo/'
                />
                <ProfileCard
                    profilePhoto={Leticia}
                    name='Letícia França'
                    githubLink='https://github.com/LeticiaSFranca'
                    portfolioLink='https://lsfranca.vercel.app/'
                    linkedinLink='https://www.linkedin.com/in/leticiasfranca/'
                />
            </div>
        </section>
    );
}

export default Home;
