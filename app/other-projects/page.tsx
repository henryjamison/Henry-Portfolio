'use client';
import Header from '../components/header';
import styles from '../styles/other-projects.module.css';
import { Tweet } from 'react-tweet';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import strings from './asmOutput.js';

export default function OtherProjects() {
    const inputCode = strings[0];
    const compiledCode = strings[1];
    const output = strings[2];

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
                <p className={styles.p}>
                    This project focuses on visualizing the <span><a className={styles.inlineLink} href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm">Dijkstra's Pathfinding Algorithm</a></span> in real time. I was introduced to pathfinding visualization a few years ago and knew I wanted to make a project like this ever since. This project allows the user to draw their own walls on the grid to create their own paths, or they can generate a random one. Visual elements displayed on the grid can also be changed by the user.
                </p>
                <video className={styles.video} width="700" height="500" autoPlay muted loop playsInline>
                    <source src={(require('./videos/path-compressed.mp4'))} />
                </video>
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
            <div id='projectThree' className={styles.projectThree}>
                <a href="#projectThree" className={styles.a}>NFL Fantasy Football Point Predictor</a>
                <p className={styles.p}>
                    Im a big fan of fantasy football, so for my Capstone project my partner and I decided to make a score predictor model trained on data we sourced. The predictions displayed are for the current NFL week. This was my first introduction to training models and using Scikit learn. We sourced all of our data from
                    <span><a className={styles.inlineLink} href='https://www.pro-football-reference.com/fantasy/'> Pro Football Reference</a></span>. Our search function includes autofill for all fantasy players. Real-time game status is also displayed for each player which is sourced from <span><a className={styles.inlineLink} href="https://www.espn.com/nfl/injuries"> ESPN</a></span>. On top of predictions, historical fantasy data tables are also provided which can be filtered by NFL team/position/year and can be sorted by any table value. This projects is still in progress.
                </p>
                <div className={styles.nflVideoWrapper}>
                    <video className={styles.nflVideo} width="700" height="400" autoPlay muted loop playsInline>
                        <source src={(require('./videos/nfl-record-compressed.mp4'))} />
                    </video>
                </div>
                <p className={styles.p}>
                    This project was made with python and we used flask for our front-end. For our model we used the Scikit learn package.
                </p>
            </div>
            <div id='projectFour' className={styles.projectFour}>
                <a href="#projectFour" className={styles.a}>Y86-64 Simulator</a>
                <p className={styles.p}>
                    This project includes a Y86-64 Simulator written fully in C/C++. Y86-64 simplifies many aspects of a real-world architecture like x86-64 to focus on core concepts such as pipelining, instruction execution, and memory hierarchy. This simulator handles all instrcution set architecture, memory calls, piping, loading, debugging, and compiling. This project allowed me to understand computer architecture/memory a lot better, which, in-turn made me a better programmer.

                    {/* Below are some sample screenshots of an input file that finds the absolute value of a number, the compiled file, and sample output to the console as the simulator steps through the program. */}
                </p>
                {/* <div className={styles.fileImages}>
                <Image
                    src={input}
                    alt="Input-file"
                    className={styles.inputImage}
                />
                <Image
                    src={compiled}
                    alt="Compiled-object file"
                    className={styles.inputImage}
                />
                </div> */}
                <p className={styles.p}>
                    Below is a sample input file written in y86 assembly, this code resembles a function that finds the absolute value of a function.
                </p>
                <div className={styles.codeWrapper}>
                    <SyntaxHighlighter className={styles.code} language="x86-asm" style={gruvboxDark}>
                        {inputCode}
                    </SyntaxHighlighter>
                </div>
                <p className={styles.p}>
                    That input code was then compiled into a y86 assembly object that could then be read by the simulator.
                </p>
                <div className={styles.codeWrapper}>
                    <SyntaxHighlighter className={styles.code} language="x86-asm" style={gruvboxDark}>
                        {compiledCode}
                    </SyntaxHighlighter>
                </div>
                <p className={styles.p}>
                    Once the simulator is run with the compiled code, the following ouput is produced. This shows how the simulator steps through the program, and keeps track of registers, flags, memory values, pipelines, etc... The following output is cut short for performance reasons.
                </p>
                <div className={styles.codeWrapper}>
                    <SyntaxHighlighter className={styles.code} language="x86-asm" style={gruvboxDark} wrapLongLines={true}>
                        {output}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div id='projectFive' className={styles.projectFive}>
                <a href="#projectFive" className={styles.a}>Automated Gym Reservation Bot</a>
                <p className={styles.p}>
                    {/* This was my first practical coding project as a freshman at App State. During COVID-19 our university gym's were limited to 10 people per hour, and I had to book a time slot online. With 20,000+ students at my university, as you can imagine the time slots would fill up quick. I would constantly forget to reserve a spot a day in advance, and then would not be able to work out. At the time I was getting in to selenium and python automation, so I decided to make an automated bot that would reserve gym slots for my desired time. */}
                    As a freshman at App State, I made my first practical coding project amid COVID-19. Throughout the pandemic, there were social distancing restrictions at my university gym. With just 10 slots available every hour, and a high demand among 20,000+ students, securing a workout time online became a challenge. Driven by my interest in Python automation at the time, I developed a bot using Selenium to automate the reservation process. I was able to secure a spot every day without worry of missing out until the restrictions were lifted.
                </p>
            </div>
        </main>
    );
}