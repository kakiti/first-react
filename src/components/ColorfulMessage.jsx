import React from "react";

//プロップスを受け取れるように引数を指定する。
//props.プロップス名で、渡されたプロップスを展開できる。
const ColufulMessage = (props) => {
  //分割代入を使用することで、props.プロップス名とする必要がなくなる
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  //コンポーネントのタグで囲った中身を表示させたいときは、childrenという変数（プロップス）に入ることになる。
  return <p style={contentStyle}>{children}</p>;
};

export default ColufulMessage;
