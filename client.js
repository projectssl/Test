console.log("🚨🚨🚨 THIS IS FROM CLIENT.JS – If you don’t see this, the Power-Up isn’t loading.");

window.TrelloPowerUp.initialize({
  'board-buttons': function(t) {
    console.log("✅ Test button loaded");
    return [{
      text: 'Test Button',
      callback: 'showAlert'
    }];
  },
  'showAlert': function(t) {
    console.log("🟢 showAlert triggered");
    return t.popup({
      title: 'Test Popup',
      url: './index.html'
    });
  }
});
