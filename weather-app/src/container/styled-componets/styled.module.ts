import styled from "styled-components";

export const SecondWrapper = styled.div`
  height: 120vh;
  background: linear-gradient(to right, #403a3e, #be5869);
  margin: auto;
  .button {
    margin-top: 15px;
    background: linear-gradient(to right, #403a3e, #be5869);
    color: #ffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
  &:hover {
    background-color: #2980b9;
  }

  .ButtonText {
    margin: 0;
    text-transform: capitalize;
    text-decoration: none;
  }
`;

export const HourlyContainer = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 20px;
  background: linear-gradient(to right, #403a3e, #be5869);

  padding: 10px;
  margin: 0 auto; /* Center horizontally */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:nth-child(odd) {
    background-color: #f0f0f0; /* Background color for odd elements */
    order: 1; /* Move odd elements to the left */
  }

  &:nth-child(even) {
    background-color: #fff; /* Background color for even elements */
    order: 2; /* Move even elements to the right */
  }
`;

export const HourlyInfo = styled.p`
  margin: 5px 0;
`;

export const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const MainWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #403a3e, #be5869);
  .topfive {
    display: flex;
    justify-content: center;
  }
  .button {
  background: linear-gradient(to right, #403a3e, #be5869);
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  &:hover {
    background-color: #2980b9;
  }

  .ButtonText {
    margin: 0;
    font-size: 1.5em;
    text-transform: capitalize;
  }
  .container {
    background-color: #ffffff7d;
    padding: 7rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    background-blend-mode: overlay;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: absolute;
  }

  .searchArea {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: none;
    border: 2px solid grey;
    padding: 12px;
    text-align: center;
    width: 80%;
    background: transparent;
  }

  .searchCircle {
    border: 2px solid grey;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > .searchIcon {
      font-size: 30px;
      color: grey;
    }
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;

    > .icon {
      font-size: 4rem;
    }

    > h1 {
      font-size: 2rem;

      font-family: "Bebas Neue", sans-serif;
    }

    > span {
      font-weight: 700;
      margin: 10px;
      font-family: "Inter", sans-serif;
    }

    > h2 {
      font-size: 2rem;
      font-family: "Inter", sans-serif;
      font-weight: 400;
    }
  }

  .bottomInfoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif;
    margin: 10px;
    background: linear-gradient(90deg, #948e99, #2e1437);
    padding: 20px;
  }
  .humidityLevel,
  .wind {
    display: flex;
    align-items: center;
    margin: 0 20px;

    > .humidIcon {
      font-size: 3rem;
    }
  }

  .windIcon {
    font-size: 2rem;
    margin-right: 10px;
  }

  .loading {
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .loadingIcon {
      font-size: 3rem;
      animation: spin 2s linear infinite;
    }
    p {
      font-size: 22px;
      margin-top: 10px;
      font-family: "Josefin Sans", sans-serif;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
