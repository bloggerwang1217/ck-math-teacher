var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on("ready", function (evt) {
    logger.info("Connected");
    logger.info("Logged in as: ");
    logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function (user, userID, channelID, message, evt) {
if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
//主要修改的部分
        const quote = [
   ' 各位同學，你現在不可以做這種會消耗精力的事情 ',
 ' 飯島愛已經回到生命之家了 ',
 ' 你看下禮拜就要八字頭了啊 ',
 ' 小老師，Where Do We Start ',
 ' 啊SQUIRREL ',
 ' 你瘋~了啊 ',
 ' 全民白~癡化 ',
 ' 回到了生命之家 ',
 ' 狗放屁、放狗屁、放屁狗 ',
 ' 啊，阿彌陀佛、阿彌陀佛 ',
 ' 阿咪躂哺答 ',
 ' 沒~什麼了不起，沒! 什麼了不起 ',
 ' No黑建、No PPT、No逍遙遊 ',
 ' 沒有辦~法 ',
 ' 只有一個字，死 ',
 ' 三天三夜統一了中國，還有一個半小時期末考 ',
 ' 真是不要臉啊 ',
 ' 非洲人那是鳥技社，但是他們沒有腦袋 ',
 ' (阿老師你在台大機械系學到什麼)呃呃呃呃呃呃 ',
 ' 你們不要去為難你們的導師齁，這個她不會 ',
 ' 痾......我其實是很尊敬你們導師的阿 ',
 ' 劉胖子，你怎麼都偷教了 ',
 ' 啊，這位同學已經θ等於零了啊 ',
 ' 分筋錯骨手 ',
 ' 我射的是你媽，又不是你 ',
 ' 怎麼可以把那麼神聖的東西放進...... ',
 ' 我果然還是無法接受...... ',
 ' 靠 ',
 ' hahhahhaha，這是 Micheal Jackson的招牌 ',
 ' 各位同學，白色的鮑魚皮膚很粗啊 ',
 ' 輔大是拿來用的 ',
 ' 政大是拿來騎的，不是拿來讀的 ',
 ' 我為什麼不能教北一女？各位同學，她們沒有法~向量 ',
 ' 找上唇、找下唇，火爆插進去，答案就流~出~來 ',
 ' 找上界、找下界，火爆伸進去，答案就跑出來 ',
 ' 正著幹，就像穿著鎧甲；倒著幹，你就一竿進洞 ',
 ' 我們有梁，她們有洞-為梁為洞同支大廈 ',
 ' 培新苗吐綠芽要靠你的機機啊，不可以剁掉 ',
 ' 火爆雙~妻 ',
 ' 你騎我的、我騎你的，換妻俱樂部 ',
 ' 交叉相騎 ',
 ' 哎呀，騎馬很貴呀 ',
 ' 南強的馬，我一~隻~都不想騎 ',
 ' 我都拿這個去騙那些國~中~小馬子 ',
 ' 哎呀不~要~啊，我屁股很臭 ',
 ' 精華要義簡稱精義 ',
 ' 綱交我是不做的啊 ',
 ' 四腳交叉，其樂無窮 ',
 ' 創造大~老二 ',
 ' 火爆扶~老二 ',
 ' 手握巨棒的感覺真好 ',
 ' 火爆立起正~四~面~體 ',
 ' 我們，都已經脹~大~ ',
 ' 我「對鄰」有意思 ',
 ' 莫名，我就喜歡你，深~深~地愛上你 ',
 ' 你~知道我在等你嗎 ',
 ' 坑~坑~洞~洞~的耶林大道 ',
 ' 你想要翹課，你就要來念臺大 ',
 ' 我是臺大機~械系 ',
 ' 我是物理與數學雙~棲 ',
 ' 我是北漂高~雄人 ',
 ' 我是向~量狂 ',
 ' 我是聯考時代的老古董 ',
 ' 我是建中教師合唱團男~主唱 ',
 ' 因為我是口技社的指導老師 ',
 ' 因為我是一個有物~理素養的數學老師 ',
 ' 因為我是一個有國~文素養的數學老師 ',
 ' 因為我只有讀到碩~士 ',
 ' 因為我都已經偷~教了 ',
 ' 他信的是基督教，他和我不合 ',
 ' 這個叫女~乳症 ',
 ' 但是他去摸人家的四次函數啊 ',
 ' 往上捲，往上捲( 1 3 5 - | 6 6 5 0 ) ',
 ' 小老師，快一點 ( 1 3 5 - | 6 6 5 0 ) ',
 ' 小老師 '有沒有看到( 1 3 5 0 - | 6 6 6 6 5 ) ',
 ' 小老師，火爆放大( 6 6 6 5 ) ',
 ' 小老師，Do Not Monkey Hurry ',
 ' All Written in English ',
 ' 疊合公式Superposition ',
 ' バスカル(巴司嘎魯)',
 ' Mister Cauchy ',
 ' 段以南？ I Have Never Heard. ',
 ' We have no time ',
 ' We have pressure ',
 ' 這就是高斯的Imagina---tion ',
 ' AB transport 等於 B transport A transport ',
 ' T加T除以一減TT ',
 ' 橢圓a最大，雙曲線、c最大 ',
 ' 底數放分母，真數放分子，剩下的垃圾送作堆 ',
 ' 家花哪有野花香 ',
 ' 左上右下減右上左下 ',
 ' 去死部隊 ',
 ' 小蠶蛾變成大~蝴蝶 ',
 ' 誤差平方的平均值，火爆開根號 ',
 ' 誤差平方的平均值，不要開根號 ',
 ' 平方的平均減平均的平方，火爆開根號 ',
 ' 平方的平均減平均的平方，不要開根號 ',
 ' 我出數字，道友出函數值-妖婦，納命來! ',
 ' 左邊的矩陣向量橫著看，右邊的矩陣向量直著看 ',
 ' 二度空間如是，三度空間亦~復~如~是 ',
 ' 這就是我的洛哥十五招 ',
 ' 橢圓有兩個奶頭 ',
 ' 雙乳合一-車諾比爾 ',
 ' 振幅就是一個男生突出去的部分，它只能是正的，它不能是負的 ',
 ' 指數函數-歡迎光臨丿 ',
 ' 凡是規則必有例外，凡是例外一 ~定會考 ',
 ' 公式要給我背得熟~熟熟 ',
 ' 公式有背，數學就是彩色的 ',
 ' 數學公式沒有從天上掉~下來的 ',
 ' 公式背起來，看題目怎麼算 ',
 ' 數學是你們吃飯的工具 ',
 ' 這是我的經~驗~值 ',
 ' 使用我的劉~氏~賤~招 ',
 ' 使用我的劉~氏~升級版 ',
 ' 因為我是向~量~狂 ',
 ' 學測不會考，指考可能考，建中段考一~定~考 ',
 ' 是不是？說~是 ',
 ' 有理化，不是有數學 ',
 ' 火爆開啟複~習~列~車 ',
 ' 火爆跳針三~千遍 ',
 ' 我敲黑板，你們敲桌子 ',
 ' 打開手~寫~講~義 ',
 ' 火爆殺~題目 ',
 ' 偷看答案法 ',
 ' 站起來拍手，坐下來拿分 ',
 ' 輕舟已過萬~重~山 ',
 ' 啊( ˇ )啊( ˋ ) ',
 ' 各~位~同~學，你想得出來嗎？打死我都想不出來 ',
 ' 啊~謝謝啊 ',
 ' 你怕了嗎 ',
 ' 各位同學請自幹 ',
 ' 不要還我我拒收 ',
 ' 各位同學我們台大見 ',
 ' 但是它被火爆咖~叉 ',
 ' 哎呀不要走，等我講完這一題再走 ',
 ' 謝謝各位同學的收~看 ',
 ' 這是什麼聲音？各位同學，我們不~要理它 ',
 ' 我們要火爆進入戒~嚴狀態 ',
 ' 你們要兩線作 戰 ',
 ' 哎呀不要玩機機 ',
 ' 不能學乳波要學繩波 ',
 ' 我要請你吃三餐啊 ',
 ' 啊，誰能幫我買每朝 ',
 ' 各位同學，請你們不要排斥當總統 ',
 ' 哎呀，馬克思，不要睡呀 ',
 ' 哎呀，我們的建中舞男回來啦 ',
 ' 哎呀我們貳零七哽王發哽啦 ',
 ' 各~位~同~學，班長發話了，我們上課 ',
 ' 各位同學我~承~認，我是瘋~子 ',
 ' 各位同學我~承~認，我是神~經病 ',
 ' 207，加油 ',
 ' 307，加油 ',
 ' 來人啊，快把這隻公狗拖出去 ',
 ' 他們說二類都是廢渣，我們二類不~是廢渣 ',
 ' 他們是三類組，他們將來要當醫生的呀 ',
 ' 這是高~斯的異想世界 ',
 ' 我們都覺得這是all the same,all the same,all the same，但巴斯卡說這是all different,all different,all different ',
 ' 大鳥先生-焦阿 ',
 ' 這是誰翻譯的？李~善~蘭 ',
 ' 好(↘↗↗） ',
 ' 他跟我說他賺的都是奶粉錢 ',
 ' 我高中同學他發現頂夸克啊 ',
 ' 魔鬼肌~肉男 ',
 ' 我要跟蔡O文那個老賊拼了 ',
 ' 我拿了二十年老賊獎 ',
 ' 化學96.4，全國聯考第157名(但是數學算錯所以上不了電機系)',
 ' 我物理教師甄試第~一名 ',
 ' 三民主義兩本書，背完就有一百分，剩下的怎麼湊都上得了台大 ',
 ' 我在南海路有兩棟房子 ',
 ' 我高中每天只睡三個小時，二十九歲就高血壓 ',
 ' 我為什麼會稍微有點失智-因為高血壓的關係 ',
 ' 清淨本然 ',
 ' 把你的機機廢了 '
   // You can add as many as you want
  ];
  switch(cmd) {
            case '96.4'://若輸入!dice時執行
			// Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
			const response = quote[Math.floor(Math.random() * quote.length)];
                bot.sendMessage({
                    to: channelID,
                    message: response//機器人回覆這一行字
                });
            break;
         }
     }
});
