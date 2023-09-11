import styles from './Home.module.css';
import { useEffect } from 'react';
import ProfileCard from '../../components/ProfileCard';
import leticia from '../../assets/images/Developers/leticia.jpg';
import artur from '../../assets/images/Developers/artur.png';


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Craft api</h1>
            <div className={styles.div_content}>
                <p>
                    Olá! Somos Artur e Letícia, criadores deste projeto! Tudo bem com você? <br /> <br />
                    Este site foi desenvolvido com a intenção de realizar um trabalho escolar, e consiste em construir
                    uma API e consumir ela em uma página da web. <br /> <br />
                    Esperamos que goste!
                </p>
            </div>
            <div className={styles.all_cards}>
                <ProfileCard
                    profilePhoto={artur}
                    name='Artur Bomtempo'
                    githubLink='https://github.com/ArturColen'
                    portfolioLink='https://arturbomtempo.vercel.app/'
                    linkedinLink='https://www.linkedin.com/in/artur-bomtempo/'
                />
                <ProfileCard
                    profilePhoto={leticia}
                    name='Letícia França'
                    githubLink='https://github.com/LeticiaSFranca'
                    portfolioLink='https://lsfranca.netlify.app/'
                    linkedinLink='https://www.linkedin.com/in/leticiasfranca/'
                />
            </div>
        </div>
    );
}

export default Home;