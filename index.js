const express = require('express');
let {User, sequelize} = require('./database/userList.js');
let {sequelize1, Sodam, Premium} = require('./database/menu.js');
let cookieParser = require('cookie-parser');
let session = require('express-session')
const {where} = require('sequelize')
const bodyParser = require('body-parser');
// const { FORCE } = require('sequelize/types/index-hints.js');
const app = express();
const port = 3000;

app.use('/pages',express.static('pages'));
app.use(express.static('pages'));
// app.use(cookieParser)
app.use(session({
  secret: '비밀 키',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

sequelize.sync().then(async () => {
  console.log('유저데이터연결완료');

  // 사용자 데이터 찾기 또는 생성
  const [user, created] = await User.findOrCreate({
    where: { userIds: 'admin' },
    defaults: {
      userPwds: '1234',
      userName: 'Admin',
      userRole: 'Admin'
    }
  });

  if (created) {
    // console.log('새로운 사용자 생성: ', user);
  } else {
    // console.log('기존 사용자 찾음: ', user);
  }
}).catch((error) => {
  console.error('데이터베이스 연결 또는 동기화 에러: ', error);
});

sequelize1.sync().then(async () => {
  console.log('유저데이터연결완료');

  // menu 데이터 찾기 또는 생성
  const [sodam, createdSodam] = await Sodam.findOrCreate({
    where: { id: 2 },
    defaults: {
      menu1_1: "밥",
      menu1_2: "국",
      menu1_3: "반찬",
      menu1_4: "반찬",
      menu1_5: "반찬",
      menu1_6: "반찬",
      menu2_1: "밥",
      menu2_2: "국",
      menu2_3: "반찬",
      menu2_4: "반찬",
      menu2_5: "반찬",
      menu2_6: "반찬",
      menu3_1: "밥",
      menu3_2: "국",
      menu3_3: "반찬",
      menu3_4: "반찬",
      menu3_5: "반찬",
      menu3_6: "반찬",
      menu4_1: "밥",
      menu4_2: "국",
      menu4_3: "반찬",
      menu4_4: "반찬",
      menu4_5: "반찬",
      menu4_6: "반찬",
      menu5_1: "밥",
      menu5_2: "국",
      menu5_3: "반찬",
      menu5_4: "반찬",
      menu5_5: "반찬",
      menu5_6: "반찬",
      date_start: '2024-05-20'
    }
  });
  const [premium, createdPremium] = await Premium.findOrCreate({
    where: { id: 2 },
    defaults: {
      menu1_1: "밥",
      menu1_2: "국",
      menu1_3: "반찬",
      menu1_4: "반찬",
      menu1_5: "반찬",
      menu1_6: "반찬",
      menu2_1: "밥",
      menu2_2: "국",
      menu2_3: "반찬",
      menu2_4: "반찬",
      menu2_5: "반찬",
      menu2_6: "반찬",
      menu3_1: "밥",
      menu3_2: "국",
      menu3_3: "반찬",
      menu3_4: "반찬",
      menu3_5: "반찬",
      menu3_6: "반찬",
      menu4_1: "밥",
      menu4_2: "국",
      menu4_3: "반찬",
      menu4_4: "반찬",
      menu4_5: "반찬",
      menu4_6: "반찬",
      menu5_1: "밥",
      menu5_2: "국",
      menu5_3: "반찬",
      menu5_4: "반찬",
      menu5_5: "반찬",
      menu5_6: "반찬",
      date_start: '2024-05-20'
    }
  });
});

// 로그인API
app.post('/members', async function(req, res) {
 
  const postData = req.body; // 요청의 body에서 데이터 추출
  let userId = postData.userId;  
  let checkId = await User.findAll( {where : {userIds : userId}})
  let reviewId = Boolean(checkId[0])
  if(reviewId==false){
    res.send(`<script>alert('존재하지 않는 아이디입니다.'); window.location.replace('/');</script>`)
  }else {
    // console.log(checkId.userPwds, postData.password)
    if(checkId[0].userPwds == postData.password){
      // console.log(checkId[0].userName)
      req.session.userId = userId
      res.cookie('name',checkId[0].userName)
      res.send(`<script> alert('로그인되었습니다.'); window.location.replace('/dashboard'); </script>`);
    }else {
      res.send(`<script>alert('비밀번호가 맞지 않습니다.'); window.location.replace('/');</script>`)
    }
  }
});

//대시보드 접속
app.get('/dashboard', (req,res)=> {
  if(req.session.userId) {
    res.sendFile(__dirname+'/pages/dashboard.html')
  } else {
    res.send(`<script>alert('로그인이 필요합니다.'); window.location.replace('/');</script>`);
  }
  
})

//데이터 발송
app.post('/output', async (req, res) => {
  let datas = req.body;
  let name = datas.cafeteria_name;
  let date = datas.date1;
  console.log(datas)
  if(name == "소담"){
    let outputs_o = await Sodam.findAll()
    let outputs = await Sodam.findAll({where: {date_start: date}})
    console.log(outputs_o, outputs)
    res.json(outputs);
  }else if(name == "프리미엄어쩌구"){
    let outputs = await Premium.findAll({where: {date_start: date}})
    res.json(outputs);
  }
  
});

//menu 업데이트
app.post('/input', async (req,res)=>{
  let posts = req.body;
  let names = req.body.cafeteria_name;
  console.log(posts)
  if(names == "소담") {
    let menus = await Sodam.create({
      menu1_1: posts.menu1_1,
      menu1_2: posts.menu1_2,
      menu1_3: posts.menu1_3,
      menu1_4: posts.menu1_4,
      menu1_5: posts.menu1_5,
      menu1_6: posts.menu1_6,
      menu2_1: posts.menu2_1,
      menu2_2: posts.menu2_2,
      menu2_3: posts.menu2_3,
      menu2_4: posts.menu2_4,
      menu2_5: posts.menu2_5,
      menu2_6: posts.menu2_6,
      menu3_1: posts.menu3_1,
      menu3_2: posts.menu3_2,
      menu3_3: posts.menu3_3,
      menu3_4: posts.menu3_4,
      menu3_5: posts.menu3_5,
      menu3_6: posts.menu3_6,
      menu4_1: posts.menu4_1,
      menu4_2: posts.menu4_2,
      menu4_3: posts.menu4_3,
      menu4_4: posts.menu4_4,
      menu4_5: posts.menu4_5,
      menu4_6: posts.menu4_6,
      menu5_1: posts.menu5_1,
      menu5_2: posts.menu5_2,
      menu5_3: posts.menu5_3,
      menu5_4: posts.menu5_4,
      menu5_5: posts.menu5_5,
      menu5_6: posts.menu5_6,
      date_start: posts.start
    })
    res.redirect('/dashboard');
  }else if(names=="프리미엄어쩌구") {
    let menus = await Premium.create({
      menu1_1: posts.menu1_1,
      menu1_2: posts.menu1_2,
      menu1_3: posts.menu1_3,
      menu1_4: posts.menu1_4,
      menu1_5: posts.menu1_5,
      menu1_6: posts.menu1_6,
      menu2_1: posts.menu2_1,
      menu2_2: posts.menu2_2,
      menu2_3: posts.menu2_3,
      menu2_4: posts.menu2_4,
      menu2_5: posts.menu2_5,
      menu2_6: posts.menu2_6,
      menu3_1: posts.menu3_1,
      menu3_2: posts.menu3_2,
      menu3_3: posts.menu3_3,
      menu3_4: posts.menu3_4,
      menu3_5: posts.menu3_5,
      menu3_6: posts.menu3_6,
      menu4_1: posts.menu4_1,
      menu4_2: posts.menu4_2,
      menu4_3: posts.menu4_3,
      menu4_4: posts.menu4_4,
      menu4_5: posts.menu4_5,
      menu4_6: posts.menu4_6,
      menu5_1: posts.menu5_1,
      menu5_2: posts.menu5_2,
      menu5_3: posts.menu5_3,
      menu5_4: posts.menu5_4,
      menu5_5: posts.menu5_5,
      menu5_6: posts.menu5_6,
      date_start: posts.start
    })
    res.redirect('/dashboard');
  }
 
})

//대시보드 메뉴
app.post('/today_menu', async (req,res)=>{
  let date = req.body;
  console.log(date);
  let sodam_menu = await Sodam.findAll();
  let premium_menu = await Premium.findAll();
  console.log(sodam_menu, premium_menu)
  res.json(sodam_menu, premium_menu)
})


//최초 페이지 접속
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/pages/index.html')
});

//점검 페이지 접속
app.get('/check', (req, res) => {
  if(req.session.userId) {
    res.sendFile(__dirname+"/pages/check.html")
  } else {
    res.send(`<script>alert('로그인이 필요합니다.'); window.location.replace('/');</script>`);
  }
});

// 로그아웃 요청 처리
app.post('/logout', (req, res) => {
  // 세션 파괴
  req.session.destroy((err) => {
    if (err) {
      // 세션 파괴에 실패한 경우
      console.error(err);
      res.status(500).send('로그아웃에 실패했습니다.');
    } else {
      // 세션 파괴에 성공한 경우, 클라이언트 측에 성공 응답을 보냄
      res.send('로그아웃 되었습니다.');
    }
  });
});


// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});