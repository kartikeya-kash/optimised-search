import React from "react";
import styled from "styled-components";

const Input = ({ value, onChange }) => {
  return (
    <StyledWrapper>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          placeholder="Search something"
          value={value || ""}
          onChange={onChange}
        />
        <button className="searchButton" type="button">
          🔍
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .searchBox {
    display: flex;
    align-items: center;
    background: #2f3640;
    border-radius: 50px;
    position: relative;
  }

  .searchButton {
    color: white;
    position: absolute;
    right: 8px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(90deg, #2af598 0%, #009efd 100%);
    border: 0;
  }

  .searchInput {
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 15px;
    padding: 24px 46px 24px 26px;
  }
`;

export default Input;
