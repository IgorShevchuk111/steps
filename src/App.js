import { useState } from "react";
import Button from "./Button";

const messages = ["Learn React", "Apply for jobs ", "Invest your new income "];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrev = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  function handleClose() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <button className="close" onClick={handleClose}>
        ˣ
      </button>
      {isOpen && (
        <div className="steps ">
          <div className="numbers ">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className={step === index + 1 ? "active" : ""}>
                {index + 1}
              </div>
            ))}
          </div>
          <div className="message">
            Step {step}: {messages[step - 1]}
          </div>
          <div className="buttons">
            <Button onClick={handlePrev} background="#7950f2" color="#fff">
              👈 Prev
            </Button>
            <Button onClick={handleNext} background="#7950f2" color="#fff">
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
