import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export const FloatingBackgrounImage = (props) => {
  const imageRef = useRef(null);
  const checkImageRef = useRef(null);
  const [transition, setTransition] = useState(null);
  const [transform, setTransform] = useState(null);

  const MAIN_WIDTH =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    MAIN_HEIGHT =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
    CALLIBRATE_COEFFICIENT = props.type === "A" ? 0.03 : 0.01;

  let $body = document.getElementsByTagName("body")[0],
    mouseMovedIn = false,
    offset_X = 0,
    offset_Y = 0,
    mX = 0,
    mY = 0;

  useEffect(() => {
    layermoving();
  }, []);

  const layermoving = () => {
    $body = document.getElementsByTagName("body")[0];
    checkImageRef.current = setInterval(() => {
      if (imageRef) {
        clearInterval(checkImageRef.current);
        addEvent($body, "mousemove", mouseMoveHandler);
        addEvent($body, "mouseout", mouseOutHandler);
      }
    }, 100);
  };

  const mouseMoveHandler = (e) => {
    e = e || window.event;
    if (!mouseMovedIn) {
      setInitialPoint(e.pageX, e.pageY, true, setLayerStyles);
    } else {
      setLayerStyles();
    }
    mX = e.pageX;
    mY = e.pageY;
  };

  const mouseOutHandler = (e) => {
    e = e || window.event;
    const from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName === "HTML") {
      setInitialPoint(0, 0, false, "");

      setTransition("transform 1.0s ease-in-out");
      setTransform("translate(-50%, -50%)");
    }
  };

  const setInitialPoint = (x, y, mouseIn, fn) => {
    offset_X = x;
    offset_Y = y;
    mouseMovedIn = mouseIn;
    setTimeout(() => {
      if (typeof fn === "function") {
        fn();
      }
    }, 200);
  };

  const setLayerStyles = () => {
    const toRightPercent =
      ((offset_X - mX) / MAIN_WIDTH) * 100 * CALLIBRATE_COEFFICIENT - 50;
    const toBottomPercent =
      ((offset_Y - mY) / MAIN_HEIGHT) * 100 * CALLIBRATE_COEFFICIENT - 50;

    setTransition("unset");
    setTransform("translate(" + toRightPercent + "%," + toBottomPercent + "%)");
  };

  const addEvent = (obj, evt, fn) => {
    let eventHandlerListener = `__zone_symbol__${evt}false`;
    if (obj.addEventListener) {
      if (obj[eventHandlerListener]) {
        obj.removeEventListener(evt, fn, false);
        obj.addEventListener(evt, fn, false);
      } else {
        obj.addEventListener(evt, fn, false);
      }
    } else if (obj.attachEvent) {
      obj.attachEvent("on" + evt, fn);
    }
  };

  return (
    <StyledDiv
      ref={imageRef}
      type={props.type}
      ts={transition}
      tf={transform}
    />
  );
};

export const StyledDiv = styled.div.attrs(({ ts, tf }) => ({
  style: {
    transition: ts,
    transform: tf,
  },
}))`
  position: absolute;
  background-image: url(${(props) =>
      process.env.PUBLIC_URL +
      "/assets/images/Android/BG_float_1" +
      props.type +
      ".png"}),
    url(${(props) =>
      process.env.PUBLIC_URL +
      "/assets/images/Android/BG_float_2" +
      props.type +
      ".png"}),
    url(${(props) =>
      process.env.PUBLIC_URL +
      "/assets/images/Android/BG_float_3" +
      props.type +
      ".png"});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: top 0 center, top 970px center, top 1620px center;
  top: 50%;
  left: ${(props) => (props.type === "A" ? "55%" : "50%")};
  transform: translate(-50%, -50%);
  transform-origin: center center;
`;
