const users = [
  {
    id: 1,
    fullName: "Klarika Arling",
    fullMobileNumber: "+53 551 534 4518",
    email: "karling0@de.vu",
    signupDate: "2022/08/01",
  },
  {
    id: 2,
    fullName: "Calvin Gittoes",
    fullMobileNumber: "+86 572 742 9692",
    email: "cgittoes1@google.ru",
    signupDate: "2023/04/24",
  },
  {
    id: 3,
    fullName: "Bowie Sterley",
    fullMobileNumber: "+53 856 276 8390",
    email: "bsterley2@artisteer.com",
    signupDate: "2022/11/12",
  },
  {
    id: 4,
    fullName: "Fidel Aspell",
    fullMobileNumber: "+55 471 144 0910",
    email: "faspell3@gov.uk",
    signupDate: "2023/01/26",
  },
  {
    id: 5,
    fullName: "Bee Ballach",
    fullMobileNumber: "+212 382 913 8572",
    email: "bballach4@arizona.edu",
    signupDate: "2023/01/13",
  },
  {
    id: 6,
    fullName: "Haleigh Kiljan",
    fullMobileNumber: "+51 493 627 7297",
    email: "hkiljan5@wsj.com",
    signupDate: "2022/08/22",
  },
  {
    id: 7,
    fullName: "Noella Grout",
    fullMobileNumber: "+1 310 204 5468",
    email: "ngrout6@abc.net.au",
    signupDate: "2023/03/18",
  },
  {
    id: 8,
    fullName: "Alejandra Mecchi",
    fullMobileNumber: "+62 823 186 8795",
    email: "amecchi7@guardian.co.uk",
    signupDate: "2023/04/01",
  },
  {
    id: 9,
    fullName: "Aile Westmerland",
    fullMobileNumber: "+234 108 448 5242",
    email: "awestmerland8@virginia.edu",
    signupDate: "2023/06/17",
  },
  {
    id: 10,
    fullName: "Charin Patron",
    fullMobileNumber: "+66 963 968 0727",
    email: "cpatron9@paginegialle.it",
    signupDate: "2022/12/18",
  },
  {
    id: 11,
    fullName: "Bee Bartel",
    fullMobileNumber: "+86 420 677 7973",
    email: "bbartela@biglobe.ne.jp",
    signupDate: "2022/11/03",
  },
  {
    id: 12,
    fullName: "Gregoire Theuff",
    fullMobileNumber: "+86 726 173 9830",
    email: "gtheuffb@cbc.ca",
    signupDate: "2022/09/05",
  },
  {
    id: 13,
    fullName: "Klement Gawthorpe",
    fullMobileNumber: "+58 545 459 7461",
    email: "kgawthorpec@hp.com",
    signupDate: "2023/03/15",
  },
  {
    id: 14,
    fullName: "Leora Bresman",
    fullMobileNumber: "+52 312 855 9215",
    email: "lbresmand@blogspot.com",
    signupDate: "2023/02/04",
  },
  {
    id: 15,
    fullName: "Bryna Tipper",
    fullMobileNumber: "+86 407 570 7319",
    email: "btippere@newsvine.com",
    signupDate: "2022/09/19",
  },
  {
    id: 16,
    fullName: "Billie Jeanneau",
    fullMobileNumber: "+86 293 101 6106",
    email: "bjeanneauf@walmart.com",
    signupDate: "2022/08/30",
  },
  {
    id: 17,
    fullName: "Page Viccary",
    fullMobileNumber: "+7 701 865 0727",
    email: "pviccaryg@auda.org.au",
    signupDate: "2022/12/11",
  },
  {
    id: 18,
    fullName: "Tomasine Libbe",
    fullMobileNumber: "+86 473 453 4595",
    email: "tlibbeh@google.pl",
    signupDate: "2022/08/17",
  },
  {
    id: 19,
    fullName: "Angelo Felder",
    fullMobileNumber: "+381 569 724 9495",
    email: "afelderi@icio.us",
    signupDate: "2023/03/23",
  },
  {
    id: 20,
    fullName: "Donovan Theurer",
    fullMobileNumber: "+7 861 324 6521",
    email: "dtheurerj@dot.gov",
    signupDate: "2022/09/06",
  },
  {
    id: 21,
    fullName: "Maribelle Tomini",
    fullMobileNumber: "+1 334 454 2570",
    email: "mtominik@youtube.com",
    signupDate: "2023/07/28",
  },
  {
    id: 22,
    fullName: "Barbabra Crouch",
    fullMobileNumber: "+86 856 301 2582",
    email: "bcrouchl@accuweather.com",
    signupDate: "2023/03/31",
  },
  {
    id: 23,
    fullName: "Prentiss Rableau",
    fullMobileNumber: "+33 204 514 4591",
    email: "prableaum@i2i.jp",
    signupDate: "2022/11/23",
  },
  {
    id: 24,
    fullName: "Mareah Germon",
    fullMobileNumber: "+52 622 324 3634",
    email: "mgermonn@google.pl",
    signupDate: "2023/02/13",
  },
  {
    id: 25,
    fullName: "Patten O'Dunniom",
    fullMobileNumber: "+963 580 400 1680",
    email: "podunniomo@xrea.com",
    signupDate: "2023/01/15",
  },
  {
    id: 26,
    fullName: "Noella Stepney",
    fullMobileNumber: "+95 544 487 0052",
    email: "nstepneyp@nsw.gov.au",
    signupDate: "2023/01/18",
  },
  {
    id: 27,
    fullName: "Dav Chirm",
    fullMobileNumber: "+389 469 866 4861",
    email: "dchirmq@comsenz.com",
    signupDate: "2023/01/23",
  },
  {
    id: 28,
    fullName: "Chelsae Borzoni",
    fullMobileNumber: "+48 539 265 0260",
    email: "cborzonir@com.com",
    signupDate: "2023/02/17",
  },
  {
    id: 29,
    fullName: "Sinclare Spottswood",
    fullMobileNumber: "+86 403 935 2512",
    email: "sspottswoods@com.com",
    signupDate: "2022/10/22",
  },
  {
    id: 30,
    fullName: "Gweneth Duggleby",
    fullMobileNumber: "+62 853 351 1039",
    email: "gdugglebyt@usatoday.com",
    signupDate: "2023/01/27",
  },
  {
    id: 31,
    fullName: "Sarene Tollfree",
    fullMobileNumber: "+86 180 615 7095",
    email: "stollfreeu@netscape.com",
    signupDate: "2022/08/21",
  },
  {
    id: 32,
    fullName: "Florette Tustin",
    fullMobileNumber: "+58 556 852 6988",
    email: "ftustinv@stanford.edu",
    signupDate: "2023/06/12",
  },
  {
    id: 33,
    fullName: "Agata McGarva",
    fullMobileNumber: "+63 557 810 5287",
    email: "amcgarvaw@unicef.org",
    signupDate: "2023/06/30",
  },
  {
    id: 34,
    fullName: "Elysee Grimoldby",
    fullMobileNumber: "+62 925 535 8434",
    email: "egrimoldbyx@amazon.de",
    signupDate: "2023/01/16",
  },
  {
    id: 35,
    fullName: "Kerry Wille",
    fullMobileNumber: "+86 224 548 1638",
    email: "kwilley@alexa.com",
    signupDate: "2022/08/21",
  },
  {
    id: 36,
    fullName: "Gray Finnis",
    fullMobileNumber: "+57 596 207 4548",
    email: "gfinnisz@hc360.com",
    signupDate: "2022/09/28",
  },
  {
    id: 37,
    fullName: "Maitilde Simonato",
    fullMobileNumber: "+51 786 959 5032",
    email: "msimonato10@hud.gov",
    signupDate: "2022/09/03",
  },
  {
    id: 38,
    fullName: "Lindy Petrou",
    fullMobileNumber: "+352 234 377 1758",
    email: "lpetrou11@wufoo.com",
    signupDate: "2023/05/03",
  },
  {
    id: 39,
    fullName: "Elianora Perotti",
    fullMobileNumber: "+7 150 765 5313",
    email: "eperotti12@spotify.com",
    signupDate: "2022/08/24",
  },
  {
    id: 40,
    fullName: "Rolland Bazoche",
    fullMobileNumber: "+86 919 157 3469",
    email: "rbazoche13@scientificamerican.com",
    signupDate: "2023/06/25",
  },
  {
    id: 41,
    fullName: "Brose Bertram",
    fullMobileNumber: "+62 471 604 4388",
    email: "bbertram14@google.com.au",
    signupDate: "2023/05/19",
  },
  {
    id: 42,
    fullName: "Corry Petchey",
    fullMobileNumber: "+62 523 395 9133",
    email: "cpetchey15@ibm.com",
    signupDate: "2023/01/22",
  },
  {
    id: 43,
    fullName: "Gilles Klossmann",
    fullMobileNumber: "+51 710 273 6509",
    email: "gklossmann16@so-net.ne.jp",
    signupDate: "2023/04/24",
  },
  {
    id: 44,
    fullName: "Olivie Joust",
    fullMobileNumber: "+62 686 209 7546",
    email: "ojoust17@rakuten.co.jp",
    signupDate: "2023/06/21",
  },
  {
    id: 45,
    fullName: "Terza Freezor",
    fullMobileNumber: "+387 867 271 3769",
    email: "tfreezor18@washingtonpost.com",
    signupDate: "2022/08/01",
  },
  {
    id: 46,
    fullName: "Wilt Fairney",
    fullMobileNumber: "+86 960 600 5161",
    email: "wfairney19@imgur.com",
    signupDate: "2022/08/02",
  },
  {
    id: 47,
    fullName: "Germaine Merriton",
    fullMobileNumber: "+33 735 429 1145",
    email: "gmerriton1a@salon.com",
    signupDate: "2023/03/26",
  },
  {
    id: 48,
    fullName: "Elvina Soares",
    fullMobileNumber: "+86 178 918 3598",
    email: "esoares1b@msu.edu",
    signupDate: "2023/01/13",
  },
  {
    id: 49,
    fullName: "Jo-ann Bordone",
    fullMobileNumber: "+47 389 518 4939",
    email: "jbordone1c@booking.com",
    signupDate: "2023/07/22",
  },
  {
    id: 50,
    fullName: "Phil Zelland",
    fullMobileNumber: "+48 344 108 7918",
    email: "pzelland1d@rambler.ru",
    signupDate: "2023/02/18",
  },
  {
    id: 51,
    fullName: "Cosimo Sybbe",
    fullMobileNumber: "+62 379 674 1233",
    email: "csybbe1e@nydailynews.com",
    signupDate: "2022/08/23",
  },
  {
    id: 52,
    fullName: "Patty Everal",
    fullMobileNumber: "+55 588 175 2298",
    email: "peveral1f@bluehost.com",
    signupDate: "2022/11/04",
  },
  {
    id: 53,
    fullName: "Edith Widdowfield",
    fullMobileNumber: "+1 585 416 9147",
    email: "ewiddowfield1g@123-reg.co.uk",
    signupDate: "2023/07/28",
  },
  {
    id: 54,
    fullName: "Conni Scartifield",
    fullMobileNumber: "+994 610 157 2812",
    email: "cscartifield1h@nba.com",
    signupDate: "2022/10/17",
  },
  {
    id: 55,
    fullName: "Lorain Blowfelde",
    fullMobileNumber: "+48 557 156 3293",
    email: "lblowfelde1i@toplist.cz",
    signupDate: "2022/09/11",
  },
  {
    id: 56,
    fullName: "Jennee Pull",
    fullMobileNumber: "+353 182 896 7516",
    email: "jpull1j@cmu.edu",
    signupDate: "2023/06/15",
  },
  {
    id: 57,
    fullName: "Carolina Smalecombe",
    fullMobileNumber: "+234 444 163 2711",
    email: "csmalecombe1k@foxnews.com",
    signupDate: "2023/06/17",
  },
  {
    id: 58,
    fullName: "Donny Muriel",
    fullMobileNumber: "+1 256 219 3525",
    email: "dmuriel1l@wisc.edu",
    signupDate: "2022/08/16",
  },
  {
    id: 59,
    fullName: "Lionello Glaze",
    fullMobileNumber: "+48 522 861 6736",
    email: "lglaze1m@umn.edu",
    signupDate: "2023/05/06",
  },
  {
    id: 60,
    fullName: "Nina Molan",
    fullMobileNumber: "+86 681 703 1852",
    email: "nmolan1n@merriam-webster.com",
    signupDate: "2023/05/08",
  },
  {
    id: 61,
    fullName: "Juieta Risen",
    fullMobileNumber: "+84 921 505 9288",
    email: "jrisen1o@ovh.net",
    signupDate: "2023/05/22",
  },
  {
    id: 62,
    fullName: "Berti Westrip",
    fullMobileNumber: "+7 768 435 5088",
    email: "bwestrip1p@wikimedia.org",
    signupDate: "2022/09/28",
  },
  {
    id: 63,
    fullName: "Vere Barnett",
    fullMobileNumber: "+256 418 872 3221",
    email: "vbarnett1q@google.com",
    signupDate: "2023/06/02",
  },
  {
    id: 64,
    fullName: "Rem Karpfen",
    fullMobileNumber: "+86 948 820 0413",
    email: "rkarpfen1r@ezinearticles.com",
    signupDate: "2023/03/29",
  },
  {
    id: 65,
    fullName: "Cassius Peckett",
    fullMobileNumber: "+66 636 789 8833",
    email: "cpeckett1s@newsvine.com",
    signupDate: "2022/10/18",
  },
  {
    id: 66,
    fullName: "Titus Antalffy",
    fullMobileNumber: "+62 895 885 8272",
    email: "tantalffy1t@kickstarter.com",
    signupDate: "2023/05/23",
  },
  {
    id: 67,
    fullName: "Sephira Netley",
    fullMobileNumber: "+63 876 507 4448",
    email: "snetley1u@surveymonkey.com",
    signupDate: "2023/04/14",
  },
  {
    id: 68,
    fullName: "Kirstyn Sirett",
    fullMobileNumber: "+81 338 540 4107",
    email: "ksirett1v@wikimedia.org",
    signupDate: "2023/03/22",
  },
  {
    id: 69,
    fullName: "Lindsey Bolden",
    fullMobileNumber: "+351 354 906 7803",
    email: "lbolden1w@posterous.com",
    signupDate: "2023/05/26",
  },
  {
    id: 70,
    fullName: "Nolie Kruszelnicki",
    fullMobileNumber: "+63 453 592 5082",
    email: "nkruszelnicki1x@mapquest.com",
    signupDate: "2023/05/01",
  },
  {
    id: 71,
    fullName: "Merci O'Shiel",
    fullMobileNumber: "+62 357 778 7771",
    email: "moshiel1y@blinklist.com",
    signupDate: "2022/12/10",
  },
  {
    id: 72,
    fullName: "Aindrea Wasiel",
    fullMobileNumber: "+7 173 983 1139",
    email: "awasiel1z@ocn.ne.jp",
    signupDate: "2022/10/20",
  },
  {
    id: 73,
    fullName: "Mimi Rew",
    fullMobileNumber: "+675 497 293 5851",
    email: "mrew20@flavors.me",
    signupDate: "2022/11/06",
  },
  {
    id: 74,
    fullName: "Devonne Cosker",
    fullMobileNumber: "+92 608 191 1668",
    email: "dcosker21@blogspot.com",
    signupDate: "2022/08/21",
  },
  {
    id: 75,
    fullName: "Perle Jinkin",
    fullMobileNumber: "+86 401 715 2010",
    email: "pjinkin22@cyberchimps.com",
    signupDate: "2022/12/29",
  },
  {
    id: 76,
    fullName: "Cassi Lidierth",
    fullMobileNumber: "+351 275 118 2017",
    email: "clidierth23@nationalgeographic.com",
    signupDate: "2023/03/06",
  },
  {
    id: 77,
    fullName: "Shelbi Hallgath",
    fullMobileNumber: "+86 205 789 9184",
    email: "shallgath24@tmall.com",
    signupDate: "2022/09/04",
  },
  {
    id: 78,
    fullName: "Gunther Lyver",
    fullMobileNumber: "+86 593 470 0100",
    email: "glyver25@comsenz.com",
    signupDate: "2023/03/01",
  },
  {
    id: 79,
    fullName: "Nat Ebbers",
    fullMobileNumber: "+55 965 971 8700",
    email: "nebbers26@stumbleupon.com",
    signupDate: "2022/11/24",
  },
  {
    id: 80,
    fullName: "Adolphe Shee",
    fullMobileNumber: "+598 997 780 2090",
    email: "ashee27@spotify.com",
    signupDate: "2022/11/11",
  },
  {
    id: 81,
    fullName: "Aryn Keegan",
    fullMobileNumber: "+63 464 624 2315",
    email: "akeegan28@weather.com",
    signupDate: "2022/09/27",
  },
  {
    id: 82,
    fullName: "Sibylla Gledhall",
    fullMobileNumber: "+62 336 915 4551",
    email: "sgledhall29@home.pl",
    signupDate: "2023/05/15",
  },
  {
    id: 83,
    fullName: "Michelina Isakovitch",
    fullMobileNumber: "+86 607 377 0116",
    email: "misakovitch2a@oakley.com",
    signupDate: "2023/07/16",
  },
  {
    id: 84,
    fullName: "Roselle Johncey",
    fullMobileNumber: "+232 141 334 2468",
    email: "rjohncey2b@wix.com",
    signupDate: "2023/02/12",
  },
  {
    id: 85,
    fullName: "Odille McLugaish",
    fullMobileNumber: "+62 858 274 4193",
    email: "omclugaish2c@arizona.edu",
    signupDate: "2022/10/16",
  },
  {
    id: 86,
    fullName: "Norry Esmond",
    fullMobileNumber: "+86 385 882 9090",
    email: "nesmond2d@skyrock.com",
    signupDate: "2022/10/19",
  },
  {
    id: 87,
    fullName: "Gayleen Urlin",
    fullMobileNumber: "+62 135 787 8821",
    email: "gurlin2e@utexas.edu",
    signupDate: "2022/09/05",
  },
  {
    id: 88,
    fullName: "Ali Rutherforth",
    fullMobileNumber: "+963 456 145 3432",
    email: "arutherforth2f@dagondesign.com",
    signupDate: "2023/04/19",
  },
  {
    id: 89,
    fullName: "Remington Elcom",
    fullMobileNumber: "+420 524 672 4718",
    email: "relcom2g@lulu.com",
    signupDate: "2023/02/28",
  },
  {
    id: 90,
    fullName: "Mickie Sommerled",
    fullMobileNumber: "+54 110 815 5604",
    email: "msommerled2h@mozilla.com",
    signupDate: "2023/05/01",
  },
  {
    id: 91,
    fullName: "Blaine Vinnick",
    fullMobileNumber: "+86 456 257 3759",
    email: "bvinnick2i@homestead.com",
    signupDate: "2023/02/02",
  },
  {
    id: 92,
    fullName: "Adina Pibsworth",
    fullMobileNumber: "+57 853 992 6982",
    email: "apibsworth2j@disqus.com",
    signupDate: "2022/08/16",
  },
  {
    id: 93,
    fullName: "Annabelle Tickle",
    fullMobileNumber: "+30 598 587 0271",
    email: "atickle2k@twitter.com",
    signupDate: "2022/10/02",
  },
  {
    id: 94,
    fullName: "Ricardo O'Riordan",
    fullMobileNumber: "+48 317 865 8066",
    email: "roriordan2l@discuz.net",
    signupDate: "2023/07/23",
  },
  {
    id: 95,
    fullName: "Vinita Kinge",
    fullMobileNumber: "+62 856 380 1494",
    email: "vkinge2m@uiuc.edu",
    signupDate: "2023/06/03",
  },
  {
    id: 96,
    fullName: "Sabra Ferrige",
    fullMobileNumber: "+380 638 511 5714",
    email: "sferrige2n@photobucket.com",
    signupDate: "2022/08/15",
  },
  {
    id: 97,
    fullName: "Fionna Liversidge",
    fullMobileNumber: "+61 409 703 8975",
    email: "fliversidge2o@amazon.com",
    signupDate: "2022/12/10",
  },
  {
    id: 98,
    fullName: "Wilek Geldart",
    fullMobileNumber: "+62 430 616 8007",
    email: "wgeldart2p@redcross.org",
    signupDate: "2022/12/28",
  },
  {
    id: 99,
    fullName: "Alexio Pearson",
    fullMobileNumber: "+54 328 563 3868",
    email: "apearson2q@cnbc.com",
    signupDate: "2023/06/26",
  },
  {
    id: 100,
    fullName: "Judas Surgood",
    fullMobileNumber: "+223 419 486 1570",
    email: "jsurgood2r@about.me",
    signupDate: "2022/09/09",
  },
];

export const getUsers = function (page, limit) {
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit; i++) {
    array.push(users[i]);
  }
  return array;
};

export const getLength = function () {
  return users.length;
};
