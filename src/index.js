// // const, let　の変数宣言

// var var1 ="qdasas";
// console.log(var1);

// // var変数は上書き可能
// var1 = "aaaaaa";
// console.log(var1);

// // var変数再宣言可能
// var var1 = 'fffff';
// console.log(var1);

// let val2 = 'letlet';
// console.log(val2);

// // letは上書きが可能
// val2 = 'let222';
// console.log(val2);

// // letは再宣言不可能
// let val2 = 'let333';
// console.log(val2);

// const val3 = 'const111';
// console.log(val3);

// // constは変数上書きは不可
// val3 = 'const333f';

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4= {
//   name: 'jajaja',
//   age: 27,
// };
// val4.name = 'atatata';
// val4.address = 'shizuoka';
// console.log(val4)

// // constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'fff';
// val5.push('monkey');
// console.log(val5);

// テンプレート文字列
// const name = 'shohei';
// const age = 27;

// // 従来の方法
// const message1 = '私の名前は' + name +'です。年齢は' + age + 'です。';
// console.log(message1)

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数
// // 従来の関数
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("funcdeth"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("funcfunc"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 44));

// 分割代入
// const myProfile = {
//   name: "shohei",
//   age: 27
// };
// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["shohei", 27];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `なまえは${name}ねんれいは${age}`;
// console.log(message4);

// デフォルト値、引数など
// const sayHello = (name = 'gest') => console.log(`こんにちは${name}さん`);
// sayHello();

// // スプレッド構文　...
// // 配列の展開
// const arr1 = [1, 8];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   return console.log(num1 + num2);
// }
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [...arr3] = arr2;
// // console.log(num1);
// // console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [55, 66];

// // const arr6 = [...arr4];
// // console.log(arr6)

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7)

// // 直接配列で渡すと渡した元の配列まで書き換えられてしまう。
// // 渡すときはスプレット構文で渡すこと
// const arr8 = [...arr4];
// // const arr8 = arr4;
// arr8[0] = 444;
// console.log(arr8);
// console.log(arr4);

// mapやfilterを使った配列の処理
// const nameArr = ["tanakka", "yamada", "hasegawa"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));
// const nameNewArr = nameArr.map((name) => {
//   if (name === 'hasegawa') {
//   return name
// } else {
//   return `${name}さん`
// }
// })
// console.log(nameNewArr)

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const num = '1300';

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数字を入力して";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "１００を超えてます" : "許容範囲内です";
// };
// console.log(checkSum(50, 30));

// 論理演算子の本当の意味を知ろう
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("１か２はtruwになります");
// }

// const num = null;
// const fee = num || "金額み設定";
// console.log(fee);

// const num = 1;
// const fee = num && "金額設定しました";
// console.log(fee);
