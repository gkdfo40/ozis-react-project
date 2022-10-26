import { createContext, useMemo, useState } from "react";

export type ModalsStateType = {
  Component: React.ReactElement;
  props: { [key: string]: any };
};

export const ModalsDispatchContext = createContext<{
  open: (Component: React.ReactElement, props: { [key: string]: any }) => void;
  close: (Component: React.ReactElement) => void;
}>({
  open: () => {
    return;
  },
  close: () => {
    return;
  },
});
export const ModalsStateContext = createContext<ModalsStateType[]>([]);

interface ModalsProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

const ModalsProvider = ({ children }: ModalsProviderProps) => {
  const [openedModals, setOpenedModals] = useState<ModalsStateType[]>([]);
  const open = (
    Component: React.ReactElement,
    props: { [key: string]: any }
  ) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };
  const close = (Component: React.ReactElement) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };
  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};
export default ModalsProvider;
