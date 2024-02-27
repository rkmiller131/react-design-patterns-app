import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import KeysExercise from "./keys.exersice.component";
import BashCode from "./bash.higlight.component";
import { usePatternsAppContext } from "../context";
import WithoutKeysExercise from "./withoutkeys.exersice.component";
import WithtKeysExercise from "./withtkeys.exersice.component";
import AlertMessageWithEventListener from "./alert.message.event.listener.portal.component";

/**react-design-patterns-app - version 10.01 - AdvancedHooks
 * - Features: 
 * 
 *     --> Adding 'alertMessagewitheventListener' code  
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
 */

const AdvancedHooks = () => {

    
    const { CodeData } = usePatternsAppContext();

    const keyexercisecode = CodeData[72].code;
    const countercode = CodeData[73].code;
    const withoutkeysexercisecode = CodeData[73].code;
    const withkeysexercisecode = CodeData[74].code;
    const alertMessagewitheventListener = CodeData[75].code;

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="advanced-hooks-patterns"><span > Advanced Hooks </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

                <p>
                    this will be a <span className="text-white font-semibold"> compilation 9 most use advanced hooks patterns </span> 
                    used to solve a variaty of problems:
                </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> keys </span> ( Unique identifiers used by React to efficiently update and manage lists of elements )
                </li>
                <li>
                    <span className="text-white font-semibold"> event listeners </span> ( Functions that listen for specific events - such as clicks or key presses - and execute code in response to those events )
                </li>
                <li>
                    <span className="text-white font-semibold"> useLayoutEffect </span> ( A React hook similar to `useEffect`, but fires synchronously after all DOM mutations. )
                </li>
                <li>
                    <span className="text-white font-semibold"> useId </span> ( Custom React hook used to generate unique IDs for elements, often used in conjunction with accessibility or for DOM manipulation. )
                </li>
                <li>
                    <span className="text-white font-semibold"> useCallback as Refs </span> ( React hook used to memoize callback functions, commonly used with `useRef` to maintain consistent references between renders.)
                </li>
                <li>
                    <span className="text-white font-semibold"> useImperativeHandle </span> ( React hook used to customize the instance value that is exposed when using `ref` with `forwardRef`)
                </li>
                <li>
                    <span className="text-white font-semibold"> useDeferredValue </span> ( React hook that defers the update of a value to avoid blocking the UI, useful for optimizing performance of non-critical updates.)
                </li>
                <li>
                    <span className="text-white font-semibold"> useTransition </span> ( React hook that allows for smooth transitions when adding or removing elements from the DOM, improving user experience)
                </li>
                <li>
                    <span className="text-white font-semibold"> Async React Router </span> ( Feature of React Router that allows for lazy loading and code splitting of route components, enhancing performance by loading components asynchronously. )
                </li>
            </ul>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="advanced-hooks-keys"><span > keys </span></p>} />
            </CustomTitleStyle>

            <p>
                The <span className="text-white font-semibold"> implementation of keys </span> in <span className="text-white font-semibold"> React Components </span> 
                is highly important for the context of <span className="text-white font-semibold"> managing render updating </span> and preventing unexpected 
                behavior when rendering components
            </p>

            <p>
                in React, keys are used to <span className="text-white font-semibold"> uniquely identify components </span>, especially when <span className="text-white font-semibold">
                rendering lists </span> or <span className="text-white font-semibold"> dynamically changing components. </span> They <span className="text-white font-semibold"> 
                allow </span> React to <span className="text-white font-semibold"> efficientlly update and manage the component tree </span> by distinguishing between 
                <span className="text-white font-semibold">  different instances of the same component </span>
            </p>

            <p>
                so i have the an exercise that <span className="text-white font-semibold"> counts items </span> as <span className="text-white font-semibold"> shirts and shoes 
                </span> you can imagine as a shopping cart as follows:
            </p>

            <BashCode code={keyexercisecode}/>

            <p>
                so what happens if i set different parent elements for each span for example a <span className="text-white font-semibold"> {`<div >`} </span> and a 
                <span className="text-white font-semibold"> {`<setion >`} </span> as follows:  
            </p>

            <BashCode code={withoutkeysexercisecode}/>

            <p>
                resulting as follows:
            </p>

            <WithoutKeysExercise />

            <p>
                and this way the <span className="text-white font-semibold"> react tree </span> will <span className="text-white font-semibold"> detect them as 
                different element in the tree </span>, affecting the render of the counter consequentlly, as can be noticed
            </p>

            <p>
                and the <span className="text-white font-semibold"> {`<Counter />`} </span> code as follows:
            </p>

            <BashCode code={countercode}/>

            <p>
                getting stick with <span className="text-white font-semibold"> KeysExercise </span>, it <span className="text-white font-semibold"> preserves the 
                same state </span> for both elements ( the react element does not get updated, unnecessary rendering ), cause they are detected as the same span, 
                resulting in:
            </p>

            <KeysExercise />

            <p>
                and by the resulting code i can notice in the behavior that as i switch between shirts and shoes keeps the
                count is currenly the same for both <span className="text-white font-semibold"> ( should not be as this ),
                </span> because as i can increase the counter for shirts i cannot 
                assume that shoes are the same count, so here comes the question <span className="text-white font-semibold"> "how can i fix the count for each ?" </span>, 
                and the answer is by using <span className="text-white font-semibold"> keys </span> for 
                <span className="text-white font-semibold"> shirts and shoes. </span>
            </p>

            <p>
                so refactoring the code the goal is to <span className="text-white font-semibold"> manage update render of the component </span> will be to get will 
                be as follows:
            </p>

            <BashCode code={withkeysexercisecode}/>


            <p>
                being this way <span className="text-white font-semibold"> most accurate </span> in order to <span className="text-white font-semibold"> detect them as 
                different elements </span> from each other and clearing its state to <span className="text-white font-semibold"> the default </span> as follows:
            </p>

            <WithtKeysExercise />

            <p>
                In summary,<span className="text-white font-semibold"> while the key prop itself doesn't directly affect the state </span> of the Counter component, it 
                <span className="text-white font-semibold"> plays a crucial role in React's rendering </span> and 
                <span className="text-white font-semibold"> reconciliation process </span>, ensuring efficient 
                <span className="text-white font-semibold"> updates and maintaining component stability. </span>
            </p>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="event-listeners-hooks"><span > event listeners </span></p>} />
            </CustomTitleStyle>

            <p>
                it's important to use event listeners in React components to handle user interactions and respond to events effectively. Event 
                handlers like onClick typically follow the bubbling phase, where events propagate from the target element up through its 
                ancestors. This means that event handlers attached to parent elements will be triggered after those attached to child elements.
            </p>

            <p>
                so refactoring the alert message portal to use an onclick event listener, resulting as follows:
            </p>

            <BashCode code={alertMessagewitheventListener}/>

            </SectionWrapper>
        </div>)

}

export default AdvancedHooks;