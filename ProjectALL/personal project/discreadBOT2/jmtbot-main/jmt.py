import discord, asyncio

client = discord.Client()

@client.event
async def on_ready():  #봇 로그인 텍스트
    print("JMT봇 START!!")
    await client.change_presence(status=discord.Status.online, activity=discord.Game("스팀배그친목방 JMT봇입니다!\n가입문의방\n")) #봇 프로필 메세지

@client.event
async def on_message(message):
    if message.content == "안녕!": # 메세지 감지
        await message.channel.send ("존맛탱BOT입니다.안녕하세요>O<!!!!!".format(message.author, message.author.mention))
    if message.content == "!명령어": # 메세지 감지
        await message.channel.send ("일겜방은(일),빡겜방은(빡)경쟁방은(경)입니다.\n그뒤에 오는 숫자는 방번호,남는 인원\n ex: !빡1,2(빡겜방1번 2명 구함)".format(message.author, message.author.mention))    #명령어 즐빡경 > 일빡경 으로 수정
    if message.content == "롤": # 메세지 감지
        await message.channel.send ("예?????롤 ????누가 롤하죠 ???배그 안합니까ㅡㅡ?".format(message.author, message.author.mention))
    if message.content == "바보": # 메세지 감지
        await message.channel.send ("저요...?지금 나보고 바보라고 함 ????이방 채팅에 치는거면 다 나한테 하는 소리임ㅡㅡ!!".format(message.author, message.author.mention))
    if message.content == "도비": # 메세지 감지
        await message.channel.send ("도비님는 저를 만드신 주인님 입니다 ㅎ 그러라고 만들어졌어요 내 잘못 아님>ㅡ<".format(message.author, message.author.mention))
    if message.content == "배그하실분": # 메세지 감지
        await message.channel.send ("제가 가면 무조건 1등인데 같이 ㄱ?🧐".format(message.author, message.author.mention))    
    if message.content == "!공지": # 메세지 감지
        await message.channel.send ("@here 공지 확인해주세요 아주 중요합니다❗️❗️❗️❗️❗️".format(message.author, message.author.mention))
    if message.content == "배딩학생": # 메세지 감지
        await message.channel.send ("배린이를 탈출하고 나온 배그학생 by맛탱위키".format(message.author, message.author.mention))
    if message.content == "어쩔티비": # 메세지 감지
        await message.channel.send ("어쩔티비~어쩔어쩔저쩔저쩔 안물티비~ 안궁티비~ 뇌절티비~ 우짤래미~ 저짤래미~ ㅋㅋㄹㅃㅃ지금 화났쥬~ 개킹받쥬? 죽이고 싶쥬? 응~ 못죽이쥬? 아 또 빡치쥬~ 아무것도못하쥬?아무것도못하쥬?그냥 화났쥬? 냬~ 냬~ 냬~ 냬~ 알걨섑니댸~ 아무도 안물안궁~어?물어본사람?궁금한사람?응 근데 어쩔티비쥬? 약 올리쥬? 응~ 어쩔저쩔 안물안궁 슉 슈슉 슉 시, 시, 시...시x럼아!!!".format(message.author, message.author.mention))
    if message.content == "먀": # 메세지 감지
        await message.channel.send ("먀 의 시대는 끝났다 '뫄' 시대다 ".format(message.author, message.author.mention))
    if message.content == "퉤": # 메세지 감지
        await message.channel.send ("냠".format(message.author, message.author.mention))
    if message.content == "ㅅㅂ": # 메세지 감지
        await message.channel.send ("@here 욕한다 여기 욕한다!!!!!".format(message.author, message.author.mention))
    if message.content == "응애": # 메세지 감지
        await message.channel.send ("응애 나 애기 맛탱봇".format(message.author, message.author.mention))
    if message.content == "ㅠㅠ": # 메세지 감지
        await message.channel.send ("울지마요ㅠㅅㅠ".format(message.author, message.author.mention))
    if message.content == "!일1,1": # 구인구직 명령어
        await message.channel.send ("✨{},님 께서 즐겜 1번방 1자리 구합니다@here.✨".format(message.author, message.author.mention))
    if message.content == "!일1,2": 
        await message.channel.send ("✨{},님 께서 즐겜 1번방 2자리 구합니다@here.✨".format(message.author, message.author.mention))            
    if message.content == "!일1,3": 
        await message.channel.send ("✨{},님 께서 즐겜 1번방 3자리 구합니다@here.✨".format(message.author, message.author.mention))
    if message.content == "!일2,1": 
        await message.channel.send ("✨{},님 께서 즐겜 2번방 1자리 구합니다@here.✨".format(message.author, message.author.mention)) 
    if message.content == "!일2,2": 
        await message.channel.send ("✨{},님 께서 즐겜 2번방 2자리 구합니다@here.✨".format(message.author, message.author.mention))
    if message.content == "!일2,3": 
        await message.channel.send ("✨{},님 께서 즐겜 2번방 3자리 구합니다@here.✨".format(message.author, message.author.mention))  #즐겜방 끝
    if message.content == "!빡1,1": 
        await message.channel.send ("🔥{},님 께서 빡겜 1번방 1자리 구합니다@here.🔥".format(message.author, message.author.mention))
    if message.content == "!빡1,2": 
        await message.channel.send ("🔥{},님 께서 빡겜 1번방 2자리 구합니다@here.🔥".format(message.author, message.author.mention))
    if message.content == "!빡1,3": 
        await message.channel.send ("🔥{},님 께서 빡겜 1번방 3자리 구합니다@here.🔥".format(message.author, message.author.mention))
    if message.content == "!빡2,1": 
        await message.channel.send ("🔥{},님 께서 빡겜 2번방 1자리 구합니다@here.🔥".format(message.author, message.author.mention))            
    if message.content == "!빡2,2": 
        await message.channel.send ("🔥{},님 께서 빡겜 2번방 2자리 구합니다@here.🔥".format(message.author, message.author.mention))
    if message.content == "!빡2,3": 
        await message.channel.send ("🔥{},님 께서 빡겜 2번방 3자리 구합니다@here.🔥".format(message.author, message.author.mention)) #빡겜방 끝
    if message.content == "!경1,1": 
        await message.channel.send ("🏅{},님 께서 경쟁 1번방 1자리 구합니다@here.🏅".format(message.author, message.author.mention))
    if message.content == "!경1,2": 
        await message.channel.send ("🏅{},님 께서 경쟁 1번방 2자리 구합니다@here.🏅".format(message.author, message.author.mention))   
    if message.content == "!경1,3": 
        await message.channel.send ("🏅{},님 께서 경쟁 1번방 3자리 구합니다@here.🏅".format(message.author, message.author.mention))
    if message.content == "!경2,1": 
        await message.channel.send ("🏅{},님 께서 경쟁 2번방 1자리 구합니다@here.🏅".format(message.author, message.author.mention))
    if message.content == "!경2,2": 
        await message.channel.send ("🏅{},님 께서 경쟁 2번방 2자리 구합니다@here.🏅".format(message.author, message.author.mention))   
    if message.content == "!경2,3": 
        await message.channel.send ("🏅{},님 께서 경쟁 2번방 3자리 구합니다@here.🏅".format(message.author, message.author.mention))  #경쟁방 끝                 

    if message.content.startswith ("!청소"):
        i = (message.author.guild_permissions.administrator)

        if i is True:
            amount = message.content[4:]
            await message.channel.purge(limit=1)
            await message.channel.purge(limit=int(amount))

            embed = discord.Embed(title="메시지 삭제 알림", description="최근 디스코드 채팅 {}개가\n관리자 {}님의 요청으로 인해 정상 삭제 조치 되었습니다".format(amount, message.author), color=0x000000)
            embed.set_footer(text="메세지 삭제중", icon_url="https://discordapp.com/channels/691615852620939274/703908401381376000/711859989177958410")
            await message.channel.send(embed=embed)
        
        if i is False:
            await message.channel.purge(limit=1)
            await message.channel.send("{}, 당신은 명령어를 사용할 수 있는 권한이 없습니다".format(message.author.mention))


# 봇을 실행시키기 위한 토큰을 작성해주는 곳
                       
client.run('OTQ4OTA2MjY3MjM2MjQxNDE4.YiCn0w.061IgnEWxTg33l_cfLozMZO-Sik')
