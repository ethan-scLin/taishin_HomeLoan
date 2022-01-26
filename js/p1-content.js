// 購屋貸款 內容維護
// --專案優勢 數值 1.45%、30年/3年、80%
var sec2numbers = [1.45, 30, 3, 80];
// --專案優勢 內文
var sec2text = [
  "利率1.45%起",
  "貸款期間最長30年，寬限期最長3年",
  "最高可達房屋鑑價80%",
  "台新提供各類線上試算、諮詢及鑑價服務",
];
// --實際申貸費用範例 數值
var sec3content = [
  "NT$200萬",
  "20年",
  "1.45%~2.70%<br /><span class='other-words'>(按 I+0.65% ~ +1.90% 機動計息)</span>",
  "NT$8,000- NT$10,000/筆",
  "1.49%~2.75%",
];

$(function () {
  $("#sec2-number1").text(sec2numbers[0]);
  $("#sec2-number2").text(sec2numbers[1]);
  $("#sec2-number3").text(sec2numbers[2]);
  $("#sec2-number4").text(sec2numbers[3]);

  $("#sec2-content1").text(sec2text[0]);
  $("#sec2-content2").text(sec2text[1]);
  $("#sec2-content3").text(sec2text[2]);
  $("#sec2-content4").text(sec2text[3]);

  $("#sec3-main-list li").each(function () {
    $(this).find(".content").html(sec3content[$(this).index()]);
  });
});
