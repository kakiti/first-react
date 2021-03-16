import React, { useEffect, useState } from "react";
import ColoufulMessage from "./components/ColorfulMessage";
// 関数を使って画面の要素であるコンポーネントを表現できる
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceshowFlag] = useState(false);

  const onClickCountUp = () => {
    //stateを変更するための関数えを記述する。()のなかに書いた通りに stateが変更される。
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    //!はtrueとfalseを切り替えることができる。
    setFaceshowFlag(!faceShowFlag);
  };
  //stateを使用するにはuseStateを記述し、配列の分割代入をする
  //一つ目にstateとして使用する変数名、二つ目にそのstateを変更するための関数(setステート名が一般的)を決める。
  useEffect(() => {}, []);

  if (num > 0) {
    if (num % 3 === 0) {
      faceShowFlag || setFaceshowFlag(true);
    } else {
      faceShowFlag && setFaceshowFlag(false);
    }
  }

  return (
    //Javascriptのなかでreturnしてその中でHTMLのタグを書いていくことをJSX記法という
    //JSX記法のルールとして、returnして返すHTMLは一つの要素にまとめないといけない
    //React.Fragmentを使用すると、要素を囲むことができ、エラーを防ぐことができる。エラーを出したくないだけなら、これを使うといい。
    //<>でReact.Fragmentを省略することもできる
    //コンポーネントを呼び出すときに、引数のようにプロップスを指定することができる。
    //指定したプロップスに合わせたコンポーネントが返されるようになる。
    //プロップス名はなんでもつけられるが、属性名で命名してあげるルールがある。
    <>
      　<h1 style={{ color: "red" }}>こんにちは！</h1>　
      <ColoufulMessage color="blue">お元気ですか？</ColoufulMessage>　
      <ColoufulMessage color="pink">元気です！</ColoufulMessage>　
      <button onClick={onClickCountUp}>カウントアップ</button>
      　<br />　 <button onClick={onClickSwitchShowFlag}>on/off</button>　{" "}
      <p>{num}</p>
      {faceShowFlag && <p>!(^^)!</p>}
    </>
    //{}でかこむことで、そこだけJSの記法で書くことができる
    //関数をよびだすこともできるし、{]をさらに記述してその中に処理を記述してもいい
  );
};

//ほかのファイルでも使うことを明示してあげる.関数Appを他のファイルでも使えるように、エクスポートする。
export default App;

//onClickはクリックしたときに起きる処理を記述する。
// stateの変化があったとき、コンポーネントは再レンダリングされる。
//stateが更新されたとき、コンポーネントは初めから再度読み込まれるようになっている。

//再レンダリングの条件
//stateに変化があったとき
//propsの中身が変わったとき
//親のコンポーネント(App)が再レンダリングしたとき、子(ColoufulMessage)も再レンダリングされる。

//再レンダリングが行われてしまうと、if分を記述した時に同じ処理が何回も行われてしまい、エラーが発生してしまう。
//そのため、||や&&（論理演算子）をつかって、どこかで処理を止める必要がある。
