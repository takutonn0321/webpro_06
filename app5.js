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

app.get("/suujiate", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win ) || 0;
  let total = Number( req.query.total ) || 0;
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 10 + 1 );
  let cpu = '';
  if( num==1 ) cpu = '1';
  else if( num==2 ) cpu = '2';
  else if( num==3 ) cpu = '3';
  else if( num==4 ) cpu = '4';
  else if( num==5 ) cpu = '5';
  else if( num==6 ) cpu = '6';
  else if( num==7 ) cpu = '7';  
  else if( num==8 ) cpu = '8';
  else if( num==9 ) cpu = '9';
  else cpu = '10';
  // ここに勝敗の判定を入れる
  let judgement = '';
  if ( cpu === hand ){
      judgement = '勝ち';
  }
  else {
    judgement = '負け';
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
  res.render( 'suujiate', display );
});

app.get("/attimuitehoi", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win ) || 0;
  let total = Number( req.query.total ) || 0;
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 4 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'みぎ';
  else if( num==2 ) cpu = 'ひだり';
  else if( num==3 ) cpu = 'うえ'
  else cpu = 'した';
  // ここに勝敗の判定を入れる
  let judgement = '';
  if ( cpu === hand ){
    judgement = '勝ち';
  }
  else {
  judgement = '負け';
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
  res.render( 'attimuitehoi', display );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
