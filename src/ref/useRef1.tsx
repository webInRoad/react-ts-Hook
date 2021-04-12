import React, { useState } from "react";
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  function handleAlertClick() {
    setTimeout(() => {
      alert(`you clicked on ${like}`);
      //形成闭包，所以弹出来的是当时触发函数时的like值
    }, 3000);
  }
  return (
    <>
      <button onClick={() => setLike(like + 1)}>{like}赞</button>
      <button onClick={handleAlertClick}>Alert</button>
    </>
  );
};
export default LikeButton;
