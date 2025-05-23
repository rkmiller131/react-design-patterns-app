import styled from "styled-components";
import { useMousePosition } from "../hooks/optimization.patterns.use.mouse.hook";
import { useMousePositionNotThrottling } from "./optimization.patterns.use.mouse.not.optimal";

/**react-design-patterns-app - version 48.20 - TrackMouse
 * - Features: 
 * 
 *     --> Building TrackMouseNotOptimal
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const TrackMouseWrapper = styled.div`
    margin: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 2rem;
    background: blueviolet;
    color: white;
    border-radius: 0.75rem;

    span{
        color: chartreuse;
        font-size: 2rem;
        margin: 1rem;
        padding: 1rem;
    }
`

const TrackMouseNotOptimal = (props) => {
  const position = useMousePositionNotThrottling();

  return (
    <TrackMouseWrapper>
        Last mouse position - <span> x: {position.x}, y: {position.y} </span>
    </TrackMouseWrapper>
  );
};

export default TrackMouseNotOptimal;
