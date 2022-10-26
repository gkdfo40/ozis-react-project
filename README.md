# Getting Started with Create React App

## Install

`yarn`

## Start

`yarn start`

## dependency

- react-modal
- ethers
- styled-component

## 구현

### DropDownPage

    데이터의 수가 10 초과일 경우 10개의 데이터가 보여지는 상태에서 스크롤을 통해 다음 데이터를 확인할 수 있습니다.

    드롭다운이 열린 상태에서 아이템을 클릭하면 페이지에 선택한 아이템의 로우 데이터가 표시됩니다.

    드롭다운이 열린 상태에서 드롭다운 리스트 외부 영역을 클릭하면 드롭다운이 닫힙니다.

### Modals Popup Overlay

    팝업 A에서 버튼을 클릭하면 팝업 B가 표시되고, 팝업 B에서 버튼을 클릭하면 팝업 C가 표시됩니다.

    팝업은 배경 오버레이를 클릭 시 해당 팝업이 닫힙니다.

    더 나중에 표시되는 팝업일수록 화면 상에서 더 높은 우선도를 가지며 이전에 표시된 팝업보다 위에 표시됩니다.

### MetaMask Extension Connect

    connect 버튼을 클릭하면 Metamask 에서 현재 선택된 계정을 가져옵니다.

    지갑 연결이 성공한 후에는 UI 상에 선택된 계정 주소와 그 계정의 $ETH 보유 수량이 표시됩니다.
