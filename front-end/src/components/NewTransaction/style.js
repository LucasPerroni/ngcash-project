import styled from "styled-components";

export const Wrapper = styled.main`
  position: absolute;
  margin-top: 56px;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100% - 56px);
  width: 100%;
  padding: 30px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: var(--site-theme-bright);
    margin-bottom: 40px;

    &.error {
      font-size: 30px;
      color: var(--error);
      text-align: center;
      margin: 30px 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    * {
      margin-bottom: 20px;
      width: 250px;
      height: 50px;

      font-size: 25px;
      border-radius: 10px;
      transition: all 0.3s;

      outline: none;
      border: none;
    }

    input {
      padding: 15px;
      background-color: transparent;
      color: #ffffff;

      border: 2px solid var(--site-theme-bright);
    }

    button {
      background-color: var(--site-theme-bright);
      color: #ffffff;

      cursor: pointer;
    }

    input:focus {
      border: 2px solid var(--site-theme);
    }

    button:hover:not(.loading) {
      background-color: var(--site-theme);
    }

    .loading {
      opacity: 0.6;
      cursor: default;
    }
  }
`
