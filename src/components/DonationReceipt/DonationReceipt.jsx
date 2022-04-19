import React, { useState } from "react";
import styled from "styled-components";
import { PageHeader, MessageBox, BoxMessage, CloseCross } from "./MasterCss";
import jsPDF from "jspdf";

import certificateTemplate from "../images/certificateTemplate.png";

const FormGroup = styled.div`
  color: palevioletred;
  margin: 150px;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1em;
  line-height: 28px;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const Flexy = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
`;

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const generatePDF = (name) => {
  if (name) {
    name = toTitleCase(name);
    var doc = new jsPDF({
      orientation: "portrait",
    });
    doc.addFont("helvetica", "normal");
    doc.setFontSize(25);
    doc.setTextColor(0, 0, 0);
    doc.addImage(certificateTemplate, "JPEG", -5, 0, 220, 300);
    doc.text(94, 121, name);
    doc.save("DonationReceipt.pdf");
  } else {
    alert("Please enter name");
  }
};

const DonationReceipt = ({ handleClose }) => {
  const [name, updateName] = useState("");
  return (
    <>
      <MessageBox primary>
        <BoxMessage>
          <Flexy>
            <FormGroup>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  generatePDF(name);
                }}
                id="certificate-form"
              >
                <label htmlFor="name">
                  Enter your name :
                  <Input
                    id="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => updateName(e.target.value)}
                  />
                </label>
              </form>
            </FormGroup>
            <img
              src={certificateTemplate}
              alt="certificate"
              style={{ width: "350px" }}
            />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <button
        primary
        handleClick={() => generatePDF(name)}
        form="certificate-form"
        label="Download"
      >
        Download
      </button>
    </>
  );
};

export default DonationReceipt;
