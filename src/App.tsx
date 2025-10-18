// src/App.tsx
import "./App.css";
import CardContent from "./components/CardContent";

function App() {
  return (
    <>
      <div className="w-[50vw] h-[50vh]">
        <h1 className="text-3xl font-bold">Age Caculator</h1>
        <CardContent />
      </div>
    </>
  );
}

export default App;
