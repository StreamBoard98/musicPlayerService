// const song = {
//   id: 1,
//   title: 'Halo',
//   artist: 'Beyonce',
//   album: 'I am... Sasha Fierce',
//   genre: 'R&B'
//   // albumArt: 'https.../xyz.png',
//   // plays: 123456,
//   // likes: 12345,
//   // shares: 123456,
//   // comments: 123
// };

// let hipster = "Freegan church-key kickstarter, keffiyeh tote bag food truck lorem quinoa microdosing esse culpa enim tumblr. Consequat cronut laborum plaid DIY, blog sartorial qui chartreuse vice. Marfa non crucifix adipisicing sartorial etsy ennui squid echo park. Reprehenderit iPhone gentrify wolf, pug ad cronut elit you probably haven't heard of them forage edison bulb tousled proident green juice snackwave. Gastropub sriracha chillwave pork belly direct trade. Authentic do forage bespoke retro, blue bottle marfa excepteur butcher kickstarter. Aute franzen aliquip, normcore put a bird on it hashtag lo-fi tofu. Chicharrones forage la croix truffaut. 3 wolf moon laborum direct trade, YOLO deserunt hoodie waistcoat 8-bit disrupt VHS. Sunt knausgaard ea, culpa cloud bread fam four loko et hell of do. Pug unicorn drinking vinegar cupidatat. Dolore sed normcore aute kogi. Crucifix selfies banh mi non pug qui beard mollit plaid cronut ethical adaptogen. Beard laborum authentic, bespoke XOXO health goth biodiesel celiac minim hoodie polaroid id. Mixtape gluten-free literally, nisi ea photo booth meggings whatever tote bag fixie. Hammock mumblecore cold-pressed chambray umami glossier. Do man braid pok pok lumbersexual church-key. Wolf slow-carb forage everyday carry. Snackwave quis activated charcoal you probably haven't heard of them celiac. Jianbing +1 everyday carry lorem fanny pack. Duis retro bushwick health goth ethical in. Pug excepteur crucifix, ugh tacos cardigan kitsch irony anim raw denim vegan jean shorts woke. Pork belly cornhole aute, kombucha magna asymmetrical polaroid bespoke tofu prism est next level. Vexillologist tousled af, truffaut godard biodiesel yr crucifix. Post-ironic kogi banjo blue bottle truffaut kickstarter laborum. Listicle fam cliche adaptogen lo-fi offal, taiyaki chicharrones biodiesel ad fingerstache echo park commodo. Green juice mixtape glossier, aliqua messenger bag chambray 8-bit prism viral af pork belly squid poke. Cloud bread godard in ea tempor, live-edge pok pok aute hot chicken la croix cillum fashion axe celiac skateboard. Humblebrag tbh esse, viral artisan ea ut truffaut eiusmod. Cillum flexitarian dolor, hexagon intelligentsia tote bag ea seitan la croix chicharrones tilde paleo. Keytar before they sold out health goth YOLO +1 edison bulb food truck. In food truck slow-carb tote bag aliquip plaid seitan in gastropub pinterest polaroid. Thundercats marfa chambray, raw denim ramps cred you probably haven't heard of them meditation lyft cupidatat palo santo est literally ea. Food truck offal helvetica incididunt twee meditation. Synth pug locavore williamsburg, occupy consectetur lomo. Narwhal scenester hoodie fanny pack excepteur literally cardigan. Cronut incididunt palo santo aliqua, readymade copper mug +1 synth helvetica ut velit. Pinterest YOLO try-hard succulents deserunt scenester cold-pressed venmo ex raclette williamsburg hammock. Food truck kickstarter do, gochujang skateboard authentic sunt distillery ramps copper mug. Coloring book esse austin cronut pop-up. Single-origin coffee selfies cillum disrupt polaroid in. Aliqua knausgaard tilde selvage cardigan. Culpa gochujang tacos tilde et officia williamsburg readymade kitsch ea. Disrupt wolf tumblr waistcoat deep v. Taiyaki stumptown pop-up ethical occaecat shoreditch ad austin schlitz YOLO tote bag blog est anim. Banjo ethical dolore skateboard snackwave kitsch irony listicle aute organic. You probably haven't heard of them fixie beard pork belly tempor. Keffiyeh portland cloud bread sint eiusmod laborum. Ad deep v tacos lomo butcher hexagon pariatur letterpress aesthetic qui nisi poutine. Sartorial occaecat vegan, cold-pressed ut irony jean shorts hoodie. Activated charcoal ut la croix iceland, occupy art party post-ironic skateboard cupidatat food truck sartorial sustainable. Proident slow-carb drinking vinegar letterpress incididunt cillum kickstarter tote bag quinoa marfa reprehenderit.";

// let artists = [
//   {
//     artist: 'The Beatles',
//     album: 'Abbey Road'
//   },
//   {
//     artist: 'Beyonce',
//     album: 'I am... Sasha Fierce'
//   },
//   {
//     artist: 'Ed Sheeran',
//     album: 'Multiply'
//   },
//   {
//     artist: 'Rick Astley',
//     album: 'Whenever You Need Sombeody'
//   },
//   {
//     artist: 'Panic at the Disco',
//     album: 'A Fever You Cant Sweat Out'
//   },
//   {
//     artist: 'Phoenix',
//     album: 'Wolfgang Amadeus Phoenix'
//   },
//   {
//     artist: 'Dead Kennedys',
//     album: 'Give Me Convenience or Give Me Death'
//   },
//   {
//     artist: 'Michael Jackson',
//     album: 'Thriller'
//   },
//   {
//     artist: 'BB King',
//     album: 'Singin the Blues'
//   },
//   {
//     artist: 'Backstreet Boys',
//     album: 'Backstreet Boys'
//   },
//   {
//     artist: 'Elvis',
//     album: 'Elvis'
//   },
//   {
//     artist: 'The Chainsmokers',
//     album: 'Memories... Do Not Open'
//   },
//   {
//     artist: 'Sia',
//     album: 'Colour The Small One'
//   },
//   {
//     artist: 'Marian Hill',
//     album: 'Sway'
//   },
//   {
//     artist: 'Lindsey Stirling',
//     album: 'Lindsey Stirling'
//   },
//   {
//     artist: 'Jasmine Thompson',
//     album: 'Another Bundle of Tantrums'
//   },
//   {
//     artist: 'Ella Vos',
//     album: 'Words I Never Said'
//   },
//   {
//     artist: 'Oh Wonder',
//     album: 'Oh Wonder'
//   },
//   {
//     artist: 'Sam Smith',
//     album: 'In The Lonely Hour'
//   },
//   {
//     artist: 'Daughter',
//     album: 'Wild Youth EP'
//   },
//   {
//     artist: 'Birdy',
//     album: 'Birdy'
//   }
// ];

// const genres = ['Blues', 'Electronic', 'Pop', 'R&B', 'HipHop', 'Country', 'Jazz', 'Rock'];

// const songDataGen = (latinString) => {
//   const songs = [];
//   latinString = latinString.replace(/\.|,/g, '');
//   // latinString = latinString.replace(/,/g, '');

//   let latinArr = latinString.split(' ');

//   for (let i = 1; i < 150; i++) {
//     const randArtist = Math.floor(Math.random() * artists.length);
//     const artist = artists[randArtist].artist;
//     const album = artists[randArtist].album;
//     const genre = genres[Math.floor(Math.random() * genres.length)];
//     const title = [];
//     const max = 4;
//     let titleLen = Math.ceil(Math.random() * 4);
//     for (let j = 0; j < max; j++) {
//       title.push(latinArr.pop());
//     }
//     songs.push({id: i, title: title.join(' '), artist: artist, genre: genre, album: album})
//   }
//   return songs;
// };

// JSON.stringify(songDataGen(hipster))

// let songsArr = [{"id":1,"title":"reprehenderit marfa quinoa bag","artist":"Rick Astley","genre":"Jazz","album":"Whenever You Need Sombeody"},{"id":2,"title":"tote kickstarter cillum incididunt","artist":"Phoenix","genre":"Rock","album":"Wolfgang Amadeus Phoenix"},{"id":3,"title":"letterpress vinegar drinking slow-carb","artist":"Sam Smith","genre":"R&B","album":"In The Lonely Hour"},{"id":4,"title":"Proident sustainable sartorial truck","artist":"Sia","genre":"Rock","album":"Colour The Small One"},{"id":5,"title":"food cupidatat skateboard post-ironic","artist":"Beyonce","genre":"HipHop","album":"I am... Sasha Fierce"},{"id":6,"title":"party art occupy iceland","artist":"Marian Hill","genre":"Blues","album":"Sway"},{"id":7,"title":"croix la ut charcoal","artist":"Ella Vos","genre":"Electronic","album":"Words I Never Said"},{"id":8,"title":"Activated hoodie shorts jean","artist":"Backstreet Boys","genre":"Blues","album":"Backstreet Boys"},{"id":9,"title":"irony ut cold-pressed vegan","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":10,"title":"occaecat Sartorial poutine nisi","artist":"Lindsey Stirling","genre":"Blues","album":"Lindsey Stirling"},{"id":11,"title":"qui aesthetic letterpress pariatur","artist":"Backstreet Boys","genre":"HipHop","album":"Backstreet Boys"},{"id":12,"title":"hexagon butcher lomo tacos","artist":"Sam Smith","genre":"HipHop","album":"In The Lonely Hour"},{"id":13,"title":"v deep Ad laborum","artist":"Elvis","genre":"Electronic","album":"Elvis"},{"id":14,"title":"eiusmod sint bread cloud","artist":"Daughter","genre":"Jazz","album":"Wild Youth EP"},{"id":15,"title":"portland Keffiyeh tempor belly","artist":"Oh Wonder","genre":"Blues","album":"Oh Wonder"},{"id":16,"title":"pork beard fixie them","artist":"Backstreet Boys","genre":"R&B","album":"Backstreet Boys"},{"id":17,"title":"of heard haven't probably","artist":"Elvis","genre":"Electronic","album":"Elvis"},{"id":18,"title":"You organic aute listicle","artist":"Marian Hill","genre":"Country","album":"Sway"},{"id":19,"title":"irony kitsch snackwave skateboard","artist":"Lindsey Stirling","genre":"HipHop","album":"Lindsey Stirling"},{"id":20,"title":"dolore ethical Banjo anim","artist":"Beyonce","genre":"HipHop","album":"I am... Sasha Fierce"},{"id":21,"title":"est blog bag tote","artist":"Ella Vos","genre":"Rock","album":"Words I Never Said"},{"id":22,"title":"YOLO schlitz austin ad","artist":"Sam Smith","genre":"Electronic","album":"In The Lonely Hour"},{"id":23,"title":"shoreditch occaecat ethical pop-up","artist":"Oh Wonder","genre":"Blues","album":"Oh Wonder"},{"id":24,"title":"stumptown Taiyaki v deep","artist":"BB King","genre":"Country","album":"Singin the Blues"},{"id":25,"title":"waistcoat tumblr wolf Disrupt","artist":"Ella Vos","genre":"Jazz","album":"Words I Never Said"},{"id":26,"title":"ea kitsch readymade williamsburg","artist":"Lindsey Stirling","genre":"Pop","album":"Lindsey Stirling"},{"id":27,"title":"officia et tilde tacos","artist":"Ella Vos","genre":"R&B","album":"Words I Never Said"},{"id":28,"title":"gochujang Culpa cardigan selvage","artist":"Backstreet Boys","genre":"Electronic","album":"Backstreet Boys"},{"id":29,"title":"tilde knausgaard Aliqua in","artist":"Daughter","genre":"Rock","album":"Wild Youth EP"},{"id":30,"title":"polaroid disrupt cillum selfies","artist":"Birdy","genre":"Pop","album":"Birdy"},{"id":31,"title":"coffee Single-origin pop-up cronut","artist":"Sam Smith","genre":"Country","album":"In The Lonely Hour"},{"id":32,"title":"austin esse book Coloring","artist":"Ed Sheeran","genre":"Country","album":"Multiply"},{"id":33,"title":"mug copper ramps distillery","artist":"Marian Hill","genre":"Pop","album":"Sway"},{"id":34,"title":"sunt authentic skateboard gochujang","artist":"Sam Smith","genre":"HipHop","album":"In The Lonely Hour"},{"id":35,"title":"do kickstarter truck Food","artist":"Michael Jackson","genre":"Blues","album":"Thriller"},{"id":36,"title":"hammock williamsburg raclette ex","artist":"Phoenix","genre":"Pop","album":"Wolfgang Amadeus Phoenix"},{"id":37,"title":"venmo cold-pressed scenester deserunt","artist":"Daughter","genre":"Blues","album":"Wild Youth EP"},{"id":38,"title":"succulents try-hard YOLO Pinterest","artist":"Oh Wonder","genre":"HipHop","album":"Oh Wonder"},{"id":39,"title":"velit ut helvetica synth","artist":"Rick Astley","genre":"R&B","album":"Whenever You Need Sombeody"},{"id":40,"title":"+1 mug copper readymade","artist":"Ella Vos","genre":"Rock","album":"Words I Never Said"},{"id":41,"title":"aliqua santo palo incididunt","artist":"Lindsey Stirling","genre":"Electronic","album":"Lindsey Stirling"},{"id":42,"title":"Cronut cardigan literally excepteur","artist":"The Chainsmokers","genre":"Pop","album":"Memories... Do Not Open"},{"id":43,"title":"pack fanny hoodie scenester","artist":"Beyonce","genre":"Pop","album":"I am... Sasha Fierce"},{"id":44,"title":"Narwhal lomo consectetur occupy","artist":"Sam Smith","genre":"Jazz","album":"In The Lonely Hour"},{"id":45,"title":"williamsburg locavore pug Synth","artist":"Backstreet Boys","genre":"HipHop","album":"Backstreet Boys"},{"id":46,"title":"meditation twee incididunt helvetica","artist":"Sam Smith","genre":"Pop","album":"In The Lonely Hour"},{"id":47,"title":"offal truck Food ea","artist":"Rick Astley","genre":"Jazz","album":"Whenever You Need Sombeody"},{"id":48,"title":"literally est santo palo","artist":"Elvis","genre":"Rock","album":"Elvis"},{"id":49,"title":"cupidatat lyft meditation them","artist":"Birdy","genre":"HipHop","album":"Birdy"},{"id":50,"title":"of heard haven't probably","artist":"Sia","genre":"Country","album":"Colour The Small One"},{"id":51,"title":"you cred ramps denim","artist":"Oh Wonder","genre":"HipHop","album":"Oh Wonder"},{"id":52,"title":"raw chambray marfa Thundercats","artist":"Birdy","genre":"Electronic","album":"Birdy"},{"id":53,"title":"polaroid pinterest gastropub in","artist":"Birdy","genre":"Country","album":"Birdy"},{"id":54,"title":"seitan plaid aliquip bag","artist":"Ella Vos","genre":"Country","album":"Words I Never Said"},{"id":55,"title":"tote slow-carb truck food","artist":"Michael Jackson","genre":"Rock","album":"Thriller"},{"id":56,"title":"In truck food bulb","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":57,"title":"edison +1 YOLO goth","artist":"The Beatles","genre":"R&B","album":"Abbey Road"},{"id":58,"title":"health out sold they","artist":"Beyonce","genre":"R&B","album":"I am... Sasha Fierce"},{"id":59,"title":"before Keytar paleo tilde","artist":"Daughter","genre":"Blues","album":"Wild Youth EP"},{"id":60,"title":"chicharrones croix la seitan","artist":"The Chainsmokers","genre":"Country","album":"Memories... Do Not Open"},{"id":61,"title":"ea bag tote intelligentsia","artist":"Marian Hill","genre":"Pop","album":"Sway"},{"id":62,"title":"hexagon dolor flexitarian Cillum","artist":"Ella Vos","genre":"R&B","album":"Words I Never Said"},{"id":63,"title":"eiusmod truffaut ut ea","artist":"Lindsey Stirling","genre":"Pop","album":"Lindsey Stirling"},{"id":64,"title":"artisan viral esse tbh","artist":"Oh Wonder","genre":"HipHop","album":"Oh Wonder"},{"id":65,"title":"Humblebrag skateboard celiac axe","artist":"Oh Wonder","genre":"R&B","album":"Oh Wonder"},{"id":66,"title":"fashion cillum croix la","artist":"Marian Hill","genre":"Pop","album":"Sway"},{"id":67,"title":"chicken hot aute pok","artist":"Marian Hill","genre":"R&B","album":"Sway"},{"id":68,"title":"pok live-edge tempor ea","artist":"Rick Astley","genre":"Blues","album":"Whenever You Need Sombeody"},{"id":69,"title":"in godard bread Cloud","artist":"Panic at the Disco","genre":"Country","album":"A Fever You Cant Sweat Out"},{"id":70,"title":"poke squid belly pork","artist":"Elvis","genre":"Rock","album":"Elvis"},{"id":71,"title":"af viral prism 8-bit","artist":"Rick Astley","genre":"Country","album":"Whenever You Need Sombeody"},{"id":72,"title":"chambray bag messenger aliqua","artist":"Ed Sheeran","genre":"Rock","album":"Multiply"},{"id":73,"title":"glossier mixtape juice Green","artist":"The Beatles","genre":"Country","album":"Abbey Road"},{"id":74,"title":"commodo park echo fingerstache","artist":"Sam Smith","genre":"Jazz","album":"In The Lonely Hour"},{"id":75,"title":"ad biodiesel chicharrones taiyaki","artist":"Backstreet Boys","genre":"Electronic","album":"Backstreet Boys"},{"id":76,"title":"offal lo-fi adaptogen cliche","artist":"Beyonce","genre":"Rock","album":"I am... Sasha Fierce"},{"id":77,"title":"fam Listicle laborum kickstarter","artist":"Phoenix","genre":"Rock","album":"Wolfgang Amadeus Phoenix"},{"id":78,"title":"truffaut bottle blue banjo","artist":"Ed Sheeran","genre":"Pop","album":"Multiply"},{"id":79,"title":"kogi Post-ironic crucifix yr","artist":"Jasmine Thompson","genre":"Jazz","album":"Another Bundle of Tantrums"},{"id":80,"title":"biodiesel godard truffaut af","artist":"Beyonce","genre":"Pop","album":"I am... Sasha Fierce"},{"id":81,"title":"tousled Vexillologist level next","artist":"Ed Sheeran","genre":"R&B","album":"Multiply"},{"id":82,"title":"est prism tofu bespoke","artist":"Oh Wonder","genre":"Pop","album":"Oh Wonder"},{"id":83,"title":"polaroid asymmetrical magna kombucha","artist":"Dead Kennedys","genre":"HipHop","album":"Give Me Convenience or Give Me Death"},{"id":84,"title":"aute cornhole belly Pork","artist":"Marian Hill","genre":"R&B","album":"Sway"},{"id":85,"title":"woke shorts jean vegan","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":86,"title":"denim raw anim irony","artist":"Birdy","genre":"HipHop","album":"Birdy"},{"id":87,"title":"kitsch cardigan tacos ugh","artist":"Rick Astley","genre":"Country","album":"Whenever You Need Sombeody"},{"id":88,"title":"crucifix excepteur Pug in","artist":"The Beatles","genre":"Electronic","album":"Abbey Road"},{"id":89,"title":"ethical goth health bushwick","artist":"Birdy","genre":"Rock","album":"Birdy"},{"id":90,"title":"retro Duis pack fanny","artist":"Oh Wonder","genre":"Electronic","album":"Oh Wonder"},{"id":91,"title":"lorem carry everyday +1","artist":"Sia","genre":"Electronic","album":"Colour The Small One"},{"id":92,"title":"Jianbing celiac them of","artist":"Michael Jackson","genre":"Jazz","album":"Thriller"},{"id":93,"title":"heard haven't probably you","artist":"Panic at the Disco","genre":"Jazz","album":"A Fever You Cant Sweat Out"},{"id":94,"title":"charcoal activated quis Snackwave","artist":"Phoenix","genre":"Rock","album":"Wolfgang Amadeus Phoenix"},{"id":95,"title":"carry everyday forage slow-carb","artist":"Beyonce","genre":"R&B","album":"I am... Sasha Fierce"},{"id":96,"title":"Wolf church-key lumbersexual pok","artist":"Marian Hill","genre":"Rock","album":"Sway"},{"id":97,"title":"pok braid man Do","artist":"Oh Wonder","genre":"Rock","album":"Oh Wonder"},{"id":98,"title":"glossier umami chambray cold-pressed","artist":"Jasmine Thompson","genre":"Electronic","album":"Another Bundle of Tantrums"},{"id":99,"title":"mumblecore Hammock fixie bag","artist":"The Beatles","genre":"HipHop","album":"Abbey Road"},{"id":100,"title":"tote whatever meggings booth","artist":"Ed Sheeran","genre":"Pop","album":"Multiply"},{"id":101,"title":"photo ea nisi literally","artist":"The Beatles","genre":"R&B","album":"Abbey Road"},{"id":102,"title":"gluten-free Mixtape id polaroid","artist":"BB King","genre":"Jazz","album":"Singin the Blues"},{"id":103,"title":"hoodie minim celiac biodiesel","artist":"Ed Sheeran","genre":"Electronic","album":"Multiply"},{"id":104,"title":"goth health XOXO bespoke","artist":"The Chainsmokers","genre":"Country","album":"Memories... Do Not Open"},{"id":105,"title":"authentic laborum Beard adaptogen","artist":"The Chainsmokers","genre":"Jazz","album":"Memories... Do Not Open"},{"id":106,"title":"ethical cronut plaid mollit","artist":"Ella Vos","genre":"Country","album":"Words I Never Said"},{"id":107,"title":"beard qui pug non","artist":"Sia","genre":"Jazz","album":"Colour The Small One"},{"id":108,"title":"mi banh selfies Crucifix","artist":"Marian Hill","genre":"HipHop","album":"Sway"},{"id":109,"title":"kogi aute normcore sed","artist":"The Chainsmokers","genre":"Rock","album":"Memories... Do Not Open"},{"id":110,"title":"Dolore cupidatat vinegar drinking","artist":"Oh Wonder","genre":"R&B","album":"Oh Wonder"},{"id":111,"title":"unicorn Pug do of","artist":"Panic at the Disco","genre":"Rock","album":"A Fever You Cant Sweat Out"},{"id":112,"title":"hell et loko four","artist":"The Chainsmokers","genre":"Electronic","album":"Memories... Do Not Open"},{"id":113,"title":"fam bread cloud culpa","artist":"Elvis","genre":"Rock","album":"Elvis"},{"id":114,"title":"ea knausgaard Sunt VHS","artist":"The Beatles","genre":"HipHop","album":"Abbey Road"},{"id":115,"title":"disrupt 8-bit waistcoat hoodie","artist":"Phoenix","genre":"R&B","album":"Wolfgang Amadeus Phoenix"},{"id":116,"title":"deserunt YOLO trade direct","artist":"Ed Sheeran","genre":"Blues","album":"Multiply"},{"id":117,"title":"laborum moon wolf 3","artist":"Michael Jackson","genre":"Electronic","album":"Thriller"},{"id":118,"title":"truffaut croix la forage","artist":"Backstreet Boys","genre":"Country","album":"Backstreet Boys"},{"id":119,"title":"Chicharrones tofu lo-fi hashtag","artist":"Beyonce","genre":"Electronic","album":"I am... Sasha Fierce"},{"id":120,"title":"it on bird a","artist":"Backstreet Boys","genre":"R&B","album":"Backstreet Boys"},{"id":121,"title":"put normcore aliquip franzen","artist":"Sia","genre":"Pop","album":"Colour The Small One"},{"id":122,"title":"Aute kickstarter butcher excepteur","artist":"The Chainsmokers","genre":"Blues","album":"Memories... Do Not Open"},{"id":123,"title":"marfa bottle blue retro","artist":"The Chainsmokers","genre":"Pop","album":"Memories... Do Not Open"},{"id":124,"title":"bespoke forage do Authentic","artist":"Lindsey Stirling","genre":"R&B","album":"Lindsey Stirling"},{"id":125,"title":"trade direct belly pork","artist":"The Chainsmokers","genre":"Electronic","album":"Memories... Do Not Open"},{"id":126,"title":"chillwave sriracha Gastropub snackwave","artist":"Ed Sheeran","genre":"HipHop","album":"Multiply"},{"id":127,"title":"juice green proident tousled","artist":"Sam Smith","genre":"R&B","album":"In The Lonely Hour"},{"id":128,"title":"bulb edison forage them","artist":"Phoenix","genre":"HipHop","album":"Wolfgang Amadeus Phoenix"},{"id":129,"title":"of heard haven't probably","artist":"Marian Hill","genre":"Jazz","album":"Sway"},{"id":130,"title":"you elit cronut ad","artist":"Ed Sheeran","genre":"Rock","album":"Multiply"},{"id":131,"title":"pug wolf gentrify iPhone","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":132,"title":"Reprehenderit park echo squid","artist":"Rick Astley","genre":"HipHop","album":"Whenever You Need Sombeody"},{"id":133,"title":"ennui etsy sartorial adipisicing","artist":"Michael Jackson","genre":"HipHop","album":"Thriller"},{"id":134,"title":"crucifix non Marfa vice","artist":"Beyonce","genre":"Rock","album":"I am... Sasha Fierce"},{"id":135,"title":"chartreuse qui sartorial blog","artist":"Ella Vos","genre":"Rock","album":"Words I Never Said"},{"id":136,"title":"DIY plaid laborum cronut","artist":"Daughter","genre":"Pop","album":"Wild Youth EP"},{"id":137,"title":"Consequat tumblr enim culpa","artist":"Daughter","genre":"Country","album":"Wild Youth EP"},{"id":138,"title":"esse microdosing quinoa lorem","artist":"Michael Jackson","genre":"Jazz","album":"Thriller"},{"id":139,"title":"truck food bag tote","artist":"Ed Sheeran","genre":"Blues","album":"Multiply"},{"id":140,"title":"keffiyeh kickstarter church-key Freegan","artist":"Rick Astley","genre":"Pop","album":"Whenever You Need Sombeody"}]

// const dataExtend = (songData) => {
//   const min = 1532687016731;
                 1343528820963
//   const max = 1532687216731
//   for(let i = 0; i < songData.length; i++) {
//     let timeStamp = Math.floor(Math.random() * (max - min)) + min;
//     if (songData[i].artist === 'The Beatles') {
//       songData[i].albumArt = 'Beatles_AbbeyRoad.jpg';
//       songData[i].fileName = 'TheBeatles_ComeTogether.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'BB King') {
//       songData[i].albumArt = 'BBKing_SinginTheBlues.jpg';
//       songData[i].fileName = 'BBKing_YouUpsetMeBaby.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Backstreet Boys') {
//       songData[i].albumArt = 'BackstreetBoys_BackstreetBoys.jpg';
//       songData[i].fileName = 'BackstreetBoys_QuitPlayingGamesWithMyHeart.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Beyonce') {
//       songData[i].albumArt = 'Beyonce_IAm...SashaFierce.png';
//       songData[i].fileName = 'Beyonce_Halo.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Birdy') {
//       songData[i].albumArt = 'Birdy_Birdy.png';
//       songData[i].fileName = 'Birdy_SkinnyLove.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Daughter') {
//       songData[i].albumArt = 'Daughter_TheWildYouth.jpg';
//       songData[i].fileName = 'Daughter_Medicine.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Dead Kennedys') {
//       songData[i].albumArt = 'DeadKennedys_GiveMeConvenienceorGiveMeDeath.jpg';
//       songData[i].fileName = 'TheDeadKennedys_HolidayinCambodia.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Ed Sheeran') {
//       songData[i].albumArt = 'EdSheeran_X.png';
//       songData[i].fileName = 'EdSheeran_Bloodstream.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Ella Vos') {
//       songData[i].albumArt = 'EllaVos_WordsINeverSaid.jpg';
//       songData[i].fileName = 'EllaVos_DownInFlames.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Elvis') {
//       songData[i].albumArt = 'Elvis_Elvis.jpg';
//       songData[i].fileName = 'ElvisPresley_LoveMe.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Jasmine Thompson') {
//       songData[i].albumArt = 'JasmineThompson_AnotherBundleOfTantrums.jpg';
//       songData[i].fileName = 'JasmineThompson_ISeeFire.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Lindsey Stirling') {
//       songData[i].albumArt = 'LindseyStirling_LindseyStirling.jpg';
//       songData[i].fileName = 'LindseyStirling_Crystallize.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Marian Hill') {
//       songData[i].albumArt = 'MarianHill_Sway.jpg';
//       songData[i].fileName = 'MarianHill_OneTime.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Michael Jackson') {
//       songData[i].albumArt = 'MichaelJackson_Thriller.png';
//       songData[i].fileName = 'MichaelJackson_Thriller.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Oh Wonder') {
//       songData[i].albumArt = 'OhWonder_OhWonder.png';
//       songData[i].fileName = 'OhWonder_WhiteBlood.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Panic at the Disco') {
//       songData[i].albumArt = 'PanicAtTheDisco_AFeverYouCantSweatOut.jpg';
//       songData[i].fileName = 'PanicAtTheDisco_IWriteSinsNotTragedies.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Phoenix') {
//       songData[i].albumArt = 'Phoenix_WolfgangAmadeusPhoenix.png';
//       songData[i].fileName = 'Phoenix_1901.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Rick Astley') {
//       songData[i].albumArt = 'RickAstley_WheneverYouNeedSomebody.png';
//       songData[i].fileName = 'RickAstley_NeverGonnaGiveYouUp.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Sam Smith') {
//       songData[i].albumArt = 'SamSmith_InTheLonelyHour.png';
//       songData[i].fileName = 'SamSmith_StayWithMe.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'Sia') {
//       songData[i].albumArt = 'Sia_ColourTheSmallOne.jpg';
//       songData[i].fileName = 'Sia_BreatheMe.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     } else if (songData[i].artist === 'The Chainsmokers') {
//       songData[i].albumArt = 'TheChainsmokers_Memories...DoNotOpen.jpg';
//       songData[i].fileName = 'TheChainsmokers_SomethingJustLikeThis.mp3';
//       songData[i].createdAt = timeStamp;
//       songData[i].plays = Math.floor(Math.random() * 999999999);
//       songData[i].likes = Math.floor(Math.random() * 9999999);
//       songData[i].shares = Math.floor(Math.random() * 99999);
//       songData[i].comments = Math.floor(Math.random() * 99999);
//     }
//   }
//   return songData
// }

// JSON.stringify(dataExtend(songsArr))


const songs = [{
    "_id": 1,
    "title": "Reprehenderit Marfa Quinoa Bag",
    "artist": "Rick Astley",
    "genre": "Jazz",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "songFile": "RickAstley_NeverGonnaGiveYouUp.mp3",
    "createdAt": 1417551782777,
    "plays": 479510372,
    "likes": 9304371,
    "shares": 16664,
    "comments": 94281
}, {
    "_id": 2,
    "title": "Tote Kickstarter Cillum Incididunt",
    "artist": "Phoenix",
    "genre": "Rock",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "songFile": "Phoenix_1901.mp3",
    "createdAt": 1421070990378,
    "plays": 848853274,
    "likes": 5517617,
    "shares": 50409,
    "comments": 7219
}, {
    "_id": 3,
    "title": "Letterpress Vinegar Drinking Slow-carb",
    "artist": "Sam Smith",
    "genre": "R&B",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "songFile": "SamSmith_StayWithMe.mp3",
    "createdAt": 1499979993675,
    "plays": 978966880,
    "likes": 3727160,
    "shares": 50808,
    "comments": 80782
}, {
    "_id": 4,
    "title": "Proident Sustainable Sartorial Truck",
    "artist": "Sia",
    "genre": "Rock",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "songFile": "Sia_BreatheMe.mp3",
    "createdAt": 1347775473950,
    "plays": 362601129,
    "likes": 5743043,
    "shares": 64904,
    "comments": 67842
}, {
    "_id": 5,
    "title": "Food Cupidatat Skateboard Post-ironic",
    "artist": "Beyonce",
    "genre": "HipHop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "songFile": "Beyonce_Halo.mp3",
    "createdAt": 1356872814735,
    "plays": 141494797,
    "likes": 1792635,
    "shares": 60351,
    "comments": 99922
}, {
    "_id": 6,
    "title": "Party Art Occupy Iceland",
    "artist": "Marian Hill",
    "genre": "Blues",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "songFile": "MarianHill_OneTime.mp3",
    "createdAt": 1454089043718,
    "plays": 22521801,
    "likes": 6152337,
    "shares": 67350,
    "comments": 37577
}, {
    "_id": 7,
    "title": "Croix La Ut Charcoal",
    "artist": "Ella Vos",
    "genre": "Electronic",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "songFile": "EllaVos_DownInFlames.mp3",
    "createdAt": 1370538258746,
    "plays": 435390610,
    "likes": 2175567,
    "shares": 9026,
    "comments": 38706
}, {
    "_id": 8,
    "title": "Activated Hoodie Shorts Jean",
    "artist": "Backstreet Boys",
    "genre": "Blues",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "songFile": "BackstreetBoys_QuitPlayingGamesWithMyHeart.mp3",
    "createdAt": 1426388453509,
    "plays": 299034396,
    "likes": 8410408,
    "shares": 80816,
    "comments": 32395
}, {
    "_id": 9,
    "title": "Irony Ut Cold-pressed Vegan",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "songFile": "JasmineThompson_ISeeFire.mp3",
    "createdAt": 1393128092390,
    "plays": 81771931,
    "likes": 9089814,
    "shares": 20405,
    "comments": 36841
}, {
    "_id": 10,
    "title": "Occaecat Sartorial Poutine Nisi",
    "artist": "Lindsey Stirling",
    "genre": "Blues",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "songFile": "LindseyStirling_Crystallize.mp3",
    "createdAt": 1407847264446,
    "plays": 870104252,
    "likes": 175297,
    "shares": 60489,
    "comments": 98893
}, {
    "_id": 11,
    "title": "Qui Aesthetic Letterpress Pariatur",
    "artist": "Backstreet Boys",
    "genre": "HipHop",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "songFile": "BackstreetBoys_QuitPlayingGamesWithMyHeart.mp3",
    "createdAt": 1521320592256,
    "plays": 426339505,
    "likes": 2675411,
    "shares": 19968,
    "comments": 84998
}, {
    "_id": 12,
    "title": "Hexagon Butcher Lomo Tacos",
    "artist": "Sam Smith",
    "genre": "HipHop",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "songFile": "SamSmith_StayWithMe.mp3",
    "createdAt": 1504467175957,
    "plays": 416320869,
    "likes": 7116462,
    "shares": 98987,
    "comments": 62319
}, {
    "_id": 13,
    "title": "V Deep Ad Laborum",
    "artist": "Elvis",
    "genre": "Electronic",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "songFile": "ElvisPresley_LoveMe.mp3",
    "createdAt": 1436695086667,
    "plays": 705723262,
    "likes": 6106508,
    "shares": 90267,
    "comments": 15823
}, {
    "_id": 14,
    "title": "Eiusmod Sint Bread Cloud",
    "artist": "Daughter",
    "genre": "Jazz",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "songFile": "Daughter_Medicine.mp3",
    "createdAt": 1525745455378,
    "plays": 779554069,
    "likes": 5475963,
    "shares": 41905,
    "comments": 86509
}, {
    "_id": 15,
    "title": "Portland Keffiyeh Tempor Belly",
    "artist": "Oh Wonder",
    "genre": "Blues",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "songFile": "OhWonder_WhiteBlood.mp3",
    "createdAt": 1514121987054,
    "plays": 304609403,
    "likes": 1132054,
    "shares": 86414,
    "comments": 29248
}, {
    "_id": 16,
    "title": "Pork Beard Fixie Them",
    "artist": "Backstreet Boys",
    "genre": "R&B",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "songFile": "BackstreetBoys_QuitPlayingGamesWithMyHeart.mp3",
    "createdAt": 1478687056766,
    "plays": 327247965,
    "likes": 9144981,
    "shares": 21305,
    "comments": 97915
}, {
    "_id": 17,
    "title": "Of Heard Haven't Probably",
    "artist": "Elvis",
    "genre": "Electronic",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "songFile": "ElvisPresley_LoveMe.mp3",
    "createdAt": 1381305327532,
    "plays": 806594251,
    "likes": 1132938,
    "shares": 12904,
    "comments": 78287
}, {
    "_id": 18,
    "title": "You Organic Aute Listicle",
    "artist": "Marian Hill",
    "genre": "Country",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "songFile": "MarianHill_OneTime.mp3",
    "createdAt": 1526499865708,
    "plays": 15083406,
    "likes": 6505216,
    "shares": 2341,
    "comments": 69474
}, {
    "_id": 19,
    "title": "Irony Kitsch Snackwave Skateboard",
    "artist": "Lindsey Stirling",
    "genre": "HipHop",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "songFile": "LindseyStirling_Crystallize.mp3",
    "createdAt": 1519059484260,
    "plays": 342145711,
    "likes": 6313529,
    "shares": 22202,
    "comments": 17237
}, {
    "_id": 20,
    "title": "Dolore Ethical Banjo Anim",
    "artist": "Beyonce",
    "genre": "HipHop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "songFile": "Beyonce_Halo.mp3",
    "createdAt": 1423437749646,
    "plays": 931032840,
    "likes": 1429640,
    "shares": 79111,
    "comments": 57015
}, {
    "_id": 21,
    "title": "Est Blog Bag Tote",
    "artist": "Ella Vos",
    "genre": "Rock",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "songFile": "EllaVos_DownInFlames.mp3",
    "createdAt": 1531904830256,
    "plays": 68407131,
    "likes": 526560,
    "shares": 98742,
    "comments": 45492
}, {
    "_id": 22,
    "title": "YOLO Schlitz Austin Ad",
    "artist": "Sam Smith",
    "genre": "Electronic",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "songFile": "SamSmith_StayWithMe.mp3",
    "createdAt": 1398400134107,
    "plays": 408016474,
    "likes": 9758102,
    "shares": 94649,
    "comments": 78497
}, {
    "_id": 23,
    "title": "Shoreditch Occaecat Ethical Pop-up",
    "artist": "Oh Wonder",
    "genre": "Blues",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "songFile": "OhWonder_WhiteBlood.mp3",
    "createdAt": 1394313649816,
    "plays": 242739306,
    "likes": 9716703,
    "shares": 80682,
    "comments": 35354
}, {
    "_id": 24,
    "title": "Stumptown Taiyaki V Deep",
    "artist": "BB King",
    "genre": "Country",
    "album": "Singin the Blues",
    "albumArt": "BBKing_SinginTheBlues.jpg",
    "songFile": "BBKing_YouUpsetMeBaby.mp3",
    "createdAt": 1375194901785,
    "plays": 187806509,
    "likes": 5300346,
    "shares": 68605,
    "comments": 28133
}, {
    "_id": 25,
    "title": "Waistcoat Tumblr Wolf Disrupt",
    "artist": "Ella Vos",
    "genre": "Jazz",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "songFile": "EllaVos_DownInFlames.mp3",
    "createdAt": 1387263801006,
    "plays": 894119405,
    "likes": 2982852,
    "shares": 20656,
    "comments": 34828
}, {
    "_id": 26,
    "title": "Ea Kitsch Readymade Williamsburg",
    "artist": "Lindsey Stirling",
    "genre": "Pop",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "songFile": "LindseyStirling_Crystallize.mp3",
    "createdAt": 1442001654297,
    "plays": 370337297,
    "likes": 5920621,
    "shares": 77827,
    "comments": 85735
}, {
    "_id": 27,
    "title": "Officia Et Tilde Tacos",
    "artist": "Ella Vos",
    "genre": "R&B",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "songFile": "EllaVos_DownInFlames.mp3",
    "createdAt": 1532448830090,
    "plays": 939737344,
    "likes": 6896482,
    "shares": 34439,
    "comments": 59231
}, {
    "_id": 28,
    "title": "Gochujang Culpa Cardigan Selvage",
    "artist": "Backstreet Boys",
    "genre": "Electronic",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "songFile": "BackstreetBoys_QuitPlayingGamesWithMyHeart.mp3",
    "createdAt": 1354651791529,
    "plays": 649260943,
    "likes": 7133463,
    "shares": 54107,
    "comments": 90398
}, {
    "_id": 29,
    "title": "Tilde Knausgaard Aliqua In",
    "artist": "Daughter",
    "genre": "Rock",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "songFile": "Daughter_Medicine.mp3",
    "createdAt": 1506067170284,
    "plays": 850614325,
    "likes": 2292316,
    "shares": 96410,
    "comments": 4772
}, {
    "_id": 30,
    "title": "Polaroid Disrupt Cillum Selfies",
    "artist": "Birdy",
    "genre": "Pop",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "songFile": "Birdy_SkinnyLove.mp3",
    "createdAt": 1381859402055,
    "plays": 886210147,
    "likes": 9059381,
    "shares": 81171,
    "comments": 15106
}, {
    "_id": 31,
    "title": "Coffee Single-origin Pop-up Cronut",
    "artist": "Sam Smith",
    "genre": "Country",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "songFile": "SamSmith_StayWithMe.mp3",
    "createdAt": 1414956239582,
    "plays": 114832022,
    "likes": 156600,
    "shares": 46623,
    "comments": 46043
}, {
    "_id": 32,
    "title": "Austin Esse Book Coloring",
    "artist": "Ed Sheeran",
    "genre": "Country",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "songFile": "EdSheeran_Bloodstream.mp3",
    "createdAt": 1425006936544,
    "plays": 676919506,
    "likes": 8671914,
    "shares": 86303,
    "comments": 61509
}, {
    "_id": 33,
    "title": "Mug Copper Ramps Distillery",
    "artist": "Marian Hill",
    "genre": "Pop",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "songFile": "MarianHill_OneTime.mp3",
    "createdAt": 1508662229858,
    "plays": 835804757,
    "likes": 711448,
    "shares": 28271,
    "comments": 38099
}, {
    "_id": 34,
    "title": "Sunt Authentic Skateboard Gochujang",
    "artist": "Sam Smith",
    "genre": "HipHop",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "songFile": "SamSmith_StayWithMe.mp3",
    "createdAt": 1515863019743,
    "plays": 474333731,
    "likes": 382152,
    "shares": 57384,
    "comments": 53178
}, {
    "_id": 35,
    "title": "Do Kickstarter Truck Food",
    "artist": "Michael Jackson",
    "genre": "Blues",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "songFile": "MichaelJackson_Thriller.mp3",
    "createdAt": 1492240171332,
    "plays": 137411854,
    "likes": 2686927,
    "shares": 511,
    "comments": 94169
}, {
    "_id": 36,
    "title": "Hammock Williamsburg Raclette Ex",
    "artist": "Phoenix",
    "genre": "Pop",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "songFile": "Phoenix_1901.mp3",
    "createdAt": 1482758919530,
    "plays": 680082932,
    "likes": 2096354,
    "shares": 60614,
    "comments": 79499
}, {
    "_id": 37,
    "title": "Venmo Cold-pressed Scenester Deserunt",
    "artist": "Daughter",
    "genre": "Blues",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "songFile": "Daughter_Medicine.mp3",
    "createdAt": 1376048397699,
    "plays": 547133539,
    "likes": 157201,
    "shares": 72091,
    "comments": 95267
}, {
    "_id": 38,
    "title": "Succulents Try-hard YOLO Pinterest",
    "artist": "Oh Wonder",
    "genre": "HipHop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "songFile": "OhWonder_WhiteBlood.mp3",
    "createdAt": 1443320919705,
    "plays": 783856292,
    "likes": 3002206,
    "shares": 65178,
    "comments": 50111
}, {
    "_id": 39,
    "title": "Velit Ut Helvetica Synth",
    "artist": "Rick Astley",
    "genre": "R&B",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "songFile": "RickAstley_NeverGonnaGiveYouUp.mp3",
    "createdAt": 1428880109723,
    "plays": 821942438,
    "likes": 8045385,
    "shares": 76159,
    "comments": 92929
}, {
    "_id": 40,
    "title": "+1 Mug Copper Readymade",
    "artist": "Ella Vos",
    "genre": "Rock",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "songFile": "EllaVos_DownInFlames.mp3",
    "createdAt": 1406097956517,
    "plays": 81649292,
    "likes": 7701396,
    "shares": 26510,
    "comments": 87610
}, {
    "_id": 41,
    "title": "Aliqua Santo Palo Incididunt",
    "artist": "Lindsey Stirling",
    "genre": "Electronic",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "songFile": "LindseyStirling_Crystallize.mp3",
    "createdAt": 1528554358113,
    "plays": 484306568,
    "likes": 8150409,
    "shares": 7287,
    "comments": 16647
}, {
    "_id": 42,
    "title": "Cronut Cardigan Literally Excepteur",
    "artist": "The Chainsmokers",
    "genre": "Pop",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "songFile": "TheChainsmokers_SomethingJustLikeThis.mp3",
    "createdAt": 1494770537796,
    "plays": 552113278,
    "likes": 1039260,
    "shares": 82081,
    "comments": 97528
}, {
    "_id": 43,
    "title": "Pack Fanny Hoodie Scenester",
    "artist": "Beyonce",
    "genre": "Pop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "songFile": "Beyonce_Halo.mp3",
    "createdAt": 1526289578643,
    "plays": 599415037,
    "likes": 3030373,
    "shares": 25431,
    "comments": 97942
}, {
    "_id": 44,
    "title": "Narwhal Lomo Consectetur Occupy",
    "artist": "Sam Smith",
    "genre": "Jazz",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "songFile": "SamSmith_StayWithMe.mp3",
    "createdAt": 1370943570126,
    "plays": 25679001,
    "likes": 6809779,
    "shares": 39771,
    "comments": 26263
}, {
    "_id": 45,
    "title": "Williamsburg Locavore Pug Synth",
    "artist": "Backstreet Boys",
    "genre": "HipHop",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "songFile": "BackstreetBoys_QuitPlayingGamesWithMyHeart.mp3",
    "createdAt": 1468955758700,
    "plays": 376249074,
    "likes": 4150997,
    "shares": 44090,
    "comments": 64195
}, {
    "_id": 46,
    "title": "Meditation Twee Incididunt Helvetica",
    "artist": "Sam Smith",
    "genre": "Pop",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "songFile": "SamSmith_StayWithMe.mp3",
    "createdAt": 1431443607678,
    "plays": 834885309,
    "likes": 7366439,
    "shares": 65821,
    "comments": 94985
}, {
    "_id": 47,
    "title": "Offal Truck Food Ea",
    "artist": "Rick Astley",
    "genre": "Jazz",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "songFile": "RickAstley_NeverGonnaGiveYouUp.mp3",
    "createdAt": 1462386272988,
    "plays": 380678985,
    "likes": 6721697,
    "shares": 33781,
    "comments": 47981
}, {
    "_id": 48,
    "title": "Literally Est Santo Palo",
    "artist": "Elvis",
    "genre": "Rock",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "songFile": "ElvisPresley_LoveMe.mp3",
    "createdAt": 1449141703738,
    "plays": 161676212,
    "likes": 6511148,
    "shares": 95151,
    "comments": 84600
}, {
    "_id": 49,
    "title": "Cupidatat Lyft Meditation Them",
    "artist": "Birdy",
    "genre": "HipHop",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "songFile": "Birdy_SkinnyLove.mp3",
    "createdAt": 1513468025398,
    "plays": 658915962,
    "likes": 4327664,
    "shares": 64303,
    "comments": 82768
}, {
    "_id": 50,
    "title": "Of Heard Haven't Probably",
    "artist": "Sia",
    "genre": "Country",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "songFile": "Sia_BreatheMe.mp3",
    "createdAt": 1489779054560,
    "plays": 858065619,
    "likes": 5823458,
    "shares": 70235,
    "comments": 87120
}, {
    "_id": 51,
    "title": "You Cred Ramps Denim",
    "artist": "Oh Wonder",
    "genre": "HipHop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "songFile": "OhWonder_WhiteBlood.mp3",
    "createdAt": 1524343088514,
    "plays": 954539533,
    "likes": 9311378,
    "shares": 94072,
    "comments": 13528
}, {
    "_id": 52,
    "title": "Raw Chambray Marfa Thundercats",
    "artist": "Birdy",
    "genre": "Electronic",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "songFile": "Birdy_SkinnyLove.mp3",
    "createdAt": 1415710359779,
    "plays": 53455676,
    "likes": 774294,
    "shares": 62582,
    "comments": 52048
}, {
    "_id": 53,
    "title": "Polaroid Pinterest Gastropub In",
    "artist": "Birdy",
    "genre": "Country",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "songFile": "Birdy_SkinnyLove.mp3",
    "createdAt": 1511269976205,
    "plays": 995491046,
    "likes": 4622685,
    "shares": 98128,
    "comments": 17274
}, {
    "_id": 54,
    "title": "Seitan Plaid Aliquip Bag",
    "artist": "Ella Vos",
    "genre": "Country",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "songFile": "EllaVos_DownInFlames.mp3",
    "createdAt": 1415286518529,
    "plays": 848781307,
    "likes": 3024891,
    "shares": 43078,
    "comments": 45
}, {
    "_id": 55,
    "title": "Tote Slow-carb Truck Food",
    "artist": "Michael Jackson",
    "genre": "Rock",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "songFile": "MichaelJackson_Thriller.mp3",
    "createdAt": 1526858289163,
    "plays": 793978867,
    "likes": 1718124,
    "shares": 31381,
    "comments": 55714
}, {
    "_id": 56,
    "title": "In Truck Food Bulb",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "songFile": "JasmineThompson_ISeeFire.mp3",
    "createdAt": 1480437144863,
    "plays": 699567554,
    "likes": 779713,
    "shares": 36958,
    "comments": 90044
}, {
    "_id": 57,
    "title": "Edison +1 YOLO Goth",
    "artist": "The Beatles",
    "genre": "R&B",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "songFile": "TheBeatles_ComeTogether.mp3",
    "createdAt": 1405574037854,
    "plays": 243190985,
    "likes": 8806532,
    "shares": 30376,
    "comments": 52454
}, {
    "_id": 58,
    "title": "Health Out Sold They",
    "artist": "Beyonce",
    "genre": "R&B",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "songFile": "Beyonce_Halo.mp3",
    "createdAt": 1478292547182,
    "plays": 755986154,
    "likes": 7416029,
    "shares": 81987,
    "comments": 12954
}, {
    "_id": 59,
    "title": "Before Keytar Paleo Tilde",
    "artist": "Daughter",
    "genre": "Blues",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "songFile": "Daughter_Medicine.mp3",
    "createdAt": 1449106195650,
    "plays": 376743569,
    "likes": 153306,
    "shares": 63175,
    "comments": 84563
}, {
    "_id": 60,
    "title": "Chicharrones Croix La Seitan",
    "artist": "The Chainsmokers",
    "genre": "Country",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "songFile": "TheChainsmokers_SomethingJustLikeThis.mp3",
    "createdAt": 1348858557210,
    "plays": 620609764,
    "likes": 1230769,
    "shares": 33048,
    "comments": 52142
}, {
    "_id": 61,
    "title": "Ea Bag Tote Intelligentsia",
    "artist": "Marian Hill",
    "genre": "Pop",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "songFile": "MarianHill_OneTime.mp3",
    "createdAt": 1348238550971,
    "plays": 972927114,
    "likes": 7087719,
    "shares": 14165,
    "comments": 98738
}, {
    "_id": 62,
    "title": "Hexagon Dolor Flexitarian Cillum",
    "artist": "Ella Vos",
    "genre": "R&B",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "songFile": "EllaVos_DownInFlames.mp3",
    "createdAt": 1413551356575,
    "plays": 354484147,
    "likes": 480395,
    "shares": 65091,
    "comments": 27706
}, {
    "_id": 63,
    "title": "Eiusmod Truffaut Ut Ea",
    "artist": "Lindsey Stirling",
    "genre": "Pop",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "songFile": "LindseyStirling_Crystallize.mp3",
    "createdAt": 1366487908581,
    "plays": 233255835,
    "likes": 9004962,
    "shares": 12800,
    "comments": 91889
}, {
    "_id": 64,
    "title": "Artisan Viral Esse Tbh",
    "artist": "Oh Wonder",
    "genre": "HipHop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "songFile": "OhWonder_WhiteBlood.mp3",
    "createdAt": 1367259710960,
    "plays": 480179891,
    "likes": 122903,
    "shares": 48261,
    "comments": 65071
}, {
    "_id": 65,
    "title": "Humblebrag Skateboard Celiac Axe",
    "artist": "Oh Wonder",
    "genre": "R&B",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "songFile": "OhWonder_WhiteBlood.mp3",
    "createdAt": 1417108784204,
    "plays": 92300145,
    "likes": 2531535,
    "shares": 68619,
    "comments": 79464
}, {
    "_id": 66,
    "title": "Fashion Cillum Croix La",
    "artist": "Marian Hill",
    "genre": "Pop",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "songFile": "MarianHill_OneTime.mp3",
    "createdAt": 1426390226943,
    "plays": 705648993,
    "likes": 7864816,
    "shares": 85133,
    "comments": 28545
}, {
    "_id": 67,
    "title": "Chicken Hot Aute Pok",
    "artist": "Marian Hill",
    "genre": "R&B",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "songFile": "MarianHill_OneTime.mp3",
    "createdAt": 1349529677405,
    "plays": 744589056,
    "likes": 5564379,
    "shares": 94985,
    "comments": 41145
}, {
    "_id": 68,
    "title": "Pok Live-edge Tempor Ea",
    "artist": "Rick Astley",
    "genre": "Blues",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "songFile": "RickAstley_NeverGonnaGiveYouUp.mp3",
    "createdAt": 1343865092780,
    "plays": 131134134,
    "likes": 9892583,
    "shares": 88224,
    "comments": 88967
}, {
    "_id": 69,
    "title": "In Godard Bread Cloud",
    "artist": "Panic at the Disco",
    "genre": "Country",
    "album": "A Fever You Cant Sweat Out",
    "albumArt": "PanicAtTheDisco_AFeverYouCantSweatOut.jpg",
    "songFile": "PanicAtTheDisco_IWriteSinsNotTragedies.mp3",
    "createdAt": 1353538491575,
    "plays": 361564985,
    "likes": 188536,
    "shares": 78119,
    "comments": 47644
}, {
    "_id": 70,
    "title": "Poke Squid Belly Pork",
    "artist": "Elvis",
    "genre": "Rock",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "songFile": "ElvisPresley_LoveMe.mp3",
    "createdAt": 1522638194365,
    "plays": 426157153,
    "likes": 6604422,
    "shares": 31217,
    "comments": 15814
}, {
    "_id": 71,
    "title": "Af Viral Prism 8-bit",
    "artist": "Rick Astley",
    "genre": "Country",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "songFile": "RickAstley_NeverGonnaGiveYouUp.mp3",
    "createdAt": 1529083139372,
    "plays": 375637608,
    "likes": 6958869,
    "shares": 89179,
    "comments": 55121
}, {
    "_id": 72,
    "title": "Chambray Bag Messenger Aliqua",
    "artist": "Ed Sheeran",
    "genre": "Rock",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "songFile": "EdSheeran_Bloodstream.mp3",
    "createdAt": 1359743905907,
    "plays": 185321804,
    "likes": 9215925,
    "shares": 13755,
    "comments": 53029
}, {
    "_id": 73,
    "title": "Glossier Mixtape Juice Green",
    "artist": "The Beatles",
    "genre": "Country",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "songFile": "TheBeatles_ComeTogether.mp3",
    "createdAt": 1443546560476,
    "plays": 454224809,
    "likes": 5357072,
    "shares": 74310,
    "comments": 77056
}, {
    "_id": 74,
    "title": "Commodo Park Echo Fingerstache",
    "artist": "Sam Smith",
    "genre": "Jazz",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "songFile": "SamSmith_StayWithMe.mp3",
    "createdAt": 1479220305470,
    "plays": 973533198,
    "likes": 2540651,
    "shares": 4198,
    "comments": 27919
}, {
    "_id": 75,
    "title": "Ad Biodiesel Chicharrones Taiyaki",
    "artist": "Backstreet Boys",
    "genre": "Electronic",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "songFile": "BackstreetBoys_QuitPlayingGamesWithMyHeart.mp3",
    "createdAt": 1530756213532,
    "plays": 781385538,
    "likes": 210055,
    "shares": 26198,
    "comments": 19346
}, {
    "_id": 76,
    "title": "Offal Lo-fi Adaptogen Cliche",
    "artist": "Beyonce",
    "genre": "Rock",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "songFile": "Beyonce_Halo.mp3",
    "createdAt": 1376351041941,
    "plays": 313153191,
    "likes": 7630566,
    "shares": 31051,
    "comments": 37211
}, {
    "_id": 77,
    "title": "Fam Listicle Laborum Kickstarter",
    "artist": "Phoenix",
    "genre": "Rock",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "songFile": "Phoenix_1901.mp3",
    "createdAt": 1433495854083,
    "plays": 388776168,
    "likes": 1637350,
    "shares": 91565,
    "comments": 87037
}, {
    "_id": 78,
    "title": "Truffaut Bottle Blue Banjo",
    "artist": "Ed Sheeran",
    "genre": "Pop",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "songFile": "EdSheeran_Bloodstream.mp3",
    "createdAt": 1504743217850,
    "plays": 857046643,
    "likes": 9506324,
    "shares": 34563,
    "comments": 76838
}, {
    "_id": 79,
    "title": "Kogi Post-ironic Crucifix Yr",
    "artist": "Jasmine Thompson",
    "genre": "Jazz",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "songFile": "JasmineThompson_ISeeFire.mp3",
    "createdAt": 1529526272082,
    "plays": 808707844,
    "likes": 5244231,
    "shares": 26018,
    "comments": 11139
}, {
    "_id": 80,
    "title": "Biodiesel Godard Truffaut Af",
    "artist": "Beyonce",
    "genre": "Pop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "songFile": "Beyonce_Halo.mp3",
    "createdAt": 1350269299430,
    "plays": 113985996,
    "likes": 1618343,
    "shares": 69367,
    "comments": 11279
}, {
    "_id": 81,
    "title": "Tousled Vexillologist Level Next",
    "artist": "Ed Sheeran",
    "genre": "R&B",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "songFile": "EdSheeran_Bloodstream.mp3",
    "createdAt": 1400154241526,
    "plays": 926981689,
    "likes": 9527390,
    "shares": 91987,
    "comments": 69417
}, {
    "_id": 82,
    "title": "Est Prism Tofu Bespoke",
    "artist": "Oh Wonder",
    "genre": "Pop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "songFile": "OhWonder_WhiteBlood.mp3",
    "createdAt": 1456680916216,
    "plays": 375265554,
    "likes": 3070425,
    "shares": 84132,
    "comments": 26134
}, {
    "_id": 83,
    "title": "Polaroid Asymmetrical Magna Kombucha",
    "artist": "Dead Kennedys",
    "genre": "HipHop",
    "album": "Give Me Convenience or Give Me Death",
    "albumArt": "DeadKennedys_GiveMeConvenienceorGiveMeDeath.jpg",
    "songFile": "TheDeadKennedys_HolidayinCambodia.mp3",
    "createdAt": 1468813202257,
    "plays": 130526435,
    "likes": 4559848,
    "shares": 4635,
    "comments": 16370
}, {
    "_id": 84,
    "title": "Aute Cornhole Belly Pork",
    "artist": "Marian Hill",
    "genre": "R&B",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "songFile": "MarianHill_OneTime.mp3",
    "createdAt": 1386041292554,
    "plays": 439726459,
    "likes": 2217421,
    "shares": 94237,
    "comments": 4643
}, {
    "_id": 85,
    "title": "Woke Shorts Jean Vegan",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "songFile": "JasmineThompson_ISeeFire.mp3",
    "createdAt": 1439968257653,
    "plays": 740946510,
    "likes": 117652,
    "shares": 54850,
    "comments": 22855
}, {
    "_id": 86,
    "title": "Denim Raw Anim Irony",
    "artist": "Birdy",
    "genre": "HipHop",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "songFile": "Birdy_SkinnyLove.mp3",
    "createdAt": 1419855852113,
    "plays": 887141848,
    "likes": 5875914,
    "shares": 45647,
    "comments": 91154
}, {
    "_id": 87,
    "title": "Kitsch Cardigan Tacos Ugh",
    "artist": "Rick Astley",
    "genre": "Country",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "songFile": "RickAstley_NeverGonnaGiveYouUp.mp3",
    "createdAt": 1476576256409,
    "plays": 732898793,
    "likes": 1340030,
    "shares": 54533,
    "comments": 67971
}, {
    "_id": 88,
    "title": "Crucifix Excepteur Pug In",
    "artist": "The Beatles",
    "genre": "Electronic",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "songFile": "TheBeatles_ComeTogether.mp3",
    "createdAt": 1388873800289,
    "plays": 223499014,
    "likes": 2760729,
    "shares": 30343,
    "comments": 61778
}, {
    "_id": 89,
    "title": "Ethical Goth Health Bushwick",
    "artist": "Birdy",
    "genre": "Rock",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "songFile": "Birdy_SkinnyLove.mp3",
    "createdAt": 1457071392767,
    "plays": 501838312,
    "likes": 6868244,
    "shares": 4936,
    "comments": 59442
}, {
    "_id": 90,
    "title": "Retro Duis Pack Fanny",
    "artist": "Oh Wonder",
    "genre": "Electronic",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "songFile": "OhWonder_WhiteBlood.mp3",
    "createdAt": 1475356879383,
    "plays": 649658866,
    "likes": 3864634,
    "shares": 77422,
    "comments": 54670
}, {
    "_id": 91,
    "title": "Lorem Carry Everyday +1",
    "artist": "Sia",
    "genre": "Electronic",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "songFile": "Sia_BreatheMe.mp3",
    "createdAt": 1505175250684,
    "plays": 204094642,
    "likes": 344959,
    "shares": 60352,
    "comments": 98621
}, {
    "_id": 92,
    "title": "Jianbing Celiac Them Of",
    "artist": "Michael Jackson",
    "genre": "Jazz",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "songFile": "MichaelJackson_Thriller.mp3",
    "createdAt": 1436630825562,
    "plays": 58101016,
    "likes": 174508,
    "shares": 19036,
    "comments": 49937
}, {
    "_id": 93,
    "title": "Heard Haven't Probably You",
    "artist": "Panic at the Disco",
    "genre": "Jazz",
    "album": "A Fever You Cant Sweat Out",
    "albumArt": "PanicAtTheDisco_AFeverYouCantSweatOut.jpg",
    "songFile": "PanicAtTheDisco_IWriteSinsNotTragedies.mp3",
    "createdAt": 1358566218714,
    "plays": 598677924,
    "likes": 9586140,
    "shares": 46336,
    "comments": 45823
}, {
    "_id": 94,
    "title": "Charcoal Activated Quis Snackwave",
    "artist": "Phoenix",
    "genre": "Rock",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "songFile": "Phoenix_1901.mp3",
    "createdAt": 1365132209059,
    "plays": 326209281,
    "likes": 7592560,
    "shares": 49345,
    "comments": 81494
}, {
    "_id": 95,
    "title": "Carry Everyday Forage Slow-carb",
    "artist": "Beyonce",
    "genre": "R&B",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "songFile": "Beyonce_Halo.mp3",
    "createdAt": 1380369531419,
    "plays": 236668528,
    "likes": 3190166,
    "shares": 17249,
    "comments": 16256
}, {
    "_id": 96,
    "title": "Wolf Church-key Lumbersexual Pok",
    "artist": "Marian Hill",
    "genre": "Rock",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "songFile": "MarianHill_OneTime.mp3",
    "createdAt": 1529932969045,
    "plays": 603300891,
    "likes": 5813407,
    "shares": 96419,
    "comments": 33083
}, {
    "_id": 97,
    "title": "Pok Braid Man Do",
    "artist": "Oh Wonder",
    "genre": "Rock",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "songFile": "OhWonder_WhiteBlood.mp3",
    "createdAt": 1350881026328,
    "plays": 513775075,
    "likes": 6402866,
    "shares": 6891,
    "comments": 5135
}, {
    "_id": 98,
    "title": "Glossier Umami Chambray Cold-pressed",
    "artist": "Jasmine Thompson",
    "genre": "Electronic",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "songFile": "JasmineThompson_ISeeFire.mp3",
    "createdAt": 1475854546206,
    "plays": 510609092,
    "likes": 2161823,
    "shares": 488,
    "comments": 53479
}, {
    "_id": 99,
    "title": "Mumblecore Hammock Fixie Bag",
    "artist": "The Beatles",
    "genre": "HipHop",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "songFile": "TheBeatles_ComeTogether.mp3",
    "createdAt": 1374160597481,
    "plays": 585582922,
    "likes": 5613518,
    "shares": 71050,
    "comments": 67309
}, {
    "_id": 100,
    "title": "Tote Whatever Meggings Booth",
    "artist": "Ed Sheeran",
    "genre": "Pop",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "songFile": "EdSheeran_Bloodstream.mp3",
    "createdAt": 1440045766718,
    "plays": 96835054,
    "likes": 7310967,
    "shares": 31215,
    "comments": 5147
}, {
    "_id": 101,
    "title": "Photo Ea Nisi Literally",
    "artist": "The Beatles",
    "genre": "R&B",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "songFile": "TheBeatles_ComeTogether.mp3",
    "createdAt": 1489247898329,
    "plays": 472065780,
    "likes": 5824875,
    "shares": 8585,
    "comments": 7548
}, {
    "_id": 102,
    "title": "Gluten-free Mixtape Id Polaroid",
    "artist": "BB King",
    "genre": "Jazz",
    "album": "Singin the Blues",
    "albumArt": "BBKing_SinginTheBlues.jpg",
    "songFile": "BBKing_YouUpsetMeBaby.mp3",
    "createdAt": 1488027592758,
    "plays": 766781337,
    "likes": 7340861,
    "shares": 15275,
    "comments": 25616
}, {
    "_id": 103,
    "title": "Hoodie Minim Celiac Biodiesel",
    "artist": "Ed Sheeran",
    "genre": "Electronic",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "songFile": "EdSheeran_Bloodstream.mp3",
    "createdAt": 1424137324243,
    "plays": 434929069,
    "likes": 5538500,
    "shares": 89329,
    "comments": 2910
}, {
    "_id": 104,
    "title": "Goth Health XOXO Bespoke",
    "artist": "The Chainsmokers",
    "genre": "Country",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "songFile": "TheChainsmokers_SomethingJustLikeThis.mp3",
    "createdAt": 1529257569395,
    "plays": 317598361,
    "likes": 8664472,
    "shares": 92943,
    "comments": 38021
}, {
    "_id": 105,
    "title": "Authentic Laborum Beard Adaptogen",
    "artist": "The Chainsmokers",
    "genre": "Jazz",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "songFile": "TheChainsmokers_SomethingJustLikeThis.mp3",
    "createdAt": 1379386652479,
    "plays": 472393575,
    "likes": 93268,
    "shares": 80458,
    "comments": 69646
}, {
    "_id": 106,
    "title": "Ethical Cronut Plaid Mollit",
    "artist": "Ella Vos",
    "genre": "Country",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "songFile": "EllaVos_DownInFlames.mp3",
    "createdAt": 1521624635594,
    "plays": 974089204,
    "likes": 4563302,
    "shares": 46736,
    "comments": 14036
}, {
    "_id": 107,
    "title": "Beard Qui Pug Non",
    "artist": "Sia",
    "genre": "Jazz",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "songFile": "Sia_BreatheMe.mp3",
    "createdAt": 1430829899066,
    "plays": 772398596,
    "likes": 7870768,
    "shares": 29291,
    "comments": 40902
}, {
    "_id": 108,
    "title": "Mi Banh Selfies Crucifix",
    "artist": "Marian Hill",
    "genre": "HipHop",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "songFile": "MarianHill_OneTime.mp3",
    "createdAt": 1378057742928,
    "plays": 361883311,
    "likes": 8473363,
    "shares": 93598,
    "comments": 77690
}, {
    "_id": 109,
    "title": "Kogi Aute Normcore Sed",
    "artist": "The Chainsmokers",
    "genre": "Rock",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "songFile": "TheChainsmokers_SomethingJustLikeThis.mp3",
    "createdAt": 1488465018671,
    "plays": 924409947,
    "likes": 7486654,
    "shares": 14458,
    "comments": 60134
}, {
    "_id": 110,
    "title": "Dolore Cupidatat Vinegar Drinking",
    "artist": "Oh Wonder",
    "genre": "R&B",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "songFile": "OhWonder_WhiteBlood.mp3",
    "createdAt": 1529062330166,
    "plays": 229969104,
    "likes": 1661957,
    "shares": 67280,
    "comments": 75446
}, {
    "_id": 111,
    "title": "Unicorn Pug Do Of",
    "artist": "Panic at the Disco",
    "genre": "Rock",
    "album": "A Fever You Cant Sweat Out",
    "albumArt": "PanicAtTheDisco_AFeverYouCantSweatOut.jpg",
    "songFile": "PanicAtTheDisco_IWriteSinsNotTragedies.mp3",
    "createdAt": 1397206925492,
    "plays": 19881691,
    "likes": 4386603,
    "shares": 81498,
    "comments": 42507
}, {
    "_id": 112,
    "title": "Hell Et Loko Four",
    "artist": "The Chainsmokers",
    "genre": "Electronic",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "songFile": "TheChainsmokers_SomethingJustLikeThis.mp3",
    "createdAt": 1460095822275,
    "plays": 813022942,
    "likes": 9679811,
    "shares": 18848,
    "comments": 58595
}, {
    "_id": 113,
    "title": "Fam Bread Cloud Culpa",
    "artist": "Elvis",
    "genre": "Rock",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "songFile": "ElvisPresley_LoveMe.mp3",
    "createdAt": 1351917066230,
    "plays": 712936446,
    "likes": 3624861,
    "shares": 13555,
    "comments": 58911
}, {
    "_id": 114,
    "title": "Ea Knausgaard Sunt VHS",
    "artist": "The Beatles",
    "genre": "HipHop",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "songFile": "TheBeatles_ComeTogether.mp3",
    "createdAt": 1429155665711,
    "plays": 133787089,
    "likes": 9224683,
    "shares": 17013,
    "comments": 92524
}, {
    "_id": 115,
    "title": "Disrupt 8-bit Waistcoat Hoodie",
    "artist": "Phoenix",
    "genre": "R&B",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "songFile": "Phoenix_1901.mp3",
    "createdAt": 1516737807318,
    "plays": 461600582,
    "likes": 8558752,
    "shares": 12037,
    "comments": 26143
}, {
    "_id": 116,
    "title": "Deserunt YOLO Trade Direct",
    "artist": "Ed Sheeran",
    "genre": "Blues",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "songFile": "EdSheeran_Bloodstream.mp3",
    "createdAt": 1405286767739,
    "plays": 359035604,
    "likes": 6008510,
    "shares": 135,
    "comments": 10256
}, {
    "_id": 117,
    "title": "Laborum Moon Wolf 3",
    "artist": "Michael Jackson",
    "genre": "Electronic",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "songFile": "MichaelJackson_Thriller.mp3",
    "createdAt": 1457097062274,
    "plays": 952334350,
    "likes": 4113971,
    "shares": 55698,
    "comments": 46050
}, {
    "_id": 118,
    "title": "Truffaut Croix La Forage",
    "artist": "Backstreet Boys",
    "genre": "Country",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "songFile": "BackstreetBoys_QuitPlayingGamesWithMyHeart.mp3",
    "createdAt": 1394518040776,
    "plays": 336028102,
    "likes": 2615625,
    "shares": 8672,
    "comments": 17050
}, {
    "_id": 119,
    "title": "Chicharrones Tofu Lo-fi Hashtag",
    "artist": "Beyonce",
    "genre": "Electronic",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "songFile": "Beyonce_Halo.mp3",
    "createdAt": 1524460623282,
    "plays": 22477634,
    "likes": 283546,
    "shares": 62784,
    "comments": 45037
}, {
    "_id": 120,
    "title": "It On Bird A",
    "artist": "Backstreet Boys",
    "genre": "R&B",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "songFile": "BackstreetBoys_QuitPlayingGamesWithMyHeart.mp3",
    "createdAt": 1475442379320,
    "plays": 121195730,
    "likes": 1006549,
    "shares": 15691,
    "comments": 19221
}, {
    "_id": 121,
    "title": "Put Normcore Aliquip Franzen",
    "artist": "Sia",
    "genre": "Pop",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "songFile": "Sia_BreatheMe.mp3",
    "createdAt": 1501890486201,
    "plays": 980686127,
    "likes": 5023458,
    "shares": 47994,
    "comments": 31979
}, {
    "_id": 122,
    "title": "Aute Kickstarter Butcher Excepteur",
    "artist": "The Chainsmokers",
    "genre": "Blues",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "songFile": "TheChainsmokers_SomethingJustLikeThis.mp3",
    "createdAt": 1474293858704,
    "plays": 814047399,
    "likes": 6484715,
    "shares": 2203,
    "comments": 71563
}, {
    "_id": 123,
    "title": "Marfa Bottle Blue Retro",
    "artist": "The Chainsmokers",
    "genre": "Pop",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "songFile": "TheChainsmokers_SomethingJustLikeThis.mp3",
    "createdAt": 1440302256932,
    "plays": 240433801,
    "likes": 7725734,
    "shares": 17568,
    "comments": 2511
}, {
    "_id": 124,
    "title": "Bespoke Forage Do Authentic",
    "artist": "Lindsey Stirling",
    "genre": "R&B",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "songFile": "LindseyStirling_Crystallize.mp3",
    "createdAt": 1382804882759,
    "plays": 869363297,
    "likes": 9661821,
    "shares": 34516,
    "comments": 63424
}, {
    "_id": 125,
    "title": "Trade Direct Belly Pork",
    "artist": "The Chainsmokers",
    "genre": "Electronic",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "songFile": "TheChainsmokers_SomethingJustLikeThis.mp3",
    "createdAt": 1400730828441,
    "plays": 730980095,
    "likes": 1872139,
    "shares": 20998,
    "comments": 32503
}, {
    "_id": 126,
    "title": "Chillwave Sriracha Gastropub Snackwave",
    "artist": "Ed Sheeran",
    "genre": "HipHop",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "songFile": "EdSheeran_Bloodstream.mp3",
    "createdAt": 1529783369501,
    "plays": 101310265,
    "likes": 4964278,
    "shares": 53905,
    "comments": 46053
}, {
    "_id": 127,
    "title": "Juice Green Proident Tousled",
    "artist": "Sam Smith",
    "genre": "R&B",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "songFile": "SamSmith_StayWithMe.mp3",
    "createdAt": 1527064621011,
    "plays": 735305892,
    "likes": 8212019,
    "shares": 48115,
    "comments": 43277
}, {
    "_id": 128,
    "title": "Bulb Edison Forage Them",
    "artist": "Phoenix",
    "genre": "HipHop",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "songFile": "Phoenix_1901.mp3",
    "createdAt": 1457823767931,
    "plays": 170467058,
    "likes": 7130384,
    "shares": 26533,
    "comments": 88158
}, {
    "_id": 129,
    "title": "Of Heard Haven't Probably",
    "artist": "Marian Hill",
    "genre": "Jazz",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "songFile": "MarianHill_OneTime.mp3",
    "createdAt": 1372799875331,
    "plays": 66079212,
    "likes": 4064460,
    "shares": 10059,
    "comments": 92554
}, {
    "_id": 130,
    "title": "You Elit Cronut Ad",
    "artist": "Ed Sheeran",
    "genre": "Rock",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "songFile": "EdSheeran_Bloodstream.mp3",
    "createdAt": 1390582402159,
    "plays": 246739486,
    "likes": 6015287,
    "shares": 7829,
    "comments": 26438
}, {
    "_id": 131,
    "title": "Pug Wolf Gentrify IPhone",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "songFile": "JasmineThompson_ISeeFire.mp3",
    "createdAt": 1496518229042,
    "plays": 587571389,
    "likes": 9720467,
    "shares": 43002,
    "comments": 62874
}, {
    "_id": 132,
    "title": "Reprehenderit Park Echo Squid",
    "artist": "Rick Astley",
    "genre": "HipHop",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "songFile": "RickAstley_NeverGonnaGiveYouUp.mp3",
    "createdAt": 1513462801432,
    "plays": 618318338,
    "likes": 4161030,
    "shares": 86570,
    "comments": 63550
}, {
    "_id": 133,
    "title": "Ennui Etsy Sartorial Adipisicing",
    "artist": "Michael Jackson",
    "genre": "HipHop",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "songFile": "MichaelJackson_Thriller.mp3",
    "createdAt": 1369563831260,
    "plays": 311803861,
    "likes": 548250,
    "shares": 31869,
    "comments": 95614
}, {
    "_id": 134,
    "title": "Crucifix Non Marfa Vice",
    "artist": "Beyonce",
    "genre": "Rock",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "songFile": "Beyonce_Halo.mp3",
    "createdAt": 1494974663795,
    "plays": 652937595,
    "likes": 1237153,
    "shares": 39564,
    "comments": 81603
}, {
    "_id": 135,
    "title": "Chartreuse Qui Sartorial Blog",
    "artist": "Ella Vos",
    "genre": "Rock",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "songFile": "EllaVos_DownInFlames.mp3",
    "createdAt": 1445205578007,
    "plays": 28988899,
    "likes": 9495311,
    "shares": 65392,
    "comments": 99694
}, {
    "_id": 136,
    "title": "DIY Plaid Laborum Cronut",
    "artist": "Daughter",
    "genre": "Pop",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "songFile": "Daughter_Medicine.mp3",
    "createdAt": 1498180311431,
    "plays": 728462306,
    "likes": 770028,
    "shares": 18905,
    "comments": 73952
}, {
    "_id": 137,
    "title": "Consequat Tumblr Enim Culpa",
    "artist": "Daughter",
    "genre": "Country",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "songFile": "Daughter_Medicine.mp3",
    "createdAt": 1357117246101,
    "plays": 860295990,
    "likes": 2728153,
    "shares": 97585,
    "comments": 74201
}, {
    "_id": 138,
    "title": "Esse Microdosing Quinoa Lorem",
    "artist": "Michael Jackson",
    "genre": "Jazz",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "songFile": "MichaelJackson_Thriller.mp3",
    "createdAt": 1442261657525,
    "plays": 957739144,
    "likes": 5221670,
    "shares": 49253,
    "comments": 41979
}, {
    "_id": 139,
    "title": "Truck Food Bag Tote",
    "artist": "Ed Sheeran",
    "genre": "Blues",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "songFile": "EdSheeran_Bloodstream.mp3",
    "createdAt": 1354346161772,
    "plays": 79242787,
    "likes": 714968,
    "shares": 89571,
    "comments": 1455
}, {
    "_id": 140,
    "title": "Keffiyeh Kickstarter Church-key Freegan",
    "artist": "Rick Astley",
    "genre": "Pop",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "songFile": "RickAstley_NeverGonnaGiveYouUp.mp3",
    "createdAt": 1376390065691,
    "plays": 811349702,
    "likes": 9457218,
    "shares": 23261,
    "comments": 82321
}]

// const toUpper = (songsData) => {

//   for (let i = 0; i < songsData.length; i++){ 
//     let title = songsData[i].title
//     let splitTitle = title.split(' ')
//     // console.log(splitTitle)
//     for(let j = 0; j < splitTitle.length; j++) {
//       splitTitle[j][0].toUpperCase()
//       splitTitle[j] = splitTitle[j][0].toUpperCase() + splitTitle[j].slice(1)
//     }
//     songsData[i].title = splitTitle.join(' ')
//   }
//   return songsData;
// }

// JSON.stringify(toUpper(songs))

const modTime = (songsData) => {
  const min = 1343528820963;
  const max = 1532687216731
  for(let i = 0; i < songsData.length; i++) {
    let timeStamp = Math.floor(Math.random() * (max - min)) + min;
    songsData[i].createdAt = timeStamp;
  }
  return songsData;
}

JSON.stringify(modTime(songs))


