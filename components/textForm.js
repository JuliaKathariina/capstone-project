import styled from "styled-components";
import { useRouter } from "next/router";

function TextForm({ appendListEntry }) {
  function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { mantra, category } = Object.fromEntries(formData);

    appendListEntry(mantra, category);
  }

  const router = useRouter();

  return (
    <Form onSubmit={sendForm}>
      <Headline>Hier ist platz für deine Affirmationen und Mantras</Headline>
      <InputLabel htmlfor="Mantra"> Mantra</InputLabel>
      <InputField
        type="text"
        id="mantra"
        name="mantra"
        placeholder="Ich bin ..."
        rows="2"
        maxLength="240"
        required
      ></InputField>
      <InputLabel htmlfor="Categroy"> Category</InputLabel>
      <InputField
        type="text"
        id="category"
        name="category"
        placeholder="#Healing"
        rows="2"
        maxLength="240"
        required
      ></InputField>
      <ButtonSave type="submit">Save</ButtonSave>

      <Button onClick={() => router.push("/FavoMantra")}>
        🧘🏽click here for your mantra
      </Button>
    </Form>
  );
}

export default TextForm;

const Headline = styled.h3`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const Form = styled.form`
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;
const ButtonSave = styled.button`
  background: white;
  text-align: center;
  border: none;
  padding: 5;
  text-decoration: underline;
  cursor: pointer;
  outline: black;

  &:hover {
    background: black;
    color: white;
    transition: 0.1s;
  }
`;
const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 5;
  text-decoration: underline;
  cursor: pointer;
  outline: black;

  &:hover {
    background: black;
    color: white;
    transition: 0.1s;
  }
`;

const InputLabel = styled.label`
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const InputField = styled.input`
  display: flex;
  padding: 10px;
  margin: 10px;
`;
