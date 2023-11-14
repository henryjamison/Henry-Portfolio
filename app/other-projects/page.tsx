'use client';
import Header from '../components/header';
import styles from '../styles/other-projects.module.css';
import { Tweet } from 'react-tweet';
import Image from 'next/image';
import y86 from '../../public/Y86.png';

// import path from '../../public/videos/path.mp4';




export default function OtherProjects() {

    const tweetIds = [

            '1724188184211263977',
            '1719169840970129744',
            '1719084843185705316',
            '1714041301472051405',
            '1712305188793454997',
            '1712229340555931919',
            '1701268168684064982',
            '1697265989329772997',
            '1697190630739652630',
            '1692131535527318010',
            '1690470522990292992',
            '1684747192760745986',
            '1675282924424364032',
            '1657601898940096512',
            '1640768680303755278'
    ];

    function getRandomTweet() {
        const randomIndex = Math.floor(Math.random() * tweetIds.length);
        return tweetIds[randomIndex];
      }
    const id = getRandomTweet();


    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.projectOne}>
                {/* <h2>Dijkstra's Pathfinding Algorithm Visualization</h2> */}
                <a href="https://henryjamison.github.io/PathFinding/" target='_blank' className={styles.a}>Dijkstra's Pathfinding Algorithm Visualization</a>
                <video className={styles.video} width="700" height="500" autoPlay muted loop playsInline>
                    {/* <source src={path} type="video/mp4"/> */}
                    <source src={(require('./videos/path.mp4'))} />
                </video>
                <p className={styles.p}>
                    This project focuses on visualizing the <span><a className={styles.inlineLink} href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm">Dijkstra's Pathfinding Algorithm</a></span> in real time. I was introduced to pathfinding visualization a few years ago and knew I wanted to make a project like this ever since. This project allows the user to draw their own walls on the grid to create their own paths, or they can generate a random one. Visual elements displayed on the grid can also be changed by the user.
                </p>

                <p className={styles.p}>
                    This project was made with Angular and deployed through Github Pages.
                </p>

            </div>
            <div className={styles.projectTwo}>
                {/* <h2>Patent Art Twitter Bot</h2> */}
                <a href="https://twitter.com/PatentArtBot" target='_blank' className={styles.a}>Patent Art Twitter Bot</a>
                <p className={styles.p}>
                    This project tweets out a random U.S. Patent from <span><a className={styles.inlineLink} href="https://patents.google.com/">Google Patents</a></span> each hour. I think Patent art is super cool looking and is often very detailed, so I decided to make this bot to see what kind of patent art is out there. It turns out there are a ton of patents out there for just about anything you can think of. Tweets include the patent name, the current owner/inventor, the patent number, a link to the Google Patent page, 1-4 images, and an abstract in the replies if available. Only patents with pictures are tweeted.
                </p>
                <div className={styles.desc}>
                    {/* For light theme tweets */}
                    {/* <div className={styles.tweetWrapper} data-theme="light"> */}
                    <div className={styles.tweetWrapper}>
                        {/* Possibly have a function that gets most recent tweet id? */}
                        <Tweet id={id} />
                    </div>
                    <p className={styles.tweetDesc}>
                        Above is an example of a random tweet. Throughout working on this project I have found so many interesting/useful/useless/intricate patents that I would have never known about othewrwise.
                    </p>
                    <p className={styles.p}>
                        This project was made with python, Twitter API v2, and runs on a cron schedule through GitHub actions.
                    </p>
                </div>
            </div>
            <div className={styles.projectThree}>
                <a href="" target='_blank' className={styles.a}>NFL Fantasy Football Point Predictor</a>
                <p className={styles.p}>
                    Im a big fan of fantasy football so for my Capstone project my partner and I decided to make a score predictor model trained on our own data. This was my first introduction to training models and using Scikit learn. We sourced all of our data from
                    <span><a className={styles.inlineLink} href='https://www.pro-football-reference.com/fantasy/'> Pro Football Reference</a></span>. Our search function includes autofill for all fantasy players. Real-time game status is also displayed for each player which is sourced from <span><a className={styles.inlineLink} href="https://www.espn.com/nfl/injuries"> ESPN</a></span>. On top of predictions, historical fantasy data tables are also provided which can be filtered by NFL team/position/year and can be sorted by any table value.
                    <br />
                    <br />
                    
                    Website images coming soon
                </p>
                <p className={styles.p}>
                    This project was made with python and we used flask for our front-end. For our model we used the Scikit learn package.
                </p>
            </div>
            <div className={styles.projectFour}>
                <a href="" target='_blank' className={styles.a}>Y86-64 Simulator</a>
                <p className={styles.p}>
                    This project includes a Y86-64 Simulator written fully in C/C++. Y86-64 simplifies many aspects of a real-world architecture like x86-64 to focus on core concepts such as pipelining, instruction execution, and memory hierarchy. This simulator handles all instrcution set architecture, memory calls, piping, loading, and debugging. This project allowed me to understand computer architecture/memory a lot better, which, in-turn made me a better programmer. Below is a screenshot of sample console output from the first two lines of a function that finds the absolute value of a number. 
                </p>
                <div className={styles.imgWrapper}>
                <Image
                    src={y86}
                    alt="User-Image"
                    className={styles.examplePic}
                />
                </div>
            </div>
        </main>
    );
}