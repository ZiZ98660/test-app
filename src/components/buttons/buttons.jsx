import { ButtonContainer } from "./buttons.styled";
import { useState } from "react";

const Button = ({
    padding,
    outline,
    color,
    content,
    background,
    onClick,
    borderWidth,
    disabled,
    transition,
    loader,
    iconHeight,
    iconWidth, 
    iconPositionLeft, 
    iconPositionRight,
    leftIcon,
    rightIcon,
    pill,
    borderRadius,
    width,
    height,
    loaderSpanMargin, 
    statusBar,
    onClose,
    loaderContent 
  }) => {
    const [loading, setLoader] = useState('loader')
    return (
      <ButtonContainer
        id = {loader ? ( loading ? 'loader' : '' ) : ''}
        background = {background}
        color = {color}
        padding = {padding}
        outline = {outline}
        onMouseDown ={onClose}
        onClick = {disabled ? '' : loader ? (() => setLoader(!loading)) : onClick}
        borderWidth = {borderWidth}
        disabled = {disabled}
        isD
        transition = {transition}
        loader = {loader}
        h ={iconHeight}
        w = {iconWidth}
        left = {iconPositionLeft}
        right = {iconPositionRight}
        pill = {pill}
        borderRadius = {borderRadius}
        height = {height}
        width = {width}
        margin = {loaderSpanMargin}
        statusBar = {statusBar}
      >
        
      {loader ? 
      (<>
      <span>{loaderContent}</span>
      <div></div> 
      </>)
      : ''
      }
       
        {leftIcon || ''}
        {content || ''}
        {rightIcon || ''}
      </ButtonContainer>
    );
  };
  

export default Button