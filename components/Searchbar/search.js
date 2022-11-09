import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
export function Search({ stones, setFilterStones }) {
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const handleChange = () => {
      const filterData = stones.filter((item) => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase());
      });

      setFilterStones(filterData);
    };
    handleChange();
  }, [searchInput]);

  const [barOpened, setBarOpened] = useState(false);
  const [input, setInput] = useState("");
  const formRef = useRef();
  const inputFocus = useRef();
  return (
    <section>
      <Searchbar
        barOpened={barOpened}
        onClick={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        onFocus={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        onBlur={() => {
          setBarOpened(false);
        }}
        ref={formRef}
      >
        <SearchButton type="submit" barOpened={barOpened}>
          ◉
        </SearchButton>
        <Input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearchInput(e.target.value)}
          barOpened={barOpened}
          ref={inputFocus}
          value={searchInput}
        />
      </Searchbar>
    </section>
  );
}

const Searchbar = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 0px;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: rgba(245, 235, 235, 0.38);
  width: ${(props) => (props.barOpened ? "30rem" : "2rem")};
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  color: black;
  width: 100%;
  margin-right: ${(props) => (props.barOpened ? "1rem" : "0rem")};
  border: none;

  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: black;
    margin: 3rem;
  }
`;

const SearchButton = styled.div`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: black;
`;
