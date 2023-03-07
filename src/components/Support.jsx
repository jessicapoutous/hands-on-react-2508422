import { useState, useEffect } from 'react';
const pageTitle = document.title;

export default () => {
  const [count, setCount] = useState(0)

  useEffect(
    () => {
      /*if (count > 0) {
        document.title = `${pageTitle}--${count}`;
      }*/
      //display nothing if count doesn't exit and what is in the parens if it does 
      () => {
        count && (document.title = `${pageTitle} - ${count}`);
      }
    }
  )
  return (
    //use curly braces in return statements
    <button className="outline" onClick={() => setCount(count + 1)}>
      {count === 0 ? "Click to support" : `Supported ${count} times`}
    </button>
  )
}