import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import KeysExercise from "./keys.exersice.component";

/**react-design-patterns-app - version 9.11 - AdvancedHooks
 * - Features: 
 * 
 *     --> Developing 'KeysExercise 'exercise  
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
 */

const AdvancedHooks = () => {

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
                is highly important for the context of <span className="text-white font-semibold"> managing state preservation </span> and preventing unexpected 
                behavior when rendering components
            </p>

            <p>
                in React, keys are used to <span className="text-white font-semibold"> uniquely identify components </span>, especially when <span className="text-white font-semibold">
                rendering lists </span> or <span className="text-white font-semibold"> dynamically changing components. </span> They <span className="text-white font-semibold"> 
                allow </span> React to <span className="text-white font-semibold"> efficientlly update and manage the component tree </span> by distinguishing between 
                <span className="text-white font-semibold">  different instances of the same component </span>
            </p>

            <KeysExercise />

            </SectionWrapper>
        </div>)

}

export default AdvancedHooks;