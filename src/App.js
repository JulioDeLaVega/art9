import logo from './logo.svg';
import './App.css';
import { Form, FormControl, InputGroup, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [risk, setRisk] = useState(0);

  const [score, setScore] = useState(0);

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [option6, setOption6] = useState(false);
  const [option7, setOption7] = useState(false);
  const [option8, setOption8] = useState(false);
  const [option9, setOption9] = useState(false);

  const [turnover, setTurnover] = useState(1000);

  useEffect (() =>{ 
    
    var score = 0

    if (option1 == true){ score++}
    if (option2 == true){ score++}
    if (option3 == true){ score++}
    if (option4 == true){ score++}
    if (option5 == true){ score++}
    if (option6 == true){ score++}
    if (option7 == true){ score++}
    if (option8 == true){ score++}
    if (option9 == true){ score++}
    

    if (score >= 1){ 
      setRisk(Math.round(80 + (score/9)*20))
    }
    else{ setRisk(0)}
    

  }, [option1, option2, option3, option4, option5, option6, option7,option8, option9])

  

  return (
    <div className="container">

      <div className="Cont1">
      <h1>GDPR Article 9</h1>
      

      <a href="https://gdpr-info.eu/art-9-gdpr/" target="_blank"><FontAwesomeIcon icon={faGithub} style={{marginRight:"1em"}}  /></a>
      <a href="https://gdpr-info.eu/art-9-gdpr/" target="_blank"><FontAwesomeIcon icon={faLink}  /></a>


      <br></br>
      <br></br>

      <p>The processing of health data related to a specific individual is prohibited (Art. 9 §1) except if:</p>
      
      <div className="box">
        <p>...the data subject has given explicit consent (Art. 9 §2-a):</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption1(!option1)}/>
      </div>
      

        <div className="box">
          <p>... the processing is necessary for the purposes of carrying out of legal obligations regarding employment or social security (Art. 9 §2-b):</p>
          <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption2(!option2)}/>
        </div>

        <div className="box">
        <p>... the processing is necessary to protect the vital interests of a data subject who is incapable of giving consent (Art. 9 §2-c):</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption3(!option3)}/>

        </div>

        <div className="box">
        <p>... processing is carried out in the course of its legitimate activities with appropriate safeguards by a not-for-profit body (Art. 9 §2-d):</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption4(!option4)}/>

        </div>

        <div className="box4">
        <p>... the personal data was manifestly made public by the data subject (Art. 9 §2-e):</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption5(!option5)}/>

        </div>

        <div className="box4">
        <p>... the processing is necessary for the establishment, exercise or defence of legal claims (Art. 9 §2-f):</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption6(!option6)}/>

        </div>

        <div className="box4">
        <p>... processing is necessary for reasons of substantial public interest, on the basis of a law (Art. 9 §2-g) when the data is processed by or under the responsibility of a professional subject to the obligation of professional secrecy (Art. 9 §3):</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption7(!option7)}/>

        </div>

        <div className="box4">
        <p>... processing is necessary for reasons of public interest in the area of public health (Art. 9 §2-i):</p>
        <p><i>For instance, the protection against serious cross-border threats to health or ensuring high standards of quality and safety of health care and of medicinal products or medical devices.</i></p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption8(!option8)}/>

        </div>

        <div className="box4">
        <p>... processing is necessary for archiving purposes in the public interest (Art. 9 §2-j):</p>
        <p><i>For instance, scientific or historical research purposes or statistical purposes.</i></p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption9(!option9)}/>

        </div>

      </div>

      <div className="Cont2">
        <div>
      <h1>Your compliance level</h1>
      <br></br>
      <h2>{risk} %</h2>
      <ProgressBar now={risk} />
      <br></br>
      <p>There is a probability of {100 - risk}% that you are infringing the GDPR.</p>
      <br></br>
      
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3" >
      Your global turnover (in euros)
    </InputGroup.Text>
    <FormControl id="basic-url" aria-describedby="basic-addon3" defaultValue={1000} type="number" onChange={ (e) => setTurnover(e.target.value)}/>
  </InputGroup>
  <p >You risk a fine of {(turnover*(100 - risk)/100)*(2/100)} euros.</p>
  <br></br><br></br>
  <p style={{color:"grey"}}><b>Assumptions and computations</b></p>
  <p style={{color:"grey"}}>Regarding the compliance level, we consider that fulfilling one exception does not prevent you from an infringement. We therefore grant an 80% compliance level as soon as you check at least one exception. If you check several, then the compliance level increases. </p>

  <p style={{color:"grey"}}>Regarding the fine, the GDPR imposes a fine of 2% on the global turnover for any infringement of Article 9. We then multiply this figure by your risk exposure.</p>
      
      
      </div>

     
      
      </div>

    </div>
  );
}

export default App;
