import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

const App2 = () => {
  const saveHandler = (data: unknown) => {
    const extractedData = data as { name: string; age: number };
    console.log(extractedData);
  };
  return (
    <main className="bg-gray-600 w-[60%] mx-auto mt-10 p-6 rounded-md flex flex-col items-center gap-2">
      <Form onSave={saveHandler}>
        <Input label="name" id="name" type="text" />
        <Input label="age" id="age" type="number" />
        <Button el="button">Submit</Button>
      </Form>
    </main>
  );
};

export default App2;
