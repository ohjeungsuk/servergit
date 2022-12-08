const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!핑구봇명령어') {  // 명령어 사용법
    msg.channel.send('ex) #일A,B // #경A,B // !일A,B // !경A,B  #은 1인칭(FPP) !는 3인칭(TPP) ');
  }
  if (msg.content === '핑구') {  //대화
    msg.channel.send('저....저요...?아닙말구여.....');
  }
  if (msg.content === '안녕') {  //대화
    msg.channel.send('안녕!!!!!!!!! 안녕!!!!!!!!!!');
  }
  if (msg.content === '핑구바보') {
    msg.channel.send('ㅡㅡ?저한테 그러시는거에요 핑이님한테 하는거에요??');
  }
  if (msg.content === '!끝말잇기') {
    msg.channel.send('해질녘');
  }
  if (msg.content === '누구없소') {
    msg.channel.send('핑구있소');
  }
  if (msg.content === '응애') {
    msg.channel.send('응애 나 애기 핑구');
  }
  if (msg.content === '룰루') {
    msg.channel.send('난나!!!');
  }
  if (msg.content === '잘자요') {
    msg.channel.send('두루가~~~~~~!!!');
  }
  if (msg.content === '사랑해') {
    msg.channel.send('미안...난 임자가 있어....');
  }
  if (msg.content === '싸우자') {
    msg.channel.send('나?나 못이길텐데 ');
  }
  if (msg.content === '핑구야') {
    msg.channel.send('핑 바쁨');
  }
    if (msg.content === '#일1,1') {
      msg.channel.send('@here  🌻 1인칭 1번방 1자리 채워주실분~🌻');
    }
    if (msg.content === '#일1,2') {
      msg.channel.send('@here  🌻 1인칭 1번방 2자리 채워주실분~🌻');
    }
    if (msg.content === '#일1,3') {
      msg.channel.send('@here  🌻 1인칭 1번방 3자리 채워주실분~🌻');
    }
    if (msg.content === '#일2,1') {
      msg.channel.send('@here  🌻 1인칭 2번방 1자리 채워주실분~🌻');
    }
    if (msg.content === '#일2,2') {
      msg.channel.send('@here  🌻 1인칭 2번방 2자리 채워주실분~🌻');
    }
    if (msg.content === '#일2,3') {
      msg.channel.send('@here  🌻 1인칭 2번방 3자리 채워주실분~🌻');
    }
    if (msg.content === '#일3,1') {
      msg.channel.send('@here  🌻1인칭 3번방 1자리 채워주실분~🌻');
    }
    if (msg.content === '#일3,2') {
      msg.channel.send('@here  🌻1인칭 3번방 2자리 채워주실분~🌻');
    }
    if (msg.content === '#일3,3') {
      msg.channel.send('@here  🌻1인칭 3번방 3자리 채워주실분~🌻');
    }
    if (msg.content === '#일4,1') {
      msg.channel.send('@here  🌻1인칭 4번방 1자리 채워주실분~🌻');
    }
    if (msg.content === '#일4,2') {
      msg.channel.send('@here  🌻1인칭 4번방 2자리 채워주실분~🌻');
    }
    if (msg.content === '#일4,3') {
      msg.channel.send('@here  🌻1인칭 4번방 3자리 채워주실분~🌻');
    }
    if (msg.content === '#일5,1') {
      msg.channel.send('@here  🌻 1인칭 5번방 1자리 채워주실분~🌻');
    }
    if (msg.content === '#일5,2') {
      msg.channel.send('@here  🌻 1인칭 5번방 2자리 채워주실분~🌻');
    }
    if (msg.content === '#일5,3') {
      msg.channel.send('@here  🌻 1인칭 5번방 3자리 채워주실분~🌻');
    }
    if (msg.content === '#일6,1') {
      msg.channel.send('@here  🌻 1인칭 6번방 1자리 채워주실분~🌻');
    }
    if (msg.content === '#일6,2') {
      msg.channel.send('@here  🌻 1인칭 6번방 2자리 채워주실분~🌻');
    }
    if (msg.content === '#일6,3') {
      msg.channel.send('@here  🌻 1인칭 6번방 3자리 채워주실분~🌻');
    }
    if (msg.content === '#일7,1') {
      msg.channel.send('@here  🌻1인칭 7번방 1자리 채워주실분~🌻');
    }
    if (msg.content === '#일7,2') {
      msg.channel.send('@here  🌻1인칭 7번방 2자리 채워주실분~🌻');
    }
    if (msg.content === '#일7,3') {
      msg.channel.send('@here  🌻1인칭 7번방 3자리 채워주실분~🌻');
    }
    if (msg.content === '#일8,1') {
      msg.channel.send('@here  🌻1인칭 8번방 1자리 채워주실분~🌻');
    }
    if (msg.content === '#일8,2') {
      msg.channel.send('@here  🌻1인칭 8번방 2자리 채워주실분~🌻');
    }
    if (msg.content === '#일8,3') {
      msg.channel.send('@here  🌻1인칭 8번방 3자리 채워주실분~🌻');
    }
    if (msg.content === '#일9,1') {
      msg.channel.send('@here  🌻 1인칭 9번방 1자리 채워주실분~🌻');
    }
    if (msg.content === '#일9,2') {
      msg.channel.send('@here  🌻 1인칭 9번방 2자리 채워주실분~🌻');
    }
    if (msg.content === '#일9,3') {
      msg.channel.send('@here  🌻 1인칭 9번방 3자리 채워주실분~🌻');
    }
    if (msg.content === '#일10,1') {
      msg.channel.send('@here  🌻 1인칭 10번방 1자리 채워주실분~🌻');
    }
    if (msg.content === '#일10,2') {
      msg.channel.send('@here  🌻 1인칭 10번방 2자리 채워주실분~🌻');
    }
    if (msg.content === '#일10,3') {
      msg.channel.send('@here  🌻 1인칭 10번방 3자리 채워주실분~🌻');
    }             //  FPP 10번방 까지 끝
  
    if (msg.content === '#경1,1')  {
      msg.channel.send('@here  💥 1인칭  경쟁 1번방 1자리 채워주실분~💥');
    }
    if (msg.content === '#경1,2') {
      msg.channel.send('@here  💥 1인칭  경쟁 1번방 2자리 채워주실분~💥');
    }
    if (msg.content === '#경1,3') {
      msg.channel.send('@here  💥 1인칭  경쟁 1번방 3자리 채워주실분~💥');
    }
    if (msg.content === '#경2,1') {
      msg.channel.send('@here  💥 1인칭  경쟁 2번방 1자리 채워주실분~💥');
    }
    if (msg.content === '#경2,2') {
      msg.channel.send('@here  💥 1인칭  경쟁 2번방 2자리 채워주실분~💥');
    }
    if (msg.content === '#경2,3') {
      msg.channel.send('@here  💥 1인칭  경쟁 2번방 3자리 채워주실분~💥');
    }
    if (msg.content === '#경3,1') {
      msg.channel.send('@here  💥 1인칭  경쟁 3번방 1자리 채워주실분~💥');
    }
    if (msg.content === '#경3,2') {
      msg.channel.send('@here  💥 1인칭  경쟁 3번방 2자리 채워주실분~💥');
    }
    if (msg.content === '#경3,3') {
      msg.channel.send('@here  💥 1인칭  경쟁 3번방 3자리 채워주실분~💥');
    }
    if (msg.content === '#경4,1') {
      msg.channel.send('@here  💥 1인칭  경쟁 4번방 1자리 채워주실분~💥');
    }
    if (msg.content === '#경4,2') {
      msg.channel.send('@here  💥 1인칭  경쟁 4번방 2자리 채워주실분~💥');
    }
    if (msg.content === '#경4,3') {
      msg.channel.send('@here  💥 1인칭  경쟁 4번방 3자리 채워주실분~💥');
    }
    if (msg.content === '#경5,1') {
      msg.channel.send('@here  💥 1인칭  경쟁 5번방 1자리 채워주실분~💥');
    }
    if (msg.content === '#경5,2') {
      msg.channel.send('@here  💥 1인칭  경쟁 5번방 2자리 채워주실분~💥');
    }
    if (msg.content === '#경5,3') {
      msg.channel.send('@here  💥 1인칭  경쟁 5번방 3자리 채워주실분~💥');
    }
    if (msg.content === '#경6,1') {
      msg.channel.send('@here  💥 1인칭  경쟁 6번방 1자리 채워주실분~💥');
    }
    if (msg.content === '#경6,2') {
      msg.channel.send('@here  💥 1인칭  경쟁 6번방 2자리 채워주실분~💥');
    }
    if (msg.content === '#경6,3') {
      msg.channel.send('@here  💥 1인칭  경쟁 6번방 3자리 채워주실분~💥');
    }
    if (msg.content === '#경7,1') {
      msg.channel.send('@here  💥 1인칭  경쟁 7번방 1자리 채워주실분~💥');
    }
    if (msg.content === '#경7,2') {
      msg.channel.send('@here  💥 1인칭  경쟁 7번방 2자리 채워주실분~💥');
    }
    if (msg.content === '#경7,3') {
      msg.channel.send('@here  💥 1인칭  경쟁 7번방 3자리 채워주실분~💥');
    }
    if (msg.content === '#경8,1') {
      msg.channel.send('@here  💥 1인칭  경쟁 8번방 1자리 채워주실분~💥');
    }
    if (msg.content === '#경8,2') {
      msg.channel.send('@here  💥 1인칭  경쟁 8번방 2자리 채워주실분~💥');
    }
    if (msg.content === '#경8,3') {
      msg.channel.send('@here  💥 1인칭  경쟁 8번방 3자리 채워주실분~💥');
    }
    if (msg.content === '#경9,1') {
      msg.channel.send('@here  💥 1인칭  경쟁 9번방 1자리 채워주실분~💥');
    }
    if (msg.content === '#경9,2') {
      msg.channel.send('@here  💥 1인칭  경쟁 9번방 2자리 채워주실분~💥');
    }
    if (msg.content === '#경9,3') {
      msg.channel.send('@here  💥 1인칭  경쟁 9번방 3자리 채워주실분~💥');
    }
    if (msg.content === '#경10,1') {
      msg.channel.send('@here  💥 1인칭  경쟁 10번방 1자리 채워주실분~💥');
    }
    if (msg.content === '#경10,2') {
      msg.channel.send('@here  💥 1인칭  경쟁 10번방 2자리 채워주실분~💥');
    }
    if (msg.content === '#경10,3') {
      msg.channel.send('@here  💥 1인칭  경쟁 10번방 3자리 채워주실분~💥');
    }   // FPP 경쟁 10번 까지 끝

    if (msg.content === '!일1,1') {
      msg.channel.send('@here  🌼   일반 1번방 1자리 채워주실분~🌼');
    }
    if (msg.content === '!일1,2') {
      msg.channel.send('@here  🌼   일반 1번방 2자리 채워주실분~🌼');
    }
    if (msg.content === '!일1,3') {
      msg.channel.send('@here  🌼   일반 1번방 3자리 채워주실분~🌼');
    }
    if (msg.content === '!일2,1') {
      msg.channel.send('@here  🌼   일반 2번방 1자리 채워주실분~🌼');
    }
    if (msg.content === '!일2,2') {
      msg.channel.send('@here  🌼   일반 2번방 2자리 채워주실분~🌼');
    }
    if (msg.content === '!일2,3') {
      msg.channel.send('@here  🌼   일반 2번방 3자리 채워주실분~🌼');
    }
    if (msg.content === '!일3,1') {
      msg.channel.send('@here  🌼   일반 3번방 1자리 채워주실분~🌼');
    }
    if (msg.content === '!일3,2') {
      msg.channel.send('@here  🌼   일반 3번방 2자리 채워주실분~🌼');
    }
    if (msg.content === '!일3,3') {
      msg.channel.send('@here  🌼   일반 3번방 3자리 채워주실분~🌼');
    }
    if (msg.content === '!일4,1') {
      msg.channel.send('@here  🌼   일반 4번방 1자리 채워주실분~🌼');
    }
    if (msg.content === '!일4,2') {
      msg.channel.send('@here  🌼   일반 4번방 2자리 채워주실분~🌼');
    }
    if (msg.content === '!일4,3') {
      msg.channel.send('@here  🌼   일반 4번방 3자리 채워주실분~🌼');
    }
    if (msg.content === '!일5,1') {
      msg.channel.send('@here  🌼   일반 5번방 1자리 채워주실분~🌼');
    }
    if (msg.content === '!일5,2') {
      msg.channel.send('@here  🌼   일반 5번방 2자리 채워주실분~🌼');
    }
    if (msg.content === '!일5,3') {
      msg.channel.send('@here  🌼   일반 5번방 3자리 채워주실분~🌼');
    }
    if (msg.content === '!일6,1') {
      msg.channel.send('@here  🌼   일반 6번방 1자리 채워주실분~🌼');
    }
    if (msg.content === '!일6,2') {
      msg.channel.send('@here  🌼   일반 6번방 2자리 채워주실분~🌼');
    }
    if (msg.content === '!일6,3') {
      msg.channel.send('@here  🌼   일반 6번방 3자리 채워주실분~🌼');
    }
    if (msg.content === '!일7,1') {
      msg.channel.send('@here  🌼   일반 7번방 1자리 채워주실분~🌼');
    }
    if (msg.content === '!일7,2') {
      msg.channel.send('@here  🌼   일반 7번방 2자리 채워주실분~🌼');
    }
    if (msg.content === '!일7,3') {
      msg.channel.send('@here  🌼   일반 7번방 3자리 채워주실분~🌼');
    }
    if (msg.content === '!일8,1') {
      msg.channel.send('@here  🌼   일반 8번방 1자리 채워주실분~🌼');
    }
    if (msg.content === '!일8,2') {
      msg.channel.send('@here  🌼   일반 8번방 2자리 채워주실분~🌼');
    }
    if (msg.content === '!일8,3') {
      msg.channel.send('@here  🌼   일반 8번방 3자리 채워주실분~🌼');
    }
    if (msg.content === '!일9,1') {
      msg.channel.send('@here  🌼   일반 9번방 1자리 채워주실분~🌼');
    }
    if (msg.content === '!일9,2') {
      msg.channel.send('@here  🌼   일반 9번방 2자리 채워주실분~🌼');
    }
    if (msg.content === '!일9,3') {
      msg.channel.send('@here  🌼   일반 9번방 3자리 채워주실분~🌼');
    }
    if (msg.content === '!일10,1') {
      msg.channel.send('@here  🌼   일반 10번방 1자리 채워주실분~🌼');
    }
    if (msg.content === '!일10,2') {
      msg.channel.send('@here  🌼   일반 10번방 2자리 채워주실분~🌼');
    }
    if (msg.content === '!일10,3') {
      msg.channel.send('@here  🌼   일반 10번방 3자리 채워주실분~🌼');
    }
    if (msg.content === '!경1,1') {
      msg.channel.send('@here  🔥   경쟁 1번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경1,2') {
      msg.channel.send('@here  🔥   경쟁 1번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경1,3') {
      msg.channel.send('@here  🔥   경쟁 1번방 3자리 채워주실분~🔥');
    }
    if (msg.content === '!경2,1') {
      msg.channel.send('@here  🔥   경쟁 2번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경2,2') {
      msg.channel.send('@here  🔥   경쟁 2번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경2,3') {
      msg.channel.send('@here  🔥   경쟁 2번방 3자리 채워주실분~🔥');
    }
    if (msg.content === '!경3,1') {
      msg.channel.send('@here  🔥   경쟁 3번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경3,2') {
      msg.channel.send('@here  🔥   경쟁 3번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경3,3') {
      msg.channel.send('@here  🔥   경쟁 3번방 3자리 채워주실분~🔥');
    }
    if (msg.content === '!경4,1') {
      msg.channel.send('@here  🔥   경쟁 4번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경4,2') {
      msg.channel.send('@here  🔥   경쟁 4번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경4,3') {
      msg.channel.send('@here  🔥   경쟁 4번방 3자리 채워주실분~🔥');
    }
    if (msg.content === '!경5,1') {
      msg.channel.send('@here  🔥   경쟁 5번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경5,2') {
      msg.channel.send('@here  🔥   경쟁 5번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경5,3') {
      msg.channel.send('@here  🔥   경쟁 5번방 3자리 채워주실분~🔥');
    }
    if (msg.content === '!경6,1') {
      msg.channel.send('@here  🔥   경쟁 6번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경6,2') {
      msg.channel.send('@here  🔥   경쟁 6번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경6,3') {
      msg.channel.send('@here  🔥   경쟁 6번방 3자리 채워주실분~🔥');
    }
    if (msg.content === '!경7,1') {
      msg.channel.send('@here  🔥   경쟁 7번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경7,2') {
      msg.channel.send('@here  🔥   경쟁 7번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경7,3') {
      msg.channel.send('@here  🔥   경쟁 7번방 3자리 채워주실분~🔥');
    }
    if (msg.content === '!경8,1') {
      msg.channel.send('@here  🔥   경쟁 8번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경8,2') {
      msg.channel.send('@here  🔥   경쟁 8번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경8,3') {
      msg.channel.send('@here  🔥   경쟁 8번방 3자리 채워주실분~🔥');
    }
    if (msg.content === '!경8,1') {
      msg.channel.send('@here  🔥   경쟁 8번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경8,2') {
      msg.channel.send('@here  🔥   경쟁 8번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경8,3') {
      msg.channel.send('@here  🔥   경쟁 8번방 3자리 채워주실분~🔥');
    }
    if (msg.content === '!경9,1') {
      msg.channel.send('@here  🔥   경쟁 9번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경9,2') {
      msg.channel.send('@here  🔥   경쟁 9번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경9,3') {
      msg.channel.send('@here  🔥   경쟁 9번방 3자리 채워주실분~🔥');
    }
    if (msg.content === '!경10,1') {
      msg.channel.send('@here  🔥   경쟁 10번방 1자리 채워주실분~🔥');
    }
    if (msg.content === '!경10,2') {
      msg.channel.send('@here  🔥   경쟁 10번방 2자리 채워주실분~🔥');
    }
    if (msg.content === '!경10,3') {
      msg.channel.send('@here  🔥   경쟁 10번방 3자리 채워주실분~🔥');
    }   
    if (msg.content === '!경11,1') {
      msg.channel.send('@here  🔥   경쟁 11번방 1자리 채워주실분~🔥');
    }   
    if (msg.content === '!경11,2') {
      msg.channel.send('@here  🔥   경쟁 11번방 2자리 채워주실분~🔥');
    }   
    if (msg.content === '!경11,3') {
      msg.channel.send('@here  🔥   경쟁 11번방 3자리 채워주실분~🔥');
    }   
    if (msg.content === '!경12,1') {
      msg.channel.send('@here  🔥   경쟁 12번방 1자리 채워주실분~🔥');
    }   
    if (msg.content === '!경12,2') {
      msg.channel.send('@here  🔥   경쟁 12번방 2자리 채워주실분~🔥');
    }   
    if (msg.content === '!경12,3') {
      msg.channel.send('@here  🔥   경쟁 12번방 3자리 채워주실분~🔥');
    }   
    if (msg.content === '!경13,1') {
      msg.channel.send('@here  🔥   경쟁 13번방 1자리 채워주실분~🔥');
    }   
     if (msg.content === '!경13,2') {
      msg.channel.send('@here  🔥   경쟁 13번방 2자리 채워주실분~🔥');
    }   
     if (msg.content === '!경13,3') {
      msg.channel.send('@here  🔥   경쟁 13번방 3자리 채워주실분~🔥');
    }   
     if (msg.content === '!경14,1') {
      msg.channel.send('@here  🔥   경쟁 14번방 1자리 채워주실분~🔥');
    }   
     if (msg.content === '!경14,2') {
      msg.channel.send('@here  🔥   경쟁 14번방 2자리 채워주실분~🔥');
    }   
     if (msg.content === '!경14,3') {
      msg.channel.send('@here  🔥   경쟁 14번방 3자리 채워주실분~🔥');
    }   
    if (msg.content === '!경15,1') {
      msg.channel.send('@here  🔥   경쟁 15번방 1자리 채워주실분~🔥');
    }   
    if (msg.content === '!경15,2') {
      msg.channel.send('@here  🔥   경쟁 15번방 2자리 채워주실분~🔥');
    }   
    if (msg.content === '!경15,3') {
      msg.channel.send('@here  🔥   경쟁 15번방 3자리 채워주실분~🔥');
    }   
















  });

  client.login('ODQwMDg5NzY4OTg0ODM4MTk0.YJTIkQ.eclThPDZregzRvMeyabER0_QA1Y');
