const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win ) || 0;
  let total = Number( req.query.total ) || 0;
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  let judgement = '';
  if ( num === 1 ){
    if ( hand === 'グー' ){
      judgement = 'あいこ';
    }
    else if ( hand === 'チョキ' ){
      judgement = '負け';
    }
    else if ( hand === 'パー' ){
      judgement = '勝ち'
    }
  }
  else if ( num === 2 ){
    if ( hand === 'グー' ){
      judgement = '勝ち';
    }
    else if ( hand === 'チョキ' ){
      judgement = 'あいこ';
    }
    else if ( hand === 'パー' ){
      judgement = '負け'
    }
  }
  else if ( num === 3 ){
    if ( hand === 'グー' ){
      judgement = '負け';
    }
    else if ( hand === 'チョキ' ){
      judgement = '勝ち';
    }
    else if ( hand === 'パー' ){
      judgement = 'あいこ'
    }
  }

  if (judgement == '勝ち'){
    win += 1;
  }
  total += 1;
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});


app.get("/fortune", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win ) || 0;
  let total = Number( req.query.total ) || 0;
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 12 + 1 );
  // ここに勝敗の判定を入れる
  let judgement = '';
  if ( num === 1 ){
    if ( hand === 'おひつじ座' ){
      judgement = '1位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '2位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '3位'
    }
    else if ( hand === 'かに座' ){
      judgement = '4位';
    }
    else if ( hand === 'しし座' ){
      judgement = '5位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '6位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '7位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '8位'
    }
    else if ( hand === 'いて座' ){
      judgement = '9位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '10位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '11位'
    }
    else if ( hand === 'うお座' ){
      judgement = '12位'
    }
  }
  if ( num === 2 ){
    if ( hand === 'おひつじ座' ){
      judgement = '2位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '3位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '4位'
    }
    else if ( hand === 'かに座' ){
      judgement = '5位';
    }
    else if ( hand === 'しし座' ){
      judgement = '6位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '7位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '8位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '9位'
    }
    else if ( hand === 'いて座' ){
      judgement = '10位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '11位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '12位'
    }
    else if ( hand === 'うお座' ){
      judgement = '1位'
    }
  }
  if ( num === 3 ){
    if ( hand === 'おひつじ座' ){
      judgement = '3位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '4位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '5位'
    }
    else if ( hand === 'かに座' ){
      judgement = '6位';
    }
    else if ( hand === 'しし座' ){
      judgement = '7位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '8位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '9位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '10位'
    }
    else if ( hand === 'いて座' ){
      judgement = '11位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '12位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '1位'
    }
    else if ( hand === 'うお座' ){
      judgement = '2位'
    }
  }
  if ( num === 4 ){
    if ( hand === 'おひつじ座' ){
      judgement = '4位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '5位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '6位'
    }
    else if ( hand === 'かに座' ){
      judgement = '7位';
    }
    else if ( hand === 'しし座' ){
      judgement = '8位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '9位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '10位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '11位'
    }
    else if ( hand === 'いて座' ){
      judgement = '12位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '1位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '2位'
    }
    else if ( hand === 'うお座' ){
      judgement = '3位'
    }
  }
  if ( num === 5 ){
    if ( hand === 'おひつじ座' ){
      judgement = '5位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '6位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '7位'
    }
    else if ( hand === 'かに座' ){
      judgement = '8位';
    }
    else if ( hand === 'しし座' ){
      judgement = '9位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '10位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '11位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '12位'
    }
    else if ( hand === 'いて座' ){
      judgement = '1位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '2位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '3位'
    }
    else if ( hand === 'うお座' ){
      judgement = '4位'
    }
  }
  if ( num === 6 ){
    if ( hand === 'おひつじ座' ){
      judgement = '6位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '7位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '8位'
    }
    else if ( hand === 'かに座' ){
      judgement = '9位';
    }
    else if ( hand === 'しし座' ){
      judgement = '10位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '11位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '12位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '1位'
    }
    else if ( hand === 'いて座' ){
      judgement = '2位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '3位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '4位'
    }
    else if ( hand === 'うお座' ){
      judgement = '5位'
    }
  }
  if ( num === 7 ){
    if ( hand === 'おひつじ座' ){
      judgement = '7位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '8位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '9位'
    }
    else if ( hand === 'かに座' ){
      judgement = '10位';
    }
    else if ( hand === 'しし座' ){
      judgement = '11位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '12位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '1位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '2位'
    }
    else if ( hand === 'いて座' ){
      judgement = '3位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '4位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '5位'
    }
    else if ( hand === 'うお座' ){
      judgement = '6位'
    }
  }
  if ( num === 8 ){
    if ( hand === 'おひつじ座' ){
      judgement = '8位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '9位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '10位'
    }
    else if ( hand === 'かに座' ){
      judgement = '11位';
    }
    else if ( hand === 'しし座' ){
      judgement = '12位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '1位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '2位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '3位'
    }
    else if ( hand === 'いて座' ){
      judgement = '4位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '5位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '6位'
    }
    else if ( hand === 'うお座' ){
      judgement = '7位'
    }
  }
  if ( num === 9 ){
    if ( hand === 'おひつじ座' ){
      judgement = '9位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '10位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '11位'
    }
    else if ( hand === 'かに座' ){
      judgement = '12位';
    }
    else if ( hand === 'しし座' ){
      judgement = '1位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '2位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '3位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '4位'
    }
    else if ( hand === 'いて座' ){
      judgement = '5位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '6位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '7位'
    }
    else if ( hand === 'うお座' ){
      judgement = '8位'
    }
  }
  if ( num === 10 ){
    if ( hand === 'おひつじ座' ){
      judgement = '10位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '11位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '12位'
    }
    else if ( hand === 'かに座' ){
      judgement = '1位';
    }
    else if ( hand === 'しし座' ){
      judgement = '2位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '3位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '4位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '5位'
    }
    else if ( hand === 'いて座' ){
      judgement = '6位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '7位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '8位'
    }
    else if ( hand === 'うお座' ){
      judgement = '9位'
    }
  }
  if ( num === 11 ){
    if ( hand === 'おひつじ座' ){
      judgement = '11位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '12位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '1位'
    }
    else if ( hand === 'かに座' ){
      judgement = '2位';
    }
    else if ( hand === 'しし座' ){
      judgement = '3位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '4位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '5位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '6位'
    }
    else if ( hand === 'いて座' ){
      judgement = '7位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '8位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '9位'
    }
    else if ( hand === 'うお座' ){
      judgement = '10位'
    }
  }
  if ( num === 12 ){
    if ( hand === 'おひつじ座' ){
      judgement = '12位';
    }
    else if ( hand === 'おうし座' ){
      judgement = '1位';
    }
    else if ( hand === 'ふたご座' ){
      judgement = '2位'
    }
    else if ( hand === 'かに座' ){
      judgement = '3位';
    }
    else if ( hand === 'しし座' ){
      judgement = '4位'
    }
    else if ( hand === 'おとめ座' ){
      judgement = '5位'
    }
    else if ( hand === 'てんびん座' ){
      judgement = '6位'
    }
    else if ( hand === 'さそり座' ){
      judgement = '7位'
    }
    else if ( hand === 'いて座' ){
      judgement = '8位'
    }
    else if ( hand === 'やぎ座' ){
      judgement = '9位'
    }
    else if ( hand === 'みずがめ座' ){
      judgement = '10位'
    }
    else if ( hand === 'うお座' ){
      judgement = '11位'
    }
  }

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});
app.listen(8080, () => console.log("Example app listening on port 8080!"));
