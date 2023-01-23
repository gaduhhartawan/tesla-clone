import React from 'react'
import styled from 'styled-components'
import '../index.css'
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
      <Wrap bgImg={props.bgImg}>
          <Fade bottom>
            <ItemText>
                <h1>{props.name}</h1>
                <p>{props.desc}</p>
            </ItemText>
          </Fade>
          <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtn}
                    </LeftButton>
                    {props.rightBtn &&
                        <RightButton>
                            {props.rightBtn}
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
              {props.downArrow ? 
              <DownArrow src={`/images/${props.downArrow}`} />
              :
              <DownArrow />
              }
          </Buttons>
      </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url(/images/${props.bgImg})`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    text-transform: capitalize;

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 45px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;

`

const DownArrow = styled.img`
    // margin-top: 20px;
    margin-bottom: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``