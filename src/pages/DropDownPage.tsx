import styled from "styled-components";
import { useRef, useState } from "react";

import netWorkData from "../assets/NetWorks.json";

import CommonLayOut from "../components/CommonLayOut";
import useOnClickOutside from "../hooks/useOnClickOutSide";

interface IOption {
  token_image: string;
  token_name: string;
  token_price: number;
}

const OPTION_ITEMS_ARRAY = netWorkData as IOption[];
const OPTION_ITEMS_LENGTH = OPTION_ITEMS_ARRAY.length;

const DropDown = () => {
  const [currerntData, setCurrentData] = useState<IOption>();
  const [optionBoxVisble, setOptionBoxVisible] = useState<boolean>(false);
  const optionItemBoxRef = useRef<HTMLDivElement>(null);

  const changeOptionItemHandler = (option: IOption) => {
    setCurrentData(option);
  };

  const changeOptionBoxOpenHandler = () => {
    setOptionBoxVisible((prev) => !prev);
  };

  useOnClickOutside(optionItemBoxRef, () => setOptionBoxVisible(false));

  return (
    <CommonLayOut>
      <DropDownContainer
        ref={optionItemBoxRef}
        onClick={changeOptionBoxOpenHandler}
      >
        {currerntData ? (
          <OptionItem option={currerntData} />
        ) : (
          <strong>NetWork</strong>
        )}
        <OptionBox
          optionBoxVisble={optionBoxVisble}
          optionsLength={OPTION_ITEMS_LENGTH}
        >
          {OPTION_ITEMS_ARRAY.map((option) => (
            <ItemContainer
              key={option.token_name}
              onClick={() => changeOptionItemHandler(option)}
            >
              <OptionItem option={option} />
            </ItemContainer>
          ))}
        </OptionBox>
      </DropDownContainer>
      <div>
        {currerntData && (
          <>
            <p>TokenName: {currerntData.token_name}</p>
            <p>
              Price: {currerntData.token_price}
              <strong>
                <i> $</i>
              </strong>
            </p>
          </>
        )}
      </div>
    </CommonLayOut>
  );
};
export default DropDown;

interface OptionItemProps {
  option: IOption;
}
const OptionItem = ({ option }: OptionItemProps) => {
  return (
    <OptionItemContainer>
      <img src={option.token_image} alt="token_symbol"></img>
      {option.token_name}
    </OptionItemContainer>
  );
};
const OptionItemContainer = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  img {
    width: 20px;
    height: 20px;
  }
`;

const ItemContainer = styled.li`
  height: 20px;
  display: block;
  text-decoration: none;
  color: #333;
  padding: 5px 0;
  :hover {
    background: #e4e5e6;
  }
`;

const DropDownContainer = styled.div`
  /* Size & position */
  position: relative;
  width: 200px;
  margin: 0 auto;
  padding: 12px 15px;

  /* Styles */
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  outline: none;

  ::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -3px;
    border-width: 6px 6px 0 6px;
    border-style: solid;
    border-color: #4cbeff transparent;
  }
`;

const OptionBox = styled.ul<{
  optionBoxVisble: boolean;
  optionsLength: number;
}>`
  position: absolute;
  top: 100%;
  left: -5px;
  right: 0px;

  /* Styles */
  padding: 10px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  list-style: none;
  transition: all 0.2s ease-out;

  /* Hiding */
  max-height: 300px;
  height: ${(props) =>
    props.optionBoxVisble ? `${props.optionsLength * 30}px` : "0px"};
  visibility: ${(props) => (props.optionBoxVisble ? "visible" : "hidden")};
  overflow: ${(props) => (props.optionsLength > 10 ? "scroll" : "hidden")};
`;
