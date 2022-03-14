import logo from './logo.svg';
import './App.css';
import { Form, FormControl, InputGroup, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faClipboard, faHeartbeat, faLink, faMicrochip } from '@fortawesome/free-solid-svg-icons';

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

  const [option10, setOption10] = useState(false);

  const [turnover, setTurnover] = useState(1000);

  useEffect (() =>{ 
    
    var score = 0

    var score_dpia = 0

    if (option1 == true){ score++}
    if (option2 == true){ score++}
    if (option3 == true){ score++}
    if (option4 == true){ score++}
    if (option5 == true){ score++}
    if (option6 == true){ score++}
    if (option7 == true){ score++}
    if (option8 == true){ score++}
    if (option9 == true){ score++}

    if (option10 == true){ score_dpia++}
    

    if (score >= 1){ 
      var final_score = Math.round(70 + ((score/9)*20) + score_dpia*25)
      if (final_score > 100){setRisk(100) }
      else(setRisk(final_score))
      
    }
    else{ setRisk(0)}
    

  }, [option1, option2, option3, option4, option5, option6, option7,option8, option9, option10])

  

  return (
    <div className="container">

      <div className="Cont1">
      <h1><FontAwesomeIcon icon={faHeartbeat}/>&nbsp;&nbsp;Processing health data</h1>
      

      <a href="https://github.com/JulioDeLaVega/art9/tree/master" target="_blank"><FontAwesomeIcon icon={faGithub} style={{marginRight:"1em"}}  /></a>
      <a href="https://gdpr-info.eu/art-9-gdpr/" target="_blank"><FontAwesomeIcon icon={faLink}  /></a>

      <br></br>
      <br></br>

      <p>What is health data? Health data refers to any data which reveal information relating to the past, current or future physical or mental health of a data subject (genetic data, biological samples, disease, disability, medical history, psychological state), whatever the source of the data (Recital 35). This type of data is particularly sensitive and the GDPR poses several conditions for its processing.</p>
      <br></br>
      <div className="box">
        <h3 style={{color:"darkblue"}}><FontAwesomeIcon icon={faMicrochip}/>&nbsp;&nbsp;Lawful processing</h3>
        <br></br>
      <p>The processing of health data related to a specific individual is in principle <b>prohibited</b> (Art. 9 §1), except if:</p>
      <br></br>
        <p>...the data subject has given explicit consent (Art. 9 §2-a)</p>
        <p style={{color:"grey"}}><i>The European Data Protection Board considers that regarding the processing of health data, there is explicit consent if the data subject is given appropriate information and consented with a two stage authentification or a digital signature. <a style={{color:"grey"}} href="https://edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_202005_consent_en.pdf" target="_blank"><FontAwesomeIcon icon={faLink}  /></a></i></p>

        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption1(!option1)}/>
        <br></br>
          <p>... the processing is necessary for the purposes of carrying out of legal obligations regarding employment or social security (Art. 9 §2-b)</p>
          <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption2(!option2)}/>
        <br></br>
        <p>... the processing is necessary to protect the vital interests of a data subject who is incapable of giving consent (Art. 9 §2-c)</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption3(!option3)}/>

        <br></br>
        <p>... the processing is carried out in the course of its legitimate activities with appropriate safeguards by a not-for-profit body (Art. 9 §2-d)</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption4(!option4)}/>

        <br></br>
        <p>... the personal data was manifestly made public by the data subject (Art. 9 §2-e)</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption5(!option5)}/>

        <br></br>
        <p>... the processing is necessary for the establishment, exercise or defence of legal claims (Art. 9 §2-f)</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption6(!option6)}/>

        <br></br>
        <p>... processing is necessary for reasons of substantial public interest, on the basis of a law (Art. 9 §2-g) when the data is processed by or under the responsibility of a professional subject to the obligation of professional secrecy (Art. 9 §3)</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption7(!option7)}/>

        <br></br>
        <p>... the processing is necessary for reasons of public interest in the area of public health (Art. 9 §2-i)</p>
        <p style={{color:"grey"}}><i>For instance, the protection against serious cross-border threats to health or ensuring high standards of quality and safety of health care and of medicinal products or medical devices.</i></p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption8(!option8)}/>

        <br></br>
        <p>... the processing is necessary for archiving purposes in the public interest (Art. 9 §2-j)</p>
        <p style={{color:"grey"}}><i>For instance, for scientific, historical or statistical purposes.</i></p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption9(!option9)}/>
        </div>

        <div className="box">
        <h3 style={{color:"darkblue"}}><FontAwesomeIcon icon={faClipboard}/>&nbsp;&nbsp;Data protection impact assessment</h3>
        <br></br>
        <p>Where a type of processing is likely to result in a high risk to the rights of a data subject, the controller carry out an impact assessment (Art. 35 §1-a).&nbsp;<a style={{color:"grey"}} href="https://gdpr-info.eu/art-35-gdpr/" target="_blank"><FontAwesomeIcon icon={faLink}  /></a>
</p>
        <p>I conducted an impact assessment for the processing of this data:</p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption10(!option10)}/>

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
  <p >You risk a fine of {Math.round((turnover*(100 - risk)/100)*(4/100))} euros.</p>
  <br></br><br></br>
  <p style={{color:"grey"}}><b>Assumptions and computations</b></p>
  <p style={{color:"grey"}}>Regarding the compliace level, fulfilling one exception and having conducted an impact assessment is in principle sufficient to grant a 100% compliance level according to the GDPR. However, since the judges are not bound by these answers, there is still a limited risk. Furthermore, the more exceptions you check the more compliant you are.</p>

  <p style={{color:"grey"}}>Regarding the fine, the GDPR imposes a fine of 4% on the global turnover for any infringement of Article 9. We then multiply this figure by your risk exposure.</p>
      
      </div>

     
      
      </div>

    </div>
  );
}

export default App;
