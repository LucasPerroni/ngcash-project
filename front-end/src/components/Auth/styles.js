import styled from "styled-components"

export const Main = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`

export const Logo = styled.section`
  background-color: var(--site-theme);
  width: 60%;
  border-radius: 0 50px 50px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 50px;
    font-weight: bold;
    color: white;
  }
`

export const Auth = styled.section`
  width: 40%;

  display: flex;
  justify-content: center;

  form {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 80%;

    *:not(h1, p) {
      margin-bottom: 10px;
      width: 100%;
      height: 60px;

      font-size: 25px;
      border-radius: 10px;
      transition: all 0.3s;

      outline: none;
      border: none;
    }

    h1 {
      position: absolute;
      top: 25%;

      font-size: 35px;
      font-weight: bold;
      color: var(--site-theme-bright);
    }

    input {
      padding: 15px;
      background-color: transparent;
      color: #ffffff;

      border-bottom: 2px solid var(--site-theme-bright);
    }

    button {
      background-color: var(--site-theme-bright);
      color: #ffffff;

      cursor: pointer;
    }

    p:not(.error) {
      color: #ffffff;
      font-size: 18px;

      text-align: center;
      margin-top: 20px;
      cursor: pointer;
    }

    p:hover:not(.error) {
      text-decoration: underline;
    }

    .error {
      position: absolute;
      bottom: 20%;

      font-size: 30px;
      font-weight: bold;
      color: var(--error);
      text-align: center;
    }

    .loading {
      opacity: 0.6;
      cursor: default;
    }
  }
`
