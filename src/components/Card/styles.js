import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 280px;
  width: 150px;
  border: 1px solid #eee;
  margin: 20px;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  border-radius: 10px;

  .pokemon-image {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .pokemon-name {
    text-align: center;
    padding: 5px;
    background-color: #ddd;
  }

  .pokemon-types {
    display: flex;
    align-items: center;
    justify-content: center;

    .type-badge {
      font-size: smaller;
      display: inline-block;
      padding: 3px;
      background-color: lightpink;

      &:not(:last-of-type) {
        margin-right: 2px;
      }
    }
  }

  .pokemon-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;

    .pokemon-info {
      padding: 5px;
      font-size: smaller;
    }
  
    .pokemon-abilities {
      padding: 5px;
    }
  }
`;
