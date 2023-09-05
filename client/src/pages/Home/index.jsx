import styles from './Home.module.css';
import github from '../../assets/images/github.png'
import portfolio from '../../assets/images/portfolio.png'
import leticia from '../../assets/images/leticiafranca.jpg'
import artur from '../../assets/images/arturbomtempo.png'

function Home() {
    return (
        <>
            <content classname={styles.content}>

                <div className={styles.divContent}>
                    <p>
                    Hello! We are Artur and Letícia, creators of this project! All right with you? <br />

                    This site was created with the intention of carrying out a school project. Where we 
                    build an API and consume it on a website (with a theme of our choosing, so we chose 
                    to do it over Minecraft Mobs). <br />
                    
                    We hope you like it, see you later!
                    </p>
                </div>

                <allcards className={styles.allcards}>
                    <card className={styles.cardsContent}>
                        <img src={artur} alt="fotoArtur" className={styles.nossasfotos} />
                        
                        <div>
                            <p className={styles.nossosnomes}>Artur Bomtempo <br /></p>
                            <a href="https://github.com/ArturColen" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className={styles.iconesCards} /></a>
                            <a href="https://arturbomtempo.vercel.app" target="_blank" rel="noopener noreferrer"><img src={portfolio} alt="portfolio" className={styles.iconesCards} /></a>
                        </div>
                    </card>

                    <card className={styles.cardsContent}>
                        <img src={leticia} alt="fotoLeticia" className={styles.nossasfotos}/>
                        
                        <div>
                            <p className={styles.nossosnomes}>Letícia França <br /></p>
                            <a href="https://github.com/LeticiaSFranca" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className={styles.iconesCards} /></a>
                            <a href="https://lsfranca.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={portfolio} alt="portfolio" className={styles.iconesCards} /></a>
                        </div>
                    </card>
                </allcards>
            </content>
        </> 
    )
}

export default Home;