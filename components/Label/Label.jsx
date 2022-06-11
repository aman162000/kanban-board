import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Check, X } from "react-feather";
import "./Label.css";
export default function (props) {
  const input = useRef();
  const [selectedColor, setSelectedColor] = useState("");
  const [label, setLabel] = useState("");

  const isColorUsed = (color) => {
    const isFound = props.tags.find((item) => item.color === color);

    return isFound ? true : false;
  };

  return (
    <div className="local__bootstrap">
      <div className="popover__wrapper">
        <div className="popover__content mb-2">
          <div className="label__heading d-flex justify-content-between my-2 ">
            <p style={{ fontSize: "15px" }} className="text-center">
              <b>Label</b>
            </p>
            <X
              onClick={() => props.onClose(false)}
              style={{ cursor: "pointer", width: "15px", height: "15px" }}
            />
          </div>
          <div className="row">
            <p
              style={{
                color: "#5e6c84",
                display: "block",
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "16px",
              }}
              className="my-1"
            >
              Name
            </p>
            <div className="col-12 label__input">
              <input
                type="text"
                ref={input}
                defaultValue={label}
                placeholder="Name of label"
                onChange={(e) => {
                  setLabel(e.target.value);
                }}
              />
            </div>
            <p
              style={{
                color: "#5e6c84",
                display: "block",
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "16px",
              }}
              className="my-2"
            >
              Select color
            </p>
            <div className="d-flex justify-content-between color__palette flex-wrap mb-2">
              {props.color.map((item, index) => (
                <span
                  onClick={() => setSelectedColor(item)}
                  key={index}
                  className={isColorUsed(item) ? "disabled__color" : ""}
                  style={{ backgroundColor: item, cursor: "pointer" }}
                >
                  {selectedColor === item ? <Check className="icon__sm" /> : ""}
                </span>
              ))}
            </div>
            <div>
              <button
                className="create__btn my-2"
                onClick={() => {
                  if (label !== "") {
                    if (selectedColor === "") {
                      alert("Please select color for label.");
                    }
                    props.addTag(label, selectedColor);
                    setSelectedColor("");
                    setLabel("");
                    input.current.value = "";
                  } else return;
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
