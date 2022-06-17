import Head from "next/head";
import { useEffect, useRef, useState } from "react";
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
    img1: '/images/school.jpg',
    img2: '/images/medvedev2.jpg',
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
    img1: '/images/mining.jpg',
    img2: '/images/putin.jpg',
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
    img1: '/images/rig.jpg',
    img2: '/images/storage.jpg',
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
    img1: '/images/city.jpg',
    img2: '/images/soldier.jpg',
    img1Size: {height: 10, width: 16},
    img2Size: {height: 10, width: 16},
  }
];

const socials = [
  {
    id:1,
    name: 'Instagram',
    url: 'https://www.instagram.com/survnu/',
  },
  {
    id:2,
    name: 'Vkontakte',
    url: 'https://vk.com/verfff',
  },
  {
    id: 3,
    name: 'Telegram',
    url: 'https://t.me/herrikgala',
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
  const [ready, _setReady] = useState(false);
  const [alert, _setAlert] = useState(false);
  const alertRef = useRef(alert);
  const readyRef = useRef(ready);

  const setReady = (value)=>{
    readyRef.current = value;
    _setReady(value);
  }

  const setAlert = (value)=>{
    alertRef.current=value;
    _setAlert(value);
  } 

  function applyAnimation(){
    let section1=document.getElementsByClassName('section')[0];
    let section2=document.getElementsByClassName('section')[1];
    let section3=document.getElementsByClassName('section')[2];
    let section4=document.getElementsByClassName('section')[3];
    let spans = document.querySelectorAll(".section:nth-child(1) > div > span");

    window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      markers: false,
      scrub: 2,
    })

    let tl = gsap.timeline();
    let tl2 = gsap.timeline({
      scrollTrigger:{
        trigger: section1,
        pin: true,
        markers: false,
        end: mobileCheck() ? '+=' + ((cv.length+6)*section2.offsetWidth): '+=' + ((cv.length+10)*section2.offsetWidth),
      }
    })
    // let array = Array.from(spans).reverse();
    let array1 = Array.from(spans).reverse().slice(0,11);
    let array2 = Array.from(spans).reverse().slice(11);
    
    tl.from(spans, {yPercent: -300,stagger: 0.1, ease: 'back', duration: .6});

    tl2.to(array1, {y: '-85vh', stagger: 0.4, ease: 'back', duration: 20});
    tl2.to(array2, {y: '-85vh', stagger: 0.4, ease: 'back', duration: 20}, '<');
    tl2.to('#fixed', {width: '100vw', right:0, bottom: 0, ease: 'none', duration: 14}, '<+0.4');
    tl2.from('#fixed p:nth-child(1)', {opacity: 0,  duration: 8}, '>');
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
    
    let quoteWords1 = document.querySelectorAll('.quote')[0].childNodes;
    let shuffled1 = shuffle(Array.from(quoteWords1).filter((el)=> el.tagName==='SPAN'))

    let quoteWords2 = document.querySelectorAll('.quote')[1].childNodes;
    let shuffled2 = shuffle(Array.from(quoteWords2).filter((el)=> el.tagName==='SPAN'))

    for(let i=0; i<shuffled1.length; i++){
      tl2.from(shuffled1[i], {opacity: 0, duration: 6}, '<+0.5')
    }
    
    // just delay fading first quote 
    tl2.to(shuffled1, {delay: 3})

    for(let i=0; i<shuffled1.length; i++){
      tl2.to(shuffled1[i], {opacity: 0, duration: 6},'<+0.5')
    }

    for(let i=0; i<shuffled2.length; i++){
      tl2.from(shuffled2[i], {opacity: 0, duration: 6}, '<+0.5')
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

    if(mobileCheck()){

    } else{
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
    }

    tl2.from('#contacts', {yPercent: 200, duration: 30, ease: 'none'}, '>')

    setReady(true)
  }

  function validateProportion(){
   return window.innerWidth/window.innerHeight>1.6
  }

  function handleResize(e){
    if(validateProportion()){
      alertRef.current && setAlert(false);
      readyRef.current || applyAnimation();
    } else{
      alertRef.current || setAlert(true);
    }
  }

  useEffect(()=>{
    let time;

    window.addEventListener('resize', (e)=> {
      if(time){clearTimeout(time)};
      time = setTimeout(()=>handleResize(e),100)
    })
    
    if(!validateProportion()){
      setAlert(true);
    }else{
      applyAnimation();
    }

  },[])

  return(
    <div>
      {alert &&
      <div style={{width:'100vw', height: '100vh', position: 'fixed', left: 0, top: 0,fontSize: '5vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        Rotate your browser and continue
      </div>}

      <div style={(alert || !ready) ? {opacity: 0}: {}}>
        <Head>
          <title>Muhammetnur Amandurdyev</title>
          <meta name='Description' content='CV / Resume of turkmen programmer and engineer'/>
          <meta name='Description' CONTENT='Author: M. Y. Amandurdyev, Developer: Muhammetnur Amandurdyýew'/>
          <meta name='robots' content='index, follow'/>
          <meta name='author' content='Muhammetnur Amandurdyev'/>
          <meta name='keywords' content='turkmen, Muhammetnur, Amandurdyev, Amandurdyyev, Amandurdyýew, Амандурдыев, Мухамметнур, cv, resume'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="googlebot" content="notranslate" />
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
                    Hi! I'm a petroleum and software engineer who prioritizes performance and efficiency. <br/>
                    <span style={{overflow: 'hidden'}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    My goal in life is to incorporate automation into everything I do. Starting with sending a letter via email, ending with complex engineering computations.<br/>
                    Also i can create user interfaces using latest frameworks as “React” and “Vue”
                  </p>
                <Image src='/images/sand.webp' alt="img" priority layout='responsive' width={902} height={570}/>
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
                          <Image src={obj.img1} layout='fill' priority/>
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
                          <Image src={obj.img2} layout='fill' priority/>
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

                <p className={`${styles.quote} quote`}>
                  <span>&nbsp;&nbsp;“Muhammetnur</span> 
                  <span>&nbsp;has</span> 
                  <span>&nbsp;been</span> 
                  <span>&nbsp;one</span> 
                  <span>&nbsp;off</span> 
                  <span>&nbsp;the</span> 
                  <span>&nbsp;most</span> 
                  <br/>
                  <span>&nbsp;productive</span> 
                  <span>&nbsp;students</span> 
                  <span>&nbsp;in</span> 
                  <span>&nbsp;our</span> 
                  <span>&nbsp;drilling</span> 
                  <span>&nbsp;department</span>
                  <br/>
                  <span>&nbsp;studied</span> 
                  <span>&nbsp;during my</span> 
                  <span>&nbsp;5 year tenure</span> 
                  <span>&nbsp;as docent”</span> 
                  <br/><br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                  <span> &#8212; &nbsp;Ekaterine Leusheva</span>
                  <span>, Docent</span>
                </p>

                <p className={`${styles.quote} quote`}>
                  <span>&nbsp;“He</span> 
                  <span>&nbsp;is</span> 
                  <span>&nbsp;talented</span> 
                  <span>&nbsp;young</span> 
                  <span>&nbsp;man</span> 
                  <span>&nbsp;driven</span> 
                  <span>&nbsp;by passion</span> 
                  <span>&nbsp;for engineering</span> 
                  <span>&nbsp;and drilling”</span> 
                  <br/><br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <span>&#8212;&nbsp;Drilling</span>
                  <span>&nbsp;Superintendent</span>
                </p>

              </div>
              <div className={`${styles.layer} layer`}></div>

              <div className={`${styles.layer} layer`}>
                <h1>SOFTWARE ENG.</h1>
                <div className={`${styles.skillsGrid} skillsGrid`}>
                  <ul>
                    <li>HTML5 <span>8 out of 10</span></li>
                    <li>CSS3 <span>8 out of 10</span></li>
                    <li>Responsive markup <span>7 out of 10</span></li>
                    <li>Semantic markup <span>7 out of 10</span></li>
                  </ul>
                  <ul>
                    <li>Javscript <span>9 out of 10</span></li>
                    <li>React JS <span>9 out of 10</span></li>
                    <li>Vue 3 <span>6 out of 10</span></li>
                    <li>Redux Vuex <span>8 out of 10</span></li>
                  </ul>
                  <ul>
                    <li>Design patterns <span> 7 out of 10</span></li>
                    <li>Data structures <span>6 out of 10</span></li>
                    <li>Algorhitms <span>6 out of 10</span></li>
                    <li>Python <span>7 out of 10</span></li>
                  </ul>
                  <ul>
                    <li>Learning capability <span>10 out of 10</span></li>
                    <li>Data scientist <span>3 out of 10</span></li>
                    <li>Linear algebra <span>6 out of 10</span></li>
                    <li>Statistics <span>6 out of 10</span></li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <div className={`${styles.layer} layer`}>
                <h1>PETROLEUM ENG.</h1>
                <div className={`${styles.skillsGrid} skillsGrid`} style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
                <ul>
                    <li>Well designing <span>6 out of 10</span></li>
                    <li>Calculate pipe and drill collar <span>6 out of 10</span></li>
                    <li>Drilling process <span>6 out of 10</span></li>
                    <li>Well controlling <span>6 out of 10</span></li>
                  </ul>
                  <ul>
                    <li>Willing to constantly learn <span>10 out of 10</span></li>
                    <li>Monitoring MWD & LWD parameters <span>4 out of 10</span></li>
                    <li>Preparation completion assemblies <span>4 out of 10</span></li>
                    <li>Pressure test of completion assemblies <span>4 out of 10</span></li>
                    {/* <li>Regulation drilling instrument <span>assisted</span></li> */}
                  </ul>
                  <ul>
                    <li>Physics <span>8 out of 10</span></li>
                    <li>Math <span>8 out of 10</span></li>
                    <li>Chemistry <span>7 out of 10</span></li>
                    <li>Hydraulics <span>7 out of 10</span></li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
          
          <section id={styles.section4} className='section'>
            <div>
              <div id='circularTextWrapper' className={styles.circularTextWrapper}>
                <Image src='/images/circle.svg' alt="Circular text" priority layout='fill'/>
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
                      <a key={obj.id} href={obj.url} target='_blank'>{obj.name}</a>
                    ))}
                  </div>
                  <div id='social' className={styles.social}>
                    <span>BY EMAIL</span>
                    <label><a href="mailto:verf631664@gmail.com" style={{paddingLeft: 0}}>verf631664@gmail.com</a></label>
                    <label><a href="mailto:rev631664@gmail.com"></a>rev631664@gmail.com</label>
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
    </div>
  )
}
