// 假設在 http://mozilla.org/foo.html 中執行了以下 JavaScript 程式碼:
var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
// line3會建立新的

history.replaceState(stateObj, "page 2", "bar.html")
// line7會修改當前紀錄，按上一頁不會回復到foo.html