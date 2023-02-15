// ==UserScript==
// @name       Bypass All Shortlinks
// @updateURL https://github.com/motoonepower/scripts/raw/main/Bypass%20All%20Shortlinks.user.js
// @downloadURL https://github.com/motoonepower/scripts/raw/main/Bypass%20All%20Shortlinks.user.js
// @name:id    Bypass Semua Shortlink
// @name:ug    Bypass بارلىق قىسقا ئۇلىنىشلار
// @name:ar    تجاوز الجميع الروابط المختصرة
// @name:he    לַעֲקוֹף את כל קישורים קצרים
// @name:hi    सभी शॉर्टलिंक को बायपास करें
// @name:ja    バイパス 全て ショートリンク
// @name:fr    Bypass Tout Lien courts
// @name:ko    모든 짧은 링크 우회
// @name:th    บายพาส ทั้งหมด ลิงค์สั้น
// @name:bg    Заобикаляне на всички кратки връзки
// @name:ro    Bypass Toate Linkuri scurte
// @name:fi    Ohittaa Kaikki Lyhyet linkit
// @name:it    Bypassare Tutto Collegamenti brevi
// @name:el    Παράκαμψη Ολα Σύντομοι σύνδεσμοι
// @name:eo    Pretervojo Ĉiuj Mallongaj ligiloj
// @name:es    Saltarse Todos los Enlaces Acortados
// @name:hu    Bypass Összes Rövid linkek
// @name:nb    Omgå Alle Kortlenker
// @name:sk    Obísť Všetky Krátke odkazy
// @name:sv    Förbigå alla kortlänkar
// @name:sr    Zaobići Sve Kratke veze
// @name:pl    Bypass Wszystkie Krótkie linki
// @name:nl    Bypass Alle Korte links
// @name:de    Bypass Alle Kurzlinks
// @name:da    Bypass Alle Shortlinks
// @name:cs    Bypass Všechno Krátké odkazy
// @name:uk    Обхід всі Короткі посилання
// @name:ru    Обход Все Короткие ссылки
// @name:tr    Bypass Tüm Kısa Linkler
// @name:vi    Bỏ qua Tất cả Các liên kết ngắn
// @name:zh-CN 旁路 全部 短链接
// @name:zh-TW 旁路 全部 短鏈接
// @name:pt-BR Bypass Todos Links curtos
// @name:fr-CA Bypass Tout Lien courts
// @namespace  Violentmonkey Scripts
// @version    81.3
// @grant      none
// @author     Bloggerpemula
// @run-at     document-start
// @antifeature    tracking
// @description    Bypass All Shortlinks Sites Automatically Skips Annoying Link Shorteners , Skip AdFly , Linkvertise and No Annoying Ads, Directly to Your Destination, and now Support Auto Downloading Your Files
// @description:id Bypass Semua Situs Shortlink Secara Otomatis Langsung ke Tujuan Tanpa Iklan yang Mengganggu , Support Auto Download File
// @description:ug بارلىق قىسقا ئۇلىنىش تور بېكەتلىرىنى ئايلىنىپ ئۆتۈپ ، كىشىنى بىزار قىلىدىغان ئۇلىنىش قىسقارتقۇچنى ئاپتوماتىك ھالدا مەنزىلىڭىزگە ئاتلاڭ.
// @description:ar تجاوز جميع مواقع الروابط المختصرة يتخطى تلقائيًا أدوات تقصير الروابط المزعجة ، مباشرة إلى وجهتك
// @description:he עוקף את כל אתרי הקישורים הקצרים מדלג אוטומטית על מקצרי קישורים מעצבנים, ישירות ליעד שלך
// @description:hi सभी शॉर्टलिंक साइटों को बायपास करें, सीधे आपके गंतव्य पर कष्टप्रद लिंक शॉर्टनर को छोड़ दें
// @description:ja すべてのショートリンクサイトをバイパスすると、迷惑なリンクショートナーが自動的にスキップされ、宛先に直接送信されます
// @description:fr Contourner tous les sites de liens courts saute automatiquement les raccourcisseurs de liens gênants, directement vers votre destination
// @description:ko 모든 짧은 링크 사이트 우회는 성가신 링크 단축기를 자동으로 건너뛰고 목적지로 직접 이동합니다.
// @description:th ข้ามไซต์ลิงค์สั้นทั้งหมดข้ามลิงค์ย่อที่น่ารำคาญโดยอัตโนมัติไปยังปลายทางของคุณ
// @description:bg Заобикаляне на всички сайтове с кратки връзки Автоматично пропуска досадните средства за съкращаване на връзки, директно до вашата дестинация
// @description:ro Omite toate site-urile cu linkuri scurte Omite automat elementele de scurtare a linkurilor enervante, direct către destinația ta
// @description:fi Ohita kaikki lyhytlinkkisivustot ohittaa automaattisesti ärsyttävät linkinlyhennykset suoraan määränpäähäsi
// @description:it Ignora tutti i siti di collegamenti brevi Salta automaticamente i fastidiosi accorciatori di collegamenti, direttamente alla tua destinazione
// @description:el Παράκαμψη όλων των τοποθεσιών σύντομων συνδέσμων Παρακάμπτει αυτόματα τα ενοχλητικά προγράμματα συντόμευσης συνδέσμων, απευθείας στον προορισμό σας
// @description:eo Preterpasi Ĉiuj Mallongaj Ligiloj-Ejoj Aŭtomate Saltas ĝenajn Ligilojn, Rekte al Via Celo
// @description:es Saltarse Automáticamente todos los enlaces acortados, AdFly, Linkvertise, y omitir anuncios, ir directamente al destino, ahora se agregó descarga automática de archivos
// @description:hu Az összes rövid hivatkozási webhely megkerülése automatikusan átugorja a bosszantó linkrövidítőket, közvetlenül az úticélra
// @description:nb Omgå alle korte lenker Nettsteder hopper automatisk over irriterende lenkeforkortere, direkte til destinasjonen din
// @description:sk Obíďte všetky stránky s krátkymi odkazmi, ktoré automaticky preskočia otravné skracovače odkazov priamo do vášho cieľa
// @description:sv Förbi alla korta länkar webbplatser hoppar automatiskt över irriterande länkförkortare, direkt till din destination
// @description:sr Zaobići sve stranice s kratkim vezama automatski preskače dosadne skraćivače veza, izravno na vaše odredište
// @description:pl Pomijaj wszystkie strony z krótkimi linkami automatycznie pomija irytujące skracacze linków, bezpośrednio do miejsca docelowego
// @description:nl Omzeil alle sites met korte links en slaat automatisch vervelende linkverkorters over, rechtstreeks naar uw bestemming
// @description:de Alle Short-Links-Sites umgehen Überspringt automatisch lästige Link-Shortener direkt zu Ihrem Ziel
// @description:da Omgå alle korte links-websteder springer automatisk irriterende linkforkortere over, direkte til din destination
// @description:cs Obejít všechny stránky s krátkými odkazy Automaticky přeskakuje otravné zkracovače odkazů přímo do vašeho cíle
// @description:uk Обійти всі сайти з короткими посиланнями. Автоматично пропускає дратівливі скорочення посилань безпосередньо до вашого пункту призначення
// @description:ru Обход всех сайтов с короткими ссылками автоматически пропускает надоедливые сокращатели ссылок, прямо к месту назначения
// @description:tr Tüm Kısa Linkleri Atla Siteler Can sıkıcı Link Kısaltıcıları Otomatik Olarak Atlar, Doğrudan Hedefinize
// @description:vi Bỏ qua tất cả các trang web liên kết ngắn tự động bỏ qua các trang web liên kết gây phiền nhiễu, trực tiếp đến đích của bạn
// @description:zh-cn 绕过所有短链接网站自动跳过烦人的链接缩短器，直接到您的目的地
// @description:zh-tw 繞過所有短鏈接網站自動跳過煩人的鏈接縮短器，直接到您的目的地
// @description:pt-br Ignorar todos os sites de links curtos ignora automaticamente encurtadores de links irritantes, diretamente para o seu destino
// @description:fr-ca Contourner tous les sites de liens courts saute automatiquement les raccourcisseurs de liens gênants, directement vers votre destination
// @include /^(https?:\/\/)(tmearn|additionalgamer|makemoneywithurl|shrinkearn|techcyan|soltoshindo|link4m|kingsleynyc|healthy4pepole|kiktu|1bitspace|skip-url|pennbookcenter|publicananker|mikl4forex|michaelemad|miklpro|zirof|forex-golds|nawahi1|mosqam|semawur|forex-trnd|hoshilink|taiwancnan|bit-url|megurus|cuts-url|popimed|rayusmedya|enburl|pickhopes|toryxlink|aduzz|lycoslink|cdrab|ibrabucks|zenshort|ethiomi|shortenbuddy|kiemlua|smoner|djbhojpurisongs|urlty|sakastau|modsbase|ac.totsugeki|bcvc2|earnwithshortlink|bitzite|link1s|diadiemcheckin|tudiendanhngon|chooyomi|staaker|lucidcam|forexlap|forexmab|linkjust|admediaflex|hoclamdaubep|rekonise|forex-articles|ponselharian|liinkat|thegoneapp|mobi2c|studyuo|hookeaudio|thehostingmentor|linkshortify|shopsixseven|mohtawaa|msarzone|foodhear|mokshawa|fc-lc|expertvn|downphanmem|healdad|ez4mods|try2link|soft3arbi|techyadjectives|ex-foary|examtadka|bablyfeed|crypto4tun|blogmado|itsguider|btcwalk|99faucet|coin-free|1xfaucet|cafenau|techacode|ls2earn|sevenjournals|7misr4day|trflink|get4links|crickblaze|nostralink|clkmein|101desire|memangbau|world2our|vavada5com|sama-pro|s.ume24|shtfly|bestmobilenew|onlineincoms|modsfire|adneow|short.clickscoin|adclickersbot|mobitaak|modebaca|paylinnk|olhonagrana|chedrive|adrinolinks|samaa-pro|techrfour|ez4short|topnewsnew|gawishpro|dz4link|skincarie|gaminplay|infinitycoupon|videoslyrics|shortlite|bitefaucet|techrayzer|shorteet|donnaleehunt|puggygaming|tranquangchuan|blogginglass|1shorten|lensabicara|tieutietkiem|yummy-reciepes|doctor-groups|link.bigboxnet|bioinflu|chamcuuhoc|litexblog|7nything|ezeviral|gamalk-sehetk|adsafelink|cbshort|abcshort|checkscoin|llinkon|links.apksvip|nguyenvanbao|cloudgetlink|techloadz|atglinks|nulledsafe|dreamcheeky|cutpaid|fidlarmusic|rodjulian|anhdep24|money.alyoumeg|sl-1.btcbunch|sl-2.btcbunch|earncryptowrs|short-zero|insurancevela|poketoonworld|arahtekno|mopahealth|nghiencar|educur|gpfaucet|bstlar|sl-3.btcbunch|apk.miuiku|bitlya|ecwizon|oncehelp|sportsmediaz|big2short|techymozo|loptelink|2shrt|charexempire|coindoog|shotzon|novelsapps|webhostingpost|tremamnon|tirailangit|intercelestial|tribuntekno|bestcash2020|hoxiin|fooot-map|priefy|dz-linkk|fauxlink|chinhnhacoban|autodime|cortaly|link.3dmili|1adlink|indianshortner|donia-tech|donia2tech|donia2link|short1s|cr3zyblog|btafile|pdiskshortener|urlsopen|1shortlink|linkerload|filenext|shrinkmoney|doodshort|paid4link|kienthucrangmieng|aljoodm98|newworldnew|sahityt|mkomsel|niinga|fx4vip|shortzon|mesho-link|up4cash|newsharsh|examkhata|linksht|note1s|teknosimple|discordserv|wikitraveltips|bantenexis|link-yz|apkadmin|ayelads|gawbne|mshortener|cutdomain|usersdrive|uptobox|1fichier|uploadrar|bayfiles|krakenfiles|post.copydev|icutlink|anonfiles|sharemods|ddownload|uppit|userscloud|newsnowbd|link.nulldown|asideway|url.namaidani|url.magmint|mp4upload|myshrinker|apkshrt|link.turkdown|drive.google|safe.intipanime|uploadhaven|manga2day|shortyearn|workupload|filedm|themorningtribune|beingtek|sub2get|ex-load|campki|social-unlock|teerclub|short-jambo|link.bitmagge|nerdiess|lyricsbaazaar|aprovax|best-cpm|clicksfly|megaupto|maqal360|foodboth|ufacw|techcartz|softechbharat|okrzone|informaxonline|shopdorod|short.skalbayrak|adshnk|sub2unlock|smarcrm|cryptomeloud|blog-everything|ikrey|tipsli|urlpayout|urlpoints|hocbeauty|95news|link.get4llink|twitonet|shrinklo|xemsport|cutwin|pubgquotes|examsteacher|adpaylink|yxoshort|mdiskurl|shrt10|imgbsr|linknih|lessurl|pureshort|techkeshri|shrinkgold|itechmafiia|link4earn|team.pastehosting|3rabsnews|hosting4lifetime|oyunfilmindir|tecnicalboy|maxurlz|mr-forex|leadcricket|freebrightsoft|tackaway|dr-forex|indiajobagency|dz4link1|xpshort|urlshortx|getloanmoney|cryptst|blog.freeoseocheck|forex1pro|bico8|xdabo|web1s|cut-shortlink|creditneck|lollty|sheralinks|leitup|howifx|wptechh|vocalley|factsdunya|dev.miuiflash|upfilesurls|techyreviewx|blog.greenenez|vosliens.mykvostfr|shortox|gpl-market|timeforearn|profitshort|infinityskull|doodjob|link2m|link4m|amritadrino|traffic1s|blogyindia|dare2qualify|financerites|velhallacoin|leaveadvice|coins-town|zero-short|esopress)(\.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(zolomix|cararegistrasi|5golink|birdurls|snkra|artiskini|sh2rt|byboe|medcpu|nousdecor|restorbio|bdnewsx|upshrink|gifans|jardima|jobswd|gkqnaexam|imperialstudy|ovlinks|imagenesderopaparaperros|yofaurls|digiromotion|wingifta|rancah|coinadfly|delishwell|zippyshare|solidfiles|ourtecads|zubatecno|covemarkets|disheye|eda-ah|blog-forall|techymedies|gamelopte|allcryptotips|claimclicks|snowurl|riadcrypto|askpaccosi|linktrims|gets4link|visflakes|apk4do|dineroshare|elwatanelyoum|ledifha|claimfey|panylink|wrbloggers|tokenoto|saly-cash|upload-4ever|shortenn|admediaflex|btcpany|assettoworld|vikashmewada|linkyearn|appsbull|gam3ah|tinybc|diudemy|hereofamily|file-upload|shorterall|tribuncrypto|cempakajaya|safelinkduit|nadersoft7|adshorturl|linkbnao|phsensei|4shared|ta2deem7arbya|lrshortner|tinycmd|cloudshrinker|proviralhost|technicalatg|v2links|ytsubme|rainurl|arahlink|m4cut|teachsansar|web9academy|shortxlinks|flyrar|pythondunyasi|meykmen|on-scroll|shrtfly|dash-free|sekilastekno|cutln|i-polls|sonicbtc|menjelajahi|almontsf|crypturls|zombiebtc|techwhom|cash4share|linkwards|nyawang|kongutoday|claimbtcbits|softwaresolutionshere|insuranceleadsinfo|freevpshere|kredilerim|porterfuneralhomee|shrinkclick|adsquite|claimshort|picomine|aghtas|linksearns|proappapk|earnash|cskua|toilaquantri|youssefsayed|aracodes|wiki-topia|itscybertech|pinloker|publicearn|uploadsoon|solarchaine)(\.com)(\/.*)/
// @include /^(https?:\/\/)(ahyblogs|ourcoincash|1manga|watchdoge|arenaboard|ccsl|shrinkpay|adsgo|shon|crypto-faucet|bingeflix|studystar|lokagames|3vw|bflinks|short-cash2|wizzly|mgnet|crypteen|dogeen|fauceteen|cutdl|sportawy|fexkomin|technemo|zoomcrypto|techboyz|cblinks|99links|kartunik|post.nites-tv|shortplus|stores.filmyzilla-in|expresscoins|claimcoinsfree|short1|swzz|acortame|alghtas|wizly|horanews|a1link|short2fly|bcvc|healthbloog|blog.movies-near-me|st.kleaco|playlink|q8c|uscity|cars-1year|nabits|welovecrypto|worldappsstore|0uq|sh.tripledownloader|short2url|zeroshort|bitsyield|egstar|playdisk|monsterurlshortner|gibit|studyis|kukslincs|magictoshi|satoshi-hunter|bastinews|offrcms|earndash|masterowl|technoloy|coin2pay|techyuth|ajs-420)(\.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(senuansatechno|claimercorner|shortly|doctorcoin|speedynews|1apple|ffworld|textpage|fidovy|pcomnews|uscity|crypto-blog|sapica|earnfacut|urlbharat|dropz|chainfo|megano-coin|techleets|earnl|ajifly|shortpay|myartical|owlshortner|modmakers|kyshort|shortlink.faucet-samy|aoutoqw|healthysamy)(\.xyz)(\/.*)/
// @include /^(https?:\/\/)(techydino|world-trips|yoshare|lets.5get|crypto-fi|wpcheap|coinmasterx|catcut|aztravels|dulichkhanhhoa|sub2unlock|forex-gold|techtrickonline|7apple|ccurl|link1s|url.namaidani|dogeclick|adskip|hurirk|usfinf|xervoo|sport4you|hexupload|eloism|cutt|forexshare|blog.cryptowidgets|neexulro|dailyuploads|douploads|simfileshare|fir3|magybu|racaty|linegee|blogesque|thuocdangian|altblogger|letsboost|conghuongtu|vinaurl|tecmundo|try2link|blog.coinsvalue|cut-y|megadb|cpmlink|themezon|blog.webfreetools|rslinks|dupload|userupload|oaxyteek|xonnews|yosite)(\.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(digitalnaz|owllink|mozlink|cryptosats|rocklinks|celinks|jiotech|bitcomarket|illink|jemari|paid4link|link3s|boscoin|linkrex|fire-link|urlw|pilinks|linkshortify|youshort|bicolink|cookinguide|indiurl.in|vip-link)(\.net)(\/.*)/
// @include /^(https?:\/\/)(tnlink|jrlinks|qualitystudymaterial|missionhight|wpking|zagl|ls2earn|streamshort|shareus|referus|megafly|megaurl|cutp|earnmoj|urlmoney|cplink|cryptomonitor|technoflip|linkshortify|htlinks|techlearningtube|linkocean|financeflix|uttan|jazbaat|djxmaza|bildirim|techy4you|battlechamp|sahilsumra|kerdlinfo|urlcut|insurancevlog|itechlogic|videolyrics|tekcrypt|missionhight|gplinks|moddingzone|adybrands|gz2|dulink|aclinks|hidelinks|shortearn|siteblog|u.apgy|modzilla|thebestwishes|mrdoge|du-link|ouoi|by6|adrinolinks|rklinks|mymobilehub|techdaze|link4earn|rupamobile|examsolution|earn4link|kalvidudes|techwithsanikant|thebookaholics|ctdbihar|ibyt|flyurl|cosmictap|naukrilelo|nanolinks|cutp|linkpays|trends99|link.skm4u.co|linkwards.co|computerpedia|techyinfo|apkupload)(\.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cashurl|linkad|bitcoinly|crazyblog|zolomix|technologylover|expertlinks|largestpanel|rsrlink|linkstream|xmod|short2url|99links|rplinks|enit|adloot|url2go|tnvalue|pvidly|apurl|earnspace|urlinked|mdlink|gamerfang|writedroid|teckypress|fixno|paisakamalo|inkik|shrinkforearn|easysky|ajlinks|mdiskplayer|akcartoons|open2get|adzz|qora|insurancegold|smallinfo|filmypoints|iiwbr|linkshild|viplink|cuturl|techyblogs|e2share)(\.in)(\/.*)?/
// @include /^(https?:\/\/)(scratch247|siyn|portablesusb|children-learningreading|azmath|mobilereview|inform3tion|mobilism|shortlinkto|uptobhai|bitcrypto|machicon-akihabara|cooklike|videoclip|brbushare|fanclup|nulledlist|blog.coinscap|1short)(\.info)(\/.*)/
// @include /^(https?:\/\/)(exee.my|onlineteori.my|punyablog.my|karyawan.co|rotator.nurul-huda.sch|activity.my|massive.my|caview.my|nesiaku.my|bas.nurul-huda.or|link.nesia.my)(\.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?(suratresmi|carapedi|salink|mycut.my|apasih.my)(\.id)(\/.*)/
// @include /^(https?:\/\/)(aylink|linkszia|mynewsmedia|gtlink|droplink|123link|linksfy|adshorti|hxfile|dosya|veganal|takem|ezimg|eng.ezimg|dausel|modlink|9-animie|veganho|nulledmod|veganac|dealprice|arabplus2|cut-y|adshort|sub2me)(\.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?(takez|linksfire|vosan|tinygo|veganab|adfloz|fexkomin|linksly)(\.co)(\/.*)/
// @include /^(https?:\/\/)(ctbl|girls-like|gobits|zoss|shrinke|tlin|terafly|petafly|gigafly|adnews|papanews|panyflay|mozzfly|shortus|short.croclix|best-news|mega-news|wildblog|dddrive|linkpoi|m.newhit|mboost|linkshorts|exafly|nonofly|lozzfly|uptomega|stfly|adbull|youshort|health-and|cutx|adsk|linkfly|shorter.earn-hub|pkin|cashando|hunterkiller|acortalink|ar-goal|linkdam|adzully|adbully|zumpa|botfly)(\.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?(theconomy|richlink)(\.me)(\/.*)/
// @include /^(https?:\/\/)(newforex|wplink|nbyts|wealthystyle|clicksfly|happy-living|webcoin.coinrain|teacherana|earnow|earn-cash|yourtechnology|apks|network-earn|forexit|shopforex|o-pro|wedocrypto)(\.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adslinkfly|readi|linkmumet|shorte|battleroyal|kjcrypto)(\.online)(\/.*)/
// @include /^(https?:\/\/)(sitr|downfile|savelink|linkshortify|shareus|mobileprice|mynurse|short1|forextrader|shortener.goldcontent|lksfy)(\.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cekip|link4rev|coin-city|urlcash|alwrificlick|softindex|promo-visits)(\.site)(\/.*)/
// @include /^(https?:\/\/)(earnme|sanoybonito|automotur|kooza|1link|zentum|mytop5|forexwaw|megatube)(\.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(usanewstoday|kadal|webhostingtips)(\.club)(\/.*)/
// @include /^(https?:\/\/)(adrev|paid4|yousm|coinpayz|tr|sox|yocto|clk.dti|besturl|boostme|takefile|appo|pureshort|linkshortifyx|panyshort|mdiskshortner|leit|shortano|shortino|streamcheck)(\.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vshort|stex|cash4|zuba|adsen)(\.link)(\/.*)/
// @include /^(https?:\/\/)(shurt|shortit|adsy|bitlinks|clik|playstore|megalink)(\.pw)(\/.*)/
// @include /^(https?:\/\/)(.+)?(prz|pong)(\.pw)(\/.*)/
// @include /^(https?:\/\/)(linkshor|cortlink)(\.tk)(\/.*)/
// @include /^(https?:\/\/)(.+)?(urlchanger|arearn|mdcoxs)(\.ml)(\/.*)/
// @include /^(https?:\/\/)(.+)?(madfaucet|mineshor|futureshor|1clks)(\.tk)(\/.*)/
// @include /^(https?:\/\/)(onimports|link.encurtaon|economiarelevante)(\.com\.br)(\/.*)/
// @include /^(https?:\/\/)(.+)?(kiiw|passgen|wordcounter|shrink|revcot|clickzu|shortzu|flyzu)(\.icu)(\/.*)/
// @include /^(https?:\/\/)(exey|ezlinks|techmody|ouo|ex-e|saly|cuty|evoload|oke|letsupload|eio|oii|exe|viplinks|shrinkme|1short)(\.io)(\/.*)/
// @include /^(https?:\/\/)(.+)?(linkfly|usalink|shorti)(\.io)(\/.*)/
// @include /^(https?:\/\/)(tny|tinyurl)(\.so)(\/.*)/
// @include /^(https?:\/\/)(zshort|claimcrypto|cashearn|1ink|linkpay|moneylink|intnews|openload|linkspy|letsupload|myasietv)(\.cc)(\/.*)/
// @include /^(https?:\/\/)(cryptoad|wikile|uploadev|mega4upr|cshort|payskip|homeairquality|shortearn|roll.btc25|sl.btc25|earnsfly|sl2.btc25|bugatti.eu)(\.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(medipost|shrinkurl|keeplinks|rajdlsg)(\.org)(\/.*)/
// @include /^(https?:\/\/)(jameeltips|mitly|adfoc|link4fun)(\.us)(\/.*)/
// @include /^(https?:\/\/)(.+)?(yalla-shoot-now|forexeen|jaelink)(\.us)(\/.*)/
// @include /^(https?:\/\/)(webmobile|dailytime)(\.store)(\/.*)/
// @include /^(https?:\/\/)(noweconomy|deportealdia|adshort|ay|pngit|pndx|tyzen|shivshakti)(\.live)(\/.*)/
// @include /^(https?:\/\/)(earnads|genpassword|shrlink|punyamerk|shortnow|short.freeltc)(\.top)(\/.*)/
// @include /^(https?:\/\/)(faucetcrypto|bildirim|beta.shortearn)(\.eu)(\/.*)/
// @include /^(https?:\/\/)(nex-url|olamovies|atrologyrex)(\.cyou)(\/.*)/
// @include /^(https?:\/\/)(antonimos|blog.hostratgeber)(\.de)(\/.*)/
// @include /^(https?:\/\/)(freelitecoin|uplinkto|1Link)(\.vip)(\/.*)/
// @include /^(https?:\/\/)(.+)?(flyad|lootcash)(\.vip)(\/.*)/
// @include /^(https?:\/\/)(romania|met|warp)(\.bz)(\/.*)/
// @include /^(https?:\/\/)(2ad|viya|17o)(\.ir)(\/.*)/
// @include /^(https?:\/\/)(adshrink|cutin)(\.it)(\/.*)/
// @include /^(https?:\/\/)(pingit|files|upo)(\.im)(\/.*)/
// @include /^(https?:\/\/)(clk|9xupload)(\.asia)(\/.*)/
// @include /^(https?:\/\/)(iir|tei|ier|ckk)(\.ai)(\/.*)/
// @include /^(https?:\/\/)(aii|clk|oko)(\.sh)(\/.*)/
// @include /^(https?:\/\/)(.+)?(i8l|clk|pi-l|bcvc|modli|beast|boost)(\.ink)(\/.*)/
// @include /^(https?:\/\/)(.+)?(upload|prx)(\.ee)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ptr|mdn)(\.lol)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mirrored|clicknupload)(\.to)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo|forextrader|daga88)(\.today)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techgeek|adsgo|seulink)(\.digital)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mhma12|surflink|techtrim|adcash|yotrickslog)(\.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(goads|al|faucethub)(\.ly)(\/.*)/
// @include /^(https?:\/\/)(kiw|redir.123file)(\.li)(\/.*)/
// @include /^(https?:\/\/)(fc|fcc)(\.lc)(\/.*)/
// @include /^(https?:\/\/)(zonearn|theprice|nhacremix|doanvanhai|hynews)(\.biz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(123link|mtagang)(\.biz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(exe|exee|exep|exeo|upfiles|cutty|linkfly)(\.app)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adshort|1bit|2the|careerhunter|galaxy-link|adz7short|oscut)(\.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(makeeasybtc|softindex|techus|gishort1)(\.website)(\/.*)/
// @include /^(https?:\/\/)(linka|xtrabits|skipads|ccshort)(\.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(shortlinks|easysl|adlink|adzilla|urlcash|freecc|freebitcoin|urlcashh)(\.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hamody|nathanaeldan|freddyoctavio|davisonbarker|clks|cryptosh|bestfonts|gitlink|openurl|bitads)(\.pro)(\/.*)/
// @include /^(https?:\/\/)(up-load|zcash|mdisk)(\.one)(\/.*)/
// @include /^(https?:\/\/)(1dogecoin|faucet)(\.work)(\/.*)/
// @include /^(https?:\/\/)(claim|chuksblog|pricenews|alaashow)(\.fun)(\/.*)/
// @include /^(https?:\/\/)(go|blog|go2|tech|test|blg)(\.madshiba\.fun)(\/.*)/
// @include /^(https?:\/\/)(linkati|zenshort|curto)(\.win)(\/.*)/
// @include /^(https?:\/\/)(cool-time|movies|anime|tech)(\.dutchycorp\.space)(\/.*)/
// @include /^https:\/\/linkvertise\.com\/(1|2|3|4|5|6|7|8|9)/
// @include /^https:\/\/cryptofans\.club\/(short|next|other|step)/
// @include /^(https?:\/\/)(.+)?(mediafire)(\.com)\/(download|file)/
// @include /^(https?:\/\/)(.+)?(cryptocurrencytracker|freefaucet)(\.biz)\/(link)/
// @include /^(https?:\/\/)(.+)?(freebitcoin)(\.fun)\/(topsites|view)/
// @include /^https:\/\/cryptorotator\.website\/(newsletter|blog)(\/.*)/
// @exclude /^https:\/\/claimclicks\.com\/(btc|ltc|doge|trx|faucetlist|ptclist)/
// @include /^(https?:\/\/)(.+)?(clickscoin|freefeyorra|reddcoineveryday|cryptotyphoon|softairbay)(\.com)\/(short)/
// @exclude /^https:\/\/claimercorner\.xyz\/(claimer\/dashboard|claimer\/advertise|claimer\/ptc|claimer\/deposit|claimer\/transfer|claimer\/tasks|claimer\/offerwall|claimer\/profile|claimer\/auto|claimer\/mining|claimer\/wheel|claimer\/login)/
// @exclude /^https:\/\/cryptosats\.net\/(cryptosats\/dashboard|cryptosats\/advertise|cryptosats\/ptc|cryptosats\/deposit|cryptosats\/transfer|cryptosats\/tasks|cryptosats\/offerwall|cryptosats\/profile|cryptosats\/auto|cryptosats\/mining|cryptosats\/wheel|cryptosats\/login)/
// @exclude /^https:\/\/99faucet|faucet.cempakajaya\.com\/(dashboard|advertise|ptc|deposit|transfer|tasks|offerwall|profile|auto|mining|dice|lottery|faucet|login)/
// @exclude /^https:\/\/free.tribuncrypto\.com\/(dashboard|advertise|ptc|deposit|transfer|tasks|offerwall|profile|auto|mining|dice|lottery|faucet|login)/
// @exclude *://*.vosan.co/
// @match   *://dutchycorp.space/s*/*
// @match   *://dutchycorp.ovh/s*/*
// @match   *://za.gl/*
// @match   *://goo.st/*
// @match   *://c2g.at/*
// @match   *://adz.moe/*
// @match   *://coin.mg/*
// @match   *://send.cm/*
// @match   *://kimo.ma/*
// @match   *://slink.bid/*
// @match   *://*.rota.cc/*
// @match   *://ouo.press/*
// @match   *://7cc.96.lt/*
// @match   *://gktech.uk/*
// @match   *://tinyurl.is/*
// @match   *://*.oxy.cloud/*
// @match   *://*.mdn.world/*
// @match   *://lolabits.se/*
// @match   *://share4u.men/*
// @match   *://coinhub.wiki/*
// @match   *://gosixs.com/s/*
// @match   *://3shorturl.gq/*
// @match   *://litecoin.host/*
// @match   *://*.goto.com.np/*
// @match   *://drop.download/*
// @match   *://linkshrink.ca/*
// @match   *://*/*?xref=*&sl=*
// @match   *://short.express/*
// @match   *://urlcashh.quest/*
// @match   *://arbweb.info/sl/*
// @match   *://*.cizgifilm.tv/*
// @match   *://downloads.ninja/*
// @match   *://*.trangchu.news/*
// @match   *://360shortlink.cf/*
// @match   *://automat.systems/*
// @match   *://bluemediafile.sbs/*
// @match   *://docs.google.com/uc*
// @match   *://shrt.cryptofuns.ru/*
// @match   *://castles4kids.co.nz/*
// @match   *://satoshi-win.xyz/url/*
// @match   *://cryptonetos.ru/page/*
// @match   *://adbtc.top/surf/browse/*
// @match   *://anonym.ninja/download/*
// @match   *://faucetcrypto.net/short/*
// @match   *://konstantinova.net/verify/*
// @match   *://playnano.online/watch-and*
// @match   *://adbtc.top/surfiat/browse/*
// @match   *://*api-secure.solvemedia.com/*
// @match   *://faucetcrypto.com/claim/step/*
// @match   *://linkvertise.download/download/*
// @match   *://*.racedepartment.com/downloads/*
// @match   *://cryptonetos.ru/page/redirect*
// @match   *://earnultimate.space/short/*
// ==/UserScript==
// ================================================================================================================================================================
//                                          PLEASE READ SCRIPT INFO BEFORE USE
//                                      PLEASE RESPECT IF MY SCRIPTS USEFUL FOR YOU
//                      DON'T TRY TO COPY PASTE MY SCRIPTS THEN SHARE TO OTHERS LIKE YOU ARE THE CREATOR
//                 PLEASE DON'T REMOVE OR CHANGE MY BLOG, DISABLE YOUR ADBLOCK IN MY BLOG , THANKS FOR YOUR SUPPORT
//              My Blog is Very Important to give some Delay for safe away ,Track New Shortlinks , Broken Bypass etc...
// Thanks so much to @JustOlaf , @Konf , @hacker09 , @juansi , @NotYou And @cunaqr for Helping me , make my script even better , and for All who has contributed via Feedback.
// =================================================================================================================================================================
(function() {'use strict';
    const valdelay = 5 ; // Change the number from 5 to 10 or 20 if you have issues like Your action marked Suspicious,Don't try to bypass ,Don't use Speedster, etc
    const valbwall = 5 ; // if you have any other problem apart from bitswall , please leave your feedback
    const bp = query => document.querySelector(query);const BpAll = query => document.querySelectorAll(query);const elementExists = query => bp(query) !== null;const domainCheck = domains => new RegExp(domains).test(location.host);const BpParams = new URLSearchParams(location.search);const RexBp = new RegExp(/^\?([^&]+)/);
    function click(query) {bp(query).click();}
    function submit(query) {bp(query).submit();}
    function redirect(url, blog = true) {location = blog ? 'https://adguardteam.github.io/AnonymousRedirect/redirect.html?url=' + url : url;}
    function ClickIfExists(query, timeInSec = 1, funcName = 'setTimeout') {if (elementExists(query)) {window[funcName](function() {click(query);}, timeInSec * 1000);}}
    function SubmitIfExists(query, timeInSec = 1, funcName = 'setTimeout') {if (elementExists(query)) {window[funcName](function() {submit(query);}, timeInSec * 1000);}}
    function Captchasub(query, act = 'submit', timeInSec = 0.5) {if (elementExists(query)) {var timer = setInterval(function() {if (window.grecaptcha && !!window.grecaptcha.getResponse?.()) {bp(query)[act](); clearInterval(timer);}}, timeInSec * 1000);}}
    function Captchaklik(query, act = 'click', timeInSec = 1) {if (elementExists(query)) {var timer = setInterval(function() {if (window.grecaptcha && !!window.grecaptcha.getResponse?.()) {bp(query)[act](); clearInterval(timer);}}, timeInSec * 1000);}}
    function ReadCV(cname) {let name = cname + "=";let decodCV = decodeURIComponent(document.cookie);let cv = decodCV.split(';');for(var i = 0; i <cv.length; i++) {let c = cv[i];while (c.charAt(0) == ' ') {c = c.substring(1);}if (c.indexOf(name) == 0) {return c.substring(name.length, c.length);}} return "";}
    function EnableRCF() {[].forEach.call(['contextmenu', 'visibilitychange', 'cut', 'paste', 'blur', 'mouseleave', 'keyup', 'drag', 'dragstart', 'hasFocus', 'focus', 'select', 'selectstart', 'webkitvisibilitychange', 'mozvisibilitychange'],function(event) {document.addEventListener(event, function(e) { e.stopPropagation(); }, true);});}
    function fireMouseEvents(query) { const element = bp(query);if (!element) return; ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(eventName => {if (element.fireEvent) { element.fireEvent('on' + eventName);} else { const eventObject = document.createEvent('MouseEvents');eventObject.initEvent(eventName, true, false); element.dispatchEvent(eventObject);}});}
    function BypassedByBloggerPemula(re_domain, data, blog) { if (!re_domain.test(location.host)) return;if (typeof data === 'function') return data();if (Array.isArray(data)) data = {'/': data};if (!(location.pathname in data)) return;const [key, value] = data[location.pathname];if (typeof key === 'object' && key.test(location.search)) return redirect(value + RegExp.$1, blog);if (BpParams.has(key)) redirect(value + BpParams.get(key), blog);}
    function BloggerPemula(domains, data, url, blog, use = null) {if (!domainCheck(domains)) return;if (typeof data === 'string' && data.split(',').every(p => BpParams.has(p))) {use = data.split(',')[0];redirect(url + BpParams.get(use), blog);} else if (typeof data === 'object') {const o = data[location.pathname];if (!o) return; BloggerPemula(domains, ...o);}}
    function meta(href) {document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'referrer', content: 'origin'})); Object.assign(document.createElement('a'), {href}).click();}
    function waitForElm(query, callback) {setTimeout(function() {if (elementExists(query)) {callback(bp(query));} else {waitForElm(query, callback);}}, 1000);}
    function notify(txt, width = 780) { const m = document.createElement('div');
             m.style.padding = '1px'; m.style.zIndex = 99999999; m.style.position = 'fixed'; m.style.boxSizing = 'border-box';
             m.style.width = `${width}px`; m.style.top = '300px'; m.style.left = `${innerWidth / 2 - width / 2}px`; m.style.font = 'normal bold 20px sans-serif';
             m.style.backgroundColor = 'white'; m.innerText = txt; document.body.appendChild(m);}

    // There will be a Special Tricks and Bypass Codes only for Good Users (Anyone who have good attitude , Good Feedback, will be invited to my group)
    BloggerPemula('kienthucrangmieng.com|coindoog.com|tieutietkiem.com|askpaccosi.com|shopsixseven.com|hoclamdaubep.com|thuocdangian.net|chinhnhacoban.com|coin-free.com|fanclup.info|chamcuuhoc.com|nhacremix.biz|doanvanhai.biz|conghuongtu.net|95news.com|tremamnon.com|hynews.biz', 'wpsafelink', '', false);
    BloggerPemula('sport4you.net|nadersoft7.com|manga2day.com|pickhopes.com|gam3ah.com|cars-1year.xyz|m4cut.com|soft3arbi.com|alaashow.fun', 'link', '', false);
    BloggerPemula('techloadz.com|sportsmediaz.com', 'link', 'https://link.cloudshrinker.com//', false);
    BloggerPemula('cryptomeloud.com|creditneck.com', 'adlinkfly', 'https://claimbtcbits.com/', false);
    BloggerPemula('qualitystudymaterial.in', 'link', 'https://thehostingmentor.com/mylink/', false);
    BloggerPemula('crazyblog.in|newsharsh.com', 'postid', 'https://hr.vikashmewada.com//', false);
    BloggerPemula('7apple.net', 'go', 'https://illink.net/', false);
    BloggerPemula('rupamobile.in', 'go', 'https://mdisk.one/', false);
    BloggerPemula('eda-ah.com', 'get1', 'https://liinkat.com/', false);
    BloggerPemula('m.newhit.me', 'link', 'https://link3s.net/', false);
    BloggerPemula('wpking.in', 'link', 'https://o.ovlinks.com/', false);
    BloggerPemula('go.qora.in', 'link', 'https://link.qora.in/', false);
    BloggerPemula('gktech.uk', 'link', 'https://linkyearn.com/', false);
    BloggerPemula('jazbaat.in', 'link', 'https://go.rplinks.in/', false);
    BloggerPemula('rsrlink.in', 'link', 'https://go.rsrlink.in/', false);
    BloggerPemula('mrdoge.in', 'link', 'https://link.cash4.link/', false);
    BloggerPemula('itechlogic.in', 'link', 'https://go.apurl.in/', false);
    BloggerPemula('blog.hostratgeber.de', 'go', 'https://c2g.at/', false);
    BloggerPemula('autodime.com', 'go', 'https://go.linkrex.net/', false);
    BloggerPemula('ez4mods.com', 'check', 'https://ez4short.com/', false);
    BloggerPemula('zubatecno.com', 'link', 'https://go.flyzu.icu/', false);
    BloggerPemula('themezon.net', 'link', 'https://go.linksly.co/', false);
    BloggerPemula('masterowl.xyz', 'go', 'https://owlshortner.xyz/', false);
    BloggerPemula('itechmafiia.com', 'link', 'https://v.earnl.xyz/', false);
    BloggerPemula('veganab.co', 'link', 'https://techy.veganab.co/', false);
    BloggerPemula('techcartz.com', 'link', 'https://ads.mdlink.in/', false);
    BloggerPemula('factsdunya.com', 'go', 'https://driveupload.net/', false);
    BloggerPemula('1apple.xyz', 'link', 'https://link.turkdown.com/', false);
    BloggerPemula('siteblog.in', 'link', 'https://go.droplink.co.in/', false);
    BloggerPemula('kerdlinfo.in', 'link', 'https://go.lrshortner.com/', false);
    BloggerPemula('getloanmoney.com', 'adlinkfly', 'https://link.adcash.tech/');
    BloggerPemula('link.modmakers.xyz', 'token', 'https://v.earnl.xyz/', false);
    BloggerPemula('apasih.my.id', 'link', 'https://link.get4llink.com/', false);
    BloggerPemula('dealprice.co', 'adlinkfly', 'https://pricenews.fun/', false);
    BloggerPemula('ww1.linktrims.com', 'link', 'https://linktrims.com/', false);
    BloggerPemula('tecnicalboy.com', 'link', 'https://my.linkbnao.com/', false);
    BloggerPemula('myartical.xyz', 'adlinkfly', 'https://shorte.online/', false);
    BloggerPemula('bantenexis.com', 'link', 'https://link.youshort.net/', false);
    BloggerPemula('smallinfo.in', 'link', 'https://filmypoints.in/?link=', false);
    BloggerPemula('akcartoons.in', 'link', 'https://back.expertlinks.in/', false);
    BloggerPemula('missionhight.in', 'link', 'https://playdisk.url2go.in/', false);
    BloggerPemula('tech.techwhom.com', 'jeton', 'https://we.techwhom.com/', false);
    BloggerPemula('crickblaze.com', 'getlink', 'https://go.coinadfly.com/', false);
    BloggerPemula('loan.filmypoints.in', 'link', 'https://link.e2share.in/', false);
    BloggerPemula('niinga.com', 'get', 'https://eigsense.eda-ah.com/?get1=', false);
    BloggerPemula('videoslyrics.com', 'postid', 'https://ser3.crazyblog.in/', false);
    BloggerPemula('thebestwishes.in', 'link', 'https://link.gishort1.website/', false);
    BloggerPemula('linkshortifyx.link', 'link', 'https://yo.linkshortify.net/', false);
    BloggerPemula('tecnicalboy.com', 'link', 'https://ctdbihar.in/safe.php?link=', false);
    BloggerPemula('team.pastehosting.com', 'adlinkfly', 'https://shortxlinks.com/', false);
    BloggerPemula('www.filmypoints.in', 'link', 'https://tech.smallinfo.in/Gadget/', false);
    BloggerPemula('ffworld.xyz|technoloy.xyz', 'link', 'https://vip.linkbnao.com//', false);
    BloggerPemula('ctdbihar.in|thebookaholics.in', 'link', 'https://go.linkbnao.com/', false);
    BloggerPemula('battleroyal.online', 'link', 'https://zubatecno.com/safe.php?link=', false);
    BloggerPemula('cosmictap.in|dare2qualify.com', 'link', 'https://ffworld.xyz//safe.php?link=', false);
    BypassedByBloggerPemula(/aprovax.com/, {'/': [RexBp, 'https://paylinnk.com/'],}, false);
    BypassedByBloggerPemula(/7apple.net/, {'/verify/': [RexBp, 'http://illink.net/'],}, false);
    BypassedByBloggerPemula(/techdaze.in/, {'/': [RexBp, 'https://web.mdiskplayer.in/'],}, false);
    BypassedByBloggerPemula(/rklinks.in/, {'/verify/': [RexBp, 'https://blog.inkik.in/'],}, false);
    BypassedByBloggerPemula(/jemari.net/, {'/verify/': [RexBp, 'http://skip.jemari.net/'],}, false);
    BypassedByBloggerPemula(/mymobilehub.in/, {'/safe.php': ['link', 'https://modlink.co/'],}, false);
    BypassedByBloggerPemula(/techmody.io/, {'/safe2.php': ['link', 'https://ez4short.com/'],}, false);
    BypassedByBloggerPemula(/linkwards.co.in/, {'/verify/': [RexBp, 'http://ads.linkwards.com/'],}, false);
    BypassedByBloggerPemula(/shopsixseven.com/, {'/verify/': [RexBp, 'http://safelinkduit.com/'],}, false);
    BypassedByBloggerPemula(/gpl-market.com/, {'/safe.php': ['link', 'https://shrinkforearn.in/'],}, false);
    BypassedByBloggerPemula(/videoslyrics.com/, {'/verify/': [RexBp, 'http://ser3.crazyblog.in/'],}, false);
    BypassedByBloggerPemula(/link.bicolink.net/, function() {location = location.href.replace('link', 'go');});
    BypassedByBloggerPemula(/infinityskull.com/, {'/safe.php': ['link', 'https://go.publicearn.com/'],}, false);
    BypassedByBloggerPemula(/link.linksfire.co/, function() {location = location.href.replace('link', 'blog');});
    BypassedByBloggerPemula(/speedynews.xyz/, {'/blog/verify/': [RexBp, 'https://links.speedynews.xyz/'],}, false);
    BypassedByBloggerPemula(/ez4mods.com/, {'/safe2.php': ['link', 'https://techmody.io/safe2.php?link='],}, false);
    BypassedByBloggerPemula(/studyuo.com/, {'/pro2/verify/': [RexBp, 'https://speedynews.xyz/blog/verify/?'],}, false);
    BypassedByBloggerPemula(/short.rainurl.com|short.snowurl.com|short.dash-free.com/, function() {location = location.href.replace('short.', '');});
    BypassedByBloggerPemula(/medipost.org/, {'/verify/': [RexBp, 'http://go.theconomy.me/?'],'/go': ['link', 'https://links.theconomy.me?'],}, false);
    BypassedByBloggerPemula(/teachsansar.com|technicalatg.com|modzilla.in/, () => waitForElm("#wpsafegenerate > #wpsafe-link > a[href]", safe => redirect(safe.href)));
    BypassedByBloggerPemula(/go.birdurls.com|go.owllink.net|go.illink.net|go.pong.pw|go.earnfacut.xyz|go.link4rev.site|go.urlcash.site/, function() {location = location.href.replace('go.', '');});
    const sl = (h => {switch (h.host) {case 'cutty.app': if ( h.href.includes('/cutlinks') && location.search === '') { return 'https://cutty.app/laststep'; } break;
    case 'flyzu.icu': if (/^\/([^\/]+)/.test(h.pathname)) { return 'https://battleroyal.online/safe.php?link=' + RegExp.$1; } break;
    case 'gpfaucet.com': if (/^\/flink\/key\/([^\/]+)/.test(h.pathname)) {return 'https://link.wrbloggers.com/?key=' + RegExp.$1;} break;
    case 'www.cskua.com': if (h.pathname === '/p/blog-page.html' && h.searchParams.has('url')) {return h.searchParams.get('url');} break;
    case 'www.itscybertech.com': if (h.pathname === '/' && h.searchParams.has('data')) {redirect(atob(h.searchParams.get('data')));} break;
    case 'mobileprice.site': if (h.searchParams.has('alex')) { return 'https://offrcms.xyz/earn.php/?get=' + h.searchParams.get('alex');} break;
    case 'adlink.bitcomarket.net': if (h.searchParams.has('go')) { return 'https://adshorti.co/' + h.searchParams.get('go').substring(1);} break;
    case 'trends99.in': if (h.pathname === '/ri.php') {var tre = window.location.search.split('?').pop();return 'https://go.viplink.in/' + tre; } break;
    case 'leadcricket.com': if (h.pathname === '/el.php') {var lea = window.location.search.split('?').pop();return 'https://m.open2get.in/' + lea; } break;
    case 'my.dropz.xyz': if ( h.href.includes('/checkpoint') && location.search === '') { return 'https://my.dropz.xyz/checkpoint?redir=/site-friends'; } break;
    case 'patak.dropz.xyz': if ( h.href.includes('/checkpoint') && location.search === '') { return 'https://patak.dropz.xyz/checkpoint?redir=/site-friends'; } break;
    case 'forextrader.site': case 'castles4kids.co.nz': if (h.searchParams.has('get')) { return 'https://mobileprice.site/?alex=' + h.searchParams.get('get');} break;
    case 'theconomy.me': if (h.pathname === '/' && /^\?([^&]+)/.test(h.search)) {let econ = window.location.search.split('?').pop();return 'https://links.medipost.org/' + econ; } break;
    case 'bastinews.xyz': case 'lyricsbaazaar.com': case 'ezeviral.com': if (h.pathname === '/go.php' || h.pathname === '/e.php' || h.pathname === '/free.php' || h.pathname === '/test.php') {return window.location.search.split('?').pop();} break;
    case 'videolyrics.in': if (h.pathname === '/hindilyrics/check' && h.searchParams.has('p')) { return 'https://page.shrinkclick.com/' + h.searchParams.get('p');} else if (h.pathname === '/check' && h.searchParams.has('p')) { return 'https://ser3.crazyblog.in/' + h.searchParams.get('p');} break;
    case 'adbull.me': case 'adpaylink.com': case 'botfly.me': case 'dailytime.store': case 'ez4short.com': case 'fc.lc': case 'gplinks.in': case 'linkjust.com': case 'rainurl.com': case 'sl.btc25.org': case 'sl2.btc25.org': case 'snowurl.com': case 'shortyearn.com': case 'upshrink.com': case 'tr.link': case 'fauceteen.xyz': case 'linksfire.co': case 'linksly.co': case 'shareus.site': case 'mdiskshortner.link': case 'short2fly.xyz': case 'cbshort.com': case 'ls2earn.in': case 'ls2earn.com': case 'besturl.link': case 'usalink.io': case 'birdurls.com': case 'gigafly.me': case 'traffic1s.com': case 'link4rev.site': case 'linkrex.net': case 'softindex.website': case 'dash-free.com': case 'owllink.net': case 'exe.io': case 'clks.pro': case 'clicksfly.com': case 'shorterall.com': case 'shrinkearn.com': case 'shrinkme.io': case 'shrinkforearn.in': case 'try2link.com': case 'terafly.me': case 'linkbnao.com': case 'ay.live': case 'timeforearn.com': case 'adrinolinks.in': case 'linkfly.me': case 'nanolinks.in': case 'clk.sh': case 'cutp.in': case 'cuty.io': case 'zirof.com': case 'atglinks.comk': case '360shortlink.cf': var cf = h.searchParams.has('api') && h.searchParams.has('url'); if (cf && h.href.includes('1clks.') || h.href.includes('futureshor.') || h.href.includes('jardima.') || h.href.includes('solarchaine.com') || h.href.includes('oscut.space') || h.href.includes('shortlink.faucet-samy.xyz') || h.href.includes('gishort1.website')) {return 'https://' + h.searchParams.getAll('url');} else if (cf && h.href.includes('terafly.me')) {return 'https://' + h.searchParams.getAll('url');} else if (cf && h.href.includes('mineshor.')) {return 'https://' + h.searchParams.get('url').replace('go.', '');} else if (cf && h.href.includes('freebitcoin.click')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/freebitcoin.click/.test(u))[0];} else if (cf && h.href.includes('adnews.me')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/adnews.me/.test(u))[0];} else if (cf && h.href.includes('playstore.pw')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/playstore.pw/.test(u))[0];} else if (cf && h.href.includes('kyshort.xyz')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/kyshort.xyz/.test(u))[0];} else if (cf && h.href.includes('earnfacut.xyz')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/earnfacut.xyz/.test(u))[0];} else if (cf && h.href.includes('short.skalbayrak.com')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/short.skalbayrak.com/.test(u))[0];} else if (cf && h.href.includes('open.picomine.com')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/open.picomine.com/.test(u))[0].replace('open.', '');} else if (cf && h.href.includes('url.claimshort.com')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/url.claimshort.com/.test(u))[0].replace('url.', '');} else if (cf && h.href.includes('gos2.softindex.website')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/gos2.softindex.website/.test(u))[0].replace('gos2.', '');} else if (cf && h.href.includes('gos2.urlcash.click')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/gos2.urlcash.click/.test(u))[0].replace('gos2.', '');} else if (cf && h.href.includes('links.oscut.space')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/links.oscut.space/.test(u))[0].replace('links.', '');} else if (cf && h.href.includes('earndash.xyz')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/earndash.xyz/.test(u))[0];} else if (h.searchParams.has('api') && h.searchParams.has('url')) {return h.searchParams.getAll('url');} break;
    default: break;} })(new URL(location.href)); if (sl) {location.href = sl; }
    BypassedByBloggerPemula(/adbtc.top/, function() {let count =0; setInterval(function(){if(bp("div.col.s4> a") && !bp("div.col.s4> a").className.includes("hide")){count = 0;bp("div.col.s4> a").click();}else{count = count + 1;}},5000);window.onbeforeunload = function() {if (unsafeWindow.myWindow) {unsafeWindow.myWindow.close();}if (unsafeWindow.coinwin) {let popc = unsafeWindow.coinwin;unsafeWindow.coinwin = {};popc.close();}};});
    //BypassedByBloggerPemula(/dropz.xyz/, function() {if (window.location.href.includes('/captcha')&& !window.location.href.includes('/roll')) {}else if (window.location.href.includes('/site-friends')) {let windowName = "";let currentwindowOpenFunction = unsafeWindow.open;function newwindowOpenFunction(params1, params2) {if (!params2 || params2 == "_blank") {windowName = "popUpWindowMyDropz";} else {windowName = params2;} return currentwindowOpenFunction(params1, windowName);}unsafeWindow.open = newwindowOpenFunction;unsafeWindow.onbeforeunload = function() {currentwindowOpenFunction('', windowName).close();};
    //function endsWithNumber(str){return isNaN(str.slice(-1)) ? false : true;}let clicked = false;setInterval(function(){for(let i=0; i< BpAll(".btn.btn-info").length; i++){if(!clicked && !endsWithNumber(BpAll(".btn.btn-info")[i].getAttribute('id')) && !BpAll(".btn.btn-info")[i].innerText.includes("Submits")){BpAll(".btn.btn-info")[i].click();break;}}},10000);} else {}});
    // Injecting from start document coded by @JustOlaf
    if (['adguardteam.github.io', 'adguardteam.github.io'].indexOf(location.host) > -1){ } else {EnableRCF();}
    if (location.host === 'techcyan.com'){delete window.document.referrer; window.document.__defineGetter__('referrer', function () {return "https://google.com/";});}
    // Injecting from start document code by https://gist.github.com/lenivene
    if (['magybu.net', 'xervoo.net', 'hurirk.net', 'usfinf.net', 'eloism.net', 'neexulro.net', 'oaxyteek.net'].indexOf(location.host) > -1){Object.defineProperty(window,"ysmm",{set:function(b){var a=b,c="",d="";for(b=0;b<a.length;b++)0==b%2?c+=a.charAt(b):d=a.charAt(b)+d;a=(c+d).split("");for(b=0;b<a.length;b++)if(!isNaN(a[b]))for(c=b+1;c<a.length;c++)isNaN(a[c])||(d=a[b]^a[c],10>d&&(a[b]=d),b=c,c=a.length);a=a.join("");a=window.atob(a);a=a.substring(a.length-(a.length-16));!(b=a=a.substring(0,a.length-16))||0!==b.indexOf("http://")&&0!==b.indexOf("https://")||(document.write("\x3c!--"),window.stop(),window.onbeforeunload=null,window.location=b);}});}
    // Injecting code from start and the end of document coded by @Konf
    let Booster = ['diudemy.com', 'djxmaza.in', 'on-scroll.com', 'blog-everything.com', 'proviralhost.com', 'examtadka.com', 'blogmado.com', 'btcpany.com','insuranceleadsinfo.com','kredilerim.com','softwaresolutionshere.com','freevpshere.com','porterfuneralhomee.com','shopforex.online','forexit.online','healthy4pepole.com', 'world2our.com', 'dow1s.com', 'hocreview.com', 'xemsport.com', 'heenglish.com', 'hocbeauty.com', 'fidlarmusic.com', 'nghiencar.com', 'hookeaudio.com', 'silcot.com.vn', 'xonnews.net', 'lucidcam.com', 'asideway.com', 'share4u.men'];
    Booster.forEach(function(bs) {if (window.location.href.indexOf(bs) >= 0) {(function() {let FastInt = '{{1}}';if ( FastInt === '{{1}}' ) { FastInt = ''; }let delayArg = '{{2}}';if ( delayArg === '{{2}}' ) { delayArg = ''; }let boostArg = '{{3}}';if ( boostArg === '{{3}}' ) { boostArg = ''; }
    if ( FastInt === '' ) {FastInt = '.?';} else if ( FastInt.charAt(0) === '/' && FastInt.slice(-1) === '/' ) {FastInt = FastInt.slice(1, -1);} else {FastInt = FastInt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');}const FastInter = new RegExp(FastInt);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;if ( isNaN(delay) || isFinite(delay) === false ) { delay = 1000; }
    let boost = parseFloat(boostArg);boost = isNaN(boost) === false && isFinite(boost) ? Math.min(Math.max(boost, 0.02), 50) : 0.05; self.setInterval = new Proxy(self.setInterval, {apply: function(target, thisArg, args) {const [ a, b ] = args;
    if ((delay === -1 || b === delay) && FastInter.test(a.toString())) {args[1] = b * boost;}return target.apply(thisArg, args);}});})();}});
    if (['interactive', 'complete'].includes(document.readyState)) {onHtmlLoaded();} else {document.addEventListener('DOMContentLoaded', onHtmlLoaded);} function onHtmlLoaded() {if (['adguardteam.github.io', 'adguardteam.github.io'].indexOf(location.host) > -1){ } else { const listhide = BpAll('#frame,.adb,#iframe,#particles-js,#canvas,.floawing-banner,#orquidea-slideup,.floating-banner,#preloader,.vanta-canvas,.particles-js-canvas-el,#s65c,#ofc9,#overlay,#footerads,#d7b2,#_m_a_,#masthead_,.oulcsy,.sticky-bottom,.sticky-bottom1,.sticky-bottom2,.sticky-bottom3,.bElNbEFRL3JvbG89,.separator,html body iframe,html iframe,#cookie-pop,.vmyor,.tnjmvneldp,.full_post_area.rh-container,.sc-content-aside,#ofc9,.floawing-banner,div.demand-supply,.the_content,.alternative-ad,#leftads,.thecontent,.related-posts,.c-4-12.sidebar,#wcfloatDiv3,#wcfloatDiv4,#wcfloatDiv5,body > .arya-container'); for (const element of listhide) {element.remove();}}
    if (['taiwancnan.com', 'blog.disheye.com', 'traffic1s.com'].indexOf(location.host) > -1 || window.location.href.includes('?xref=')&&window.location.href.includes('&sl=')){ } else { const listr = BpAll('.blog-item'); for (const element of listr) {element.remove();}}
    if (['patak.dropz.xyz', 'my.dropz.xyz', 'traffic1s.com'].indexOf(location.host) > -1 || window.location.href.includes('?xref=')&&window.location.href.includes('&sl=')){ } else { const listd = BpAll('.text-left'); for (const element of listd) {element.remove();}}
    if (['aoutoqw.xyz', 'up4cash.com', 'app.menjelajahi.com', 'blog.menjelajahi.com'].indexOf(location.host) > -1){ } else { const listre = BpAll('.banner-inner'); for (const element of listre) {element.remove();}}
    if (['wptechh.com', 'jardima.com'].indexOf(location.host) > -1){ } else { const listj = BpAll('.td-ss-main-content'); for (const element of listj) {element.remove();}}
    // ============================================
    // Captcha Mode
    // ============================================
    let captchaMode = ['#_mform', '#userForm', '#link-view','form.text-center', '#frmprotect', '#ShortLinkId', '#captcha', '#submit-form', '#lview > form', '#file-captcha', '#btget > form', 'div#login form', 'F1', '#short-captcha-form', '#wpsafelink-landing', '.col-md-4 > form:nth-child(1)', '.col-md-6 > form:nth-child(4)', '.contenido > form:nth-child(2)', '#main > div:nth-child(4) > form:nth-child(1)', 'div.col-md-12:nth-child(3) > form:nth-child(1)', '.content > div:nth-child(4) > form:nth-child(1)', '#showMe > center:nth-child(4) > form:nth-child(1)', '.sect > div:nth-child(1) > center:nth-child(7) > form:nth-child(1)', '#showMe > center:nth-child(1) > center:nth-child(4) > form:nth-child(1)', '#adb-not-enabled > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > form:nth-child(1)', 'button#continue.btn.btn-primary.btn-captcha', '.m-2.btn-captcha.btn-outline-primary.btn', '#yuidea-btn-before.yu-btn.yu-blue', '#yuidea-btn-after.yu-blue.yu-btn', '#fauform'];
    for (let i = 0; i < captchaMode.length; i++) {Captchasub(captchaMode[i]);}
    let klikMode = ['button#continue.btn.btn-primary.btn-captcha', '.m-2.btn-captcha.btn-outline-primary.btn', '#yuidea-btn-before.yu-btn.yu-blue', '#yuidea-btn-after.yu-blue.yu-btn', '#submitBtn'];
    for (let i = 0; i < klikMode.length; i++) {Captchaklik(klikMode[i]);}
    // ============================================
    // SetTimeout Mode
    // ============================================
    let timeoutMode = {'2': ['.gobut'],'9': ['div.lds-ellipsis'],
        '3': ['p.getlink', 'button.jeje', 'button#submitbtn.g-recaptcha.btn.btn-primary', '.yu-blue.yu-btn', 'button#btn-get-link', '#links > a:nth-child(2)', 'button.btn-main.get-link', 'button#btn6.yu-btn.yu-go', '.mb-3 > .btn-primary.btn', 'input[name="method_free"]', 'div#wpsafe-generate a img', 'button#mdt.custom-btn.btn-7', 'button#btn-main.btn.btn-main', 'button#bt.btn.btn-info.btn-lg', 'button#article.btn.btn-success', 'input#btn-main.btn.btn-primary', 'button#getlink.getlink.disabled', '#link1s-snp > button:nth-child(1)', '#link1s-snp > button:nth-child(1)', 'button#showTimerText.btn.btn-accent', '#wpsafelinkhuman > img:nth-child(1)', 'button#submit-button.btn.btn-primary', '.next-button.text-white.btn-info.btn', 'button#btn6.g-recaptcha.btn.btn-primary', '#cl1 > a:nth-child(2) > font:nth-child(1)', '#cl1 > center:nth-child(1) > a:nth-child(1)', '.next-button.btn-lg.text-white.btn-info.btn', 'button#btn6.btn.btn-outline-primary.btn-captcha.m-2', '.col-md-8 > form:nth-child(17) > button:nth-child(3)', 'div.box-main:nth-child(2) > div:nth-child(4) > a:nth-child(1)', 'div.column:nth-child(2) > font:nth-child(2) > a:nth-child(8)'],
        '4': ['.exclude-popad.open-continue-btn-org.btn-primary.btn'],'7': ['button#invisibleCaptchaShortlink.btn.btn-primary.btn-goo.btn-captcha'],
        '5': ['#yuidea-btmbtn', 'div.complete a.btn', 'button#g-recaptcha.gobt', '#molien > a:nth-child(1)', 'a#surl1.btn-main.get-link', '#wpsafe-snp > a:nth-child(1)', '.close-ad-modal-go-ahead.close', 'button#invisibleCaptchaShortlink.btn-main.get-link', 'button#invisibleCaptchaShortlink.btn.ybtn.ybtn-accent-color.btn-captcha', 'button#invisibleCaptchaShortlink.btn.btn-outline-primary.btn-lg.btn-block.btn-captcha']};
    let _timeoutMode = Object.keys(timeoutMode);
    for (let i = 0; i < _timeoutMode.length; i++) {for (let j = 0; j < timeoutMode[_timeoutMode[i]].length; j++) {ClickIfExists(timeoutMode[_timeoutMode[i]][j], +_timeoutMode[i]);}}
    // ============================================
    // setInterval Mode
    // ============================================
    let intervalMode = {
        '3': ['#slu-link', '#makingdifferenttimer', 'a#finalx22.btn.btnstep1', '#wg-form > .btnstep1.btn', '#myButtonn > span:nth-child(1)', 'input.g-recaptcha.btn.btn-primary', '#mdt.btn.btn-primary.text-white.next-button', 'div.column:nth-child(2) > font:nth-child(2) > a:nth-child(8)', 'button#main-button.claim-button.btn.btn-lg.btn-accent', 'a.get-link.bg-red-600.px-8.py-2.rounded-md.inline-block'],
        '5': ['a.btn-main.get-link', 'a.btn.m-2.btn-success', '.btn-danger.btn-raised', '#link1s.btn-primary.btn', '.close-me > a:nth-child(1)', '#btn6.btn-captcha.btn-primary.btn', 'a.btn.btn-primary.get-link.text-white', '#makingdifferenttimer9 > .btn-success.btn', '#alf_continue.alf_button'],
        '7': ['#nextButton', 'button#get_link.btn.btn-primary.btn-sm']};
    let _intervalMode = Object.keys(intervalMode);
    for (let i = 0; i < _intervalMode.length; i++) {for (let j = 0; j < intervalMode[_intervalMode[i]].length; j++) {ClickIfExists(intervalMode[_intervalMode[i]][j], +_intervalMode[i], 'setInterval');}}
    if (typeof tokenURL=="string") { redirect(atob(window.tokenURL));}
    if (location.host === 'www.upload-4ever.com') {} else {ClickIfExists('.btn-outline-white.btn', 3);}
    if (location.host === 'uploadhaven.com') {} else {ClickIfExists('button.btn-block.btn-success', 5, 'setInterval');}
    if (bp('#link-view > div[style="display: none;"]')) {bp('#link-view > div[style="display: none;"]').style.display = '';}
    if (['webhostingpost.com', 'stfly.me', 'coins-town.com'].indexOf(location.host) > -1) {} else {Captchasub("form[action='']");}
    if (['ctbl.me', 'zshort.cc'].indexOf(location.host) > -1 && location.search === '') {location = 'https://antonimos.de/?url8j=' + location.href;}
    if (['uploadhaven.com', 'patak.dropz.xyz', 'my.dropz.xyz'].indexOf(location.host) > -1) {} else {ClickIfExists('button.btn.btn-success', 7);}
    if (['paid4.link', 'ponselharian.com'].indexOf(location.host) > -1) {window.top != window.self;} else {ClickIfExists('.btn-captcha.btn-sm.btn-primary.btn', 5);}
    if (['www.solidfiles.com', 'usersdrive.com', 'workupload.com'].indexOf(location.host) > -1) {} else {ClickIfExists('.btn-sm.btn-default.btn', 5, 'setInterval');}
    if (['rancah.com','trangchu.news', 'techacode.com','downfile.site','upload-4ever.com'].includes(window.location.hostname) > -1) {window.top != window.self;} else {ClickIfExists('input.btn.btn-primary', 5);}
    if (typeof hcaptcha=="object" && typeof apiCounter=="object") { window.app_country_visitor="";window.hcaptcha.getResponse=()=>{};window.apiCounter.generateURL();window.apiCounter.redirectTo(bp("button.button-element-verification"));}
    if (['bitlinks.pw','ayelads.com', 'apkadmin.com','cashearn.cc','rancah.com','digitalnaz.net','upload-4ever.com','hexupload.net','upfiles.app','cut-y.co','keeplinks.org','fileshare.adshorturl.com','bowfile.com','letsupload.io','workupload.com'].includes(window.location.hostname) > -1) {} else {if (elementExists('div.col-md-4:nth-child(2)')) { setInterval(function() { bp('div.col-md-4:nth-child(2) > span:nth-child(1) > img:nth-child(1)').click();}, 5000);}}
    let Numcode = bp('input.captcha_code'); let DigitNum;
    function getLeft (d) {return parseInt(d.style.paddingLeft);}
    if (Numcode) {DigitNum = Numcode.parentElement.previousElementSibling.children[0].children;
    Numcode.value = [].slice.call(DigitNum).sort(function (d1, d2) {return getLeft(d1) - getLeft(d2);}).map(function(d){return d.textContent;}).join('');}
    let $ = window.jQuery; let respect = 'https://adguardteam.github.io/AnonymousRedirect/redirect.html?url='; // Don't use My Scripts if You Change/Remove My Blogs, Except You Make Donations!!!.
    function strBetween(s,front,back,trim=false) { if (trim) { s = s.replaceAll(' ',''); s = s.trim(); s = s.replaceAll('\n',' '); } return s.slice(s.indexOf(front)+front.length,s.indexOf(back,s.indexOf(front)+front.length)); } if (window.location.href.includes('?xref=')&&window.location.href.includes('&sl=')) { delete window.document.referrer; window.document.__defineGetter__('referrer', ()=>{ let s = new URLSearchParams(document.location.search), r = s.get('xref'); return decodeURIComponent(r); }); let b = '#traffic-countdown-1s > button:nth-child(1)'; setTimeout(()=>{ if (bp(b)) {bp(b).scrollIntoView(); bp(b).click(); } }, 2*1024); let s = new URLSearchParams(document.location.search), sl= s.get('sl'), c = ''; var t = setInterval(()=>{ c = bp('#traffic-countdown-1s').innerText; if (c.includes(': ')) { window.location.assign(sl+'?code='+c.slice(c.indexOf(': ')+2)); clearInterval(t); } }, 1024);}
    if (location.host === 'www.4shared.com') {if (elementExists('.d3topTitle')) {$('.premium').text('IMPORTANT TRICKS By BloggerPemula : Wait 5 Second or more , Dont Close this Page ,Right Click Here Link Above, Open Link in New Tab, Close the Tabs if Your File not Downloaded, Try again the Right Click Methods, at This Time i Dont have Idea to Make it Auto , Do the Same Trick for All File Type in 4shared Site . Regards...');}}
    if (['short.croclix.me','www.adz7short.space'].indexOf(location.host) > -1) {setInterval(function() { if ($("#link").length > 0) { fireMouseEvents("#link");}}, 500);
     setInterval(function() { if ($("input#continue").length > 0) {fireMouseEvents("input#continue");}
    if ($("a#continue.button").length > 0) {fireMouseEvents("a#continue.button");}}, 9000); setTimeout(function() {if ($("#btn-main").length < 0) return; fireMouseEvents("#btn-main");}, 5000);}
    if (['upfiles.app', 'cut-y.co', 'upfilesurls.com'].indexOf(location.host) > -1) {ClickIfExists('.get-link.btn-download.btn-primary.btn', 7);} else if (location.host === 'rodjulian.com') {ClickIfExists('a.btn.btn-primary.btn-lg.get-link', 5, 'setInterval');} else if (location.href.indexOf("ay.live") != -1 || location.href.indexOf("aylink.co") != -1 || location.href.indexOf("gitlink.pro") != -1) { var form = $('#go-link');
    $.ajax({type: 'POST', async: true, url: form.attr('action'), data: form.serialize(), dataType: 'json', success: function(data) {redirect(data.url);}});} else if (elementExists('#go-link')) {$("#go-link").unbind().submit(function(e) {e.preventDefault(); var form = $(this); var url = form.attr('action'); const pesan = form.find('button'); const notforsale = $(".navbar-collapse.collapse"); const blogger = $(".main-header"); const pemula = $(".col-sm-6.hidden-xs");
    $.ajax({type: "POST", url: url, data: form.serialize(), beforeSend: function(xhr) { pesan.attr("disabled", "disabled"); $('a.get-link').text('Bypassed by Bloggerpemula');
    notforsale.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
    blogger.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
    pemula.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');}, success: function(result, xhr) {location.href=respect+result.url;}});});}
    const bas = (h => { const result = { isNotifyNeeded: false, redirectDelay: 0, link: undefined };
    switch (h.host) {case 'adguardteam.github.io': case 'adguardteam.github.io': if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('sn')) {result.link = h.searchParams.get('url') + '&sn=' + h.searchParams.get('sn').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('sub_id') && h.searchParams.has('site_id') && h.searchParams.has('ip_address')) {result.link = h.searchParams.get('url') + '&sub_id=' + h.searchParams.get('sub_id') + '&site_id=' + h.searchParams.get('site_id') + '&ip_address=' + h.searchParams.get('ip_address'); result.redirectDelay = valbwall; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('X-Amz-Algorithm') && h.searchParams.has('X-Amz-Credential') && h.searchParams.has('X-Amz-Date') && h.searchParams.has('X-Amz-SignedHeaders') && h.searchParams.has('X-Amz-Expires') && h.searchParams.has('X-Amz-Signature')) {result.link = h.searchParams.get('url') + '&X-Amz-Algorithm=' + h.searchParams.get('X-Amz-Algorithm') + '&X-Amz-Credential=' + h.searchParams.get('X-Amz-Credential') + '&X-Amz-Date=' + h.searchParams.get('X-Amz-Date') + '&X-Amz-SignedHeaders=' + h.searchParams.get('X-Amz-SignedHeaders') + '&X-Amz-Expires=' + h.searchParams.get('X-Amz-Expires') + '&X-Amz-Signature=' + h.searchParams.get('X-Amz-Signature'); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('ssa') && h.searchParams.has('id')) {result.link = h.searchParams.get('url') + '&ssa=' + h.searchParams.get('ssa') + '&id=' + h.searchParams.get('id').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('id')) {result.link = h.searchParams.get('url') + '&id=' + h.searchParams.get('id').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('article')) {result.link = h.searchParams.get('url') + '&article=' + h.searchParams.get('article').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('antibot')) {result.link = h.searchParams.get('url') + '&antibot=' + h.searchParams.get('antibot').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('code')) {result.link = h.searchParams.get('url') + '&code=' + h.searchParams.get('code').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('viewed')) {result.link = h.searchParams.get('url') + '&viewed=' + h.searchParams.get('viewed').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.pathname === '/shortlink.php' && h.searchParams.has('sl')) {result.link = h.searchParams.get('url') + 'sl' + h.searchParams.get('sl').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('ulink')) {result.link = h.searchParams.get('ulink'); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.href.includes('topfaucet.click')) {result.link = h.searchParams.getAll('url').filter(u => /http(s|):\/\/topfaucet.click/.test(u))[0]; result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.href.includes('#')) {result.link = h.searchParams.get('url') + window.location.hash; result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.href.includes('gos2.urlcash')) {window.location.assign('https://urlcash.click'+ (location.search).substring(31));
    } else if (h.pathname === '/' && h.href.includes('undefined')) {result.link = h.searchParams.get('url').replace('undefined', 'Bypass Error ') + alert('Sorry... Error Bypassing , Please Try Again or Leave Your Link in the Feedback , So When I Have Time , I will Fix it if i can , Thanks'); return result;
    } else if (h.pathname === '/' && h.searchParams.has('url')) {result.link = h.searchParams.get('url').replace('&m=1', '').replace('<br />', ''); result.redirectDelay = valdelay; result.isNotifyNeeded = true; return result; } break; default: break;}})(new URL(location.href));
    if (bas) { const { isNotifyNeeded, redirectDelay, link } = bas;if (isNotifyNeeded) { notify(`Please Wait a moment .....You will be Redirected to Your Destination in ${redirectDelay} seconds`);} setTimeout(() => {location.href = link;}, redirectDelay * 1000);}
    const l = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const p = h.pathname === '/blog3/verify/' && /^\?([^&]+)/.test(h.search);
    switch (h.host) {case 'okrzone.com': if (b) { meta('https://gtlink.co/' + RegExp.$1);} break;
    case 'ezimg.co': if (b) { meta('https://eng.ezimg.co/' + RegExp.$1);} break;
    case 'kimo.ma': if (b) { meta('https://blog.adfloz.co/' + RegExp.$1);} break;
    case 'www.lootcash.vip': if (b) { meta('https://flyad.vip/' + RegExp.$1);} break;
    case 'educur.com': if (b) { meta('https://blog.flyrar.com/' + RegExp.$1);} break;
    case 'tecmundo.net': if (b) { meta('https://go.jaelink.us/' + RegExp.$1);} break;
    case 'examkhata.com': if (b) { meta('https://playlink.xyz/' + RegExp.$1);} break;
    case 'techyinfo.in': if (b) { meta('https://link.e2share.in/' + RegExp.$1);} break;
    case 'examsolution.in': if (b) { meta('https://kukslincs.xyz/' + RegExp.$1);} break;
    case 'mytop5.club': if (b) { meta('https://technemo.xyz/blog/' + RegExp.$1);} break;
    case 'technicalatg.com': if (b) { meta('https://atglinks.com/' + RegExp.$1);} break;
    case 'ledifha.com': if (b) { meta('https://process.ledifha.com/' + RegExp.$1);} break;
    case 'techyblogs.in': if (b) { meta('https://tech.techyblogs.in/' + RegExp.$1);} break;
    case 'adybrands.in': if (b) { meta('https://mytop5.club/verify/?' + RegExp.$1);} break;
    case 'forexshare.net': if (b) { meta('https://shorturl.sh2rt.com/' + RegExp.$1);} break;
    case 'profitshort.com': if (b) { meta('https://techyuth.xyz/blog/' + RegExp.$1);} break;
    case 'www.allcryptotips.com': if (b) { meta('https://zenshort.com/' + RegExp.$1);} break;
    case 'gamerfang.in': if (b) { meta('https://faux.gamerfang.in/tech/' + RegExp.$1);} break;
    case 'coin2pay.xyz': if (b) { meta('https://profitshort.com/verify/?' + RegExp.$1);} break;
    case 'economiarelevante.com.br': if (b) { meta('https://shrinkgold.com/' + RegExp.$1);} break;
    case 'techrayzer.com': if (b) { meta('https://techrayzer.com/insurance/' + RegExp.$1);} break;
    case 'teerclub.com': if (b) { meta('https://www.allcryptotips.com/verify/?' + RegExp.$1);} break;
    case 'techboyz.xyz': case 'studystar.xyz': if (b) { meta('https://short2fly.xyz/' + RegExp.$1);} break;
    case 'zuba.link': if (/^\/([^\/]+)/.test(h.pathname)) { return 'https://go.zuba.link/' + RegExp.$1; } break;
    case 'linksly.co': if (/^\/([^\/]+)/.test(h.pathname)) { return 'https://go.linksly.co/' + RegExp.$1; } break;
    case 'faucethub.ly': if (/^\/hs\/\/([^\/]+)/.test(h.pathname)) {return 'https://goads.ly/' + RegExp.$1;}break;
    case 'cekip.site': case 'www.cekip.site': if (/^\/go\/([^\/]+)/.test(h.pathname)) { meta(atob(RegExp.$1));} break;
    case 'slink.bid': if (h.pathname === '/' && h.searchParams.has('go')) { meta(atob(h.searchParams.get('go')));} break;
    case 'sl.easysl.click': if (/^\/step1\/([^\/]+)/.test(h.pathname)) {return 'https://easysl.click/' + RegExp.$1;}break;
    case 'www.gifans.com': if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://shortlink.prz.pw/' + RegExp.$1;}break;
    case 'zonearn.biz': if (/^\/(.+)/.test(h.pathname) && h.searchParams.has('tok')) {return h.searchParams.get('tok');}break;
    case 'nulledsafe.com': if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://golink.nulledsafe.com/' + RegExp.$1;}break;
    case 'step0.shortlinks.click': if (/^\/([^\/]+)/.test(h.pathname)) { return 'https://shortlinks.click/' + RegExp.$1; } break;
    case 'freecc.click': if (/^\/ccshort\/redirect\/([^\/]+)/.test(h.pathname)) {return 'https://ccshort.click/' + RegExp.$1;}break;
    case 'shortino.link': if (/^\/([^\/]+)/.test(h.pathname)) { return 'https://blog.coinscap.info/key?l=' + RegExp.$1 + '&c='; } break;
    case 'crypto-faucet.xyz': if (/^\/bitco\/link\/([^\/]+)/.test(h.pathname)) {return 'https://doctor-groups.com/link/' + RegExp.$1;}break;
    case 'www.meykmen.com': if (h.searchParams.has('url')) {return 'https://arabplus2.co/' + h.searchParams.get('url').substring(22);} break;
    case 'froggyreviews.com': if (h.searchParams.has('mflink')) { meta('https://froggyreviews.com/go/' + h.searchParams.get('mflink'));} break;
    case 'techmody.io': if (h.pathname === '/' && h.searchParams.has('check')) { meta(decodeURIComponent(h.searchParams.get('check')));} break;
    case 'shortener.goldcontent.site': if (h.pathname === '/' && h.searchParams.has('dest')) {redirect(atob(h.searchParams.get('dest')));} break;
    case 'xmod.in': if (h.pathname === '/blog/verify/' && /^\?([^&]+)/.test(h.search)) { meta('https://mytop5.club/verify/?' + RegExp.$1);} break;
    case 'bingeflix.xyz': if (h.pathname === '/' && h.searchParams.has('link')) {meta ('https://linkyearn.com/' + h.searchParams.get('link'));}break;
    case 'acortame.xyz': if (window.location.hash) {location.href ="https://adguardteam.github.io/AnonymousRedirect/redirect.html?url="+(atob(window.location.hash.substr(1)));} break;
    case 'm.kongutoday.com': case 'm.proappapk.com': if (h.pathname === '/' && h.searchParams.has('safe')) { meta(atob(h.searchParams.get('safe')));} break;
    case 'www.mtagang.biz': if (h.pathname === '/p/blog-page_24.html' && h.searchParams.has('link')) {redirect(atob(h.searchParams.get('link')), false);} break;
    case 'blog.textpage.xyz': if (h.searchParams.has('ajhvgadhdhgkdsvkd')) { meta('https://short.url2go.in/' + h.searchParams.get('ajhvgadhdhgkdsvkd'));} break;
    case 'uploadsoon.com': if (h.pathname === '/safe.php' && h.searchParams.has('link')) { meta('https://shrinkforearn.in/' + h.searchParams.get('link'));} break;
    case 'www.pythondunyasi.com': if (h.pathname === '/p/blog-page_9.html' && h.searchParams.has('link')) {redirect(atob(h.searchParams.get('link')), false);} break;
    case 'gadgets.techymedies.com': if (h.pathname === '/' && h.searchParams.has('token')) { meta('https://blog.disheye.com/' + h.searchParams.get('token'));} break;
    case 'short.clickscoin.com': case 'watchdoge.xyz': case 'dogeclick.net': if (/^\/ccsl\/([^/]+)/.test(h.pathname)) {return 'https://ccsl.xyz/' + RegExp.$1;}break;
    case 'jrlinks.in': if (h.pathname === '/safe2.php' && h.searchParams.has('link')) { meta('https://internet.webhostingtips.club/' + h.searchParams.get('link'));} break;
    case 'crazyblog.in': case 'www.crazyblog.in': if (h.pathname === '/xhod/verify/' && /^\?([^&]+)/.test(h.search)) { meta('https://redd.crazyblog.in/' + RegExp.$1);} break;
    case 'blog.urlbharat.xyz': if (h.pathname === '/safe.php' && h.searchParams.has('link')) { return 'https://get.urlbharat.xyz/safe.php?link=' + h.searchParams.get('link');} break;
    case 'dogeclick.net': if (/^\/short\/([^/]+)/.test(h.pathname)) {return 'https://short.clickscoin.com/' + RegExp.$1;} else if (/^\/ccsl\/([^/]+)/.test(h.pathname)) {return 'https://ccsl.xyz/' + RegExp.$1;}break;
    case 'clickscoin.com': if (/^\/short\/([^/]+)/.test(h.pathname)) { return 'https://short.clickscoin.com/' + RegExp.$1;} else if (/^\/shortccsl\/([^/]+)/.test(h.pathname)) { return 'https://ccsl.xyz/' + RegExp.$1;} break;
    case 'blog.crazyblog.in': if (/^\/step\d+?\/([^/]+)$/.test(h.pathname)) {return 'https://wplink.online/' + RegExp.$1;} else if (/^\/visit\d+?\/step\d+?\/([^/]+)$/.test(h.pathname)) {return 'https://cblink.crazyblog.in/' + RegExp.$1;}break;
    case 'anime.dutchycorp.space': case 'movies.dutchycorp.space': case 'tech.dutchycorp.space': case 'cool-time.dutchycorp.space': if (/^\/redir[^.]+?\.php$/.test(h.pathname) && h.searchParams.has('code')) {return h.searchParams.get('code') + '?verif=0';}break;
    case 'kiiw.icu': if (h.pathname === '/check.php' && h.searchParams.has('alias')&& h.searchParams.has('wis')&& h.searchParams.has('siw')){ return 'https://kiiw.icu/' + h.searchParams.get('alias')+ '?wis=' + h.searchParams.get('wis')+ '&siw=' + h.searchParams.get('siw');} break;
    default: break;} })(new URL(location.href)); if (l) {location.href = l; }
    let apiBypassVip = {selectors: ['#stepid', '.locked', '#steps', '#link', '#targetbtn', '#theLinkID', '.locked-button'],
    re: /mboost\.me|letsboost\.net|social-unlock\.com|boostme\.link|sub2unlock\.net|sub2unlock\.com/,};
    for (let i = 0; i < apiBypassVip.selectors.length; i++) {BypassedByBloggerPemula(apiBypassVip.re, function() {if (elementExists(apiBypassVip.selectors[i])) {fetch('https://api.bypass.vip/',{"headers": {"content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-requested-with":"XMLHttpRequest"},"body":new URLSearchParams({url:document.URL}),"method":"POST",}).then(res=>res.json()).then(res=>{if(res.status!=="success") {redirect(res.destination);}});}});}
    waitForElm('div#wpsafe-link > a', function(element) {const regex = /redirect=(.*)',/;const m = regex.exec(element.onclick.toString())[1]; location.href = JSON.parse(atob(m)).safelink;});
    waitForElm('a.s-btn-f', smp => redirect(smp.href, false));
    waitForElm('#yuidea-btmbtn', oye => redirect(oye.href, false));
    BypassedByBloggerPemula(/ouo.today/, function() {location.href = nextUrl;});
    BypassedByBloggerPemula(/upload.ee/, function() {ClickIfExists('#d_l', 2);});
    BypassedByBloggerPemula(/prx.ee/, function() {ClickIfExists('#final_link', 1);});
    BypassedByBloggerPemula(/1ink.cc/, function() {ClickIfExists('#countingbtn', 1);});
    BypassedByBloggerPemula(/up-load.one/, function() {ClickIfExists('#submitbtn', 1);});
    BypassedByBloggerPemula(/evoload.io/, function() {ClickIfExists('#generatebtn', 1);});
    BypassedByBloggerPemula(/keeplinks.org/, function() {ClickIfExists('#btnchange', 2);});
    BypassedByBloggerPemula(/mkomsel.com/, function() {ClickIfExists('#downloadfile', 12);});
    BypassedByBloggerPemula(/drop.download/, function() {ClickIfExists('.btn-download', 2);});
    BypassedByBloggerPemula(/jardima.com/, function() {ClickIfExists('.btn-primary.btn', 3);});
    BypassedByBloggerPemula(/1shortlink.com/, function() {ClickIfExists('#redirect-link', 3);});
    BypassedByBloggerPemula(/file-upload.com/, function() {ClickIfExists('#download-btn', 2);});
    BypassedByBloggerPemula(/modebaca.com/, function() {ClickIfExists('.btn-success.btn', 1);});
    BypassedByBloggerPemula(/modsfire.com/, function() {ClickIfExists('.download-button', 2);});
    BypassedByBloggerPemula(/dddrive.me/, function() {ClickIfExists('.btn-outline-primary', 2);});
    BypassedByBloggerPemula(/jameeltips.us/, function() {ClickIfExists('#continue_button_1', 1);});
    BypassedByBloggerPemula(/antonimos.de/, function() {ClickIfExists('#cbt', 5, 'setInterval');});
    BypassedByBloggerPemula(/usersdrive.com/, function() {ClickIfExists('.btn-download.btn', 1);});
    BypassedByBloggerPemula(/theconomy.me/, {'/': ['link', 'https://link.theconomy.me/'],}, false);
    BypassedByBloggerPemula(/punyablog.my.id/, {'/safe.php': ['link', 'https://q8c.xyz/'],}, false);
    BypassedByBloggerPemula(/post.copydev.com/, function() {ClickIfExists('.btn-success.btn', 6);});
    BypassedByBloggerPemula(/uppit.com/, function() {ClickIfExists('.btn-primary.btn-xl.btn', 2);});
    BypassedByBloggerPemula(/krakenfiles.com/, function() {ClickIfExists('.download-now-text', 2);});
    BypassedByBloggerPemula(/linegee.net/, function() {ClickIfExists('.btn-xs.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/zippyshare.com|filedm.com/, function() {ClickIfExists('#dlbutton', 3);});
    BypassedByBloggerPemula(/userscloud.com|dosya.co/, function() {ClickIfExists('#btn_download', 2);});
    BypassedByBloggerPemula(/hexupload.net/, function() {ClickIfExists('.btn-success.btn-lg.btn', 1);});
    BypassedByBloggerPemula(/djxmaza.in|examtadka.com/, function() {ClickIfExists('#wait1button', 3);});
    BypassedByBloggerPemula(/bildirim.in|bildirim.eu/, function() {ClickIfExists('#btnPermission', 1);});
    BypassedByBloggerPemula(/solidfiles.com/, function() {ClickIfExists('.btn-sm.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/sahityt.com/, {'/verify/': [RexBp, 'https://google.v2links.com/'],}, false);
    BypassedByBloggerPemula(/wrbloggers.com/, function() {ClickIfExists('a#nextpagelink button.btn', 5);});
    BypassedByBloggerPemula(/dailyuploads.net/, function() {ClickIfExists('.inner > a:nth-child(9)', 2);});
    BypassedByBloggerPemula(/techyadjectives.com/, {'/check/': [RexBp, 'https://demo.pvidly.in/'],}, false);
    BypassedByBloggerPemula(/lets.5get.net/, function() {ClickIfExists('.jump_link > a:nth-child(1)', 2);});
    BypassedByBloggerPemula(/cshort.org/, function() {ClickIfExists('.timer.redirect', 3, 'setInterval');});
    BypassedByBloggerPemula(/megaupto.com/, function() {ClickIfExists('#direct_link > a:nth-child(1)', 2);});
    BypassedByBloggerPemula(/offrcms.xyz/, () => waitForElm('a#proceed', offr => redirect(offr.href, false)));
    BypassedByBloggerPemula(/tinyurl.so/, function() {ClickIfExists('.btn.btn-secondary', 3, 'setInterval');});
    BypassedByBloggerPemula(/files.im/, function() {ClickIfExists('.btn-dow.btn', 2);SubmitIfExists('#F1',1);});
    BypassedByBloggerPemula(/cashando.me/, () => waitForElm('#goCoinsTown', cash => redirect(cash.href, false)));
    BypassedByBloggerPemula(/get.urlbharat.xyz/, {'/safe.php': ['link', 'https://video.earnspace.in/'],}, false);
    BypassedByBloggerPemula(/douploads.net/, function() {ClickIfExists('.btn-primary.btn-lg.btn-block.btn', 2);});
    BypassedByBloggerPemula(/apkadmin.com/, () => waitForElm('div.text.text-center a', apk => redirect(apk.href)));
    BypassedByBloggerPemula(/cooklike.info|model-tas-terbaru.com/, {'/': ['link', 'https://yousm.link/'],}, false);
    BypassedByBloggerPemula(/litecoin.host|skipads.click/, function() {ClickIfExists('#wBtn', 3, 'setInterval');});
    BypassedByBloggerPemula(/delishwell.com|artiskini.com/, {'/': ['link', 'https://link.paid4link.net/'],}, false);
    BypassedByBloggerPemula(/linkerload.com/, function() {ClickIfExists("#download form input[id='button1']", 2);});
    BypassedByBloggerPemula(/ayelads.com/, function() {ClickIfExists('.btn-bl.btn-primary.btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/bitzite.com/, () => waitForElm('div#wpsafe-link a', bitz => redirect(bitz.href, false)));
    BypassedByBloggerPemula(/karyawan.co.id/, function() {ClickIfExists('button#btn.bg-blue-100.text-blue-600', 3);});
    BypassedByBloggerPemula(/bluemediafile.sbs/, () => waitForElm('input#nut[src]', blum => blum.parentNode.submit()));
    BypassedByBloggerPemula(/letsupload.io/, function() {ClickIfExists('button.btn.btn--primary.type--uppercase', 1);});
    BypassedByBloggerPemula(/nerdiess.com/, () => waitForElm('#logo_content_ > a', nerd => redirect(nerd.href, false)));
    BypassedByBloggerPemula(/cekip.site/, () => waitForElm('a#aGo.badge.bg-success', cek => redirect(cek.href, false)));
    BypassedByBloggerPemula(/largestpanel.in|earnme.club|usanewstoday.club/, function() {ClickIfExists('#tp-snp2', 1);});
    BypassedByBloggerPemula(/takem.co|themorningtribune.com/, {'/verify/': [RexBp, 'https://push.bdnewsx.com/'],}, false);
    BypassedByBloggerPemula(/informaxonline.com|gaminplay.com/, {'/': ['link', 'https://go.adslinkfly.online/'],}, false);
    BypassedByBloggerPemula(/webhostingtips.club/, {'/safe.php': ['link', 'https://jrlinks.in/safe2.php?link='],}, false);
    BypassedByBloggerPemula(/ponselharian.com/, function() {if (elementExists('#link-view')) {window.scrollTo(0,9999);}});
    BypassedByBloggerPemula(/mp4upload.com/, function() {ClickIfExists('#todl', 2);SubmitIfExists("form[name='F1']",1);});
    BypassedByBloggerPemula(/techrfour.com|veganal.co|veganho.co/, {'/go/': [RexBp, 'https://push.bdnewsx.com/'],}, false);
    BypassedByBloggerPemula(/assettoworld.com/, function() {ClickIfExists('.text-capitalize.btn-outline-success.btn', 3);});
    BypassedByBloggerPemula(/cutt.net|cut-y.net|cutty.app/, function() {ClickIfExists('#submit-button', 5, 'setInterval');});
    BypassedByBloggerPemula(/leitup.com/, () => waitForElm('input.form-control', leit => redirect(leit.placeholder, false)));
    BypassedByBloggerPemula(/mirrored.to/, () => waitForElm('.highlight > a:nth-child(1)', mir => redirect(mir.href, false)));
    BypassedByBloggerPemula(/adfoc.us/, function() {if (elementExists('#skip')) {let adf = bp('.skip').href;redirect(adf);}});
    BypassedByBloggerPemula(/informaxonline.com|gaminplay.com/, {'/verify/': [RexBp, 'https://go.adslinkfly.online/'],}, false);
    BypassedByBloggerPemula(/workupload.com/, function() {if (elementExists('#download')) {ClickIfExists('.btn-prio.btn', 2);}});
    BypassedByBloggerPemula(/1short.io/, function() {if (elementExists('#form-redirect')) {SubmitIfExists('#countDownForm',5);}});
    BypassedByBloggerPemula(/bestfonts.pro/, () => waitForElm(".download-font-button > a:nth-child(1)", pro => redirect(pro.href)));
    BypassedByBloggerPemula(/1link.club/, function() {$("a[target='_blank']").removeAttr("target");ClickIfExists('#download', 1);});
    BypassedByBloggerPemula(/wp.sekilastekno.com|pinloker.com/, function() {ClickIfExists('div > div > button', 3, 'setInterval');});
    BypassedByBloggerPemula(/forex-articles.com|forexlap.com|forexmab.com/, function() {ClickIfExists('.oto > a:nth-child(1)', 1);});
    BypassedByBloggerPemula(/userupload.net/, () => waitForElm('a.btn.btn-primary.btn-block.mb-4', upl => redirect(upl.href, false)));
    BypassedByBloggerPemula(/mega4up.org/, function(){ClickIfExists('input.btn.btn-info.btn-sm', 2);ClickIfExists('.btn-dark.btn', 2);});
    BypassedByBloggerPemula(/uploadev.org/, function() {ClickIfExists('#dspeed > input:nth-child(3)', 1);ClickIfExists('.directl', 1);});
    BypassedByBloggerPemula(/mdn.lol|roll.btc25.org/, function() {if (elementExists('.g-recaptcha')) {}else{submit("form[action='']");}});
    BypassedByBloggerPemula(/automotur.club|sanoybonito.club/, function() {ClickIfExists('.g-recaptcha', 3);SubmitIfExists('#page2',1);});
    BypassedByBloggerPemula(/maxurlz.com/, () => waitForElm('a.btn.btn-success.btn-lg.flip.animated', maxu => redirect(maxu.href, false)));
    BypassedByBloggerPemula(/litexblog.com/, function() {if (elementExists('.g-recaptcha')) {}else{ClickIfExists('.bg-primary.btn', 5);}});
    BypassedByBloggerPemula(/satoshi-win.xyz|shorterall.com|promo-visits.site/, function() {ClickIfExists('.btnLarge', 4, 'setInterval');});
    BypassedByBloggerPemula(/docs.google.com/, function() {if (elementExists('#uc-dl-icon')) {SubmitIfExists('#downloadForm',1);} else {}});
    BypassedByBloggerPemula(/mynewsmedia.co/, function() {ClickIfExists('#myBtn.cssBtn.myBtn', 3);ClickIfExists('#nxBtn.cssBtn.nxBtn', 5);});
    BypassedByBloggerPemula(/bcvc.xyz|bcvc.ink/, function() {ClickIfExists('.js-scroll-trigger.btn-xl.btn-outline.btn', 3, 'setInterval');});
    BypassedByBloggerPemula(/sama-pro.com|mikl4forex.com|dr-forex.com/, () => waitForElm('a#submitBtn', smpb => redirect(smpb.href, false)));
    BypassedByBloggerPemula(/uploadhaven.com/, function() {ClickIfExists('.alert > a:nth-child(1)', 2);SubmitIfExists('#form-download',1);});
    BypassedByBloggerPemula(/racedepartment.com/, function() {$("a[target='_blank']").removeAttr("target");ClickIfExists('.button--cta', 2);});
    BypassedByBloggerPemula(/proviralhost.com/, function() {ClickIfExists('#wait1button', 3);ClickIfExists('#wait2button', 5, 'setInterval');});
    BypassedByBloggerPemula(/bayfiles.com|anonfiles.com|openload.cc|lolabits.se|letsupload.cc/, function() {ClickIfExists('#download-url', 2);});
    BypassedByBloggerPemula(/fx4vip.com/, function() {$("a #button1[disabled='disabled']").removeAttr("disabled");ClickIfExists('#button1', 2);});
    BypassedByBloggerPemula(/altblogger.net/, function() {ClickIfExists('.form-send.m-2.btn-captcha.btn-outline-primary.btn', 3, 'setInterval');});
    BypassedByBloggerPemula(/linkspy.cc/, function() {if (elementExists('.skipButton')) {let lsp = bp('.skipButton').href;redirect(lsp, false);}});
    BypassedByBloggerPemula(/xonnews.net|toilaquantri.com|share4u.men/, () => waitForElm('div#traffic_result a', xon => redirect(xon.href, false)));
    BypassedByBloggerPemula(/techus.website/, function() {SubmitIfExists('.code-block-4.code-block > form',1);SubmitIfExists('.topnav > form',1);});
    BypassedByBloggerPemula(/hxfile.co|ex-load.com|megadb.net/, function() {ClickIfExists('.btn-dow.btn', 2);SubmitIfExists("form[name='F1']",1);});
    BypassedByBloggerPemula(/upload-4ever.com/, function() {ClickIfExists("input[name='method_free']", 2);ClickIfExists('#downLoadLinkButton', 5);});
    BypassedByBloggerPemula(/send.cm|racaty.net|files.im|sharemods.com|clicknupload.to|modsbase.com/, function() {ClickIfExists('#downloadbtn', 1);});
    BypassedByBloggerPemula(/claimclicks.com/, function() {ClickIfExists('div.col-md-12:nth-child(2) > form:nth-child(11) > button:nth-child(4)', 2);});
    BypassedByBloggerPemula(/ac.totsugeki.com/, function() {$("a[target='_blank']").removeAttr("target");ClickIfExists('.btn-lg.btn-success.btn', 2);});
    BypassedByBloggerPemula(/fexkomin.xyz/, function() {$("a[target='_blank']").removeAttr("target");ClickIfExists('.btn-captcha.btn-danger.btn', 3);});
    BypassedByBloggerPemula(/uptobhai.info|shortlinkto.info|uplinkto.vip|brbushare.info/, function() {ClickIfExists('.btn-block.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/theprice.biz|massive.my.id|activity.my.id|caview.my.id/, function() {ClickIfExists('a.btn.btn-primary.m-2.btn-captcha', 6);});
    BypassedByBloggerPemula(/i-polls.com/, function() {ClickIfExists('button#btn', 2);ClickIfExists('#anchor_button', 2);ClickIfExists('a#safe_link', 30);});
    BypassedByBloggerPemula(/sub2get.com/, function() {if (elementExists('#butunlock')) {let subt = bp('#butunlock > a:nth-child(1)').href;redirect(subt);}});
    BypassedByBloggerPemula(/fileshare.adshorturl.com/, function() {ClickIfExists('.download-timer > a:nth-child(1) > span:nth-child(1)', 4, 'setInterval');});
    BypassedByBloggerPemula(/uptobox.com/, function() {ClickIfExists('a.big-button-green:nth-child(1)', 2);ClickIfExists('.download-btn', 3, 'setInterval');});
    BypassedByBloggerPemula(/doodjob.com/, () => waitForElm('a.linky.buttonpanel.buttonpanel-block.btn-lg.get-link.disabled', doo => redirect(doo.href, false)));
    BypassedByBloggerPemula(/writedroid.eu.org/, function() {ClickIfExists('#shortPostLink', 3);waitForElm("#shortGoToLink", dro => redirect(dro.href, false));});
    BypassedByBloggerPemula(/yosite.net/, () => waitForElm('.options_layout_container > center:nth-child(17) > a:nth-child(1)', yos => redirect(yos.href, false)));
    BypassedByBloggerPemula(/takefile.link/, function() {if (elementExists('#F1')) {SubmitIfExists('div.no-gutter:nth-child(2) > form:nth-child(1)',1);} else {}});
    BypassedByBloggerPemula(/suratresmi.id/, function() {ClickIfExists('button#hmn.btn-more', 3, 'setInterval');ClickIfExists('a#hmn.btn-more',3, 'setInterval');});
    BypassedByBloggerPemula(/upfiles.com|cut-y.co|upfilesurls.com/, function() {if (elementExists('#captchaDownload')) {}else{SubmitIfExists('form.text-center',1);}});
    BypassedByBloggerPemula(/1fichier.com/, function() {if (elementExists('#pass')){}else {ClickIfExists('.btn-orange.btn-general.ok', 1);SubmitIfExists('.alc',1);}});
    BypassedByBloggerPemula(/dev.miuiflash.com/, function() {SubmitIfExists('.code-block-1.code-block > form',1);ClickIfExists('.mb-4.btn-block.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/stfly.me/, function() {if (elementExists('.g-recaptcha')) {}else{ClickIfExists('.form-send.m-2.btn-captcha.btn-outline-primary.btn', 3);}});
    BypassedByBloggerPemula(/cashearn.cc|bitlinks.pw/, function() {if (elementExists('.h-captcha') && ('.g-recaptcha')) {}else{ClickIfExists('#bt', 3, 'setInterval');}});
    BypassedByBloggerPemula(/adsgo.digital|newsnowbd.com|techus.website/, function(){ClickIfExists('.myButton', 2);SubmitIfExists('.code-block-1.code-block > form',1);});
    BypassedByBloggerPemula(/writedroid.in/, function() {ClickIfExists('#shortPostLink', 5);ClickIfExists('#showModalAds', 3);ClickIfExists('#shortGoToLink.button', 5);});
    BypassedByBloggerPemula(/tinyurl.is|streamcheck.link/, function(){if(elementExists('ul > li > a')){const link = bp('a[id^=newskip-btn]').href;redirect(link, false);}});
    BypassedByBloggerPemula(/kalvidudes.in|techwithsanikant.in|nulledlist.info|earnash.com/, () => waitForElm('div#getlinkbtn center a', kalv => redirect(kalv.href, false)));
    BypassedByBloggerPemula(/anonym.ninja/, function() {var fd = window.location.href.split('/').slice(-1)[0];redirect(`https://anonym.ninja/download/file/request/${fd}`);});
    BypassedByBloggerPemula(/boost.ink/, () => fetch(location.href).then(bo => bo.text()).then(html => redirect(atob(html.split('bufpsvdhmjybvgfncqfa="')[1].split('"')[0]))));
    BypassedByBloggerPemula(/rancah.com|menjelajahi.com|shortly.xyz|nyawang.com|aoutoqw.xyz/, function() {ClickIfExists('.get-link.btn-lg.btn-success.btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/vosan.co/, function() {$("a[target='_blank']").removeAttr("target");ClickIfExists('.elementor-size-lg', 2);ClickIfExists('.wpdm-download-link', 2);});
    BypassedByBloggerPemula(/blog-forall.com/, function(){var bypasslinks = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`); redirect(bypasslinks);});
    BypassedByBloggerPemula(/olamovies.cyou/, function() {let omo = document.getElementsByTagName("script")[1].innerText.split("\n")[8].split(" ")[3].split("\"")[1];redirect(omo);});
    BypassedByBloggerPemula(/daga88.today/, function() {if (elementExists('#traffic-countdown-1s')) {const daga = BpAll('#wrapper'); for (const element of daga) {element.remove();}}});
    BypassedByBloggerPemula(/newsharsh.com/, {'/box-office/verify/': [RexBp, 'https://hr.vikashmewada.com/'],'/english/verify/': [RexBp, 'https://crazyblog.in/harsh/verify/?'],}, false);
    BypassedByBloggerPemula(/on-scroll.com|diudemy.com/, function() {ClickIfExists('div#append > :nth-child(1)', 4);waitForElm("form.text-center a", roll => redirect(roll.href, false));});
    BypassedByBloggerPemula(/btcpany.com|zombiebtc.com|zubatecno.com|claimfey.com|battleroyal.online/, function() {SubmitIfExists('#link1s-form',1);ClickIfExists('#next-step-button', 3);});
    BypassedByBloggerPemula(/rodjulian.com/, function() {if (elementExists('#traffic-countdown-1s')) {const roju = BpAll('.site-content'); for (const element of roju) {element.remove();}}});
    BypassedByBloggerPemula(/aztravels.net/, () =>{if (elementExists('#megaurl-verified-captcha')) {ClickIfExists('button.h-captcha', 3);} else {SubmitIfExists('#megaurl-banner-page',2);}});
    BypassedByBloggerPemula(/4shared.com/, function() {ClickIfExists('.jsDownloadButton', 2);if (elementExists('.freeDownloadButton')) {SubmitIfExists("form[name^='redirectToD3Form']",1);}});
    BypassedByBloggerPemula(/riadcrypto.com|donia2tech.com/, function() {var form = document.getElementById('wpsafelink-landing'); redirect(JSON.parse(atob(form.newwpsafelink.value)).linkr);});
    BypassedByBloggerPemula(/webhostingpost.com/, function() {$("a[onclick='window.open']").removeAttr("onclick");waitForElm('a#surl.btn.btn-sm.m-2.btn-success', fcc => redirect(fcc.href, false));});
    BypassedByBloggerPemula(/shortit.pw/, function() {ClickIfExists('.pulse.btn-primary.btn', 3);setInterval(function() { if (window.grecaptcha.getResponse?.().length > 0) {click('#btn2');}}, 500);});
    BypassedByBloggerPemula(/techyreviewx.com/, function() {ClickIfExists('.downloadbtn.btn-block.btn-primary.btn', 2);waitForElm('a.btn.btn-primary.btn-block.mb-4', rex => redirect(rex.href, false));});
    BypassedByBloggerPemula(/uploadrar.com|chedrive.com|uptomega.me/, function() {ClickIfExists('.mngez-free-download', 2);ClickIfExists('#direct_link > a:nth-child(1)', 2);$('#downloadbtn').click();});
    BypassedByBloggerPemula(/computerpedia.in/, function() {ClickIfExists('.tp-blue.tp-btn-2', 3);setInterval(function() { if (window.grecaptcha.getResponse?.().length > 0) {click('#tp-snp2');}}, 500);});
    BypassedByBloggerPemula(/solarchaine.com/, function() {if (elementExists('#captchaShortlink')) {ClickIfExists('button.btn:nth-child(4)', 2);} else {SubmitIfExists('.box-body > form:nth-child(2)',1);}});
    BypassedByBloggerPemula(/finance.uploadsoon.com/, function() {ClickIfExists('#tp-snp2.tp-blue.tp-btn', 2);ClickIfExists('#btn1.tp-blue.tp-btn', 3);ClickIfExists('#btn2.tp-blue.tp-btn', 4, 'setInterval');});
    BypassedByBloggerPemula(/enit.in|clk.asia|clicksfly.com|skincarie.com/, function() {var linkbypass = atob(`aH${bp("#link-view [name='token']").value.split("aH").slice(1).join("aH")}`);redirect(linkbypass);});
    BypassedByBloggerPemula(/teknosimple.com/, function() {ClickIfExists('.slu-captcha', 3);setInterval(function() { if (window.grecaptcha.getResponse?.().length > 0) {click('#slu-continue.slu-button');}}, 500);});
    BypassedByBloggerPemula(/blog-everything.com/, function() {ClickIfExists('button.btn.btn-warning', 2);if (elementExists('#_ci_d')) {window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });}});
    BypassedByBloggerPemula(/playnano.online/, function() {ClickIfExists('#watch-link', 2);ClickIfExists('.watch-next-btn.btn-primary.button', 2);ClickIfExists('button.button.btn-primary.watch-next-btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/studyuo.com/, {'/pro/': ['link', 'https://shrinkpay.crazyblog.in'],'/short/verify/': [RexBp, 'https://redd.crazyblog.in'], '/blog/verify/': [RexBp, 'https://speedynews.xyz/verify/?'],}, false);
    BypassedByBloggerPemula(/crazyblog.in/, { '/finance/': ['link', 'https://shrinkpay.crazyblog.in'],'/hars/verify/': [RexBp, 'https://redd.crazyblog.in'], '/harsh/verify/': [RexBp, 'https://ser3.crazyblog.in/'],}, false);
    BypassedByBloggerPemula(/9xupload.asia/, function() {ClickIfExists('#container > table:nth-child(15) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1)', 2);SubmitIfExists("form[name='F1']",1);});
    BypassedByBloggerPemula(/nathanaeldan.pro|freddyoctavio.pro|davisonbarker.pro/, function() { var urls = new URL(document.URL); var dest = urls.searchParams.get("dest"); var decoded = decodeURI(dest);redirect(decoded);});
    BypassedByBloggerPemula(/rekonise.com/, ()=>{let xhr=new XMLHttpRequest();xhr.onload=()=>redirect(JSON.parse(xhr.responseText).url);xhr.open("GET","https://api.rekonise.com/unlocks"+location.pathname,true);xhr.send();});
    BypassedByBloggerPemula(/hunterkiller.me/, function() {waitForElm('div#showw center a.btn.btn-danger.btn-captcha', hun => redirect(hun.href, false));waitForElm('div#wpsafe-snp center a', hunt => redirect(hunt.href, false));});
    BypassedByBloggerPemula(/healdad.com|gamalk-sehetk.com|newforex.online|healthy4pepole.com|forex-gold.net|world2our.com|world-trips.net|mobi2c.com|forexit.online|shopforex.online/, function() {ClickIfExists('.submitBtn', 2);});
    BypassedByBloggerPemula(/oxy.cloud/, function() {ClickIfExists('#button_no_tlg', 2);ClickIfExists('button#download.btn.btn-primary.btn-lg', 6);waitForElm('div#ocdsf233-t a.btn.btn-primary.btn-lg', oxy => redirect(oxy.href, false));});
    BypassedByBloggerPemula(/chooyomi.com|blogmado.com|porterfuneralhomee.com|softwaresolutionshere.com|freevpshere.com|kredilerim.com|insuranceleadsinfo.com/, () => waitForElm('a.get-link.disabled a', cho => redirect(cho.href, false)));
    BypassedByBloggerPemula(/jiotech.net|automat.systems/, function() {const jiot = BpAll('.mg-headwidget,.col-md-3,text,footer,.mb-4.p-3,.mg-header,.mg-headwidget,iframe,.wp-post-image'); for (const element of jiot) {element.remove();}});
    BypassedByBloggerPemula(/bastinews.xyz/, function() {waitForElm('div#wpsafe-snp center a.btn-vip.bbtn-vip', bast => redirect(bast.href, false));waitForElm('div#main-content.mh-content center a', basti => redirect(basti.href, false));});
    BypassedByBloggerPemula(/cutin.it/, function() {let tin = [...document.getElementsByTagName("script")].filter(elem => elem.innerText !== "")[3].innerText.split("\n")[14].split(" ")[9].replace(";", "").replaceAll("\"", "");redirect(tin);});
    BypassedByBloggerPemula(/bstlar.com/, ()=>{let xhr=new XMLHttpRequest();xhr.onload=()=>redirect(JSON.parse(xhr.responseText).link.destination_url);xhr.open("GET","https://bstlar.com/api/link?url="+location.pathname.substr(1),true);xhr.send();});
    BypassedByBloggerPemula(/mobi2c.com|newforex.online|healthy4pepole.com|world-trips.net|forex-gold.net|healdad.com|world2our.com|gamalk-sehetk.com|mobitaak.com|forexit.online|shopforex.online/, function() {ClickIfExists('#go_d', 3, 'setInterval');});
    BypassedByBloggerPemula(/mediafire.com/, function() {var bass; var md = function closeWindows(){window.close(); clearInterval(bass);};var mf = bp('.download_link .input').getAttribute('href'); console.log(mf); location.replace(mf); bass = setInterval(md, 1000 * 5);});
    BypassedByBloggerPemula(/ytsubme.com/, function() {if (elementExists('.cont1')) {let ytsub = bp("#msg-box3-o > div > div > div.col-md-4.text-center > div > div > div > div.col-md-8.col-md-offset-2.text-xs-center > div > div > script").innerHTML.split(';')[7].split('=')[1].replaceAll('\'', "");redirect(ytsub);}});
    BypassedByBloggerPemula(/traffic1s.com/, ()=>{let x = '.blog-content > p:nth-child(4) > strong:nth-child(1)'; if (bp(x) && bp(x).innerHTML.includes('://')) { let i = strBetween(bp(x).innerHTML,''); let s = strBetween(i,'://',' '); window.location.assign(`https://${s}?xref=https://google.com/&sl=${location.href}`);}});
    BypassedByBloggerPemula(/coins-town.com/, function() {ClickIfExists('#claimCoins > button[data-bs-toggle="modal"]', 2);if (document.referrer.includes('/?cashando=')) {window.location.assign(`https://coins-town.com/?page=play&game=14333`);} else if (elementExists('#claimCoins')) {bp('#claimCoins').style.display = '';}});
    BypassedByBloggerPemula(/faucet.work|techlearningtube.in|wildblog.me|blogginglass.com|technoflip.in|arahtekno.com|mopahealth.com|welovecrypto.xyz|crypto-blog.xyz|jiotech.net|crypto4tun.com|adshorturl.com|digitalnaz.net|apkupload.in/, function() {var el = document.querySelector("input[name=newwpsafelink]");redirect(JSON.parse(atob(el.value)).linkr);});
    BypassedByBloggerPemula(/trangchu.news|downfile.site|techacode.com|azmath.info|aztravels.net/, function() {waitForElm('div#scroll.display a', meg => redirect(meg.href, false));waitForElm('div.display a', mega => redirect(mega.href, false));setInterval(function() { if (bp('.captcha') !== null && window.grecaptcha.getResponse?.().length > 0) {ClickIfExists('#proceed', 1);}}, 500);});
    BypassedByBloggerPemula(/drive.google.com/, function() {var dg = window.location.href.split('/').slice(-2)[0];if (window.location.href.includes('drive.google.com/file/d/')) {redirect(`https://drive.google.com/u/0/uc?id=${dg}&export=download`).replace('<br />', '');} else if (window.location.href.includes('drive.google.com/u/0/uc?id')) {SubmitIfExists('#download-form',1);} else {}});
    BypassedByBloggerPemula(/dutchycorp.space|dutchycorp.ovh|gtlink.co|beingtek.com|zshort.cc|twitonet.com|antonimos.de|ctbl.me|oii.io|wordcounter.icu|myasietv.cc|zagl.in|seulink.digital|adsen.link|flyad.vip|cutty.app/, function() {if(elementExists('.grecaptcha-badge')||elementExists('#captchaShortlink')){var ticker = setInterval(function(){ try{window.grecaptcha.execute(); clearInterval(ticker);} catch(e) {}},3000);}});
    BypassedByBloggerPemula(/blog.freeoseocheck.com|blog.cryptowidgets.net|blog.coinsvalue.net|cookinguide.net|wiki-topia.com|blog.coinscap.info|blog.greenenez.com|blog.webfreetools.net/, function() {const blcc = BpAll('div.form-group,.col-sm-12.col-lg-8.col,h1,h2,text,.holidAds,.col-sm-12.col-lg-3.col,li,h3,h4,p,table.b'); for (const element of blcc) {element.remove();}if (elementExists('.g-recaptcha')) {}else{SubmitIfExists('.text-center.row > form',1);}});
    BypassedByBloggerPemula(/adshnk.com|adshrink.it/, () => {let adsh =setInterval(()=>{if(typeof _sharedData=="object"&&0 in _sharedData&&"destination"in _sharedData[0]){clearInterval(adsh);document.write(_sharedData[0].destination);redirect(document.body.textContent);}else if(typeof ___reactjsD!="undefined"&&typeof window[___reactjsD.o]=="object"&&typeof window[___reactjsD.o].dest=="string"){clearInterval(adsh);redirect(window[___reactjsD.o].dest);}});});
    BypassedByBloggerPemula(/acortalink.me/, () => {function acor(str) {let inp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';let out = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';let ind = x => inp.indexOf(x);let translate = x => ind(x) > -1 ? out[ind(x)] : x;return str.split('').map(translate).join('');}window.addEventListener("DOMContentLoaded",() => {window.open = (acorta) => {redirect(acor(atob(acorta.substring(30))));};GetLink();});});
    BypassedByBloggerPemula(/linkvertise.com/, function() {var linkver = new XMLHttpRequest(); linkver.responseType = 'json'; linkver.open('GET', `https://bypass.pm/bypass2?url=${document.location.href.slice(0,-1)}`, !0); linkver.onload = function() {if (linkver.readyState==4 && linkver.status==200){redirect(this.response.destination);} else if (linkver.status==422){alert('Sorry... Error Bypassing , Please Solve the Captcha to Continue'); }}; linkver.send(null);
    let linkverraw = XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open = function() {this.addEventListener('load', data => {if (data.currentTarget.responseText.includes('tokens')) {let response = JSON.parse(data.currentTarget.responseText);let target_token = response.data.tokens.TARGET;let ut = localStorage.getItem("X-LINKVERTISE-UT");let linkvertise_link = location.pathname.replace(/\/[0-9]$/, "");
    fetch(`https://publisher.linkvertise.com/api/v1/redirect/link/static${linkvertise_link}?X-Linkvertise-UT=${ut}`).then(r => r.json()).then(json => {if (json?.data.link.id) {const json_body = {serial: btoa(JSON.stringify({timestamp:new Date().getTime(),random:"6548307",link_id:json.data.link.id})),token: target_token};fetch(`https://publisher.linkvertise.com/api/v1/redirect/link${linkvertise_link}/target?X-Linkvertise-UT=${ut}`, {method: "POST",body: JSON.stringify(json_body),headers: {"Accept": 'application/json',"Content-Type": 'application/json'}}).then(r=>r.json()).then(json=>{if (json?.data.target) {redirect(json.data.target);}});}});}});linkverraw.apply(this, arguments);};});
    BypassedByBloggerPemula(/99faucet.com|readi.online|cempakajaya.com|freebitcoin.fun|onlineteori.my.id|xtrabits.click|onlineincoms.com|punyablog.my.id|9-animie.co|tribuncrypto.com|nivaprofit.xyz|videoclip.info|punyamerk.top|lycoslink.com|aduzz.com|soltoshindo.com|techleets.xyz|moddingzone.in|velhallacoin.com|crypto-fi.net|claimcrypto.cc|ourcoincash.xyz|poketoonworld.com|sapica.xyz|chuksblog.fun|bioinflu.com|sonicbtc.com|healthbloog.xyz|pubgquotes.com|m.linkmumet.online|web9academy.com|studyis.xyz|webcoin.coinrain.online|bico8.com|blog.movies-near-me.xyz|healthysamy.xyz/, function(){var bypasslink = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`); redirect(bypasslink, false);});
    BypassedByBloggerPemula(/oko.sh|ckk.ai|adsy.pw|linksfy.co|techgeek.digital|short.express|cryptosh.pro|goo.st|playstore.pw|shortzon.com|insurancegold.in|mitly.us|fc-lc.com|cashando.me|yoshare.net|linka.click|adsy.pw|linkpay.cc|tinycmd.com|tinygo.co|urlw.net|exee.app|exeo.app|ufacw.com|pndx.live|makemoneywithurl.com|forex-trnd.com|gawbne.com|sharemods.com|weezo.me|adnews.me|wedocrypto.online|web1s.com|promo-visits.site/, function(){if(elementExists('.g-recaptcha')||elementExists('#captchaShortlink')){}else{SubmitIfExists('#link-view',1)||SubmitIfExists('#form-continue',1)||SubmitIfExists('.col-md- > form',1)||SubmitIfExists('#nextstepform',1)||SubmitIfExists('.text-center.row > form',1)||SubmitIfExists('div.col-md-12 form',1)||SubmitIfExists('div.text-center form',1)||SubmitIfExists('#submit-form',1)||SubmitIfExists('#before-captcha',1)||SubmitIfExists('#yuidea',1)||SubmitIfExists('#dForm',1)||SubmitIfExists('#exfoary-form',1)||SubmitIfExists('#hidden form',1)||SubmitIfExists('#submit_first_page',1)||SubmitIfExists('#test',1)||SubmitIfExists('form.text-center',1);}});
    if (window.location.hostname==('solvemedia.com') != -1 ){let PHRASES=["1.21 gigawatts","4 8 15 16 23 42","5 dollar shake","6 feet of snow","8th chevron","a wild captcha appears","abelian grape","abide with me","abracadabra","absent without leave","absolute zero","accidentally on purpose","ace of spades","across the board","adapt improve","adapt improve succeed","against the grain","agree to disagree","al capone","all dancing","all grown up","all of the above","all singing","all your base","allergic reaction","almost got it","always there","am i happy","anchors away","and that's the way it is","angel food","another castle","anti dentite","apple juice","apple pie","apple sauce","april may","april showers","are we there yet","are you ready","are you the keymaster","army training","army training sir","around here","as i see it","as you wish","ask questions","attila the hun","auto driving","awesome dude","awesome sauce","azgoths of kria","babel fish","baby blues","baby boomer","baby steps","back to basics","back track","background noise","bacon and eggs","bad books","bad egg","bait the line","baked in a pie","bald eagle","ball of confusion","banana bread","banana split","banana stand","bangers and mash","barber chair","barking mad","basket case","bated breath","bath towel","bath water","battle royale","bazinga","be careful","be mine","be my friend","be nice","be nimble be quick","be serious now","beach ball","bean town","beans and rice","beautiful friendship","bee line","been there","beer in a bottle","beer in the bottle","bees knees","beg the question","believe me","belt up","berlin wall","best fit line","best seller","better call saul","better half","better next time","beyond me","big brother","big kahuna burger","big nose","big screen","bigger in texas","bike rider","bird cage","birthday boy","birthday girl","bizarro jerry","black and white","black coffee","black gold","black jack","black monday","blahblahblah","blaze a trail","bless you","blinded by science","blog this","blood type","blue cheese","blue ribbon","blue sky","bob loblaw","body surfing","boiled cabbage","bon voyage","bond james bond","bone dry","bonus points","bonus round","book reading","book worm","boomerang","born to run","bots are bad m'kay","bottled water","bowties are cool","box jelly fish","box kitty","box of chocolates","braaains","brand spanking new","bread of life","break the ice","brick house","broken heart","broken record","bruce lee","brush your teeth","buckle your shoe","buffalo wing","bunny rabbit","burger with fries","burning oil","burnt sienna","butler did it","butter side down","button fly","buy some time","by and large","by the board","by the book","by the seashore","cabbage borsht","cabbage stew","caesar salad","call me","call me maybe","can i love","can you see","candy apple","candy cane","capital gain","captcha in the rye","car trouble","carbon copy","carbon footprint","card sharp","card-sharp","carpe diem","carry a towel","carry on","cary grant","case closed","cat got your tongue","catch the man","cats and dogs","cats pajamas","chaise lounge","challenge accepted","change the world","change yourself","channel surfing","charley horse","charlie bit me","charm offensive","charmed life","check your coat","check your work","cheese burger","cheese fries","cheese steak","cherry on top","chicken feed","chicken noodle","chicken salad","chicken soup","chin boy","chit chat","choco lazer boom","chocolate cookie","chocolate milk","chow down","chuck norris","circle of life","civil war","clean and shiny","clean hands","clear blue water","clear sailing","click, click, click","cliff hanger","clod hopper","close quarters","cloud nine","clown around","coffee can","cold comfort","cold feet","cold hat","cold shoulder","cold turkey","coleslaw","collaborate and listen","colored paper","come along","come along pond","come back","come clean","come on down","come what may","comfort zone","comma comma","common law","complex number","construction ahead","cookie cutter","cool heads prevail","cop an attitude","cor blimey","cordon bleu","corned beef","cotton on","count your change","counting sheep","covered bridge","crab cake","crayola","cream and sugar","create new things","creative process","creative vision","creepy crawler","crime of passion","crocodile tears","crop up","cross the road","cross the rubicon","cubic spline","cucumber sandwich","cup cake","cupid's arrow","curate's egg","curry favour","cut and run","cut the mustard","dalek asylum","dallas texas","dance all night","danish robot dancers","dark horse","das oontz","david after dentist","dead battery","dead ringer","deal me in","dear cookie","dear mr vernon","dear sir","deep thought","deep waters","dharma initiative","diced onion","diddly squat","digital clock","ding a ling","dinner bell","dinosaur spaceship","dish water","do a little dance","do be do be do","do it now","do more situps","do not touch","do or do not","do unto others","do wah ditty","do you believe in miracles","do you love me","doctor caligari","doctor who","doctor who?","doe a deer","dog days","dog's breakfast","dog's dinner","dogapus","dogs and cats living together","dollar bill","dollar signs","dollars to donuts","domestic spying","don't be late","don't count on it","don't dawdle","don't stop","don't waste time","done that","donkey's years","doodah man","double cross","double crossed","double dutch","double jump","double rainbow","double time","double whammy","down the hatch","down the rabbit hole","downward slope","drag race","dragon with matches","dragonfly","dramatic chipmunk","draw a blank","drawing board","dream big","drink milk","drive me to firenze","drop table users","drumhead","drummer boy","dry clean only","dueling banjos","dusk till dawn","dust bunny","dust up","duvet day","dynamo clock","ear candy","ear mark","ear muffs","easy as cake","easy as pie","easy peasy","easy street","eat cous cous","eat out","eat your dinner","eat your veggies","eat your vitamins","ecks why zee","edgar degas","egg on","eggs ter minate","eighty six","electro head","elevator going up","emperor's clothes","empire state of mind","end of story","english muffin","enjoy life","ermahgerd capcher","evil eye","evil genius","exceedingly well read","exclamation","exercise more","extra cheese","face the music","face to face","fade away","fair and square","fair play","fairy godmother","fairy tale","fait accompli","fall guy","falling pianos","fancy free","fancy pants","far away","farsical aquatic ceremony","fashion victim","fast and loose","fast asleep","father time","father uncle","fathom out","fava beans","feeding frenzy","feeling blue","fellow traveller","fezes are cool","field day","fifth column","fill it up","filthy dirty mess","filthy rich","finagle's law","final answer","finger lickin good","fire brim stone","firecracker","first contact","first post","first water","first world","fish and chips","fish on","fishy smell","flag day","flat foot","flat out","flat tire","flipadelphia","flipflops","flux capacitor","follow me","folsom prison","fool's paradise","fools gold","for keeps","for sure","for the birds","for the gripper","forbidden fruit","foregone conclusion","forget this","forget you","fork knife spoon","forty two","foul play","four by two","frabjous day","france","frankly my dear","free hat","freezing temperatures","french fried","french fries","french phrases","fresh water","fried ices","fried rice","friend zone","frozen peas","fruit salad","fuddy duddy","full house","full monty","full of stars","full stop","full tilt","fun with flags","funny farm","fusilli jerry","fuzzy wuzzy","gadzooks","game is up","gangnam style","garden of eden","garlic yum","gathers moss","gee louise","gee whiz","geez louise","gene parmesan","general tso","generation x","genghis khan","george washington","get out","get over it","get well","get your goat","giant bunny rabbit","giant panda","giddy goat","gift horse","gimme pizza","ginger bread","give or take","glass ceiling","glazed donut","global warming","go berserk","go further","go gadget go","goes to eleven","gold medal","gold record","golly jeepers","gone dolally","gone fishing","good afternoon","good as gold","good buddy","good day","good evening","good for nothing","good grief","good job","good luck","good morning","good night","good night and good luck","good riddance","good samaritan","good work","goody goody gumdrops","goody gumdrop","goody two shoes","goosebumps","gordon bennett","got my mojo","gotham city","gothic arch","gothic church","grain of salt","grand slam","grape soda","grass up","graveyard shift","gravy train","grease the skids","greased lightning","great scott","great unwashed","gregory peck","gridlock","grilled cheese","groundhog day","grumpy cat","guinea pig","guitar player","gum shoe","gung ho","habsons choice","had a great fall","had me at hello","hairy eyeball","halcyon days","half done","half empty","half full","half inch","hallowed ground","halp meh","ham and cheese","hamburger bun","hammer time","hand over fist","hands down","hangers and mash","happy anniversary","happy blessings","happy clappy","happy retirement","happy trails","hard captcha is hard","hard cheese","hard lines","hard sharp","hardened prestoopnicks","harp on","haste makes waste","hat head","hat trick","have a purpose","have an inkling","have courage","have fun","he loves her","head case","head honcho","head over heels","heads up","health food","healthy food","hear hear","hear me roar","heart break","heart strings","heart's content","heartache","heat up","heated debate","heavens to betsy","heavy metal","heebie jeebies","hello newman","hello sweetie","hello watson","hello world","here or there","here's johnny","hey brother","higgledy piggledy","higgs boson","high def","high five","high flyer","high horse","high sleeper","high time","him with her","hissy fit","history repeats itself","hit the hay","hit the sack","hoagie roll","hobby horse","hobson's choice","hocus pocus","hoi polloi","hoity-toity","hold your horses","hold your tongue","home james","honey mustard","hooray henry","hops a daisy","horse and cart","horse's mouth","hot blooded","hot diggity dog","hot dog roll","hot pola","hot sauce","hover hand","how about lunch","how about that","how are you","how interesting","how now, brown cow","how quaint","how sweet","how's it going","howdy partner","hug me","huggle muggle","hulk smash","hunky-dory","hush puppies","i am captcha","i am fine","i am here","i can do this","i can fix it","i have fallen","i know nothing","i like humans","i like people","i like turtles","i like you","i love deadlines","i love lamp","i love you","i made tea","i moustache you why","i saw that","i see","i think i am","i think i can","i think so","i want control","i'll make tea","i'm batman","i'm blessed","i'm blushing","i'm cold brr","i'm only human","i'm so cold","i'm sorry","i'm sorry dave","i'm yours","ice to meet you","idk my bff jill","if it fits","im cold. brr","imagine inspire create","in a box","in limbo","in over my head","in spades","in stitches","in the air","in the box","in the cart","in the club","in the doldrums","in the limelight","industrial revolution","infra dig","inside out","is it enough","is it hot","is it hot?","is it hot in here","is it plugged in","is low","it doesn't count","it happens","it hurts","it is certain","it is enough","it will pass","it's over","it's super effective","ivory tower","jabber wocky","jack be nimble","jam tomorrow","jay gatsby","jerk store","jerry built","jimmy cricket","jimmy horner","john lennon","john steinbeck","jump higher","jump over","jump the candlestick","jump the gun","jumping jack","june july","just dance","just deserts","just drive","just friends","just in time","kangaroo count","karma points","keep calm","keyboard","keyboard cat","khyber pass","kick the can","kick your heels","kindness of strangers","king arthur","kiss me","kitten mittens","kitty kat","klatu berada nikto","knick knack","knock at the door","knock back","knock knock knock penny","knock off","knock on wood","know the ropes","know thy self","know your paradoxes","know your rights","knuckle down","kosher dill","kundalini express","labour of love","ladies first","lager frenzy","lame duck","lardy-dardy","lark about","laser beams","last straw","later gator","laugh at me","law of sines","lawn giland","lazy sunday","leap higher","leaps and bounds","learn challenge improve","learn from mistakes","learn succeed","learn the ropes","learn, advance","leave britney alone","leave me alone","left or right","left right","lefty loosey","less is more","let go","let it be","let me know","let me out","lets eat","level playing field","liberty bell","library book","lickety split","lie low","light sleeper","like a boss","like the dickens","linear algebra","little bird told me","little bobby tables","little did he know","little sister","live free","live in the moment","live in the now","live life","live long + prosper","live love internet","live love type","live transmission","live with purpose","live your dream","living daylights","living things","lizard poisons spock","lo and behold","loaf of bread","local derby","lol cat","lollerskates","lolly pop","london calling","long division","long in the tooth","look away","look before crossing","look both ways","looking glass","lose face","lost love","loud music","love is automatic","love is blind","love life","love me","love you","love-hate","lovey dovey","lucille 2","lucky you","ludwig van","lumpy gravy","lunatic fridge","lunch time","lunch tuesday","mad hatter","mad science","magic decoder ring","magic eight ball","magical realism","magnetic monopole","main chance","major intersection","make a bee line","make haste","make it so","make my day","many happy returns","many wishes","maple syrup","marble rye","marcia marcia marcia","mare's nest","margin of error","mark it zero","market forces","marry me","mars rover","math test","mayan ruins","mea culpa","meat and drink","meat with gravy","meddling kids","media frenzy","melody pond","men in suits","mend fences","meow meow","metropolis","mexican wave","mickey finn","miles to go","milk was a bad choice","milkshake","million dollars","miloko plus","miloko plus vellocet","mimsy borogoves","minced oaths","mind the gap","minty fresh","mish-mash","miss you","mister wilson","modern love","moe's tavern","mom and dad","money lender","moo shoo pork","moon cheese","moot point","more better","more chocolate","more coffee","more cow bell","more internets","morning person","most interesting man","most likely","mother country","mother earth","motley crew","mouth watering","move along","move mountains","move over","moveable feast","movers and shakers","movie star","mrs robinson","muffled rap music","multi pass","mum's the word","mumbo jumbo","murphy's law","mushy peas","music machine","mustachioed","my bad","my beating heart","my better half","my dear watson","my friends can't dance","my mind's eye","my sources say no","naise cain","namby-pamby","name drop","nanoo nanoo","nap time","narrow minded","nautical phrases","ne regrets","near tannhauser gate","neart strings","neckbeard","need a bigger boat","needs must","nercolas cerg","nest egg","never give up","never gonna give you up","never mind","never quit","new york city","nice job","nice marmot","nice to meet you","night owl","nip and tuck","nitty gritty","no brainer","no crying in baseball","no dice","no friend of mine","no holds barred","no means no","no regrets","no soup for you","no spoon","no stinking badges","no time to explain","no way","nobody home","none of the above","nope chuck testa","nose bleed","nosy parker","not a bot","not in kansas","not yet","now and forever","now look here","nth degree","nul points","numa numa","nut case","nutrition","nyan cat","nyquist rate","of course","off the record","oh brother","oh em gee","oh hai","oh sigh","oh so close","oh yes","oh you","oh,you","oh, wait","okey dokey","old hat","old man winter","old shoe","om nom nom","on a boat","on cloud nine","on the ball","on the qt","on-off","once again","once upon a time","one day more","one fell swoop","one hit wonder","one small step for man","one stop shop","one way","one way street","one, two, three","only way to be sure","oontz oontz","oops a daisy","open season","open sesame","orange juice","other worldly","out of sorts","out of toner","outlook good","over the hill","over the moon","over the top","over there","oxford university","oxo cube","paint it red","pandora's box","pants on the ground","paper jam","paper plate","partial derivative","partly cloudy","party on garth","passing lane","patch of grass","path less taken","patience child","patty cake","pay the ferryman","pea brain","pearly whites","peg out","pell mell","penny loafer","people like me","pepe silvia","pepper pot","pepperoni pizza","peppers and onions","perfect world","pester power","peter out","philadelphia","phone home","pick me","pick up sticks","pickle juice","pickled peppers","picture perfect","pie are round","pie are squared","pie chart","piece of cake","pig's ear","piggyback","pin money","pipe down","pipe dream","piping hot","pitter patter","pizza topping","plain sailing","play a game","play again","play ball","play hookey","play it again sam","pleased as punch","plenty of time","plugged nickel","plus or minus","pocket sized","pod bay doors","poetic justice","point blank","point to point","points dont matter","points font matter","poison apple","political party","politicaly correct","poly's cracker","pond life","pool boy","pool hall","pool house","poor house","pork pies","pound cake","power dressing","power tool","practice makes perfect","press into service","prime time","primrose path","print out","print paper","printer paper","propane accessories","public good","pudding pops","puffy shirt","pumpkin pie","puppy dog","puppy love","push harder","push on","push the edge","push the envelope","pyrrhic victory","quality time","queen nefertiti","queen of hearts","queen's yacht","question everything","question mark","quid pro quo","quotations","rack and ruin","rack your brains","rain go away","rain tonight","rainy days","raise cain","raspberry tart","reach higher","read all over","read me, write me","read my mail","ready set go","real hoopy frood","real mccoy","red herring","red tape","red white and blue","red-handed","reduplicated phrases","remain calm","rent-a-swag","respect me","return to sender","reverse the polarity","rhino beetle","rhodeisland","rhyme nor reason","rhyming slang","rice and beans","rice job","ride the subway","riff-raff","right hand turn","right left","righty tighty","ring fencing","ring fenring","rinky-dink","rise and shine","river song","river styx","road apples","road less travelled","roast beef","robe of saffron","rocket science","rodents of unusual size","roflcopter","roll again","roll over","roller skates","rolling stone","rooftop","room for activities","roommate agreement","root beer float","rope burn","rosebud","rosie lea","rough diamond","round one","round robin","round tab1e","route one","row boat","roy g biv","royal flush","rubicon crossed","rule of chomio","rule of thumb","rum do","run amok","run away","run farther","run the gauntlet","run through","runny nose","saber tooth","sacred cow","safe streets","safer streets","safety first","salad days","salt and pepper","salty cheese","same same","sandy beach","saturday detention","saucy","sauer kraut","sausages","save face","save it","save our bluths","savoir faire","sax and violins","say cheese","school is cool","science class","science fair","science it works","science project","scot free","screw driver","sea change","sea shell","sea shore","seattle","see red","see ya","see-saw","seek beauty","seems legit","seize the day","select from table","send packing","senior citizen","seven ate nine","seven signs","seze the day","shake a leg","shaken not stirred","shakers and movers","shane come back","sharp pencil","sharp stick","she loves him","she sells","she sells seashells","she's a witch","sheldon alpha five","shilly-shally","ship shape","shoe shine","shoes shine","shoot through","shoulder of orion","show down","shuffle the deck","sick puppy","signal your turns","signs point to yes","silence is golden","silver bells","silver bullet","silver hoing","silver lining","silver spoon","sin cos tan","since when","sing a song","sixes and sevens","sixteen point turn","skidrow","skip a turn","sky's the limit","skynet is watching","skynet knows","skynet watches","sleep tight","sleepy hollow","slimy goop","slippery slope","sloane ranger","slow down","slow milenky lizards","slush fund","slythy toves","small fries","small fry","smart casual","smart phone","smashed potato","smell that","smelling salt","smoked salmon","snake eyes","snapshot","snare drum","sneezing baby panda","snoop lion","snow drift","snow flurry","snow shovel","so far away","so life like","so so","sod's law","soft kitty warm kitty","soft kitty, warm kitty","somebody that i used to know","sonic screw driver","sorry dave","sorry sight","souffle girl","sound bite","sound of sirens","sound out","sour grapes","space is big","space plumber","spangled banner","speeding bullet","spelling bee","spend time","spick and span","spicy","spicy hot","spin doctor","spitting feathers","spitting image","spoilers","spread the net","spring water","spruce up","square meal","square one","squeaky clean","squirrel friend","st johns bay","stalla stella","stand and deliver","stand by me","stand up guy","star spangled","star wars kid","start from scratch","stay safe","steak and eggs","steam punk","steering wheel","step back","step over","steve holt","steve jobs","sticky wicket","sting like a bee","stinking rich","stinky feet","stone soup","stone's throw","stony hearted","stool pigeon","stop waisting time","stranger danger","streams of oceanus","strike a match","strike three","string along","string cheese","stuck in mud","stump up","sudo make sandwich","sulphur smell","summon inglip","sun tzu says","sunday","sunshine","super star","surf and turf","surface integral","swan song","sweet dreams","sweety pie","swirling vortex of entropy","taco tuesday","take a look","take an umbrella","take care","take it all","take out food","take potluck","take the cake","take umbrage","take wrong turns","taken aback","talk the talk","talk to strangers","talk turkey","tall building","tall story","tastes good","tastes like chicken","tea earl gray hot","tea leaf","tea with jam","tea with milk","tear us apart","technicolor yawn","teflon president","teh inter webs","ten four","tesla coil","thank you","thank you, come again","that escalated quickly","that hurts","that will not work","that's a fact jack","that's all folks","that's enough","that's hot","that's it","that's my spot","that's right","the bee's knees","the bible","the big apple","the big cheese","the big easy","the cat lady","the cats cradle","the dennis system","the dude abides","the extra mile","the next level","the nightman cometh","the one eyed man is a king","the other side","the tribe has spoken","the yellow king","there is no spoon","there is only zul","there once was","these parts","they are watching","they ate it","thick and thin","thin air","think create do","think green","think hard","think twice","thinking cap","third degree","thirty one days","this is it","this is not fake","this is sparta","this or that","this statement is false","three short words","three strikes","through the grapevine","thumbs up","thunder storm","ticked off","tickle the ivories","tickled ivories","tickled pink","tide over","tight lipped","time and paper","time circuits","time flies","time is an illusion","time lord","time machine","time will tell","times square","tinker's dam","to boot","toast points","toe the line","toe-curling","together again","too bad","too late","too many cooks","too many secrets","too salty","toodle oo","top dog","top drawer","top notch","top ten","topsy turvy","topsy-turvy","total shamble","towel dry","tower of strength","toy soldier","traffic jam","traffic light","train surfing","travel size","treat yoself","trick or treat","trickle down","trolololol","true blue","true life","trust me","tuckered out","tuna fish","tune in","turkey sandwich","turn signal","turn the tables","turn up trumps","twenty eight days","twenty four seven","twenty one","twenty three","two cents worth","two hands","two left feet","two tone","u jelly","umbrella corporation","uncharted island","uncle leo","under the sea","underpants","union jack","unlimited wishes","untied laces","until next time","until tomorrow","until tonight","up and away","up or down","upper crust","upper hand","ups a daisy","upside down","upvote this","upward slope","urban myth","usual suspects","uu dd lr lr ba","van surfing","vanilla ice cream","veg out","vegan diet","vegan zombie wants grains","vegetarian","very doubtful","very nice","vice versa","vicious cycle","video tape","vienna calling","virtue of necessity","vis a vis","vocal minority","vogon poetry","voigt kampf","vorpal sword","vote pancakes","wake of the flood","walk free","walk the plank","walk the walk","want more","warp speed","wash whites separately","watch c-beams glitter","watch me","watch out","water gate","wax poetic","way to go","way to go donny","we go forwards","we like the moon","weakest link","weasel words","welcome to earth","well done","well heeled","well isn't that special","well now","well read","weylan yutani","what even","what ever","what for","what if","what is for dinner","what is your quest","what should we call me","what to see","what's that","wheel group","when where","where to go","whet your appetite","whistle and flute","white as snow","white bread","white elephant","white rabbit","who am i","who are you","who is it","who you gonna call","who, what, where","whoa there","whole nine yards","whole shebang","whoopee cushion","whoops a daisy","wicked witch","wide berth","wild and crazy guys","wild and woolly","wild goose chase","wild west","willy nilly","win hands down","window dressing","wing it","winning","winter is coming","winter snow","wisdom of inglip","wisdom teeth","wishy-washy","with bells on","without a doubt","woof woof","word for word","words of wisdom","work out","would you believe","wright flyer","writing desk","x all the y","xylophone","yada yada","yadda yadda yadda","yeah right","year dot","yee haw","yelling goat","yellow belly","yes definitely","yes ma'am","yes sir","yes this is dog","you are happy","you are here","you can do this","you don't say","you first","you good","you have my stapler","you rock","you the man","you win","you're in my spot","you're not listening","you're welcome","zig zag","zombie attack","zombie prom","who what where",];
    function solvemed(b){var a=document.createElement("datalist");a.setAttribute("id","adcopy_phrases");for(var c=0;c<PHRASES.length;++c)a.appendChild(document.createElement("option")).appendChild(document.createTextNode(PHRASES[c]));b.parentNode.insertBefore(a,b.nextSibling);b.setAttribute("list",a.id);}for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;++i)if(scripts[i].src.indexOf("solvemedia.com")> -1){document.body.addEventListener("keydown",function c(a){if(/^adcopy_response/.test(a.target.id)){this.removeEventListener(a.type,c);var b=a.target;solvemed(b);b.blur();b.focus();}});break;}}}})();
