const push = require("web-push");

const VAPIDKeys = {
  publicKey:
    "BB_qBhhJ7p3WZNE-tBLDMOmjyAiTi1P6Weq0jXuV9ZXTHvoQNNtzcKQCb7MdfxG2NRI2JKwfBgC9wmE3o0t5tTk",
  privateKey: "wdwyOOm_-Hr9_VoCJRMBoYgoXSUqPQwd6zpjBmhkEEg",
};

push.setVapidDetails('mailto: st3ph4nn@gmail.com', VAPIDKeys.publicKey, VAPIDKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'Test Msg Notification');

