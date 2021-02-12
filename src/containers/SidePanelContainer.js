import React from "react";

const SidePanelContainer = ({ width, height, backgroundColor, children }) => {
    return (
        <div
            style={{
                width: width,
                height: height,
                backgroundColor: backgroundColor,
            }}
        >
            {children}
        </div>
    );
};

export default SidePanelContainer;
