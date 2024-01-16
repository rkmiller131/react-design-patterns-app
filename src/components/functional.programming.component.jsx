import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import RecursivePattern from "./recursive.pattern.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";
import { GreenButton, RedButton } from "./composition.pattern.component";

/**react-design-patterns-app - version 4.18 - FunctionalProgramming
 * - Features: 
 * 
 *     --> Adding 'GreenButton' for Composition Pattern.
 * 
 * Note: this end component will handle the props destructuring and 
 * rendering
 */

const FunctionalProgramming = () => {

    const { myNestedObject, CodeData } = usePatternsAppContext();

    const recursivecode = CodeData[26].code;

    const myNestedData = CodeData[27].code;

    return(
        <div>
        <CustomTitleStyle>
            <CustomTitle  title={<p className="functional-programming"><span >Functional Programming </span></p>} />
        </CustomTitleStyle>

        <SectionWrapper>
            <p>
                functional programming has use cases related with the patterns 
                previously, Controlled Components, Functional Components, HOC's,
                Recursive Components, Partial Components, Composition
            </p>

            <p>
                this functional programming paradigm is entirely focused
                React stack and their key points are as follow:      
            </p>

            <CustomTitleStyle>
                    <CustomTitle  title={<p className="functional-programming"><span >Definition of Functional Programming:</span></p>} />
            </CustomTitleStyle>

            <ul>
                <li>
                    <span className="text-white font-semibold"> Emphasizes minimizing mutation and state change.</span>
                    (can be focus in how the pattern reduces large modifications and how mutation by useState hook and state 
                    management libraries help in this goal) 
                </li>
                <li>
                    <span className="text-white font-semibold"> Utilizes pure functions independent of external data. </span>
                    ( pure functions always give the same results make it them a deterministic pattern )
                </li>
                <li>
                    <span className="text-white font-semibold"> Treats functions as first-class citizens. </span>
                    ( this means a function can be asigned as variable, passed as an argument, returned from 
                      other functions, and stored in data structures )
                </li>
                <li>
                    <span className="text-white font-semibold"> Treats functions as first-class citizens. </span>
                    ( this means a function can be asigned as variable, passed as an argument, returned from 
                      other functions, and stored in data structures )
                </li>
            </ul>

            <CustomTitleStyle>
                    <CustomTitle  title={<p className="functional-programming"><span >Encouragement for Research: </span></p>} />
            </CustomTitleStyle>            
            
            <ul>
                <li>
                        <span className="text-white font-semibold"> research about patterns can beneficial for a developer's career and
                        is not limited to React world. </span>
                </li>               
            </ul>            

            <CustomTitleStyle>
                    <CustomTitle  title={<p className="functional-programming"><span >Applications of Functional Programming in React: </span></p>} />
            </CustomTitleStyle> 

            <ul>
                <li>
                    <span className="text-white font-semibold"> Control components</span>
                    (Manage component state by passing necessary props.) 
                </li>
                <li>
                    <span className="text-white font-semibold"> State management function components </span>
                    ( Key application of functional programming. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Higher-order components (HOCs) </span>
                    ( Leverage first-class functions, enabling creation of reusable functions that return other functions. )
                </li>
            </ul>            

            <CustomTitleStyle>
                    <CustomTitle  title={<p className="functional-programming"><span >Design Patterns in React Influenced by Functional Programming: </span></p>} />
            </CustomTitleStyle>                

            <ul>
                <li>
                    <span className="text-white font-semibold"> Recursive components </span>
                    ( Rely on recursion to achieve specific effects. ) 
                </li>
                <li>
                    <span className="text-white font-semibold"> Partially applied components </span>
                    ( Enable creation of more specific versions by passing a subset of props, allowing for code reuse and customization. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Component composition (HOCs) </span>
                    ( Involves combining multiple components into a single component for achieving desired effects. )
                </li>
            </ul>

            <p>
                let's say i have a nested object and i want build a component that render recursively the data: 
            </p> 

            <BashCode code={myNestedData}/>     

            <p>
                a recursive component is a component that calls itselft from inside itself ( kind like recursive functions, but this case applied to react components ) 
                these components are compose of a <span className="text-white font-semibold"> base case </span> a an example of recursive components and a 
                <span className="text-white font-semibold"> recursive case </span>, as the example as folllows:
            </p>

            <BashCode code={recursivecode}/>

            <p>
                rendering as follows: 
            </p>

            <RecursivePattern data={myNestedObject}/>

            <p>
                and when it comes to <span className="text-white font-semibold"> Partially applied components </span>, by passing props i can 
                create custom versions of a generic component, as follows:
            </p>
            
           <RedButton text='danger custom'/>   

           <p>
               and the green version as follows:         
           </p>          

           <GreenButton text='approve custom'/>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="functional-programming"><span >Importance of Component Composition: </span></p>} />
            </CustomTitleStyle>         

            <ul>
                <li>
                    <span className="text-white font-semibold"> Component composition enhances modularity by combining simpler components to create more complex ones. </span>
                </li>
            </ul>                  

            <CustomTitleStyle>
                <CustomTitle  title={<p className="functional-programming"><span >Upcoming Exploration: </span></p>} />
            </CustomTitleStyle>            

            <ul>
                <li>
                    <span className="text-white font-semibold"> Mention of diving into three additional design patterns that showcase the influence of functional programming in React </span>
                    ( recursive components, partially applied components, and component composition. )
                </li>
            </ul>            

        </SectionWrapper>
        </div>
    )
}

export default FunctionalProgramming;