angular.module('app', ['ngMaterial']);

angular.module('app').controller("mainCtrl", mainCtrl);

angular.module('app').config(config);

function mainCtrl($mdSidenav){
  var vm = this;
  
  vm.openLeftMenu = openLeftMenu;
  vm.menuOpened = false;
  vm.historyTiles = [
    {
      year: 2011,
      title: "T. J. Enters the TUF house.",
      image: "https://upload.wikimedia.org/wikipedia/en/0/05/The_Ultimate_Fighter_Team_Bisping_vs_Team_Miller_Finale_Poster.jpg"
    },
    {
      year: 2011,
      title: "Looses to John Dodson.",
      image: "https://s-media-cache-ak0.pinimg.com/originals/4c/9b/94/4c9b94e2dd833e534fd9908147c8c0b2.jpg"
    },
    {
      year: 2012,
      title: "Defeats Walal Watson via decision.",
      image: "https://s-media-cache-ak0.pinimg.com/originals/11/4c/22/114c22ec7ec43661115f35f67ffaedd1.jpg"
    },
    {
      year: 2012,
      title: "Defeats Birminghams Vaughan Lee via Neck Crank.",
      image:"http://img.bnqt.com/CMS/mmajunkie/assets/ufc-on-fuel-tv-4/tj-dillashaw-vaughan-lee.jpg"
    },
    
    {
      year: 2013,
      title: "Finishes Issei Tamura by way of head kick and ground and pound.",
      image: "http://www3.cdn.sherdog.com/_images/pictures/20130315032030_IMG_4038.JPG"
    },
    {
      year: 2013,
      title: "Deafeats Hugo Viana by TKO.",
      image:"https://media.gettyimages.com/photos/dillashaw-punches-hugo-viana-in-their-bantamweight-bout-during-the-picture-id167105698?s=612x612"
    },
    {
      year: 2013,
      title: "Suffers his 2nd career loss to the Brazilian Raphael Assunção although both went on to win $50,000 for fight of the night.",
      image: "http://s3.amazonaws.com/smgphotogallery/mmajunkie/mu/ufc-fight-night-29-weigh-in-photos-an-mmajunkiecom-image-gallery/700/raphael-assuncao-tj-dillashaw.jpg"
    },
    {
      year: 2014,
      title: "Defeats Mike Easton by unanimous decision.",
      image: "https://ssl.c.photoshelter.com/img-get2/I0000iMN8HvuxagU/fit=1000x750/011514-UFC-FN-35-031.jpg"
    },
    {
      year: 2014,
      title: "A calm and composed T. J. Dillashaw goes on to win the Bantamweight belt against the once p4p titleholder Renan Berao also netting the $50,000 bonus for ‘Performance of the night’",
      image: "http://cdn1.vox-cdn.com/uploads/chorus_image/image/33449857/104_Barao_and_Dillashaw.0.jpg"
    },
     {
       year: 2014,
       title: "Yet again wins ‘Performance of the night’ for his TKO win over Joe Soto.",
       image: "https://i.ytimg.com/vi/DW5LKPoqwuI/hqdefault.jpg"
     },
    {
      year: 2015,
      title: "In the rematch with Renan Berao T. J earns his 4th ‘Performance of the night’ with his TKO victory in the headline event in Chicago.",
      image: "http://dojodrifter.com/wp-content/uploads/2015/07/renan-barao-tj-dillashaw-mma-ufc-fight-night-barao-vs-dillashaw-2-850x560.jpg"
    },
    {
      year: 2016,
      title: "T. J. loses his title to former titleholder Dominick Cruz in the main event via split decision. Both fighters went on to win ‘Fight of the night.",
      image: "https://i.ytimg.com/vi/n6SKmhrrBl4/hqdefault.jpg"
    },
    {
      year: 2016,
      title: "Denied an immediate rematch with Cruz, Dillashaw goes about his climb to the top by dissecting Raphael Assuncao for 3 rounds and winning via decision.",
      image: "https://strikingthoughtssite.files.wordpress.com/2016/07/040_tj_dillashaw_vs_raphael_assuncao-0-0-0.jpg"
    },
    {
      year: 2016,
      title: "Dillashaw proves unstoppable at UFC 207 in his performance against fellow title challenger John Lineker. Wins via unanimous decision and calls out the winner of Cruz vs Garbrandt.",
      image: "https://metrouk2.files.wordpress.com/2016/12/630705570.jpg?w=620&amp;h=445&amp;crop=1"
    },
    {
      year: 2017,
      title: "Wins back the title in an epic war with Cody 'No Love' Garbrandt via Ground and Pound wins Fight Of The Night.",
      image: "https://cdn.images.express.co.uk/img/dynamic/167/590x/secondary/TJ-Dillashaw-punches-Cody-Garbrandt-1118938.jpg"
    },
    {
      year: 2018,
      title: "T. J. Dillashaw plans to drop down to Flyweight to beat Demetrius Johnson who has 11 consecutive title defenses.",
      image: "https://usatmmajunkie.files.wordpress.com/2017/06/tj-dillashaw-demetrious-johnson-split.jpg?w=1000&amp;h=600&amp;crop=1"
    },
  ];
  
  // Sidenav
  function openLeftMenu() {
    $mdSidenav('left').toggle();
    // vm.menuOpened = !vm.menuOpened;
  }
}
mainCtrl.$inject = ["$mdSidenav"];

function config($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey', {
      'default': '100',
      'hue-1': '100',
      'hue-2': '600',
      'hue-3': 'A100'
    });
}

config.$inject = ["$mdThemingProvider"];