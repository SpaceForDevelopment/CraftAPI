import styles from './Home.module.css';
import { useEffect } from 'react';
import { ProfileCard } from '../../components/ProfileCard';
import { PageTitle } from '../../components/PageTitle';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className={styles.content}>
            <PageTitle title='Sejam bem-vindos!' />
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
                    profilePhoto='https://avatars.githubusercontent.com/u/96635074?v=4'
                    name='Artur Bomtempo'
                    githubLink='https://github.com/ArturColen'
                    portfolioLink='https://arturbomtempo.dev/'
                    linkedinLink='https://www.linkedin.com/in/artur-bomtempo/'
                />
                <ProfileCard
                    profilePhoto='https://avatars.githubusercontent.com/u/99284224?v=4'
                    name='Letícia França'
                    githubLink='https://github.com/LeticiaSFranca'
                    portfolioLink='https://lsfranca.vercel.app/'
                    linkedinLink='https://www.linkedin.com/in/leticiasfranca/'
                />
            </div>
        </div>
    );
}

export default Home;
