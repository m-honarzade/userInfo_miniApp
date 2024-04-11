import { useRef } from "react";
import Button from "./components/Button";
import Form, { FormHandle } from "./components/Form";
import Input from "./components/Input";

const App2 = () => {
  const customForm = useRef<FormHandle>(null);
  const saveHandler = (data: unknown) => {
    const extractedData = data as { name: string; age: number };
    // if (
    //     !data ||
    //     typeof data !== 'object' ||
    //     !('name' in data) ||
    //     !('age' in data)
    //   ) {
    //       return;
    console.log(extractedData);
    customForm.current?.clear();
  };
  return (
    <main className="bg-gray-600 w-[60%] mx-auto mt-10 p-6 rounded-md flex flex-col items-center gap-2">
      <Form onSave={saveHandler} ref={customForm}>
        <Input label="name" id="name" type="text" />
        <Input label="age" id="age" type="number" />
        <Button el="button">Submit</Button>
      </Form>
    </main>
  );
};

export default App2;
