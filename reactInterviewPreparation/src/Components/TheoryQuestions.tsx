import React from "react";

type QuestionAnser = {
  question: string;
  answer: string;
};

const TheoryQuestions: React.FC = () => {
  const questionsAndAnswers: QuestionAnser[] = [
    {
      question: "What is React?",
      answer:
        "React is an open-source JavaScript library used to develop user interfaces.",
    },
    {
      question: "2. What are the features of React?",
      answer:
        "JSX, support server side rendering, uses of reusable component to developed view, virtual dom , one way data binding",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX stands for JavaScript XML, and it allows us to write HTML in React.",
    },
    {
      question: "4. What is DOM ?",
      answer:
        "DOM means document object model,it represemt the tree like struture that represents the element of webapge. ",
    },
    {
      question: "5. What is Virtual Dom?",
      answer:
        "Virtual dom is only update the specific data updated which is changed and compared to actual dom only speific ui is render, and virtual dom are typically very fast beacuse they occur memory ",
    },
    {
      question: "6. What is state in Reactjs?",
      answer:
        "State is object which holds the data related to a component that may change over the lifetime of a component",
    },
    {
      question:
        "What is the purpose of callback function as an argument of setState()",
      answer:
        "if we want to execute some logic once state is updated and component is rerendered then we can add it in callback function",
    },
    {
      question: "8. What are props ?",
      answer:
        "props are inputs to the component, they used to send data from parent to child component,immutable, so they cannot updated",
    },
    {
      question:
        "9. What are the differences between State and Props in react ?",
      answer:
        "Both state and props are used to manage the data of a component,state is mutable, props are immuatable,any change in state causes rerenderer of component and its children ",
    },

    {
      question: "10. What is props drilling?",
      answer:
        "Props drilling is the process of sending the data from one component to the component thats needs the data from several interconnected components",
    },
    {
      question:
        "11. What are the disadvantages of props drilling and How we can avoid props drilling ?",
      answer:
        "Code complexity:, Reduced maintainability:, Increased risk of errors:, Performance overhead:",
    },
    {
      question: "12. What is useReducer hook ?",
      answer:
        "it is an alternative hook of useState which manage complex multiple state.",
    },
    {
      question: "13. What is useMemo ?",
      answer:
        "useMemo is useful for performance optimization in react and It is used to cache the result of a function between re-renders. and example of data visualization",
    },
    {
      question: "14. What is useCallback ?",
      answer:
        "Props drilling is the process of sending the data from one component to the component thats needs the data from several interconnected components",
    },
    {
      question: "10. What is props drilling ?",
      answer:
        "Props drilling is the process of sending the data from one component to the component thats needs the data from several interconnected components",
    },
  ];

  return (
    <div>
      {questionsAndAnswers.map((item, index) => (
        <div key={index}>
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default TheoryQuestions;
