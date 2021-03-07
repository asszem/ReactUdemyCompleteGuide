import React, { useEffect } from 'react';
import { rando } from '../../containers/App';
import classes from './Cockpit.module.css';

// Component name must start with Capital
const Cockpit = (props) => {
  //useEffect is a React Hook that can be added to a functional component, can be added anywhere
  useEffect(() => {
    console.log('[Cockpit.js] useEffect1 - persons changed');
    // Http request can be run from here
  }, [props.personsLength]); //only execute when state.persons changed!

  //can be used multiple times
  useEffect(() => {
    console.log('[Cockpit.js] useEffect2 - showPersons changed');
    // Http request can be run from here

    return () => {
      // this will run after the render cycle
      console.log(
        '[Cockpit.js] cleanup work in useEffect 2 - after showNames changed'
      );
    };
  }, [props.stateShowNames]); //only execute when state.showPersons changed!

  useEffect(() => {
    console.log(
      '[Cockpit.js] useEffect 3 - only when first renders and when destroyed'
    );
    // Http request can be run from here
    // store the function in a variable
//    const timer = setTimeout(() => {
//       alert('Timeout after 1 sec executed');
//     }, 1000);

    return () => {
      // this will run after the render cycle
    // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect 3');
    };
  }, []); //empty array only executes when comp rendered or destroyed

  const assignedClasses = [];
  let btnClass = '';
  if (props.stateShowNames) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.Red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.Bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p></p>
      {/* <p className={classes.testClass}>.testClass red </p>
      <p className={classes.testClass2}>.testClass2 blue</p> */}
      <button
        className={assignedClasses.join(' ')}
        onClick={() => props.changeNames(rando())}
      >
        Change Every Name
      </button>

      <button className={btnClass} onClick={props.showNames}>
        Toggle Name Display
      </button>
    </div>
  );
};

export default React.memo(Cockpit); // only render this functional component if it props has changed