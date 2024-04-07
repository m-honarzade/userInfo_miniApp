import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main className="bg-gray-600 w-[75%] mx-auto mt-10 p-6 rounded-md flex flex-col items-center gap-2">
      <Input label="name" id="name" type="text" />
      <Input label="age" id="age" type="number" />
      <Button el="button">Botton</Button>
      <Button el="anchor" href="https://www.google.com/">
        link
      </Button>
    </main>
  );
}

export default App;
