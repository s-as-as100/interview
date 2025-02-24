import "./App.css";
import SearchFilterData from "./Components/SearchFilterData";
// import TheoryQuestions from "./Components/TheoryQuestions";
// import useCustomHook from  "./Components/useuseCustomHook;
// import NestCircleBasedOnInput from "./Components/NestCircleBasedOnInput.tsx";

function App() {
  // const { data } = useCustomHook()
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* <TheoryQuestions /> */}
        {/* <NestCircleBasedOnInput /> */}
        <SearchFilterData />
      </div>
    </>
  );
}

export default App;
