import React, { useEffect, useState, useRef } from "react";

const Stepper = ({ icons, currentStep }) => {
  const [newIcon, setNewIcon] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, icons) => {
    const newIcons = [...icons];
    let count = 0;

    while (count < newIcons.length) {
      if (count === stepNumber) {
        newIcons[count] = {
          ...newIcons[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step completed
      else if (count < stepNumber) {
        newIcons[count] = {
          ...newIcons[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // pending
      else {
        newIcons[count] = {
          ...newIcons[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newIcons;
  };
  useEffect(() => {
    const iconKeys = Object.keys(icons);
    const stepsLength = iconKeys.map((icon, index) =>
      Object.assign(
        {},
        {
          description: icon,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsLength;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewIcon(current);
  }, [icons, currentStep]);

  const displaySteps = newIcon.map((iconData, index) => {
    const icon = icons[index + 1];
    return (
      <div
        key={index}
        className={
          index !== newIcon.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-orange-500">
          <div
            className={`rounded-md transtion duration-500 ease-in-out border-2
                border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
                  iconData.selected
                    ? "bg-orange-100 text-white font-bold border border-orange-500"
                    : "bg-gray-200"
                }`}
          >
            {/*Display Icons */}
            {iconData.completed ? (
              <span className="text-white font-bold text-xl">{icon}</span>
            ) : (
              icon
            )}
          </div>
        </div>

        <div className={`flex-auto border-t-2 transition duration-500 ${iconData.completed ? "border-orange-500" : "border-gray-200"}`}></div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justtify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
