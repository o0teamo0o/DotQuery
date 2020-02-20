if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/button/button?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/list/list?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/slideview/slideview?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/input/input?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/slider/slider?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/uploader/uploader?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/article/article?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/badge/badge?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/flex/flex?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/footer/footer?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/gallery/gallery?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/grid/grid?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/icons/icons?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/loading/loading?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/loadmore/loadmore?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/panel/panel?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/preview/preview?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/progress/progress?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/actionsheet/actionsheet?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/half-screen-dialog/half-screen-dialog?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/dialog/dialog?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/msg/msg?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/msg/msg_text?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/msg/msg_text_primary?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/msg/msg_success?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/msg/msg_fail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/picker/picker?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/toast/toast?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/navigation-bar/navigation-bar?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/tabbar/tabbar?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../example/searchbar/searchbar?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}