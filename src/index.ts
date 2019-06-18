import * as ReactDom from "react-dom";
import * as React from "react";

const currentScript = (): HTMLScriptElement => {
  if (document.currentScript) {
    return <HTMLScriptElement>document.currentScript;
  }
  const scripts = document.getElementsByTagName("script");
  return scripts[scripts.length - 1];
};

const renderReact = (element: React.ReactElement): HTMLElement => {
  const wrap = document.createElement("div");
  ReactDom.render(element, wrap);
  return wrap.children[0] as HTMLElement;
};

export default <P>(
  component: React.FunctionComponent<P> | string | React.ComponentClass<P>,
  props: P,
  ...children: React.ReactNode[]
): void => {
  currentScript().parentNode!.insertBefore(
    renderReact(React.createElement<P>(component, props, ...children)),
    currentScript()
  );
};
