import React from 'react';
//import { useEffect, useState } from 'react';
import './App.css';
import CodeMirror from "@uiw/react-codemirror";
//import EditorView from 'codemirror'
import { EditorView, ViewUpdate } from '@codemirror/view';
import { EditorState, EditorSelection, SelectionRange } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { basicSetup, minimalSetup } from '@uiw/codemirror-extensions-basic-setup';
import { loadLanguage, langNames, langs } from '@uiw/codemirror-extensions-langs';
import { createTheme } from '@uiw/codemirror-themes';
import * as themes from '@uiw/codemirror-themes-all';
import { tags as t } from '@lezer/highlight';
// import { EditorState, EditorStateConfig, Extension, StateField } from '@codemirror/state';
//import { Bbedit } from '@uiw/codemirror-theme-Bbedit';

function handleRefresh() {
  window.location.reload();
}

function handleLinkedin() {
  window.open("https://www.linkedin.com/company/recursion-computing", '_blank');
}

function handleGithub() {
  window.open("https://github.com/recursion-computing", '_blank');
}

function handleMail() {
  window.open("mailto:info@recursion.is", '_blank');
}

function handleTwitter() {
  window.open("https://twitter.com/RecursionIs", '_blank');
}

function handleYouTube() {
  window.open("https://recursion.is/youtube", '_blank');
}

function handlePublications() {
  window.open("https://publications.recursion.is/", '_blank');
}

function handleNotes() {
  window.open("https://notes.recursion.is/", '_blank');
}

function handleDiscord() {
  window.open("https://discord.gg/2kSSsvTVc3", '_blank');
}

function handleNick() {
  window.open("https://nickmaleki.com", '_blank');
}

function handlePaypal() {
  window.open("https://paypal.me/RecursionIs", '_blank');
}

function handlePatreon() {
  window.open("https://www.patreon.com/RecursionIs", '_blank');
}


// function Quote() {
//   var quotes = [
//     'Connecting your thoughts, so you don\'t have to ',
//     'Unbounded thinking',
//     'Thinking about thinking - a meta-analysis',
//     'Fixing broken things, breaking working things',
//     'The Y combinator of thought',
//     'Applied philosophy',
//     'Applied repetition',
//     'Recognizing your potential by taking transparency to the extreme',
//     'True and False',
//     'Neither True nor False',
//     'Connections, but with perspective',
//     'Only look at the light when you are ready',
//     'Challenging paradoxes',
//     'The self-application of self-application',
//     'Towards a theory of quantum gravity',
//     'From the perspective of zero, everything is infinity',
//     'From the perspective of infinity, everything is zero',
//     '"I would rather regret something I did, than something I didn\'t."',
//     '"Steal from the best, invent the rest." - Micheal Corsetto',
//     '"You will never get younger than now."',
//     '"There are no differences but differences of degree between different degrees of difference and no difference." - William James',
//     '“Time is the most valuable thing a person can spend.” - Theophrastus',
//     '“Sooner or later, everything old is new again.” - Steven King',
//     '"That which can be destroyed by the truth should be." - Patricia Christine Hodgell',
//     '"Life itself is an exercise in exceptions." - Jean-Luc Picard',
//     '"This independence created by philosophical insight is - in my opinion - the mark of distinction between a mere artisan or specialist and a real seeker after truth." - Albert Einstein',
//     '"It is okay to make mistakes as long as things are happening."',
//     '"The inventors of the alphabet were unable to read until after they created letters." - u/SirHerald',
//     '"Because Nothing was, therefore All Things are." - Edgar Allen Poe',
//     '"Space and duration are one." - Edgar Allen Poe',
//     '"Rhythmic Balanced Interchange" - Walter Russell',
//     '"We can\'t talk about how reality functions without sounding crazy." - Jack Krause',
//     '"We can\'t just focus on one field of science, we must focus on all of them." - Nick Maleki',
//     '"Both infinity and zero are infinitely certain." - Nick Maleki',
//     '"A transparent vessel, like the glass cup, is inevitable." - Nick Maleki',
//     '"I want to see the universe smile" - Nick Maleki',
//     '"You don\'t know where you are without relativity." - Amir Maleki',
//     'Introducing infinity from a finite perspective',
//     'Someone\'s entire life: memories, worries, hopes, dreams, fears, and decisions are all contained within the brain.',
//     'Almost all of your neurons form before your birth and may survive after your death. Treat them well.',
//     '"Our unalterable resolution should be to be free." - Samuel Adams'
//   ];

//   var quote = quotes[Math.floor(Math.random() * quotes.length)];
//   console.log(quote)
//   return (<div id="quote" onClick={handleRefresh}>{quote}</div>);
// }

// var config = {
//   showCube: false,
//   dimension: '3D',
//   velocity: 0.5,
//   boundaryType: 'passthru',
//   antialias: false,
//   direction: {
//     xMin: -1,
//     xMax: 1,
//     yMin: -1,
//     yMax: 1,
//     zMin: -1,
//     zMax: 1
//   },
//   lines: {
//     colorMode: 'solid',
//     color: '#ffffff',
//     transparency: 0.9,
//     limitConnections: true,
//     maxConnections: 20,
//     minDistance: 300,
//     visible: true
//   },
//   particles: {
//     colorMode: 'solid',
//     color: '#ed7e48',
//     transparency: 0.9,
//     shape: 'circle',
//     boundingBox: 'canvas',
//     count: 180,
//     minSize: 10,
//     maxSize: 45,
//     visible: true
//   },
//   cameraControls: {
//     enabled: true,
//     enableDamping: true,
//     dampingFactor: 0.2,
//     enableZoom: true,
//     autoRotate: true,
//     autoRotateSpeed: 0.3,
//     resetCameraFlag: false
//   }
// };

// function changeParticleNum(){
//   var w = window.innerWidth;
//   var h = window.innerHeight;
//   //console.log(w,h)
//   //7372800
//   //2073600
//   //204800
//   //250
//   //180
//   //90
//   if (w*h > 100000){
//     console.log("hello")
//     config.particles.count = -450+44*Math.log(w*h)
//   } else {
//     config.particles.count = 30
//   }
// }
// changeParticleNum();



var myeditor;

function getSelectedLang() {
  console.log(langs);
  //return window.location;
  //myeditor = aneditor;
  return langs.mathematica()

}




function App() {

  // useEffect(() => {
  const [category, setCategory] = React.useState('');

  const handleCategoryChange = (category) => {
    setCategory(category);
    console.log(category);
  }

  //const refs = React.useRef<ReactCodeMirrorRef>({});

  //refs.current.setValue("HI");

  function Download() {
    // let filename = "readmePOTAT.txt";
    // let text = "Text of the file goes here.\n1";
    // let blob = new Blob([text], {type:'text/plain'});
    // let link = document.createElement("a");
    // link.download = filename;
    // //link.innerHTML = "Download File";
    // link.href = window.URL.createObjectURL(blob);
    // document.body.appendChild(link);
    // link.click();
    // setTimeout(() => {
    //     document.body.removeChild(link);
    //     window.URL.revokeObjectURL(link.href);
    // }, 100);
    //window.open('mailto:test@example.com');
    //window.close();
    //window.open("https://www.google.com")
    console.log("hi")
  }

  const myTheme = createTheme({
    dark: 'light',
    settings: {
      // background: '#ffffff',
      // foreground: '#4D4D4C',
      // caret: '#AEAFAD',
      // selection: '#D6D6D6',
      // selectionMatch: '#D6D6D6',
      // gutterBackground: '#FFFFFF',
      // gutterForeground: '#4D4D4C',
      // gutterBorder: '#ddd',
      lineHighlight: '#ed7e48',
    },
    styles: [
      // { tag: t.comment, color: '#787b80' },
      // { tag: t.definition(t.typeName), color: '#194a7b' },
      // { tag: t.typeName, color: '#194a7b' },
      // { tag: t.tagName, color: '#008a02' },
      // { tag: t.variableName, color: '#1a00db' },
    ],
  });

  const myTheme2 = themes.bbedit

  // const [code, setCode] = useState('');
  // function doSetValue(value){
  // //var editor = document.querySelector('.CodeMirror').CodeMirror
  // //var editor2 = CodeMirror.fromTextArea(document.getElementById('AA'))
  // //var editor3 = EditorState.update(value)
  // //var codemirror = document.getElementById("AA")
  // //editor2.getDoc().setValue(value)
  // setCode(value)
  // }


  // const [code, setCode] = useState('');
  // function doSetValue(value) {
  //   setCode(value)
  // }

  const codemirrorRef = React.useRef();
  window.codemirrorRef = codemirrorRef;

  let unrealcommandflags = ""

  //window.resizeTo(512,512)

  //this.setState({'codemirrorRef': codemirrorRef})


  const onChange = React.useCallback((value, viewUpdate) => {
    //console.log('value:', value);
    document.title = value + unrealcommandflags;
    //window.codemirrorRef = codemirrorRef;
    //window.location.href = 'http://localhost:3000/' + value;
    //window.location.replace('http://localhost:3000/' + value);
    localStorage.setItem('enteredtext', value);
    //codemirrorRef.editor = EditorSelection.cursor(5)

  }, []);
  // window.addEventListener('resize', changeParticleNum)

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      //unrealcommandflags += "¶e" //e for enter pressed
      //document.title = document.title + unrealcommandflags;
      //Download();
      //document.title = "This is the new  page title.";
      //   var fs = require('fs');

      // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
      //   if (err) throw err;
      //   console.log('Saved!');
      // });
      //setValue(myeditor,"hi");

    }
  }
  const [code, setCode] = React.useState('');

  //Catscript
  function init() { 
    const catWrapper = document.querySelector('.cat_wrapper')
    const wrapper = document.querySelector('.wrapper')
    const cat = document.querySelector('.cat')
    const head = document.querySelector('.cat_head')
    const legs = document.querySelectorAll('.leg')
    const pos = {
      x: null,
      y: null
    }
  
    const walk = () =>{
      cat.classList.remove('first_pose')
      legs.forEach(leg=>leg.classList.add('walk'))
    }
  
    const mousemargin = 5;
  
    const handleMouseMotion = e =>{
      pos.x = e.clientX
      pos.y = -e.clientY - 50
      if (cat.classList.contains('face_right') && between(pos.x - 90, cat.offsetLeft - mousemargin, cat.offsetLeft + mousemargin) ||
          cat.classList.contains('face_left') && between(pos.x + 10, cat.offsetLeft - mousemargin, cat.offsetLeft + mousemargin)) {
          } else{
            walk()
          }
      
    }
  
    const handleTouchMotion = e =>{
      if (!e.targetTouches) return
      pos.x = e.targetTouches[0].offsetX
      pos.y = -e.targetTouches[0].offsetY - 50
      if (cat.classList.contains('face_right') && between(pos.x - 90, cat.offsetLeft - mousemargin, cat.offsetLeft + mousemargin) ||
          cat.classList.contains('face_left') && between(pos.x + 10, cat.offsetLeft - mousemargin, cat.offsetLeft + mousemargin)) {
          } else{
            walk()
          }
    }
  
    const turnRight = () =>{
      cat.style.left = `${pos.x - 90}px`
      cat.classList.remove('face_left')
      cat.classList.add('face_right')
    }
  
    const turnLeft = () =>{
      cat.style.left = `${pos.x + 10}px`
      cat.classList.remove('face_right')
      cat.classList.add('face_left')
    }
  
    const decideTurnDirection = () =>{
      cat.getBoundingClientRect().x < pos.x ?
        turnRight()
        :
        turnLeft()
    }
  
    const headMotion = () =>{
      pos.y > (wrapper.clientHeight - 100) ?
        head.style.top = '-15px'
        :
        head.style.top = '-30px'
    }
  
    const jump = () =>{
      catWrapper.classList.remove('jump')
      if (pos.y  < (wrapper.clientHeight - 250)) { //opt not to -pos,y - 50
        setTimeout(()=>{
          catWrapper.classList.add('jump')
        },100)
      } 
    }
  
    function between(x, min, max) {
      return x >= min && x <= max;
    }
  
    //pos.x - 90 === cat.offsetLeft
    //pos.x + 10 === cat.offsetLeft
    const decideStop = ()=>{
      if (cat.classList.contains('face_right') && between(pos.x - 90, cat.offsetLeft - mousemargin, cat.offsetLeft + mousemargin) ||
          cat.classList.contains('face_left') && between(pos.x + 10, cat.offsetLeft - mousemargin, cat.offsetLeft + mousemargin)) {
        legs.forEach(leg=>leg.classList.remove('walk'))    
      }
    }
    
    setInterval(()=>{
      if (!pos.x || !pos.y) return
      decideTurnDirection()
      headMotion()
      decideStop()
    },100)
  
    setInterval(()=>{
      if(Math.random() < 0.25){
      catWrapper.classList.remove('jump')
      }
      if (!pos.x || !pos.y) return
      if(Math.random()*80 < 2){
        jump()
      }
    },1000) //50000
  
    document.addEventListener('mousemove', handleMouseMotion)
    document.addEventListener('mousemove', handleTouchMotion)
  }
  
  window.addEventListener('DOMContentLoaded', init)



  return (

    <div className="App">
      {/* <div id="particles" style={{ height: "100vh", width: "100%" }}>
      <ParticleField config={config} />;
      </div> */}





      <div className="centerdock">
        <div className="centercontainer">
          <ul>
            <li><button className='button'><b><underkey>B</underkey>old</b></button></li>
            <li><button className='button'><i><underkey>I</underkey>talic</i>  </button></li>

            <li><button className='button' id='highlight'><underkey>H</underkey>ighlight</button></li>
            <li><button className='button' id='material'><rainbow><underkey><munder>M</munder></underkey>aterial</rainbow></button></li>
            <div className="dropdown">
              <button className="dropbtn">
                <div className='rotatingtext'>
                  <div className='rotatingspan'>
                    Command<br />
                    Formula<br />
                    Script<br />
                    Action<br />
                    Verb<br />
                    Function
                  </div>
                </div>&nbsp;Palette<tooltip> | ∨</tooltip></button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>


            <div className="dropdown">
              <button className="dropbtn"><underkey>S</underkey>yntax Highlight<tooltip> | ∨</tooltip></button>
              <div className="dropdown-content">
                <a href="#">Auto Select?☑</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>

            <li>
              <div className='go'>
                <button className='button' id="go"><underkey>G</underkey>O<tooltip> ▶</tooltip></button>
                <div className='timings'>
                  <div id='timinggo'>100<units>ms</units></div>
                  <div id='timingvariables'>10<units>ms</units></div>
                </div>
              </div>
            </li>
          </ul>


          <CodeMirror
            id="AA"
            value="=" //{window.location.href.substring(22)}
            autoFocus="true"
            theme={myTheme2}
            extensions={getSelectedLang()}
            onChange={onChange}
            onKeyDown={onKeyDown}
            //selection={EditorSelection.cursor(5)}
            //onChange={this.value="hi"}
            ref={codemirrorRef}
            className="CodeMirror"
            basicSetup={{
              lineNumbers: false,
              foldGutter: false,
              //mode:"text/x-python"
            }}
            options={{
              //mode:"text/x-python"
            }}
          />
                    <div className="wrapper">
            <div className="cat_wrapper">
              <div className="cat first_pose">
                <div className="kitten">
                  <div className="cat_head">
                    <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 76.4 61.2" style={{ fill: 'white' }}>
                      <polygon className="eyes" points="63.8,54.1 50.7,54.1 50.7,59.6 27.1,59.6 27.1,54.1 12.4,54.1 12.4,31.8 63.8,31.8 " />
                      <path d="M15.3,45.9h5.1V35.7h-5.1C15.3,35.7,15.3,45.9,15.3,45.9z M45.8,56.1V51H30.6v5.1H45.8z M61.1,35.7H56v10.2h5.1
                  V35.7z M10.2,61.2v-5.1H5.1V51H0V25.5h5.1V15.3h5.1V5.1h5.1V0h5.1v5.1h5.1v5.1h5.1v5.1c0,0,15.2,0,15.2,0v-5.1h5.1V5.1H56V0h5.1v5.1
                  h5.1v10.2h5.1v10.2h5.1l0,25.5h-5.1v5.1h-5.1v5.1H10.2z" />
                    </svg>
                  </div>
                  <div className="body">
                    <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 91.7 40.8">
                      <path className="st0" d="M91.7,40.8H0V10.2h5.1V5.1h5.1V0h66.2v5.1h10.2v5.1h5.1L91.7,40.8z" />
                    </svg>
                    <div className="tail">
                      <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 25.5 61.1">
                        <polygon className="st0" points="10.2,56 10.2,50.9 5.1,50.9 5.1,40.7 0,40.7 0,20.4 5.1,20.4 5.1,10.2 10.2,10.2 10.2,5.1 15.3,5.1 
                    15.3,0 25.5,0 25.5,10.2 20.4,10.2 20.4,15.3 15.3,15.3 15.3,20.4 10.2,20.4 10.2,40.7 15.3,40.7 15.3,45.8 20.4,45.8 20.4,50.9 
                    25.5,50.9 25.5,61.1 15.3,61.1 15.3,56 " />
                      </svg>
                    </div>
                  </div>
                  <div className="front_legs">
                    <div className="leg one">
                      <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 14 30.5">
                        <polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0 " />
                      </svg>
                    </div>
                    <div className="leg two">
                      <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 14 30.5">
                        <polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0 " />
                      </svg>
                    </div>
                  </div>
                  <div className="back_legs">
                    <div className="leg three">
                      <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 14 30.5">
                        <polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0 " />
                      </svg>
                    </div>
                    <div className="leg four">
                      <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 14 30.5">
                        <polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0 " />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul>
            {/* <li><img className="icon" src="LinkedIn.svg" alt="LinkedIn" onClick={handleLinkedin} /></li>
            <li><img className="icon" src="GitHub.svg" alt="GitHub" onClick={handleGithub} /></li>
            <li><img className="icon" src="Mail.svg" alt="Email" onClick={handleMail} /></li>
            <li><img className="icon" src="Twitter.svg" alt="Twitter" onClick={handleTwitter} /></li>
            <li><img className="iconorange" src="YouTube.svg" alt="YouTube" onClick={handleYouTube} /></li>
            <li><img className="icon" src="Publications.svg" alt="Publications" onClick={handlePublications} /></li>
            <li><img className="iconorange" src="Notes.svg" alt="Notes" onClick={handleNotes} /></li>
            <li><img className="icon" src="Discord.svg" alt="Discord" onClick={handleDiscord} /></li>
            <li><img className="icon" src="Paypal.svg" alt="Discord" onClick={handlePaypal} /></li>
            <li><img className="icon" src="Patreon.svg" alt="Discord" onClick={handlePatreon} /></li>
            <li><img className="icon" src="Nick.svg" alt="Nick" onClick={handleNick} /></li> */}
            {/* <li><button className='button' id="bb" onClick={() => { 
              //codemirrorRef.current.state.update(codemirrorRef.current.state.update({changes: {from: 0, to: codemirrorRef.current.state.doc.length, insert: "foobar"}}))
              //console.log(codemirrorRef.current.state)
              
              //codemirrorRef.current.view.dispatch({changes: {from: 0, to: codemirrorRef.current.state.doc.length, insert: "foobar"}})


              //codemirrorRef.current.editor.focus()
              //codemirrorRef.current.view.focus()
              
              //codemirrorRef.current.view.dispatch({selection: {anchor: 5, head: 5}})


              //codemirrorRef.current.editor.dispatch({selection: {anchor: 5, head: 5}})
              
              // codemirrorRef.current.state.selection = EditorSelection.cursor(4)
              // codemirrorRef.current.state.selection = SelectionRange.extend(5,5)
              
              //codemirrorRef.current.state.selection.extend(5,5) 
              
              //codemirrorRef.current.state.selection.cursor(5)

              //codemirrorRef.current.state.focus()

              //codemirrorRef.current.vie
              //console.log(codemirrorRef)
              //console.log(codemirrorRef.cm.setValue("hi"))
              //let view = new EditorView(codemirrorRef.current.state)
              //view.update(codemirrorRef.current.state.update({changes: {from: 0, to: codemirrorRef.current.state.doc.length, insert: "foobar"}}))

              //codemirrorRef.current.state.
              //console.log(codemirrorRef.current.state)
            }}>CLICKME0</button></li> */}

            <li><button className='button'><underkey>H</underkey>elp<tooltip> | F1</tooltip></button></li>
            <li><button className='button'><underkey>F</underkey>ind<arrow>🠖</arrow>Replace</button></li>
            <div className="dropup">
              <button className="dropbtn"><underkey>L</underkey>oad from File<tooltip> | ∧</tooltip></button>
              <div className="dropup-content">
                <a href="#">Starcel</a>
                <a href="#">Github</a>
                <a href="#">API</a>
                <a href="#">pldb.com</a>
                <a href="#">rosettacode.org</a>
                <a href="#">stackoverflow.com</a>
                <a href="#">google.com</a>
              </div>
            </div>
            <div className="dropup">
              <button className="dropbtn"><underkey>S</underkey>end to File<tooltip> | ∧</tooltip></button>
              <div className="dropup-content">
                <a href="#"><tooltip>🔗</tooltip>Link</a>
                <a href="#">Custom</a>
                <a href="#">Printer</a>
                <a href="#"><underkey>Social Media</underkey></a>
                <a href="#">Github</a>
                <a href="#">Reddit</a>
              </div>
            </div>
            <li><button className='button' onClick={handleRefresh}><underkey>R</underkey>efresh</button></li>
            <div className="dropup">
              <button className="dropbtn"><underkey>T</underkey>heme<tooltip> | ∧</tooltip></button>
              <div className="dropup-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropup">
              <button className="dropbtn"><underkey>M</underkey>ove to Cell<tooltip> | ∧</tooltip></button>
              <div className="dropup-content">
                <a href="#">Auto Select?☐</a>
              </div>
            </div>
            <div className="dropup">
              <button className="dropbtn"><underkey>K</underkey>eyboard Mode<tooltip> | ∧</tooltip></button>
              <div className="dropup-content">
                <a href="#">Custom</a>
                <a href="#">Vim</a>
                <a href="#">Emacs</a>
                <a href="#">VSCode</a>
                <a href="#">Sublime</a>
                <a href="#">Jetbrains</a>
              </div>
            </div>
            <div className="dropup">
              <button className="dropbtn"><underkey>T</underkey>heme<tooltip> | ∧</tooltip></button>
              <div className="dropup-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropup">
              <button className="dropbtn">Copy History<tooltip> | ∧</tooltip></button>
              <div className="dropup-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropup">
              <button className="dropbtn">Action History<tooltip> | ∧</tooltip></button>
              <div className="dropup-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropup">
              <button className="dropbtn">Undo History<tooltip> | ∧</tooltip></button>
              <div className="dropup-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropup">
              <button className="dropbtn">Delete History <tooltip> | ∧</tooltip></button>
              <div className="dropup-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropup">
              <button className="dropbtn">&nbsp;&nbsp;&nbsp;&nbsp;Settings<tooltip> | ∧</tooltip>&nbsp;&nbsp;&nbsp;&nbsp;</button>
              <div className="dropup-content" id="settingsdropupcontent">
                <a href="#">Render widget in world? ☐</a>
                <a href="#">Small Buttons? ☐</a>
                <a href="#">Icons? ☐</a>
                <a href="#">Auto Refactor Commands? ☐</a>
              </div>
            </div>
          </ul>
          {/* <ul>
            <li><a href="https://www.linkedin.com/company/recursion-computing"><img className="icon" src="LinkedIn.svg" alt="LinkedIn" onClick={handleLinkedin} /></a></li>
            <li><a href="https://github.com/recursion-computing"><img className="icon" src="GitHub.svg" alt="GitHub" onClick={handleGithub} /></a></li>
            <li><a href="mailto:info@recursion.is"><img className="icon" src="Mail.svg" alt="Email" onClick={handleMail} /></a></li>
            <li><a href="https://twitter.com/RecursionIs"><img className="icon" src="Twitter.svg" alt="Twitter" onClick={handleTwitter} /></a></li>
            <li><a href="https://recursion.is/youtube"><img className="iconorange" src="YouTube.svg" alt="YouTube" onClick={handleYouTube} /></a></li>
            <li><a href="https://publications.recursion.is"><img className="icon" src="Publications.svg" alt="Publications" onClick={handlePublications} /></a></li>
            <li><a href="https://notes.recursion.is"><img className="icon" src="Notes.svg" alt="Notes" onClick={handleNotes} /></a></li>
            <li><a href="https://discord.gg/2kSSsvTVc3"><img className="icon" src="Discord.svg" alt="Discord" onClick={handleDiscord} /></a></li>
            <li><a href="https://nickmaleki.com"><img className="icon" src="Nick.svg" alt="Nick" onClick={handleNick} /></a></li>
          </ul> */}
        </div>

      </div>
    </div>

  );
}

export default App;
// export default () => <ParticleField config={config} />;
