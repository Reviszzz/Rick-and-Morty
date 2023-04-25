import Character from "./components/Character";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="bg-dark text-white">
      <img className="mx-auto d-block w-50" src="https://imgs.search.brave.com/dHufHRXH4Ar2yg61p4-35agqH4RZbsimr6r1GJkf71U/rs:fit:800:310:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/ZmljdGlvbmFsY3Jv/c3NvdmVyL2ltYWdl/cy9jL2M4L1JpY2tf/YW5kX01vcnR5X2xv/Z28ucG5nL3Jldmlz/aW9uL2xhdGVzdD9j/Yj0yMDE1MDUxNTEy/NTk1OQ" alt="" />

      <CharacterList />
    </div>
  );
}

export default App;
