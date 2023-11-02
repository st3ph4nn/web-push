const push = require("web-push");

const VAPIDKeys = {
  publicKey:
    "BB_qBhhJ7p3WZNE-tBLDMOmjyAiTi1P6Weq0jXuV9ZXTHvoQNNtzcKQCb7MdfxG2NRI2JKwfBgC9wmE3o0t5tTk",
  privateKey: "wdwyOOm_-Hr9_VoCJRMBoYgoXSUqPQwd6zpjBmhkEEg",
};

push.setVapidDetails(
  "mailto: st3ph4nn@gmail.com",
  VAPIDKeys.publicKey,
  VAPIDKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fuxOJPfVmP8:APA91bFckh3dx4_Nwo23r5lQql_b11woCTqJF7ZDOXbSNJsbVZBQfCT5ZP3kRtZDvjSGykXMMeiycAZuVlVHnlUC39w7lxWevExJ-K45GS2kcuK-KfsaJHD4FGN0Q9D1_TwP5dsLHJLD",
  expirationTime: null,
  keys: {
    p256dh:
      "BKp7LyhSLVbYSXG1caMRVki92-LLlGPOy9UOUruUX0Zq2R0J4zMjt2QB-o3QkdNLk0jXYIwuHjRLB2FEjf61p48",
    auth: "8eVdAwfY9waxYa6YYWPhXw",
  },
};

push.sendNotification(sub, "Test Msg Notification");
