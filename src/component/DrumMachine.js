import React, { useRef,useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './DrumMachine.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function DrumMachine() {
  const [currentSound, setCurrentSound] = useState('');
  const [volume, setVolume] = useState(1);
  const audioRefs = {
    Q: useRef(),
    W: useRef(),
    E: useRef(),
    A: useRef(),
    S: useRef(),
    D: useRef(),
    Z: useRef(),
    X: useRef(),
    C: useRef(),
  };

  const playSound = (e) => {
    
    console.log(e.target.id);
    const buttonId = e.target.id;
    const audio = audioRefs[buttonId].current;
    if (audio) {
      audio.play();
      setCurrentSound(`Playing: ${buttonId}`);
      audio.volume = volume;
    }
  };
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };
  return (
    <>
      <div id="drum-machine">
        <div id="drum-pad">
          <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Container>
                <Row>
                  <Col>
                    <Button
                      id="Q"
                      variant="secondary"
                      size="lg"
                      className="mr-2 mb-2"
                      onClick={(e) => playSound(e)}
                    >
                      Q
                    </Button>
                    <audio ref={audioRefs.Q} id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
                  </Col>
                  <Col>
                    <Button
                      id="W"
                      variant="secondary"
                      size="lg"
                      className="mr-2 mb-2"
                      onClick={(e) => playSound(e)}
                    >
                      W
                    </Button>
                    <audio ref={audioRefs.W} id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
                  </Col>
                  <Col>
                    <Button
                      id="E"
                      variant="secondary"
                      size="lg"
                      className="mr-2 mb-2"
                      onClick={(e) => playSound(e)}
                    >
                      E
                    </Button>
                    <audio ref={audioRefs.E} id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      id="A"
                      variant="secondary"
                      size="lg"
                      className="mr-2 mb-2"
                      onClick={(e) => playSound(e)}
                    >
                      A
                    </Button>
                    <audio ref={audioRefs.A} id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
                  </Col>
                  <Col>
                    <Button
                      id="S"
                      variant="secondary"
                      size="lg"
                      className="mr-2 mb-2"
                      onClick={(e) => playSound(e)}
                    >
                      S
                    </Button>
                    <audio ref={audioRefs.S} id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
                  </Col>
                  <Col>
                    <Button
                      id="D"
                      variant="secondary"
                      size="lg"
                      className="mr-2 mb-2"
                      onClick={(e) => playSound(e)}
                    >
                      D
                    </Button>
                    <audio ref={audioRefs.D} id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      id="Z"
                      variant="secondary"
                      size="lg"
                      className="mr-2 mb-2"
                      onClick={(e) => playSound(e)}
                    >
                      Z
                    </Button>
                    <audio ref={audioRefs.Z} id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
                  </Col>
                  <Col>
                    <Button
                      id="X"
                      variant="secondary"
                      size="lg"
                      className="mr-2 mb-2"
                      onClick={(e) => playSound(e)}
                    >
                      X
                    </Button>
                    <audio ref={audioRefs.X} id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
                  </Col>
                  <Col>
                    <Button
                      id="C"
                      variant="secondary"
                      size="lg"
                      className="mr-2 mb-2"
                      onClick={(e) => playSound(e)}
                    >
                      C
                    </Button>
                    <audio ref={audioRefs.C} id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
                  </Col>
                </Row>
              </Container>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <div id="display">
        <InputGroup>
            <InputGroup.Text id="btnGroupAddon">Now Playing</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Press a key"
              aria-label="Display sound"
              aria-describedby="btnGroupAddon"
              value={currentSound}
              readOnly
            />
          </InputGroup>
          <div className="volume-slider mt-4">
            <label htmlFor="volume">Volume: {Math.round(volume * 100)}%</label>
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DrumMachine;
