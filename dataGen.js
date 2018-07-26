const song = {
  id: 1,
  title: 'Halo',
  artist: 'Beyonce',
  album: 'I am... Sasha Fierce',
  genre: 'R&B'
  // albumArt: 'https.../xyz.png',
  // plays: 123456,
  // likes: 12345,
  // shares: 123456,
  // comments: 123
};

let hipster = "Freegan church-key kickstarter, keffiyeh tote bag food truck lorem quinoa microdosing esse culpa enim tumblr. Consequat cronut laborum plaid DIY, blog sartorial qui chartreuse vice. Marfa non crucifix adipisicing sartorial etsy ennui squid echo park. Reprehenderit iPhone gentrify wolf, pug ad cronut elit you probably haven't heard of them forage edison bulb tousled proident green juice snackwave. Gastropub sriracha chillwave pork belly direct trade. Authentic do forage bespoke retro, blue bottle marfa excepteur butcher kickstarter. Aute franzen aliquip, normcore put a bird on it hashtag lo-fi tofu. Chicharrones forage la croix truffaut. 3 wolf moon laborum direct trade, YOLO deserunt hoodie waistcoat 8-bit disrupt VHS. Sunt knausgaard ea, culpa cloud bread fam four loko et hell of do. Pug unicorn drinking vinegar cupidatat. Dolore sed normcore aute kogi. Crucifix selfies banh mi non pug qui beard mollit plaid cronut ethical adaptogen. Beard laborum authentic, bespoke XOXO health goth biodiesel celiac minim hoodie polaroid id. Mixtape gluten-free literally, nisi ea photo booth meggings whatever tote bag fixie. Hammock mumblecore cold-pressed chambray umami glossier. Do man braid pok pok lumbersexual church-key. Wolf slow-carb forage everyday carry. Snackwave quis activated charcoal you probably haven't heard of them celiac. Jianbing +1 everyday carry lorem fanny pack. Duis retro bushwick health goth ethical in. Pug excepteur crucifix, ugh tacos cardigan kitsch irony anim raw denim vegan jean shorts woke. Pork belly cornhole aute, kombucha magna asymmetrical polaroid bespoke tofu prism est next level. Vexillologist tousled af, truffaut godard biodiesel yr crucifix. Post-ironic kogi banjo blue bottle truffaut kickstarter laborum. Listicle fam cliche adaptogen lo-fi offal, taiyaki chicharrones biodiesel ad fingerstache echo park commodo. Green juice mixtape glossier, aliqua messenger bag chambray 8-bit prism viral af pork belly squid poke. Cloud bread godard in ea tempor, live-edge pok pok aute hot chicken la croix cillum fashion axe celiac skateboard. Humblebrag tbh esse, viral artisan ea ut truffaut eiusmod. Cillum flexitarian dolor, hexagon intelligentsia tote bag ea seitan la croix chicharrones tilde paleo. Keytar before they sold out health goth YOLO +1 edison bulb food truck. In food truck slow-carb tote bag aliquip plaid seitan in gastropub pinterest polaroid. Thundercats marfa chambray, raw denim ramps cred you probably haven't heard of them meditation lyft cupidatat palo santo est literally ea. Food truck offal helvetica incididunt twee meditation. Synth pug locavore williamsburg, occupy consectetur lomo. Narwhal scenester hoodie fanny pack excepteur literally cardigan. Cronut incididunt palo santo aliqua, readymade copper mug +1 synth helvetica ut velit. Pinterest YOLO try-hard succulents deserunt scenester cold-pressed venmo ex raclette williamsburg hammock. Food truck kickstarter do, gochujang skateboard authentic sunt distillery ramps copper mug. Coloring book esse austin cronut pop-up. Single-origin coffee selfies cillum disrupt polaroid in. Aliqua knausgaard tilde selvage cardigan. Culpa gochujang tacos tilde et officia williamsburg readymade kitsch ea. Disrupt wolf tumblr waistcoat deep v. Taiyaki stumptown pop-up ethical occaecat shoreditch ad austin schlitz YOLO tote bag blog est anim. Banjo ethical dolore skateboard snackwave kitsch irony listicle aute organic. You probably haven't heard of them fixie beard pork belly tempor. Keffiyeh portland cloud bread sint eiusmod laborum. Ad deep v tacos lomo butcher hexagon pariatur letterpress aesthetic qui nisi poutine. Sartorial occaecat vegan, cold-pressed ut irony jean shorts hoodie. Activated charcoal ut la croix iceland, occupy art party post-ironic skateboard cupidatat food truck sartorial sustainable. Proident slow-carb drinking vinegar letterpress incididunt cillum kickstarter tote bag quinoa marfa reprehenderit.";

let artists = [
  {
    artist: 'The Beatles',
    album: 'Abbey Road'
  },
  {
    artist: 'Beyonce',
    album: 'I am... Sasha Fierce'
  },
  {
    artist: 'Ed Sheeran',
    album: 'Multiply'
  },
  {
    artist: 'Rick Astley',
    album: 'Whenever You Need Sombeody'
  },
  {
    artist: 'Panic at the Disco',
    album: 'A Fever You Cant Sweat Out'
  },
  {
    artist: 'Phoenix',
    album: 'Wolfgang Amadeus Phoenix'
  },
  {
    artist: 'Dead Kennedys',
    album: 'Give Me Convenience or Give Me Death'
  },
  {
    artist: 'Michael Jackson',
    album: 'Thriller'
  },
  {
    artist: 'BB King',
    album: 'Singin the Blues'
  },
  {
    artist: 'Backstreet Boys',
    album: 'Backstreet Boys'
  },
  {
    artist: 'Elvis',
    album: 'Elvis'
  },
  {
    artist: 'The Chainsmokers',
    album: 'Memories... Do Not Open'
  },
  {
    artist: 'Sia',
    album: 'Colour The Small One'
  },
  {
    artist: 'Marian Hill',
    album: 'Sway'
  },
  {
    artist: 'Lindsey Stirling',
    album: 'Lindsey Stirling'
  },
  {
    artist: 'Jasmine Thompson',
    album: 'Another Bundle of Tantrums'
  },
  {
    artist: 'Ella Vos',
    album: 'Words I Never Said'
  },
  {
    artist: 'Oh Wonder',
    album: 'Oh Wonder'
  },
  {
    artist: 'Sam Smith',
    album: 'In The Lonely Hour'
  },
  {
    artist: 'Daughter',
    album: 'Wild Youth EP'
  },
  {
    artist: 'Birdy',
    album: 'Birdy'
  }
];

const genres = ['Blues', 'Electronic', 'Pop', 'R&B', 'HipHop', 'Country', 'Jazz', 'Rock'];

const songDataGen = (latinString) => {
  const songs = [];
  latinString = latinString.replace(/\.|,/g, '');
  // latinString = latinString.replace(/,/g, '');

  let latinArr = latinString.split(' ');

  for (let i = 1; i < 150; i++) {
    const randArtist = Math.floor(Math.random() * artists.length);
    const artist = artists[randArtist].artist;
    const album = artists[randArtist].album;
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const title = [];
    const max = 4;
    let titleLen = Math.ceil(Math.random() * 4);
    for (let j = 0; j < max; j++) {
      title.push(latinArr.pop());
    }
    songs.push({id: i, title: title.join(' '), artist: artist, genre: genre, album: album})
  }
  return songs;
};

JSON.stringify(songDataGen(hipster))

let songsArr = [{"id":1,"title":"reprehenderit marfa quinoa bag","artist":"Rick Astley","genre":"Jazz","album":"Whenever You Need Sombeody"},{"id":2,"title":"tote kickstarter cillum incididunt","artist":"Phoenix","genre":"Rock","album":"Wolfgang Amadeus Phoenix"},{"id":3,"title":"letterpress vinegar drinking slow-carb","artist":"Sam Smith","genre":"R&B","album":"In The Lonely Hour"},{"id":4,"title":"Proident sustainable sartorial truck","artist":"Sia","genre":"Rock","album":"Colour The Small One"},{"id":5,"title":"food cupidatat skateboard post-ironic","artist":"Beyonce","genre":"HipHop","album":"I am... Sasha Fierce"},{"id":6,"title":"party art occupy iceland","artist":"Marian Hill","genre":"Blues","album":"Sway"},{"id":7,"title":"croix la ut charcoal","artist":"Ella Vos","genre":"Electronic","album":"Words I Never Said"},{"id":8,"title":"Activated hoodie shorts jean","artist":"Backstreet Boys","genre":"Blues","album":"Backstreet Boys"},{"id":9,"title":"irony ut cold-pressed vegan","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":10,"title":"occaecat Sartorial poutine nisi","artist":"Lindsey Stirling","genre":"Blues","album":"Lindsey Stirling"},{"id":11,"title":"qui aesthetic letterpress pariatur","artist":"Backstreet Boys","genre":"HipHop","album":"Backstreet Boys"},{"id":12,"title":"hexagon butcher lomo tacos","artist":"Sam Smith","genre":"HipHop","album":"In The Lonely Hour"},{"id":13,"title":"v deep Ad laborum","artist":"Elvis","genre":"Electronic","album":"Elvis"},{"id":14,"title":"eiusmod sint bread cloud","artist":"Daughter","genre":"Jazz","album":"Wild Youth EP"},{"id":15,"title":"portland Keffiyeh tempor belly","artist":"Oh Wonder","genre":"Blues","album":"Oh Wonder"},{"id":16,"title":"pork beard fixie them","artist":"Backstreet Boys","genre":"R&B","album":"Backstreet Boys"},{"id":17,"title":"of heard haven't probably","artist":"Elvis","genre":"Electronic","album":"Elvis"},{"id":18,"title":"You organic aute listicle","artist":"Marian Hill","genre":"Country","album":"Sway"},{"id":19,"title":"irony kitsch snackwave skateboard","artist":"Lindsey Stirling","genre":"HipHop","album":"Lindsey Stirling"},{"id":20,"title":"dolore ethical Banjo anim","artist":"Beyonce","genre":"HipHop","album":"I am... Sasha Fierce"},{"id":21,"title":"est blog bag tote","artist":"Ella Vos","genre":"Rock","album":"Words I Never Said"},{"id":22,"title":"YOLO schlitz austin ad","artist":"Sam Smith","genre":"Electronic","album":"In The Lonely Hour"},{"id":23,"title":"shoreditch occaecat ethical pop-up","artist":"Oh Wonder","genre":"Blues","album":"Oh Wonder"},{"id":24,"title":"stumptown Taiyaki v deep","artist":"BB King","genre":"Country","album":"Singin the Blues"},{"id":25,"title":"waistcoat tumblr wolf Disrupt","artist":"Ella Vos","genre":"Jazz","album":"Words I Never Said"},{"id":26,"title":"ea kitsch readymade williamsburg","artist":"Lindsey Stirling","genre":"Pop","album":"Lindsey Stirling"},{"id":27,"title":"officia et tilde tacos","artist":"Ella Vos","genre":"R&B","album":"Words I Never Said"},{"id":28,"title":"gochujang Culpa cardigan selvage","artist":"Backstreet Boys","genre":"Electronic","album":"Backstreet Boys"},{"id":29,"title":"tilde knausgaard Aliqua in","artist":"Daughter","genre":"Rock","album":"Wild Youth EP"},{"id":30,"title":"polaroid disrupt cillum selfies","artist":"Birdy","genre":"Pop","album":"Birdy"},{"id":31,"title":"coffee Single-origin pop-up cronut","artist":"Sam Smith","genre":"Country","album":"In The Lonely Hour"},{"id":32,"title":"austin esse book Coloring","artist":"Ed Sheeran","genre":"Country","album":"Multiply"},{"id":33,"title":"mug copper ramps distillery","artist":"Marian Hill","genre":"Pop","album":"Sway"},{"id":34,"title":"sunt authentic skateboard gochujang","artist":"Sam Smith","genre":"HipHop","album":"In The Lonely Hour"},{"id":35,"title":"do kickstarter truck Food","artist":"Michael Jackson","genre":"Blues","album":"Thriller"},{"id":36,"title":"hammock williamsburg raclette ex","artist":"Phoenix","genre":"Pop","album":"Wolfgang Amadeus Phoenix"},{"id":37,"title":"venmo cold-pressed scenester deserunt","artist":"Daughter","genre":"Blues","album":"Wild Youth EP"},{"id":38,"title":"succulents try-hard YOLO Pinterest","artist":"Oh Wonder","genre":"HipHop","album":"Oh Wonder"},{"id":39,"title":"velit ut helvetica synth","artist":"Rick Astley","genre":"R&B","album":"Whenever You Need Sombeody"},{"id":40,"title":"+1 mug copper readymade","artist":"Ella Vos","genre":"Rock","album":"Words I Never Said"},{"id":41,"title":"aliqua santo palo incididunt","artist":"Lindsey Stirling","genre":"Electronic","album":"Lindsey Stirling"},{"id":42,"title":"Cronut cardigan literally excepteur","artist":"The Chainsmokers","genre":"Pop","album":"Memories... Do Not Open"},{"id":43,"title":"pack fanny hoodie scenester","artist":"Beyonce","genre":"Pop","album":"I am... Sasha Fierce"},{"id":44,"title":"Narwhal lomo consectetur occupy","artist":"Sam Smith","genre":"Jazz","album":"In The Lonely Hour"},{"id":45,"title":"williamsburg locavore pug Synth","artist":"Backstreet Boys","genre":"HipHop","album":"Backstreet Boys"},{"id":46,"title":"meditation twee incididunt helvetica","artist":"Sam Smith","genre":"Pop","album":"In The Lonely Hour"},{"id":47,"title":"offal truck Food ea","artist":"Rick Astley","genre":"Jazz","album":"Whenever You Need Sombeody"},{"id":48,"title":"literally est santo palo","artist":"Elvis","genre":"Rock","album":"Elvis"},{"id":49,"title":"cupidatat lyft meditation them","artist":"Birdy","genre":"HipHop","album":"Birdy"},{"id":50,"title":"of heard haven't probably","artist":"Sia","genre":"Country","album":"Colour The Small One"},{"id":51,"title":"you cred ramps denim","artist":"Oh Wonder","genre":"HipHop","album":"Oh Wonder"},{"id":52,"title":"raw chambray marfa Thundercats","artist":"Birdy","genre":"Electronic","album":"Birdy"},{"id":53,"title":"polaroid pinterest gastropub in","artist":"Birdy","genre":"Country","album":"Birdy"},{"id":54,"title":"seitan plaid aliquip bag","artist":"Ella Vos","genre":"Country","album":"Words I Never Said"},{"id":55,"title":"tote slow-carb truck food","artist":"Michael Jackson","genre":"Rock","album":"Thriller"},{"id":56,"title":"In truck food bulb","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":57,"title":"edison +1 YOLO goth","artist":"The Beatles","genre":"R&B","album":"Abbey Road"},{"id":58,"title":"health out sold they","artist":"Beyonce","genre":"R&B","album":"I am... Sasha Fierce"},{"id":59,"title":"before Keytar paleo tilde","artist":"Daughter","genre":"Blues","album":"Wild Youth EP"},{"id":60,"title":"chicharrones croix la seitan","artist":"The Chainsmokers","genre":"Country","album":"Memories... Do Not Open"},{"id":61,"title":"ea bag tote intelligentsia","artist":"Marian Hill","genre":"Pop","album":"Sway"},{"id":62,"title":"hexagon dolor flexitarian Cillum","artist":"Ella Vos","genre":"R&B","album":"Words I Never Said"},{"id":63,"title":"eiusmod truffaut ut ea","artist":"Lindsey Stirling","genre":"Pop","album":"Lindsey Stirling"},{"id":64,"title":"artisan viral esse tbh","artist":"Oh Wonder","genre":"HipHop","album":"Oh Wonder"},{"id":65,"title":"Humblebrag skateboard celiac axe","artist":"Oh Wonder","genre":"R&B","album":"Oh Wonder"},{"id":66,"title":"fashion cillum croix la","artist":"Marian Hill","genre":"Pop","album":"Sway"},{"id":67,"title":"chicken hot aute pok","artist":"Marian Hill","genre":"R&B","album":"Sway"},{"id":68,"title":"pok live-edge tempor ea","artist":"Rick Astley","genre":"Blues","album":"Whenever You Need Sombeody"},{"id":69,"title":"in godard bread Cloud","artist":"Panic at the Disco","genre":"Country","album":"A Fever You Cant Sweat Out"},{"id":70,"title":"poke squid belly pork","artist":"Elvis","genre":"Rock","album":"Elvis"},{"id":71,"title":"af viral prism 8-bit","artist":"Rick Astley","genre":"Country","album":"Whenever You Need Sombeody"},{"id":72,"title":"chambray bag messenger aliqua","artist":"Ed Sheeran","genre":"Rock","album":"Multiply"},{"id":73,"title":"glossier mixtape juice Green","artist":"The Beatles","genre":"Country","album":"Abbey Road"},{"id":74,"title":"commodo park echo fingerstache","artist":"Sam Smith","genre":"Jazz","album":"In The Lonely Hour"},{"id":75,"title":"ad biodiesel chicharrones taiyaki","artist":"Backstreet Boys","genre":"Electronic","album":"Backstreet Boys"},{"id":76,"title":"offal lo-fi adaptogen cliche","artist":"Beyonce","genre":"Rock","album":"I am... Sasha Fierce"},{"id":77,"title":"fam Listicle laborum kickstarter","artist":"Phoenix","genre":"Rock","album":"Wolfgang Amadeus Phoenix"},{"id":78,"title":"truffaut bottle blue banjo","artist":"Ed Sheeran","genre":"Pop","album":"Multiply"},{"id":79,"title":"kogi Post-ironic crucifix yr","artist":"Jasmine Thompson","genre":"Jazz","album":"Another Bundle of Tantrums"},{"id":80,"title":"biodiesel godard truffaut af","artist":"Beyonce","genre":"Pop","album":"I am... Sasha Fierce"},{"id":81,"title":"tousled Vexillologist level next","artist":"Ed Sheeran","genre":"R&B","album":"Multiply"},{"id":82,"title":"est prism tofu bespoke","artist":"Oh Wonder","genre":"Pop","album":"Oh Wonder"},{"id":83,"title":"polaroid asymmetrical magna kombucha","artist":"Dead Kennedys","genre":"HipHop","album":"Give Me Convenience or Give Me Death"},{"id":84,"title":"aute cornhole belly Pork","artist":"Marian Hill","genre":"R&B","album":"Sway"},{"id":85,"title":"woke shorts jean vegan","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":86,"title":"denim raw anim irony","artist":"Birdy","genre":"HipHop","album":"Birdy"},{"id":87,"title":"kitsch cardigan tacos ugh","artist":"Rick Astley","genre":"Country","album":"Whenever You Need Sombeody"},{"id":88,"title":"crucifix excepteur Pug in","artist":"The Beatles","genre":"Electronic","album":"Abbey Road"},{"id":89,"title":"ethical goth health bushwick","artist":"Birdy","genre":"Rock","album":"Birdy"},{"id":90,"title":"retro Duis pack fanny","artist":"Oh Wonder","genre":"Electronic","album":"Oh Wonder"},{"id":91,"title":"lorem carry everyday +1","artist":"Sia","genre":"Electronic","album":"Colour The Small One"},{"id":92,"title":"Jianbing celiac them of","artist":"Michael Jackson","genre":"Jazz","album":"Thriller"},{"id":93,"title":"heard haven't probably you","artist":"Panic at the Disco","genre":"Jazz","album":"A Fever You Cant Sweat Out"},{"id":94,"title":"charcoal activated quis Snackwave","artist":"Phoenix","genre":"Rock","album":"Wolfgang Amadeus Phoenix"},{"id":95,"title":"carry everyday forage slow-carb","artist":"Beyonce","genre":"R&B","album":"I am... Sasha Fierce"},{"id":96,"title":"Wolf church-key lumbersexual pok","artist":"Marian Hill","genre":"Rock","album":"Sway"},{"id":97,"title":"pok braid man Do","artist":"Oh Wonder","genre":"Rock","album":"Oh Wonder"},{"id":98,"title":"glossier umami chambray cold-pressed","artist":"Jasmine Thompson","genre":"Electronic","album":"Another Bundle of Tantrums"},{"id":99,"title":"mumblecore Hammock fixie bag","artist":"The Beatles","genre":"HipHop","album":"Abbey Road"},{"id":100,"title":"tote whatever meggings booth","artist":"Ed Sheeran","genre":"Pop","album":"Multiply"},{"id":101,"title":"photo ea nisi literally","artist":"The Beatles","genre":"R&B","album":"Abbey Road"},{"id":102,"title":"gluten-free Mixtape id polaroid","artist":"BB King","genre":"Jazz","album":"Singin the Blues"},{"id":103,"title":"hoodie minim celiac biodiesel","artist":"Ed Sheeran","genre":"Electronic","album":"Multiply"},{"id":104,"title":"goth health XOXO bespoke","artist":"The Chainsmokers","genre":"Country","album":"Memories... Do Not Open"},{"id":105,"title":"authentic laborum Beard adaptogen","artist":"The Chainsmokers","genre":"Jazz","album":"Memories... Do Not Open"},{"id":106,"title":"ethical cronut plaid mollit","artist":"Ella Vos","genre":"Country","album":"Words I Never Said"},{"id":107,"title":"beard qui pug non","artist":"Sia","genre":"Jazz","album":"Colour The Small One"},{"id":108,"title":"mi banh selfies Crucifix","artist":"Marian Hill","genre":"HipHop","album":"Sway"},{"id":109,"title":"kogi aute normcore sed","artist":"The Chainsmokers","genre":"Rock","album":"Memories... Do Not Open"},{"id":110,"title":"Dolore cupidatat vinegar drinking","artist":"Oh Wonder","genre":"R&B","album":"Oh Wonder"},{"id":111,"title":"unicorn Pug do of","artist":"Panic at the Disco","genre":"Rock","album":"A Fever You Cant Sweat Out"},{"id":112,"title":"hell et loko four","artist":"The Chainsmokers","genre":"Electronic","album":"Memories... Do Not Open"},{"id":113,"title":"fam bread cloud culpa","artist":"Elvis","genre":"Rock","album":"Elvis"},{"id":114,"title":"ea knausgaard Sunt VHS","artist":"The Beatles","genre":"HipHop","album":"Abbey Road"},{"id":115,"title":"disrupt 8-bit waistcoat hoodie","artist":"Phoenix","genre":"R&B","album":"Wolfgang Amadeus Phoenix"},{"id":116,"title":"deserunt YOLO trade direct","artist":"Ed Sheeran","genre":"Blues","album":"Multiply"},{"id":117,"title":"laborum moon wolf 3","artist":"Michael Jackson","genre":"Electronic","album":"Thriller"},{"id":118,"title":"truffaut croix la forage","artist":"Backstreet Boys","genre":"Country","album":"Backstreet Boys"},{"id":119,"title":"Chicharrones tofu lo-fi hashtag","artist":"Beyonce","genre":"Electronic","album":"I am... Sasha Fierce"},{"id":120,"title":"it on bird a","artist":"Backstreet Boys","genre":"R&B","album":"Backstreet Boys"},{"id":121,"title":"put normcore aliquip franzen","artist":"Sia","genre":"Pop","album":"Colour The Small One"},{"id":122,"title":"Aute kickstarter butcher excepteur","artist":"The Chainsmokers","genre":"Blues","album":"Memories... Do Not Open"},{"id":123,"title":"marfa bottle blue retro","artist":"The Chainsmokers","genre":"Pop","album":"Memories... Do Not Open"},{"id":124,"title":"bespoke forage do Authentic","artist":"Lindsey Stirling","genre":"R&B","album":"Lindsey Stirling"},{"id":125,"title":"trade direct belly pork","artist":"The Chainsmokers","genre":"Electronic","album":"Memories... Do Not Open"},{"id":126,"title":"chillwave sriracha Gastropub snackwave","artist":"Ed Sheeran","genre":"HipHop","album":"Multiply"},{"id":127,"title":"juice green proident tousled","artist":"Sam Smith","genre":"R&B","album":"In The Lonely Hour"},{"id":128,"title":"bulb edison forage them","artist":"Phoenix","genre":"HipHop","album":"Wolfgang Amadeus Phoenix"},{"id":129,"title":"of heard haven't probably","artist":"Marian Hill","genre":"Jazz","album":"Sway"},{"id":130,"title":"you elit cronut ad","artist":"Ed Sheeran","genre":"Rock","album":"Multiply"},{"id":131,"title":"pug wolf gentrify iPhone","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":132,"title":"Reprehenderit park echo squid","artist":"Rick Astley","genre":"HipHop","album":"Whenever You Need Sombeody"},{"id":133,"title":"ennui etsy sartorial adipisicing","artist":"Michael Jackson","genre":"HipHop","album":"Thriller"},{"id":134,"title":"crucifix non Marfa vice","artist":"Beyonce","genre":"Rock","album":"I am... Sasha Fierce"},{"id":135,"title":"chartreuse qui sartorial blog","artist":"Ella Vos","genre":"Rock","album":"Words I Never Said"},{"id":136,"title":"DIY plaid laborum cronut","artist":"Daughter","genre":"Pop","album":"Wild Youth EP"},{"id":137,"title":"Consequat tumblr enim culpa","artist":"Daughter","genre":"Country","album":"Wild Youth EP"},{"id":138,"title":"esse microdosing quinoa lorem","artist":"Michael Jackson","genre":"Jazz","album":"Thriller"},{"id":139,"title":"truck food bag tote","artist":"Ed Sheeran","genre":"Blues","album":"Multiply"},{"id":140,"title":"keffiyeh kickstarter church-key Freegan","artist":"Rick Astley","genre":"Pop","album":"Whenever You Need Sombeody"}]

const dataExtend = (songData) => {
  for(let i = 0; i < songData.length; i++) {
    let timeStamp = Date.now();
    if (songData[i].artist === 'The Beatles') {
      songData[i].albumArt = 'Beatles_AbbeyRoad.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'BB King') {
      songData[i].albumArt = 'BBKing_SinginTheBlues.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Backstreet Boys') {
      songData[i].albumArt = 'BackstreetBoys_BackstreetBoys.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Beyonce') {
      songData[i].albumArt = 'Beyonce_IAm...SashaFierce.png';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Birdy') {
      songData[i].albumArt = 'Birdy_Birdy.png';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Daughter') {
      songData[i].albumArt = 'Daughter_TheWildYouth.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Dead Kennedys') {
      songData[i].albumArt = 'DeadKennedys_GiveMeConvenienceorGiveMeDeath.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Ed Sheeran') {
      songData[i].albumArt = 'EdSheeran_X.png';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Ella Vos') {
      songData[i].albumArt = 'EllaVos_WordsINeverSaid.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Elvis') {
      songData[i].albumArt = 'Elvis_Elvis.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Jasmine Thompson') {
      songData[i].albumArt = 'JasmineThompson_AnotherBundleOfTantrums.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Lindsey Stirling') {
      songData[i].albumArt = 'LindseyStirling_LindseyStirling.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Marian Hill') {
      songData[i].albumArt = 'LindseyStirling_LindseyStirling.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Michael Jackson') {
      songData[i].albumArt = 'MichaelJackson_Thriller.png';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Oh Wonder') {
      songData[i].albumArt = 'OhWonder_OhWonder.png';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Panic at the Disco') {
      songData[i].albumArt = 'PanicAtTheDisco_AFeverYouCantSweatOut.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Phoenix') {
      songData[i].albumArt = 'Phoenix_WolfgangAmadeusPhoenix.png';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Rick Astley') {
      songData[i].albumArt = 'RickAstley_WheneverYouNeedSomebody.png';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Sam Smith') {
      songData[i].albumArt = 'SamSmith_InTheLonelyHour.png';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Sia') {
      songData[i].albumArt = 'Sia_ColourTheSmallOne.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'The Chainsmokers') {
      songData[i].albumArt = 'TheChainsmokers_Memories...DoNotOpen.jpg';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    }
  }
  return songData
}

JSON.stringify(dataExtend(songsArr))

const fullData = [{
    "id": 1,
    "title": "reprehenderit marfa quinoa bag",
    "artist": "Rick Astley",
    "genre": "Jazz",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532644022040,
    "plays": 428466414,
    "likes": 4418639,
    "shares": 48798,
    "comments": 44650
}, {
    "id": 2,
    "title": "tote kickstarter cillum incididunt",
    "artist": "Phoenix",
    "genre": "Rock",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532644022041,
    "plays": 392557434,
    "likes": 9555865,
    "shares": 29952,
    "comments": 59141
}, {
    "id": 3,
    "title": "letterpress vinegar drinking slow-carb",
    "artist": "Sam Smith",
    "genre": "R&B",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532644022041,
    "plays": 76425303,
    "likes": 2288776,
    "shares": 17710,
    "comments": 6052
}, {
    "id": 4,
    "title": "Proident sustainable sartorial truck",
    "artist": "Sia",
    "genre": "Rock",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "createdAt": 1532644022041,
    "plays": 505075735,
    "likes": 9370219,
    "shares": 12823,
    "comments": 60434
}, {
    "id": 5,
    "title": "food cupidatat skateboard post-ironic",
    "artist": "Beyonce",
    "genre": "HipHop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532644022041,
    "plays": 365024677,
    "likes": 9741057,
    "shares": 56825,
    "comments": 63660
}, {
    "id": 6,
    "title": "party art occupy iceland",
    "artist": "Marian Hill",
    "genre": "Blues",
    "album": "Sway",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 777660199,
    "likes": 1392317,
    "shares": 25632,
    "comments": 40235
}, {
    "id": 7,
    "title": "croix la ut charcoal",
    "artist": "Ella Vos",
    "genre": "Electronic",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532644022041,
    "plays": 352559780,
    "likes": 4456068,
    "shares": 54335,
    "comments": 94715
}, {
    "id": 8,
    "title": "Activated hoodie shorts jean",
    "artist": "Backstreet Boys",
    "genre": "Blues",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532644022041,
    "plays": 359295370,
    "likes": 3280071,
    "shares": 80992,
    "comments": 84347
}, {
    "id": 9,
    "title": "irony ut cold-pressed vegan",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532644022041,
    "plays": 425213025,
    "likes": 6361445,
    "shares": 63940,
    "comments": 95892
}, {
    "id": 10,
    "title": "occaecat Sartorial poutine nisi",
    "artist": "Lindsey Stirling",
    "genre": "Blues",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 149248131,
    "likes": 4036328,
    "shares": 76316,
    "comments": 2796
}, {
    "id": 11,
    "title": "qui aesthetic letterpress pariatur",
    "artist": "Backstreet Boys",
    "genre": "HipHop",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532644022041,
    "plays": 94864987,
    "likes": 3872196,
    "shares": 90004,
    "comments": 98594
}, {
    "id": 12,
    "title": "hexagon butcher lomo tacos",
    "artist": "Sam Smith",
    "genre": "HipHop",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532644022041,
    "plays": 468495321,
    "likes": 9251584,
    "shares": 49425,
    "comments": 63978
}, {
    "id": 13,
    "title": "v deep Ad laborum",
    "artist": "Elvis",
    "genre": "Electronic",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "createdAt": 1532644022041,
    "plays": 594039492,
    "likes": 5516733,
    "shares": 23431,
    "comments": 77245
}, {
    "id": 14,
    "title": "eiusmod sint bread cloud",
    "artist": "Daughter",
    "genre": "Jazz",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532644022041,
    "plays": 628168502,
    "likes": 5233885,
    "shares": 44621,
    "comments": 52754
}, {
    "id": 15,
    "title": "portland Keffiyeh tempor belly",
    "artist": "Oh Wonder",
    "genre": "Blues",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532644022041,
    "plays": 461482838,
    "likes": 7544120,
    "shares": 61177,
    "comments": 87630
}, {
    "id": 16,
    "title": "pork beard fixie them",
    "artist": "Backstreet Boys",
    "genre": "R&B",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532644022041,
    "plays": 782907664,
    "likes": 9988107,
    "shares": 14121,
    "comments": 705
}, {
    "id": 17,
    "title": "of heard haven't probably",
    "artist": "Elvis",
    "genre": "Electronic",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "createdAt": 1532644022041,
    "plays": 871765136,
    "likes": 4577883,
    "shares": 60400,
    "comments": 11678
}, {
    "id": 18,
    "title": "You organic aute listicle",
    "artist": "Marian Hill",
    "genre": "Country",
    "album": "Sway",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 892903848,
    "likes": 3336482,
    "shares": 95842,
    "comments": 85493
}, {
    "id": 19,
    "title": "irony kitsch snackwave skateboard",
    "artist": "Lindsey Stirling",
    "genre": "HipHop",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 26689714,
    "likes": 9388190,
    "shares": 79391,
    "comments": 27448
}, {
    "id": 20,
    "title": "dolore ethical Banjo anim",
    "artist": "Beyonce",
    "genre": "HipHop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532644022041,
    "plays": 605283272,
    "likes": 5798248,
    "shares": 57429,
    "comments": 52104
}, {
    "id": 21,
    "title": "est blog bag tote",
    "artist": "Ella Vos",
    "genre": "Rock",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532644022041,
    "plays": 859048739,
    "likes": 4567132,
    "shares": 75113,
    "comments": 48840
}, {
    "id": 22,
    "title": "YOLO schlitz austin ad",
    "artist": "Sam Smith",
    "genre": "Electronic",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532644022041,
    "plays": 285745434,
    "likes": 4831966,
    "shares": 38346,
    "comments": 10363
}, {
    "id": 23,
    "title": "shoreditch occaecat ethical pop-up",
    "artist": "Oh Wonder",
    "genre": "Blues",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532644022041,
    "plays": 349521943,
    "likes": 7056615,
    "shares": 52970,
    "comments": 63707
}, {
    "id": 24,
    "title": "stumptown Taiyaki v deep",
    "artist": "BB King",
    "genre": "Country",
    "album": "Singin the Blues",
    "albumArt": "BBKing_SinginTheBlues.jpg",
    "createdAt": 1532644022041,
    "plays": 360580948,
    "likes": 7778945,
    "shares": 70765,
    "comments": 2726
}, {
    "id": 25,
    "title": "waistcoat tumblr wolf Disrupt",
    "artist": "Ella Vos",
    "genre": "Jazz",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532644022041,
    "plays": 915955734,
    "likes": 2500734,
    "shares": 12495,
    "comments": 68789
}, {
    "id": 26,
    "title": "ea kitsch readymade williamsburg",
    "artist": "Lindsey Stirling",
    "genre": "Pop",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 951384616,
    "likes": 4023906,
    "shares": 22986,
    "comments": 59696
}, {
    "id": 27,
    "title": "officia et tilde tacos",
    "artist": "Ella Vos",
    "genre": "R&B",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532644022041,
    "plays": 756767825,
    "likes": 6058908,
    "shares": 95400,
    "comments": 13092
}, {
    "id": 28,
    "title": "gochujang Culpa cardigan selvage",
    "artist": "Backstreet Boys",
    "genre": "Electronic",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532644022041,
    "plays": 773377139,
    "likes": 9009460,
    "shares": 55033,
    "comments": 47015
}, {
    "id": 29,
    "title": "tilde knausgaard Aliqua in",
    "artist": "Daughter",
    "genre": "Rock",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532644022041,
    "plays": 657750156,
    "likes": 9144409,
    "shares": 22293,
    "comments": 41843
}, {
    "id": 30,
    "title": "polaroid disrupt cillum selfies",
    "artist": "Birdy",
    "genre": "Pop",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532644022041,
    "plays": 658634489,
    "likes": 535144,
    "shares": 86219,
    "comments": 33926
}, {
    "id": 31,
    "title": "coffee Single-origin pop-up cronut",
    "artist": "Sam Smith",
    "genre": "Country",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532644022041,
    "plays": 250234333,
    "likes": 2418158,
    "shares": 83375,
    "comments": 69646
}, {
    "id": 32,
    "title": "austin esse book Coloring",
    "artist": "Ed Sheeran",
    "genre": "Country",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532644022041,
    "plays": 742598038,
    "likes": 8347063,
    "shares": 35650,
    "comments": 84056
}, {
    "id": 33,
    "title": "mug copper ramps distillery",
    "artist": "Marian Hill",
    "genre": "Pop",
    "album": "Sway",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 371683106,
    "likes": 9676365,
    "shares": 62415,
    "comments": 12771
}, {
    "id": 34,
    "title": "sunt authentic skateboard gochujang",
    "artist": "Sam Smith",
    "genre": "HipHop",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532644022041,
    "plays": 319623043,
    "likes": 7301767,
    "shares": 49416,
    "comments": 66334
}, {
    "id": 35,
    "title": "do kickstarter truck Food",
    "artist": "Michael Jackson",
    "genre": "Blues",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532644022041,
    "plays": 615770873,
    "likes": 2397412,
    "shares": 74316,
    "comments": 22520
}, {
    "id": 36,
    "title": "hammock williamsburg raclette ex",
    "artist": "Phoenix",
    "genre": "Pop",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532644022041,
    "plays": 660959397,
    "likes": 2633549,
    "shares": 58067,
    "comments": 56394
}, {
    "id": 37,
    "title": "venmo cold-pressed scenester deserunt",
    "artist": "Daughter",
    "genre": "Blues",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532644022041,
    "plays": 762071381,
    "likes": 6814113,
    "shares": 94868,
    "comments": 50535
}, {
    "id": 38,
    "title": "succulents try-hard YOLO Pinterest",
    "artist": "Oh Wonder",
    "genre": "HipHop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532644022041,
    "plays": 809748855,
    "likes": 936840,
    "shares": 9062,
    "comments": 33555
}, {
    "id": 39,
    "title": "velit ut helvetica synth",
    "artist": "Rick Astley",
    "genre": "R&B",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532644022041,
    "plays": 100086780,
    "likes": 8495703,
    "shares": 41448,
    "comments": 87434
}, {
    "id": 40,
    "title": "+1 mug copper readymade",
    "artist": "Ella Vos",
    "genre": "Rock",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532644022041,
    "plays": 660503155,
    "likes": 8251319,
    "shares": 23494,
    "comments": 689
}, {
    "id": 41,
    "title": "aliqua santo palo incididunt",
    "artist": "Lindsey Stirling",
    "genre": "Electronic",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 75451695,
    "likes": 2609345,
    "shares": 6943,
    "comments": 19145
}, {
    "id": 42,
    "title": "Cronut cardigan literally excepteur",
    "artist": "The Chainsmokers",
    "genre": "Pop",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532644022041,
    "plays": 251718237,
    "likes": 3099280,
    "shares": 54863,
    "comments": 28498
}, {
    "id": 43,
    "title": "pack fanny hoodie scenester",
    "artist": "Beyonce",
    "genre": "Pop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532644022041,
    "plays": 516747135,
    "likes": 3388410,
    "shares": 1722,
    "comments": 80510
}, {
    "id": 44,
    "title": "Narwhal lomo consectetur occupy",
    "artist": "Sam Smith",
    "genre": "Jazz",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532644022041,
    "plays": 777081608,
    "likes": 7014595,
    "shares": 52085,
    "comments": 59059
}, {
    "id": 45,
    "title": "williamsburg locavore pug Synth",
    "artist": "Backstreet Boys",
    "genre": "HipHop",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532644022041,
    "plays": 67857027,
    "likes": 7756849,
    "shares": 38694,
    "comments": 84614
}, {
    "id": 46,
    "title": "meditation twee incididunt helvetica",
    "artist": "Sam Smith",
    "genre": "Pop",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532644022041,
    "plays": 376789556,
    "likes": 9612105,
    "shares": 52249,
    "comments": 8617
}, {
    "id": 47,
    "title": "offal truck Food ea",
    "artist": "Rick Astley",
    "genre": "Jazz",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532644022041,
    "plays": 800308434,
    "likes": 4773456,
    "shares": 95184,
    "comments": 66349
}, {
    "id": 48,
    "title": "literally est santo palo",
    "artist": "Elvis",
    "genre": "Rock",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "createdAt": 1532644022041,
    "plays": 627238246,
    "likes": 1822253,
    "shares": 36048,
    "comments": 38898
}, {
    "id": 49,
    "title": "cupidatat lyft meditation them",
    "artist": "Birdy",
    "genre": "HipHop",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532644022041,
    "plays": 437654096,
    "likes": 9734119,
    "shares": 27178,
    "comments": 85777
}, {
    "id": 50,
    "title": "of heard haven't probably",
    "artist": "Sia",
    "genre": "Country",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "createdAt": 1532644022041,
    "plays": 154847944,
    "likes": 9040137,
    "shares": 76982,
    "comments": 40642
}, {
    "id": 51,
    "title": "you cred ramps denim",
    "artist": "Oh Wonder",
    "genre": "HipHop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532644022041,
    "plays": 938662609,
    "likes": 1663050,
    "shares": 33913,
    "comments": 19988
}, {
    "id": 52,
    "title": "raw chambray marfa Thundercats",
    "artist": "Birdy",
    "genre": "Electronic",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532644022041,
    "plays": 684632265,
    "likes": 7791084,
    "shares": 16442,
    "comments": 4841
}, {
    "id": 53,
    "title": "polaroid pinterest gastropub in",
    "artist": "Birdy",
    "genre": "Country",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532644022041,
    "plays": 571665681,
    "likes": 3767316,
    "shares": 87521,
    "comments": 64609
}, {
    "id": 54,
    "title": "seitan plaid aliquip bag",
    "artist": "Ella Vos",
    "genre": "Country",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532644022041,
    "plays": 832142361,
    "likes": 1949649,
    "shares": 76018,
    "comments": 59674
}, {
    "id": 55,
    "title": "tote slow-carb truck food",
    "artist": "Michael Jackson",
    "genre": "Rock",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532644022041,
    "plays": 689741397,
    "likes": 1932295,
    "shares": 70022,
    "comments": 87709
}, {
    "id": 56,
    "title": "In truck food bulb",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532644022041,
    "plays": 869637790,
    "likes": 5637599,
    "shares": 16473,
    "comments": 98045
}, {
    "id": 57,
    "title": "edison +1 YOLO goth",
    "artist": "The Beatles",
    "genre": "R&B",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532644022041,
    "plays": 282216721,
    "likes": 4902825,
    "shares": 60324,
    "comments": 2958
}, {
    "id": 58,
    "title": "health out sold they",
    "artist": "Beyonce",
    "genre": "R&B",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532644022041,
    "plays": 366182079,
    "likes": 8179303,
    "shares": 33760,
    "comments": 44914
}, {
    "id": 59,
    "title": "before Keytar paleo tilde",
    "artist": "Daughter",
    "genre": "Blues",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532644022041,
    "plays": 295192739,
    "likes": 602874,
    "shares": 90518,
    "comments": 39761
}, {
    "id": 60,
    "title": "chicharrones croix la seitan",
    "artist": "The Chainsmokers",
    "genre": "Country",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532644022041,
    "plays": 99762336,
    "likes": 9039407,
    "shares": 83293,
    "comments": 48333
}, {
    "id": 61,
    "title": "ea bag tote intelligentsia",
    "artist": "Marian Hill",
    "genre": "Pop",
    "album": "Sway",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 348298930,
    "likes": 7361941,
    "shares": 72711,
    "comments": 65229
}, {
    "id": 62,
    "title": "hexagon dolor flexitarian Cillum",
    "artist": "Ella Vos",
    "genre": "R&B",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532644022041,
    "plays": 494602274,
    "likes": 8567492,
    "shares": 96563,
    "comments": 8905
}, {
    "id": 63,
    "title": "eiusmod truffaut ut ea",
    "artist": "Lindsey Stirling",
    "genre": "Pop",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 669790572,
    "likes": 4684615,
    "shares": 35550,
    "comments": 50329
}, {
    "id": 64,
    "title": "artisan viral esse tbh",
    "artist": "Oh Wonder",
    "genre": "HipHop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532644022041,
    "plays": 47255888,
    "likes": 7020820,
    "shares": 33443,
    "comments": 3542
}, {
    "id": 65,
    "title": "Humblebrag skateboard celiac axe",
    "artist": "Oh Wonder",
    "genre": "R&B",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532644022041,
    "plays": 256381816,
    "likes": 342044,
    "shares": 10747,
    "comments": 39995
}, {
    "id": 66,
    "title": "fashion cillum croix la",
    "artist": "Marian Hill",
    "genre": "Pop",
    "album": "Sway",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 258764141,
    "likes": 4427831,
    "shares": 42961,
    "comments": 15408
}, {
    "id": 67,
    "title": "chicken hot aute pok",
    "artist": "Marian Hill",
    "genre": "R&B",
    "album": "Sway",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 573133212,
    "likes": 2628834,
    "shares": 99897,
    "comments": 17161
}, {
    "id": 68,
    "title": "pok live-edge tempor ea",
    "artist": "Rick Astley",
    "genre": "Blues",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532644022041,
    "plays": 756521469,
    "likes": 9674258,
    "shares": 40205,
    "comments": 37063
}, {
    "id": 69,
    "title": "in godard bread Cloud",
    "artist": "Panic at the Disco",
    "genre": "Country",
    "album": "A Fever You Cant Sweat Out",
    "albumArt": "PanicAtTheDisco_AFeverYouCantSweatOut.jpg",
    "createdAt": 1532644022041,
    "plays": 462322772,
    "likes": 9388286,
    "shares": 90480,
    "comments": 49435
}, {
    "id": 70,
    "title": "poke squid belly pork",
    "artist": "Elvis",
    "genre": "Rock",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "createdAt": 1532644022041,
    "plays": 437330501,
    "likes": 9154915,
    "shares": 53864,
    "comments": 13628
}, {
    "id": 71,
    "title": "af viral prism 8-bit",
    "artist": "Rick Astley",
    "genre": "Country",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532644022041,
    "plays": 432064760,
    "likes": 159910,
    "shares": 76052,
    "comments": 88276
}, {
    "id": 72,
    "title": "chambray bag messenger aliqua",
    "artist": "Ed Sheeran",
    "genre": "Rock",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532644022041,
    "plays": 58342316,
    "likes": 6965951,
    "shares": 3967,
    "comments": 30366
}, {
    "id": 73,
    "title": "glossier mixtape juice Green",
    "artist": "The Beatles",
    "genre": "Country",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532644022041,
    "plays": 253436555,
    "likes": 2043364,
    "shares": 87622,
    "comments": 42976
}, {
    "id": 74,
    "title": "commodo park echo fingerstache",
    "artist": "Sam Smith",
    "genre": "Jazz",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532644022041,
    "plays": 587344299,
    "likes": 735730,
    "shares": 11442,
    "comments": 55113
}, {
    "id": 75,
    "title": "ad biodiesel chicharrones taiyaki",
    "artist": "Backstreet Boys",
    "genre": "Electronic",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532644022041,
    "plays": 200986174,
    "likes": 445395,
    "shares": 20369,
    "comments": 16048
}, {
    "id": 76,
    "title": "offal lo-fi adaptogen cliche",
    "artist": "Beyonce",
    "genre": "Rock",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532644022041,
    "plays": 884946232,
    "likes": 4479341,
    "shares": 17058,
    "comments": 79229
}, {
    "id": 77,
    "title": "fam Listicle laborum kickstarter",
    "artist": "Phoenix",
    "genre": "Rock",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532644022041,
    "plays": 516758841,
    "likes": 7639589,
    "shares": 67522,
    "comments": 5769
}, {
    "id": 78,
    "title": "truffaut bottle blue banjo",
    "artist": "Ed Sheeran",
    "genre": "Pop",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532644022041,
    "plays": 194924808,
    "likes": 5954431,
    "shares": 973,
    "comments": 57863
}, {
    "id": 79,
    "title": "kogi Post-ironic crucifix yr",
    "artist": "Jasmine Thompson",
    "genre": "Jazz",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532644022041,
    "plays": 556754230,
    "likes": 4740175,
    "shares": 68689,
    "comments": 2963
}, {
    "id": 80,
    "title": "biodiesel godard truffaut af",
    "artist": "Beyonce",
    "genre": "Pop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532644022041,
    "plays": 281359545,
    "likes": 7778104,
    "shares": 28056,
    "comments": 85490
}, {
    "id": 81,
    "title": "tousled Vexillologist level next",
    "artist": "Ed Sheeran",
    "genre": "R&B",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532644022041,
    "plays": 909366351,
    "likes": 2941744,
    "shares": 38325,
    "comments": 83898
}, {
    "id": 82,
    "title": "est prism tofu bespoke",
    "artist": "Oh Wonder",
    "genre": "Pop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532644022041,
    "plays": 584411115,
    "likes": 7558575,
    "shares": 18334,
    "comments": 88298
}, {
    "id": 83,
    "title": "polaroid asymmetrical magna kombucha",
    "artist": "Dead Kennedys",
    "genre": "HipHop",
    "album": "Give Me Convenience or Give Me Death",
    "albumArt": "DeadKennedys_GiveMeConvenienceorGiveMeDeath.jpg",
    "createdAt": 1532644022041,
    "plays": 346432306,
    "likes": 2169616,
    "shares": 73954,
    "comments": 39091
}, {
    "id": 84,
    "title": "aute cornhole belly Pork",
    "artist": "Marian Hill",
    "genre": "R&B",
    "album": "Sway",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 58116946,
    "likes": 94134,
    "shares": 12467,
    "comments": 61939
}, {
    "id": 85,
    "title": "woke shorts jean vegan",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532644022041,
    "plays": 652930150,
    "likes": 3497223,
    "shares": 71425,
    "comments": 39186
}, {
    "id": 86,
    "title": "denim raw anim irony",
    "artist": "Birdy",
    "genre": "HipHop",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532644022041,
    "plays": 896481943,
    "likes": 1073601,
    "shares": 51253,
    "comments": 58798
}, {
    "id": 87,
    "title": "kitsch cardigan tacos ugh",
    "artist": "Rick Astley",
    "genre": "Country",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532644022041,
    "plays": 896301129,
    "likes": 983999,
    "shares": 31290,
    "comments": 96553
}, {
    "id": 88,
    "title": "crucifix excepteur Pug in",
    "artist": "The Beatles",
    "genre": "Electronic",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532644022041,
    "plays": 338816562,
    "likes": 5651802,
    "shares": 15534,
    "comments": 47447
}, {
    "id": 89,
    "title": "ethical goth health bushwick",
    "artist": "Birdy",
    "genre": "Rock",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532644022041,
    "plays": 167053084,
    "likes": 8514862,
    "shares": 83168,
    "comments": 36726
}, {
    "id": 90,
    "title": "retro Duis pack fanny",
    "artist": "Oh Wonder",
    "genre": "Electronic",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532644022041,
    "plays": 707157410,
    "likes": 2557438,
    "shares": 35190,
    "comments": 7410
}, {
    "id": 91,
    "title": "lorem carry everyday +1",
    "artist": "Sia",
    "genre": "Electronic",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "createdAt": 1532644022041,
    "plays": 5098164,
    "likes": 5101512,
    "shares": 69885,
    "comments": 22799
}, {
    "id": 92,
    "title": "Jianbing celiac them of",
    "artist": "Michael Jackson",
    "genre": "Jazz",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532644022041,
    "plays": 347694836,
    "likes": 3329506,
    "shares": 58348,
    "comments": 6510
}, {
    "id": 93,
    "title": "heard haven't probably you",
    "artist": "Panic at the Disco",
    "genre": "Jazz",
    "album": "A Fever You Cant Sweat Out",
    "albumArt": "PanicAtTheDisco_AFeverYouCantSweatOut.jpg",
    "createdAt": 1532644022041,
    "plays": 308365978,
    "likes": 8551329,
    "shares": 7909,
    "comments": 88464
}, {
    "id": 94,
    "title": "charcoal activated quis Snackwave",
    "artist": "Phoenix",
    "genre": "Rock",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532644022041,
    "plays": 467155973,
    "likes": 4570525,
    "shares": 14263,
    "comments": 83944
}, {
    "id": 95,
    "title": "carry everyday forage slow-carb",
    "artist": "Beyonce",
    "genre": "R&B",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532644022041,
    "plays": 6325686,
    "likes": 8690447,
    "shares": 37832,
    "comments": 67601
}, {
    "id": 96,
    "title": "Wolf church-key lumbersexual pok",
    "artist": "Marian Hill",
    "genre": "Rock",
    "album": "Sway",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 822444958,
    "likes": 6796890,
    "shares": 35841,
    "comments": 59603
}, {
    "id": 97,
    "title": "pok braid man Do",
    "artist": "Oh Wonder",
    "genre": "Rock",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532644022041,
    "plays": 78500043,
    "likes": 2374037,
    "shares": 84282,
    "comments": 850
}, {
    "id": 98,
    "title": "glossier umami chambray cold-pressed",
    "artist": "Jasmine Thompson",
    "genre": "Electronic",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532644022041,
    "plays": 676196393,
    "likes": 8971406,
    "shares": 37365,
    "comments": 45163
}, {
    "id": 99,
    "title": "mumblecore Hammock fixie bag",
    "artist": "The Beatles",
    "genre": "HipHop",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532644022041,
    "plays": 483778280,
    "likes": 4708290,
    "shares": 34753,
    "comments": 76580
}, {
    "id": 100,
    "title": "tote whatever meggings booth",
    "artist": "Ed Sheeran",
    "genre": "Pop",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532644022041,
    "plays": 599348701,
    "likes": 7354990,
    "shares": 72837,
    "comments": 51853
}, {
    "id": 101,
    "title": "photo ea nisi literally",
    "artist": "The Beatles",
    "genre": "R&B",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532644022041,
    "plays": 233192020,
    "likes": 7901116,
    "shares": 71521,
    "comments": 93717
}, {
    "id": 102,
    "title": "gluten-free Mixtape id polaroid",
    "artist": "BB King",
    "genre": "Jazz",
    "album": "Singin the Blues",
    "albumArt": "BBKing_SinginTheBlues.jpg",
    "createdAt": 1532644022041,
    "plays": 657767347,
    "likes": 2630533,
    "shares": 10899,
    "comments": 91048
}, {
    "id": 103,
    "title": "hoodie minim celiac biodiesel",
    "artist": "Ed Sheeran",
    "genre": "Electronic",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532644022041,
    "plays": 768156523,
    "likes": 3507812,
    "shares": 19536,
    "comments": 49220
}, {
    "id": 104,
    "title": "goth health XOXO bespoke",
    "artist": "The Chainsmokers",
    "genre": "Country",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532644022041,
    "plays": 541837546,
    "likes": 473202,
    "shares": 81540,
    "comments": 40978
}, {
    "id": 105,
    "title": "authentic laborum Beard adaptogen",
    "artist": "The Chainsmokers",
    "genre": "Jazz",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532644022041,
    "plays": 501213193,
    "likes": 2896893,
    "shares": 20806,
    "comments": 68740
}, {
    "id": 106,
    "title": "ethical cronut plaid mollit",
    "artist": "Ella Vos",
    "genre": "Country",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532644022041,
    "plays": 914546183,
    "likes": 7769067,
    "shares": 65777,
    "comments": 73584
}, {
    "id": 107,
    "title": "beard qui pug non",
    "artist": "Sia",
    "genre": "Jazz",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "createdAt": 1532644022041,
    "plays": 701060103,
    "likes": 8810335,
    "shares": 96879,
    "comments": 13751
}, {
    "id": 108,
    "title": "mi banh selfies Crucifix",
    "artist": "Marian Hill",
    "genre": "HipHop",
    "album": "Sway",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 626963831,
    "likes": 5149170,
    "shares": 55806,
    "comments": 22057
}, {
    "id": 109,
    "title": "kogi aute normcore sed",
    "artist": "The Chainsmokers",
    "genre": "Rock",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532644022041,
    "plays": 623932489,
    "likes": 4390821,
    "shares": 21475,
    "comments": 35997
}, {
    "id": 110,
    "title": "Dolore cupidatat vinegar drinking",
    "artist": "Oh Wonder",
    "genre": "R&B",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532644022041,
    "plays": 773252563,
    "likes": 293132,
    "shares": 61036,
    "comments": 10483
}, {
    "id": 111,
    "title": "unicorn Pug do of",
    "artist": "Panic at the Disco",
    "genre": "Rock",
    "album": "A Fever You Cant Sweat Out",
    "albumArt": "PanicAtTheDisco_AFeverYouCantSweatOut.jpg",
    "createdAt": 1532644022041,
    "plays": 704601134,
    "likes": 2289872,
    "shares": 6658,
    "comments": 82472
}, {
    "id": 112,
    "title": "hell et loko four",
    "artist": "The Chainsmokers",
    "genre": "Electronic",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532644022041,
    "plays": 914813018,
    "likes": 7358265,
    "shares": 76292,
    "comments": 63394
}, {
    "id": 113,
    "title": "fam bread cloud culpa",
    "artist": "Elvis",
    "genre": "Rock",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "createdAt": 1532644022041,
    "plays": 530715424,
    "likes": 170993,
    "shares": 13554,
    "comments": 35003
}, {
    "id": 114,
    "title": "ea knausgaard Sunt VHS",
    "artist": "The Beatles",
    "genre": "HipHop",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532644022041,
    "plays": 129295337,
    "likes": 3858268,
    "shares": 5826,
    "comments": 60870
}, {
    "id": 115,
    "title": "disrupt 8-bit waistcoat hoodie",
    "artist": "Phoenix",
    "genre": "R&B",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532644022041,
    "plays": 531612519,
    "likes": 3474064,
    "shares": 4855,
    "comments": 10043
}, {
    "id": 116,
    "title": "deserunt YOLO trade direct",
    "artist": "Ed Sheeran",
    "genre": "Blues",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532644022041,
    "plays": 979364163,
    "likes": 5859453,
    "shares": 54259,
    "comments": 55764
}, {
    "id": 117,
    "title": "laborum moon wolf 3",
    "artist": "Michael Jackson",
    "genre": "Electronic",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532644022041,
    "plays": 173649770,
    "likes": 6834234,
    "shares": 61834,
    "comments": 60706
}, {
    "id": 118,
    "title": "truffaut croix la forage",
    "artist": "Backstreet Boys",
    "genre": "Country",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532644022041,
    "plays": 465280237,
    "likes": 3095498,
    "shares": 56032,
    "comments": 34911
}, {
    "id": 119,
    "title": "Chicharrones tofu lo-fi hashtag",
    "artist": "Beyonce",
    "genre": "Electronic",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532644022041,
    "plays": 284470854,
    "likes": 1514943,
    "shares": 2201,
    "comments": 54224
}, {
    "id": 120,
    "title": "it on bird a",
    "artist": "Backstreet Boys",
    "genre": "R&B",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532644022041,
    "plays": 688568822,
    "likes": 7434626,
    "shares": 48541,
    "comments": 69741
}, {
    "id": 121,
    "title": "put normcore aliquip franzen",
    "artist": "Sia",
    "genre": "Pop",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "createdAt": 1532644022041,
    "plays": 401565217,
    "likes": 6957102,
    "shares": 81284,
    "comments": 57601
}, {
    "id": 122,
    "title": "Aute kickstarter butcher excepteur",
    "artist": "The Chainsmokers",
    "genre": "Blues",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532644022041,
    "plays": 94098068,
    "likes": 4911388,
    "shares": 77959,
    "comments": 8613
}, {
    "id": 123,
    "title": "marfa bottle blue retro",
    "artist": "The Chainsmokers",
    "genre": "Pop",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532644022041,
    "plays": 937551539,
    "likes": 8982053,
    "shares": 58958,
    "comments": 96057
}, {
    "id": 124,
    "title": "bespoke forage do Authentic",
    "artist": "Lindsey Stirling",
    "genre": "R&B",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 830687220,
    "likes": 88505,
    "shares": 54670,
    "comments": 79692
}, {
    "id": 125,
    "title": "trade direct belly pork",
    "artist": "The Chainsmokers",
    "genre": "Electronic",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532644022041,
    "plays": 815903358,
    "likes": 8341154,
    "shares": 82117,
    "comments": 74538
}, {
    "id": 126,
    "title": "chillwave sriracha Gastropub snackwave",
    "artist": "Ed Sheeran",
    "genre": "HipHop",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532644022041,
    "plays": 856801637,
    "likes": 791277,
    "shares": 18638,
    "comments": 66434
}, {
    "id": 127,
    "title": "juice green proident tousled",
    "artist": "Sam Smith",
    "genre": "R&B",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532644022041,
    "plays": 441733715,
    "likes": 4162409,
    "shares": 73878,
    "comments": 64354
}, {
    "id": 128,
    "title": "bulb edison forage them",
    "artist": "Phoenix",
    "genre": "HipHop",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532644022041,
    "plays": 407133995,
    "likes": 691709,
    "shares": 3177,
    "comments": 29586
}, {
    "id": 129,
    "title": "of heard haven't probably",
    "artist": "Marian Hill",
    "genre": "Jazz",
    "album": "Sway",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532644022041,
    "plays": 501791269,
    "likes": 3532942,
    "shares": 92596,
    "comments": 63457
}, {
    "id": 130,
    "title": "you elit cronut ad",
    "artist": "Ed Sheeran",
    "genre": "Rock",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532644022041,
    "plays": 31116895,
    "likes": 2220193,
    "shares": 76440,
    "comments": 25256
}, {
    "id": 131,
    "title": "pug wolf gentrify iPhone",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532644022041,
    "plays": 790634473,
    "likes": 1345073,
    "shares": 18638,
    "comments": 94446
}, {
    "id": 132,
    "title": "Reprehenderit park echo squid",
    "artist": "Rick Astley",
    "genre": "HipHop",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532644022041,
    "plays": 978784292,
    "likes": 4818397,
    "shares": 94549,
    "comments": 29305
}, {
    "id": 133,
    "title": "ennui etsy sartorial adipisicing",
    "artist": "Michael Jackson",
    "genre": "HipHop",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532644022041,
    "plays": 60463870,
    "likes": 9524018,
    "shares": 50162,
    "comments": 67909
}, {
    "id": 134,
    "title": "crucifix non Marfa vice",
    "artist": "Beyonce",
    "genre": "Rock",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532644022041,
    "plays": 721121631,
    "likes": 9984639,
    "shares": 14570,
    "comments": 78494
}, {
    "id": 135,
    "title": "chartreuse qui sartorial blog",
    "artist": "Ella Vos",
    "genre": "Rock",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532644022041,
    "plays": 921499508,
    "likes": 7583563,
    "shares": 11403,
    "comments": 68321
}, {
    "id": 136,
    "title": "DIY plaid laborum cronut",
    "artist": "Daughter",
    "genre": "Pop",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532644022041,
    "plays": 173424943,
    "likes": 1993388,
    "shares": 52301,
    "comments": 20870
}, {
    "id": 137,
    "title": "Consequat tumblr enim culpa",
    "artist": "Daughter",
    "genre": "Country",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532644022041,
    "plays": 81719206,
    "likes": 6653062,
    "shares": 74802,
    "comments": 8368
}, {
    "id": 138,
    "title": "esse microdosing quinoa lorem",
    "artist": "Michael Jackson",
    "genre": "Jazz",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532644022041,
    "plays": 46318390,
    "likes": 9336021,
    "shares": 94543,
    "comments": 48266
}, {
    "id": 139,
    "title": "truck food bag tote",
    "artist": "Ed Sheeran",
    "genre": "Blues",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532644022041,
    "plays": 353930494,
    "likes": 6668230,
    "shares": 9500,
    "comments": 84336
}, {
    "id": 140,
    "title": "keffiyeh kickstarter church-key Freegan",
    "artist": "Rick Astley",
    "genre": "Pop",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532644022041,
    "plays": 957912829,
    "likes": 6113237,
    "shares": 70188,
    "comments": 8184
}]


