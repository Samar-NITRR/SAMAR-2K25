import React from 'react';
import './timeline.css';

// import images
import htmlimg from '../../../../src/assets/timeline/shaurya.png';
import javascriptimg from '../../../../src/assets/timeline/samar.png';
import reactjsimg from '../../../../src/assets/timeline/accc.png';
import nodejsimg from '../../../../src/assets/timeline/samar.png';


const Timeline = () => {

    return (
        <>
            <div className='main'>
                <h1 data-aos="fade-up" className="font-knightWarrior text-6xl md:text-7xl drop-shadow-[3px_3px_0px_#000]"> Our <span className="text-6xl md:text-7xl italic text-rose-500 font-knightWarrior glow-text mb-8 "> Journey </span> </h1>
                <div data-aos="fade-up" className="underline-glow"></div>

                <div className='timeline'>
                    <div className='container left-container'>
                        <img src={htmlimg} alt='HTML' className=''/>
                        <div data-aos="flip-right" className='text-box htmlcard'>
                            <h2 className='htmltext font-knightWarrior text-4xl md:text-5xl pt-4 pb-2 uppercase'> The Beginning </h2>
                            <span className='company font-crossFly italic text-1xl text-white pb-4'>2010</span>
                            <p className='pt-4 font-speedPixel text-white glow-text text-1xl pb-4'>
                                Shaurya has been at the helm of conducting all
                                the sports activities in the institute. The
                                committee organizes events Samar (the annual
                                sports fest), Inter-branch tournaments, etc. The
                                committee also helps in proper structuring and
                                formation of teams which represent NIT Raipur
                                in national level sports fest including Inter-NIT
                                Sports meet.
                            </p>

                            <span className='left-container-arrow htmlarrow'></span>
                        </div>
                    </div>

                    <div className='container right-container '>
                        <img src={javascriptimg} alt='JavaScript' className=''/>
                        <div data-aos="flip-left" className='text-box javascriptcard'>
                            <h2 className='javascripttext font-knightWarrior text-4xl md:text-5xl pb-2 pt-4 uppercase'> Samar </h2>
                            <span className='company font-crossFly italic text-white pb-4'>2010</span>
                            <p className='pt-4  pb-4 font-speedPixel text-white glow-text'>
                                SAMAR is the Annual College Sports Festival
                                of NIT Raipur. It is a four-day mega event
                                held in the during winter in which provides
                                platform to more than 12000 students from
                                over 35 colleges and schools come forward
                                to showcase their talent in sports and
                                games.
                            </p>

                            <span className='right-container-arrow javascriptarrow'></span>
                        </div>
                    </div>

                    <div className='container left-container '>
                        <img src={reactjsimg} alt='React JS' className=''/>
                        <div data-aos="flip-right" className='text-box reactjscard'>
                            <h2 className='reactjstext font-knightWarrior text-4xl md:text-5xl pb-2 pt-4 uppercase'>Achievements</h2>
                            <span className='company font-crossFly italic text-white pb-4'>2024</span>
                            <p className='pt-4 pb-4  text-white font-speedPixel glow-text'>
                                This year has been nothing short of extraordinary for our sports
                                teams, showcasing outstanding talent and unwavering dedication.
                                Our men's football team dominated the Inter-NIT Championship,
                                securing gold with unrivaled skill and teamwork.
                            </p>

                            <span className='left-container-arrow reactjsarrow'></span>

                        </div>

                    </div>

                    <div className='container right-container '>
                        <img src={nodejsimg} alt='Node JS' className=''/>
                        <div data-aos="flip-left" className='text-box nodejscard'>
                            <h2 className='nodejstext font-knightWarrior text-4xl md:text-5xl pb-2 pt-4 uppercase'> Coming Soon </h2>
                            <span className='company font-crossFly italic text-1xl text-white pb-4'> 2025 </span>
                            <p className='pt-4 pb-4 text-white text-1xl font-speedPixel glow-text'>
                                SAMAR will be back with its new edition with gamify range of 
                                exciting sports events. Stay tuned with us through our social 
                                media handles to make sure you don't miss out on the next big 
                                sports revolution!
                            </p>

                            <span className='right-container-arrow nodejsarrow'></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timeline;