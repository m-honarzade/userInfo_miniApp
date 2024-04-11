import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const userNameInput = useRef<HTMLInputElement>(null);
  console.log(userNameInput);
  return (
    <main className="bg-gray-600 w-[60%] mx-auto mt-10 p-6 rounded-md flex flex-col items-center gap-2">
      <Input label="name" id="name" type="text" ref={userNameInput} />
      <Input label="age" id="age" type="number" />
      <Button el="button">Botton</Button>
      <Button el="anchor" href="https://www.google.com/">
        link
      </Button>
      <Container
        as="button"
        disabled
        onClick={() => {
          console.log("hello");
        }}
      >
        i am a div
      </Container>
      <Container as="a" href="https://www.google.com/">
        i am a link
      </Container>
      <Container as="p">i am a p</Container>
      {/* <Container as=<Button el="button"></Button> >i am a button component</Container> */}
    </main>
  );
}

export default App;
