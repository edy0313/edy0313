// クラス名から要素を選択
const hamburger = document.querySelector('.hamburgerMenu');
const link = document.querySelector('.link');

// ハンバーガーメニューにイベントをつける
hamburger.addEventListener('click',() => {
  // toggle('クラス名')：クラス名があれば削除・なければ追加
  link.classList.toggle('open');

})


