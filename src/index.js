//reactというライブラリからReactをimportする必要がある。
import React from "react";
//HTMLにコンポーネントを反映するのに必要なReactDomをimportする
import ReactDom from "react-dom";
//エクスポートされている他のファイルの情報をインポートすることができる
//同じ階層にあるAppファイルをインポートする。コンポーネント名は先頭を大文字から始めるようにする。(パスカルケース)
import Aaa from "./App";
//なお、コンポーネント名は先頭が大文字ならなんでもいい

//Appを画面に反映するための記述。
//画面に反映させるには、ReactDomのライブラリの中身のrender関数を使用する。
//第一引数で反映するコンポーネント名を</>で囲み、第二引数で反映先を指定する
ReactDom.render(<Aaa />, document.getElementById("root"));
