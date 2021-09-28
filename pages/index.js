import Head from "next/head";
import { useEffect, useMemo, useRef } from "react";
import styles from '../styles/mainPage.module.css';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

const cv = [
  {
    id: 1,
    start: '2004 September',
    end: '2015 May',
    where: 'Turkmen Russian school named after Pushkin A.S.',
    what: 'Basic education in one of the top school all over the country',
    url: 'http://www.trsosh.edu.tm/',
    urlName: 'trsosh.edu.tm',
    img1: '/../public/images/school.jpg',
    img2: '/../public/images/medvedev2.jpg',
    img1Size: {height: 9, width: 16},
    img2Size: {height: 100, width: 150},
  },
  {
    id: 2,
    start: '2015 September',
    end: '2019 June',
    where: 'Saint Petersburg Mining university',
    what: `Bachelor's degree in the first higher technical university of Russia.\n Major: Drilling oil and gas wells`,
    url: 'http://en.spmi.ru/',
    urlName: 'en.spmi.ru',
    img1: '/../public/images/mining.jpg',
    img2: '/../public/images/putin.jpg',
    img1Size: {height: 2, width: 3},
    img2Size: {height: 9, width: 16},
  },
  {
    id: 3,
    start: '2018 July',
    end: '2018 August',
    where: 'Dragon Oil Ltd.',
    what: 'Two months of internship in honorable company with great reputation',
    url: 'https:/www.dragonoil.com/',
    urlName: 'www.dragonoil.com',
    img1: '/../public/images/rig.jpg',
    img2: '/../public/images/storage.jpg',
    img1Size: {height: 2, width: 3},
    img2Size: {height: 9, width: 17},
  },
  {
    id: 4,
    start: '2019 October',
    end: '2021 October',
    where: 'State frontier service of Turkmenistan',
    what: 'A ton of experience in data managing department of huge organization. Leading frontend developer and IT specialist as well.',
    url: 'https://serhetabat-dovletabat.gov.tm/',
    urlName: 'serhetabat-dovletabat.gov.tm',
    img1: '/../public/images/city.jpg',
    img2: '/../public/images/soldier.jpg',
    img1Size: {height: 10, width: 16},
    img2Size: {height: 10, width: 16},
  }
];

const socials = [
  {
    id:1,
    name: 'Instagram',
    url: 'https://www.instagram.com/nury.10/',
  },
  {
    id:2,
    name: 'Vkontakte',
    url: 'https://vk.com/verfff',
  },
  {
    id: 3,
    name: 'Telegram',
    url: '',
  }
  
]


function shuffle (array){
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export default function MainPage(props){

  useEffect(()=>{
    
    let section1=document.getElementsByClassName('section')[0];
    let section2=document.getElementsByClassName('section')[1];
    let section3=document.getElementsByClassName('section')[2];
    let section4=document.getElementsByClassName('section')[3];
    let spans = document.querySelectorAll(".section:nth-child(1) > div > span");
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      markers: true,
      scrub: 2,
    })

    let tl = gsap.timeline();
    let tl2 = gsap.timeline({
      scrollTrigger:{
        trigger: section1,
        pin: true,
        markers: true,
        end: '+=' + ((cv.length+4)*section2.offsetWidth),
      }
    })
    // let array = Array.from(spans).reverse();
    let array1 = Array.from(spans).reverse().slice(0,11);
    let array2 = Array.from(spans).reverse().slice(11);
    
    tl.from(spans, {yPercent: -300,stagger: 0.1, ease: 'back', duration: .6});

    tl2.to(array1, {y: '-85vh', stagger: 0.4, ease: 'back', duration: 24});
    tl2.to(array2, {y: '-85vh', stagger: 0.4, ease: 'back', duration: 24}, '<');
    tl2.to('#fixed', {width: '100vw', right:0, bottom: 0, ease: 'none', duration: 14}, '<+0.4');
    tl2.from('#fixed p:nth-child(1)', {opacity: 0,  duration: 10}, '>');
    tl2.from(section2, {yPercent: 100, duration: 12, ease: 'none'},  'whiteBlackText');
    tl2.to('#fixed', {y: '-100vh', duration: 12, ease: 'none'}, 'whiteBlackText')
    // appearence
    tl2.set('#paralax2', {yPercent: -100}).from('#paralax2', {xPercent: 100, duration: 12,ease: 'none'});
    tl2.from('section:nth-child(2) > div:first-child > span:nth-child(1)', {xPercent: -30, duration: 24, ease: 'none'}, 'whiteBlackText');
    tl2.from('section:nth-child(2) > div:first-child > span:nth-child(3)', {xPercent: 40, duration: 24, ease: 'none'}, 'whiteBlackText');
    tl2.from('section:nth-child(2) > div:first-child > span:nth-child(5)', {xPercent: -10, duration: 24, ease: 'none'}, 'whiteBlackText');
    // disappearing
    tl2.to('section:nth-child(2) > div:first-child > span:nth-child(1)', {xPercent: 30,opacity: 0, duration: 18});
    tl2.to('section:nth-child(2) > div:first-child > span:nth-child(3)', {xPercent: -40, opacity:0 , duration: 18}, '<');
    tl2.to('section:nth-child(2) > div:first-child > span:nth-child(5)', {xPercent: 10,opacity: 0, duration: 18}, '<');
    // section 3 setting
    tl2.set(section3, {opacity: 1, zIndex: 2})
    // cv
    let cvElements = document.querySelectorAll('.cv');
    let cvArray = Array.from(cvElements)
    cvArray.map((node, index)=>{
      if(index===cvArray.length-1){
        tl2.from(node, {xPercent: 100, opacity: 0, duration: 12, ease: 'none'}, '<').to(node, {xPercent: -100, opacity: 0, duration: 9, delay: 3, ease: 'none'})
      }else if(index){
        tl2.from(node, {xPercent: 100, opacity: 0, duration: 12, ease: 'none'}, '<').to(node, {xPercent: -100, opacity: 0, duration: 9, delay: 3, ease: 'none'})
      } else{
        tl2.from(node, {xPercent: 100, opacity: 0, duration: 12, ease: 'none'}).to(node, {xPercent: -100, opacity: 0, duration: 9, delay: 3, ease: 'none'})
      }
    })
    // certificate appearence
    tl2.from('.certificatesWrapper', {xPercent: 100, duration: 12, ease: 'none'}, '<');

    let certificates = Array.from(document.querySelectorAll('.certificatesWrapper > div > div'))

    certificates.map((node, index)=>{
      tl2.from(node, {transform: `translate(${(index+1)*9-3}vw)`, duration: 12, ease: 'none'}, '<')
    })
    tl2.from('.certificatesWrapper > div > .layer', {yPercent: 100, ease: 'none', duration: 6, stagger: -0.8})
    tl2.to(section2, {yPercent: -100, opacity: 0, ease: 'none', duration: 0})

    // section 3 🎃🎡
    let quoteWords = document.querySelector('#quote').childNodes;
    let shuffled = shuffle(Array.from(quoteWords).filter((el)=> el.tagName==='SPAN'))

    for(let i=0; i<shuffled.length; i++){
      tl2.from(shuffled[i], {opacity: 0, duration: 6}, '<+0.5')
    }

    // 1️⃣
    tl2.to('.section:nth-child(3) > section:nth-child(1) > .layer:nth-child(1)', {xPercent: -100, duration: 12, ease: 'none'});
    tl2.to('.section:nth-child(3) > section:nth-child(1) > .layer:nth-child(2)', {xPercent: -100, duration: 12, ease: 'none'}, '<');
    tl2.to('.section:nth-child(3) > section:nth-child(1) > .layer:nth-child(3)', {xPercent: -100, duration: 12, ease: 'none'}, '<');
    tl2.to('.section:nth-child(3) > section:nth-child(1)', {backgroundSize: '110vw auto',duration: 12}, '<')

    tl2.to('.section:nth-child(3) > section:nth-child(1) > .layer:nth-child(2)', {xPercent: -200, duration: 12, ease: 'none'});
    tl2.to('.section:nth-child(3) > section:nth-child(1) > .layer:nth-child(3)', {xPercent: -200, duration: 12, ease: 'none'}, '<');
    tl2.to('.section:nth-child(3) > section:nth-child(1)', {backgroundSize: '115vw auto',duration: 12}, '<')

    let heading1 = document.querySelector('.section:nth-child(3) > section:nth-child(1) > .layer:nth-child(3) > h1')

    tl2.from(heading1, {xPercent: -40, duration: 12, ease: 'none'}, '<+3').to(heading1, {xPercent: -60, duration: 12, ease: 'none'}, 'programmingLeaves');

    // tl2.set('.section:nth-child(3) > section:nth-child(1)', {xPercent: -100});
    tl2.set('.section:nth-child(3) > section:nth-child(2)', {xPercent: -100}, 'programmingLeaves');

    // 2️⃣
    tl2.to('.section:nth-child(3) > section:nth-child(1) > .layer:nth-child(3)', {xPercent: -300, duration: 12, ease: 'none'}, 'programmingLeaves+=3')
    tl2.to('.section:nth-child(3) > section:nth-child(2)', {backgroundSize: '110vw auto',duration: 12}, '<')
    tl2.to('.section:nth-child(3) > section:nth-child(2) > .layer:nth-child(1)', {xPercent: -100, duration: 12, ease: 'none'})
    tl2.to('.section:nth-child(3) > section:nth-child(2)', {backgroundSize: '115vw auto',duration: 12}, '<')

    let heading2 = document.querySelector('.section:nth-child(3) > section:nth-child(2) > .layer:nth-child(1) > h1');
    tl2.from(heading2, {xPercent: -40, duration: 12, ease: 'none'}, '<+3').to(heading2, {xPercent: -60, duration: 12, ease: 'none'}, 'petroleumLeaves');
    
    // section 4 🎇🧨💄🎯🏆
    tl2.from(section4, {height: 0,width:0, duration: 24, ease: 'none'}, '>-8');
    tl2.to('#circularTextWrapper', {rotation: -360, duration: 24, ease: 'none'}, '<').to('#circularTextWrapper', {opacity: 0, duration: 5, zIndex: -1}, '>-5');
    
    let trainText = document.querySelector('#trainText'); 

    tl2.to(trainText, {x: `-${(window.visualViewport.width+trainText.offsetWidth)}px`, duration: trainText.children.length, ease: 'none'});

    document.querySelectorAll('#trainText span').forEach((node, index)=>{
      let random = Math.random();
      let randomValue = Math.floor(random*30);
      // let up = random > 0.5 ? true : false
      let up = index % 2

      if(index===0){
        tl2.from(node, {transform: `translateY(${up ? '': '-'}${randomValue}vh) scale(0.5)`, duration: 5, ease: 'back.inOut(3)'}, '<+=0.5')
      } else{
        tl2.from(node, {transform: `translateY(${up ? '': '-'}${randomValue}vh) scale(0.5)`, duration: 5, ease: 'back.inOut(3)'}, '<+0.76')
      }
    })

    tl2.from('#contacts', {yPercent: 200, duration: 30, ease: 'none'}, '>')

  },[])

  return(
    <div>
      <Head>
        <title>Fokechlanor</title>
      </Head>

        <section id={styles.section1} className='section'>
            <div style={{lineHeight: 1.1}}>
                <span>M</span>
                <span>u</span>
                <span>h</span>
                <span>a</span>
                <span>m</span>
                <span>m</span>
                <span>e</span>
                <span>t</span>
                <span>n</span>
                <span>u</span>
                <span>r</span>
            </div>
            <div style={{lineHeight: 1.1}}>
                <span>A</span>
                <span>m</span>
                <span>a</span>
                <span>n</span>
                <span>d</span>
                <span>u</span>
                <span>r</span>
                <span>d</span>
                <span>y</span>
                <span>e</span>
                <span>v</span>
            </div>
            <span id={styles.scroll}>Scroll</span>
            <div style={{position: 'fixed', right: '1vw', bottom: '1vw', width: '20vw', padding: 0}} id='fixed'>
              <p style={{
                  fontSize: '2vw',
                  letterSpacing:0,
                  backgroundColor: 'transparent',
                  color: 'white',
                  bottom: '20%',
                  fontWeight: 'light',
                  right: '5%',
                  position: 'absolute',
                  zIndex: 1,
                  width: '55%',
                  letterSpacing: 0.3,
                  lineHeight: 1.2,
                }}>
                  <span style={{overflow: 'hidden'}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Muhammetnur Amandurdyev is a turkmen programmer and engineer, leading frontend developer at the state frontier service of Turkmenistan,
                  graduated engineer from Saint Petersburg Mining university. To date he has created more than 5 projects of different complexity. <br/>
                  <span style={{overflow: 'hidden'}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  He creates user interfaces but also could manage backend side of apps.
                  Muhammetnur Amandurdyev loves both the mountains and deserts of his beloved country and tries to improve his varied activities.
                </p>
              <Image src='/../public/images/sand.jpg' alt="img" priority layout='responsive' width={902} height={570}/>
            </div>
        </section>
        
        <section id={styles.section2} className='section'>
          <div style={{lineHeight: 1}}>
            <span style={{display: 'inline-block'}}>Let's introduce</span><br/>
            <span style={{display: 'inline-block'}}>Muhammetnur</span><br/>
            <span style={{display: 'inline-block'}}>Amandurdyev's CV</span>
          </div>
          
          <div className={styles.paralaxContainer} id='paralax1'/>

          <div className={styles.paralaxContainer} id='paralax2'/>
          
          {cv.map((obj, index)=>{
            let aspectRatio1=obj.img1Size.width / obj.img1Size.height;
            let aspectRatio2=obj.img2Size.width / obj.img2Size.height;

            return(
              <div className={`${styles.cv} cv`} key={index}>
                <div className={`${styles.cvGrid} cvGrid`}>
                  {/* left side */}
                  <div>
                    <div style={{position:'absolute', padding: '0 1vw', width: '100%', top: '-32vh', height: '30vh', left: '0',display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <div style={{width: `${aspectRatio1* 30}vh`, height: '30vh', position: 'relative', pointerEvents: 'none'}}>
                        <Image src={obj.img1} layout='fill'/>
                      </div>
                    </div>
                    
                    <span>{obj.start} - {obj.end}</span> <br/>
                    <p style={{ fontSize: '1.5vw'}}>
                      <a href={obj.url} target='_blank' style={{color: 'white', textDecoration: 'underline', fontSize: '1.5vw'}}>{obj.urlName}</a>
                    </p>
                  </div>
                  {/* right side */}
                  <div>
                    <div style={{position:'absolute', padding: '0 1vw', width: '100%', top: '-32vh', height: '30vh', left: '0',display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                      <div style={{width: `${aspectRatio2* 30}vh`, height: '30vh', position: 'relative', pointerEvents: 'none'}}>
                        <Image src={obj.img2} layout='fill'/>
                      </div>
                    </div>

                    <span>{obj.where}</span><br/>
                    <p style={{fontSize: '1.5vw', width: '70%'}}>{obj.what}</p>
                  </div>
                </div>
              </div>
            )
          })}

          <div className={`certificatesWrapper ${styles.certificatesWrapper} `}>
    
            <div>
              <div>
                <span style={{textDecoration: 'lineThrough'}}>Certificates:</span>
                {/* <span>University of Stavanger (Norway), April 2018</span> */}
              </div>
              <section className={`${styles.layer} layer`}></section>
            </div>
    
            <div>
              <div>
                <span>Management of Offshore Field Development</span>
                <span>University of Stavanger (Norway), April 2018</span>
              </div>
              <section className={`${styles.layer} layer`}></section>
            </div>
    
            <div>
              <div>
                <span>Well controll</span>
                <span>Saint Petersburg Mining University, May 2018</span>
              </div>
              <section className={`${styles.layer} layer`}></section>
            </div>
    
            <div>
              <div>
                <span>H2S / SCBA training</span>
                <span>Al Masaood oil industry supplies & services co.</span>
              </div>
              <section className={`${styles.layer} layer`}></section>
            </div>
          </div>

        </section>

        <section id={styles.section3} className='section'> 
          <section>
            <div className={`${styles.layer} layer`}>
              <p id='quote'>
                <span>&nbsp;“Here</span> 
                <span>&nbsp;must</span> 
                <span>&nbsp;be</span> 
                <span>&nbsp;very</span> 
                <span>&nbsp;smart</span> 
                <span>&nbsp;and</span> 
                <span>&nbsp;sharp</span> 
                <span>&nbsp;words”</span> 
                <br/><br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span>&#8212;&nbsp;Frederic</span>
                <span>&nbsp;Schopengauer</span>
              </p>
            </div>
            <div className={`${styles.layer} layer`}></div>

            <div className={`${styles.layer} layer`}>
              <h1>PROGRAMMING</h1>
              <div className={`${styles.skillsGrid} skillsGrid`}>
                <ul>
                  <li>Frontend developer <span>middle</span></li>
                  <li>HTML <span>competent</span></li>
                  <li>CSS <span>competent</span></li>
                  <li>Javascript <span>competent</span></li>
                </ul>
                <ul>
                  <li>React JS <span>competent</span></li>
                  <li>Next JS <span>competent</span></li>
                  <li>Material UI <span>competent</span></li>
                  <li>Redux <span>competent</span></li>
                </ul>
                <ul>
                  <li>Vim <span> good enough</span></li>
                  <li>Chart JS <span>good enough</span></li>
                  <li>GSAP <span>good enough</span></li>
                  <li>Python <span>good enough</span></li>
                </ul>
                <ul>
                  <li>Data scientist <span>junior</span></li>
                  <li>Linear algebra <span>competent</span></li>
                  <li>Statistics <span>good enough</span></li>
                  <li>Algorhitms <span>good enough</span></li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className={`${styles.layer} layer`}>
              <h1>ENGINEERING</h1>
              <div className={`${styles.skillsGrid} skillsGrid`} style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
              <ul>
                  <li>Well designing <span>basic skills</span></li>
                  <li>Calculate pipe and drill collar <span>basic skills</span></li>
                  <li>Drilling process <span>basic skills</span></li>
                  <li>Well controlling <span>basic skills</span></li>
                </ul>
                <ul>
                  <li>Monitoring MWD & LWD parameters <span>assisted</span></li>
                  <li>Recognize issues according to parameters above <span>assisted</span></li>
                  <li>Preparation completion assemblies <span>assisted</span></li>
                  <li>Pressure test of completion assemblies <span>assisted</span></li>
                  {/* <li>Regulation drilling instrument <span>assisted</span></li> */}
                </ul>
                <ul>
                  <li>Preparing mud <span>basic skills</span></li>
                  <li>Mud checking <span>assisted</span></li>
                  <li>Wiper trip procedures <span>assisted</span></li>
                  <li>Shake tests <span>assisted</span></li>
                </ul>
              </div>
            </div>
          </section>
        </section>
        
        <section id={styles.section4} className='section'>
          <div>
            <div id='circularTextWrapper' className={styles.circularTextWrapper}>
              <Image src='/../public/images/circle.svg' alt="Circular text" priority layout='fill'/>
            </div>
            
            <div id='trainText' className={styles.trainText}>
              <span>I</span>
              <span>&nbsp;</span>
              <span>a</span> 
              <span>m</span>
              <span>&nbsp;</span>
              <span>a</span>
              <span>v</span>
              <span>a</span>
              <span>i</span>
              <span>l</span>
              <span>a</span>
              <span>b</span>
              <span>l</span>
              <span>e</span>
              <span>&nbsp;</span>
              <span>f</span>
              <span>o</span>
              <span>r</span>
              <span>&nbsp;</span>
              <span>i</span>
              <span>n</span>
              <span>t</span>
              <span>e</span>
              <span>r</span>
              <span>e</span>
              <span>s</span>
              <span>t</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
              <span>&nbsp;</span>
              <span>p</span>
              <span>r</span>
              <span>o</span>
              <span>j</span>
              <span>e</span>
              <span>c</span>
              <span>t</span>
              <span>s</span>
              <span>&nbsp;</span>
              <span>a</span>
              <span>n</span>
              <span>d</span>
              <span>&nbsp;</span>
              <span>o</span>
              <span>f</span>
              <span>f</span>
              <span>e</span>
              <span>r</span>
              <span>s</span>
              <span>.</span>
              <span>&nbsp;</span>
              <span>F</span>
              <span>e</span>
              <span>e</span>
              <span>l</span>
              <span>&nbsp;</span>
              <span>f</span>
              <span>r</span>
              <span>e</span>
              <span>e</span>
              <span>&nbsp;</span>
              <span>t</span>
              <span>o</span>
              <span>&nbsp;</span>
              <span>c</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
              <span>&nbsp;</span>
              <span>m</span>
              <span>e</span>
            </div>
            
            <div id='contacts' className={styles.contacts}>
              <div>
                <div id='social' className={styles.social}>
                  <span>ON SOCIAL MEDIA</span>
                  {socials.map((obj)=>(
                    <a href={obj.url} target='_blank'>{obj.name}</a>
                  ))}
                </div>
                <div id='social' className={styles.social}>
                  <span>BY EMAIL</span>
                  <label>verf631664@gmail.com</label>
                  <label>amandurdyev97@gmail.com</label>
                </div>
                <div id='noCookies' className={styles.noCookies}>
                  <span>This webpage was created without using any cookies</span>
                </div>
              </div>
              
              <div>
                <div id='experience' className={styles.experience}>
                  I have created many web applications for digitalization of certain procedures. But due to the privacy policies I am not able to share or demonstrate them to you.
                </div>
                <div id='authors' className={styles.authors}>
                  <div>
                    <span>Design</span>
                    <a href='https://rubxkub.com/' target='_blank'>Gilles Tossoukpe</a>
                  </div>
                  <div>
                    <span>Code</span>
                    <a>Muhammetnur Amandurdyev</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}
