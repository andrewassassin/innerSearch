// 成績計算表單
const scoreForm = document.getElementById('scoreForm');
// 各科目分數輸入框
const zhInput = document.getElementById('chineseScoreInput');
const enInput = document.getElementById('englishScoreInput');
const mathInput = document.getElementById('mathScoreInput');
// 報告顯示區塊
const reportDiv = document.getElementById('result');

scoreForm.addEventListener('submit', function (e) {
    // 防止表單重整畫面
    e.preventDefault();
    // 從畫面上取得的資料(.innerText, .value)預設都是字串
    // 取得各科目成績
    const zh = parseInt(zhInput.value);
    const en = parseInt(enInput.value);
    const math = parseInt(mathInput.value);
    // 計算總分
    const sum = zh + en + math;
    console.log('[總分]', sum);
    // 計算平均分數
    const avg = sum / 3;
    console.log('[平均分數]', avg);

    // TODO: 計算等級
    // 平均分數 >= 90 為A+
    // 平均分數 >= 80 為A
    // 平均分數 >= 70 為B
    // 平均分數 >= 60 為C
    // 平均分數 < 60 為F。

    // 顯示報告
    const report = `<div class="alert alert-danger">
       國文: ${zh} <br>
       英文: ${en} <br>
       數學: ${math} <br>
       總分: ${sum} <br>
       平均分數: ${avg}
    </div>`;
    reportDiv.innerHTML = report;

});