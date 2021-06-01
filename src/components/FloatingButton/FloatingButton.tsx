import React from "react";
import "./floatingButton.scss";
type fbProps = {
  title: string;
};

function FloatingButton({ title }: fbProps) {
  return <div className="floating-button">{title}</div>;
}

export default FloatingButton;
