import {LiquidGlass} from '@liquidglass/react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const WrapperStyled = styled(LiquidGlass)`
  &::before {
    content: '';
    position: absolute;
    inset: 0;

    --angle: ${({$angle}) => $angle}deg;
    --percent-l: ${({$percentage}) => 50 - $percentage + '%'};
    --percent-p: ${({$percentage}) => 50 + $percentage + '%'} ;
    
    padding: 1px; /* Толщина границы */
    border-radius: inherit;
    background: white;
    background: linear-gradient(var(--angle), rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) var(--percent-l), rgba(255, 255, 255, 0) var(--percent-p), rgba(255, 255, 255, 0.9) 100%);
    background: -moz-linear-gradient(var(--angle), rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) var(--percent-l), rgba(255, 255, 255, 0) var(--percent-p), rgba(255, 255, 255, 0.9) 100%);
    background: -webkit-linear-gradient(var(--angle), rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) var(--percent-l), rgba(255, 255, 255, 0) var(--percent-p), rgba(255, 255, 255, 0.9) 100%);

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const Content = styled.div`
    width: 100%;
`;

export const GlassBlock = (props) => {
    const glassRef = useRef(null);
    const [angle, setAngle] = useState(90);
    const [percentage, setPercantage] = useState(1);

    useEffect(() => {
        if (!glassRef.current) return;

        const {width, height} = glassRef.current?.getBoundingClientRect();

        setPercantage(40 / width);
        setAngle(width / height + 90);
    }, []);

    return (
        <WrapperStyled
            borderRadius={40}
            blur={3.7}
            contrast={0.8}
            brightness={0.9}
            saturation={0.9}
            displacementScale={1}
            elasticity={1}
            $angle={angle}
            $percentage={percentage}
            {...props}
        >
            <Content 
            ref={glassRef}
            >
            {props.children}
                </Content>
        </WrapperStyled>
    )
}