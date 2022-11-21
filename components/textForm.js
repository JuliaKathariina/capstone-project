import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "./Form/form";
function TextForm({ appendListEntry }) {
  function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { mantra, category } = Object.fromEntries(formData);

    appendListEntry(mantra, category);
    router.push("/FavoMantra");
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
        pattern="[A-Za-z]+\ "
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
        pattern="[A-Za-z]+\ "
        rows="2"
        maxLength="10"
        required
      ></InputField>
      <Devicer />
      <ButtonSave type="submit">Save 🧘🏽click here for your mantra</ButtonSave>
    </Form>
  );
}

export default TextForm;

const Headline = styled.h3`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const ButtonSave = styled.button`
  background: white;
  font-size: 15px;
  text-align: center;
  border: none;
  padding: 5;
  margin: 10px;
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
  text-decoration: underline black;
`;
const Devicer = styled.div`
  display: grid;

  height: 2px;
  background-color: #4b4b4d;
  margin: auto 0;
`;
const InputField = styled.input`
  display: flex;
  padding: 10px;
  margin: 10px;
`;
