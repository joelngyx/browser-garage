import React from "react";

const ResetMappingsButton = (props) => {
  const resetMappings = () => {
    props.setKeyboardMappings([]);
    window.removeEventListener('keypress', props.handleKeyDownEvent);
  }

  return (<button class='sound-collection' onClick={resetMappings}>reset keyboard mappings</button>)
}

export default ResetMappingsButton;