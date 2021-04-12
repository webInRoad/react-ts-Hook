import React, { useState, useRef, useEffect } from "react";

const EffectExample = (props) => {
  const [status, setStatus] = useState(false);
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      console.info(2323);
    } else {
      didMountRef.current = true;
    }
  }, [status]);
  return <div onClick={() => setStatus(!status)}>23</div>;
};
export default EffectExample;
