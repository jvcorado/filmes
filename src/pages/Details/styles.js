import styled from "styled-components";

export const Container = styled.div`
  padding: 0 3rem;
  
  h1 {
    margin: 3rem 0;
  }
  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  img {
    width: 300px;
    border-radius: 1rem;
    margin-bottom: 2rem;
    transition: all 0.3s;
  }
  img:hover{
    transform: scale(1.1);
  }
  span {
    font-weight: normal;
    font-size: 120%;
    margin-bottom: 1rem;
    line-height: 130%;
  }
  .release-date {
    font-size: 100%;
    opacity: 0.5;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    max-width: 50%;
  }
  button {
    background-color: #5848c2;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all .3s;
  }
  button:hover {
    background-color: #5848c2;
  }

  @media (max-width:500px) {
      .movie{
        width: 100vw;
        justify-content: none;
        background-color: red;
        flex-direction: column;
        background-color: blue;
      }
      .details{
        max-width: 100%;
        align-items: center;
        margin-left: 0;
        background-color: red;
      }
  }
     
`