interface Styles {
  content?: React.CSSProperties | undefined;
  overlay?: React.CSSProperties | undefined;
}
export const customStyles: Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto%",
    bottom: "auto",
    marginRight: "-50%",
    minWidth: "200px",

    transform: "translate(-50%, -50%)",
  },
};
