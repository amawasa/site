  const glitchChars = '諱辟｡莠九↓謚懊￠蜃ｺ縺帙ｋ縺ｧ縺励ｇ縺°窶ｦ?諱先?悶→鬩壹″縺悟ｾ■蜿励￠繧蝨ｰ迯霑ｷ螳ｮ縺ｧ縲√≠縺ｪ縺溘?蜍?ｰ励′隧ｦ縺輔ｌ縺ｾ縺吶?譛ｬ迚ｩ縺ｮ髴翫′蜃ｺ繧九→縺?≧繧ｦ繝ｯ繧ｵ繧やｦ菫｡縺倥ｋ縺倶ｿ｡縺倥↑縺?°縺ｯ縲√≠縺ｪ縺滓ｬ｡隨ｬ縲阮?囓縺?ｻ贋ｸ九?縺ｩ縺薙°繧峨°閨槭％縺医ｋ縺吶☆繧頑ｳ｣縺阪縺ゅ↑縺溘′譛蠕後↓逶ｮ謦☆繧九縺ｯ窶ｦ窶ｦ縲';

  function animateGlitchText(el, finalText, typingSpeed = 50, fixSpeed = 40) {
    const chars = finalText.split('');
    let display = [];
    let i = 0;

    const glitchInterval = setInterval(() => {
      if (i < chars.length) {
        const c = chars[i];
        display.push(c === ' ' ? ' ' : glitchChars[Math.floor(Math.random() * glitchChars.length)]);
        el.textContent = display.join('');
        i++;
      } else {
        clearInterval(glitchInterval);
        let j = 0;
        const fixInterval = setInterval(() => {
          if (j < chars.length) {
            if (chars[j] !== ' ') display[j] = chars[j];
            el.textContent = display.join('');
            j++;
          } else {
            clearInterval(fixInterval);
            setRandomGlitch(el, finalText);
          }
        }, fixSpeed);
      }
    }, typingSpeed);
  }

  function setRandomGlitch(el, text) {
    setInterval(() => {
      const chars = text.split('');
      const glitched = chars.map(c => {
        if (Math.random() < 0.08 && c !== ' ') {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return c;
      });
      el.textContent = glitched.join('');
      setTimeout(() => {
        el.textContent = text;
      }, 120);
    }, 3000);
  }

  function showMain() {
    document.getElementById('warning-screen').style.display = 'none';
    dissmall()
    const main = document.getElementById('story-container');
    main.style.display = 'flex';

    document.querySelectorAll('.glitch').forEach((el, index) => {
      const text = el.getAttribute('data-text');
      setTimeout(() => {
        animateGlitchText(el, text, 40, 40);
      }, index * 600);
    });
  }//終わり


function animateLoadingText(el) {
  const originalText = el.textContent.split('');
  const finalText = el.getAttribute('data-wa').split('');
  let current = [...originalText];

  setTimeout(() => {
    let glitchIndexes = originalText.map((_, i) => i);

    const glitchStep = setInterval(() => {
      if (glitchIndexes.length === 0) {
        clearInterval(glitchStep);

        setTimeout(() => {
          let changeIndexes = finalText.map((_, i) => i);
          const changeStep = setInterval(() => {
            if (changeIndexes.length === 0) {
              clearInterval(changeStep);
              document.getElementById('enter-btn').classList.add('zoom-in');
              return;
            }
            const r = Math.floor(Math.random() * changeIndexes.length);
            const idx = changeIndexes[r];
            current[idx] = finalText[idx];
            el.textContent = current.join('');
            changeIndexes.splice(r, 1);
          }, 50);
        }, 200);

        return;
      }

      const r = Math.floor(Math.random() * glitchIndexes.length);
      const idx = glitchIndexes[r];
      current[idx] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      el.textContent = current.join('');
      glitchIndexes.splice(r, 1);
    }, 50);
  }, 2000);
}

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateLoadingText(entry.target);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.loading').forEach(el => {
  observer.observe(el);
});



const kyouhu = 0;

      // オーバーレイを作成する
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
  
  // 🔴 恐怖ワードの出現ロジック
const horrorImages = [
  'nc266400_血痕02質感あり【フリー素材あそび】.png',
  'nc197747_赤い手形【ホラー09】.png'
];

setInterval(() => {
    if (kyouhu === 1) {
  const flashImage = document.getElementById('flash-image');
  const randomSrc = horrorImages[Math.floor(Math.random() * horrorImages.length)];
  flashImage.src = randomSrc;

  // 画面のサイズに応じてランダムな位置を計算
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const imageWidth = windowWidth * 0.3; // 画像サイズと合わせて30%
  const randomX = Math.random() * (windowWidth - imageWidth);
  const randomY = Math.random() * (windowHeight - imageWidth * 0.75); // 高さは画像比に応じて調整

  flashImage.style.left = `${randomX}px`;
  flashImage.style.top = `${randomY}px`;

  flashImage.style.display = 'block';
  flashImage.classList.add('flash'); // 点滅アニメーション（任意）

  setTimeout(() => {
    flashImage.style.display = 'none';
    flashImage.classList.remove('flash');
  }, 750); // 0.45秒間表示
 }
}, 3000);

function gameov() {
  // glitch要素を消す
  document.querySelectorAll('.main-content').forEach(elem => {
    elem.style.display = 'none';
  });

  // 顔と手と背景を表示
  const face = document.getElementById('face');
  const hand = document.getElementById('hand');
  const background = document.getElementById('background');

  face.classList.remove('hidden');
  background.classList.remove('hidden');
  hand.classList.remove('hidden');

  // アニメーション適用
  face.querySelector('img').style.animation = 'faceZoom 2s forwards';
  hand.querySelector('img').style.animation = 'handDrop 2s forwards';
}



let goToMainAfterTap = false;
let currentIndex = 0;
let isTyping = false;
let currentScene = "";
let backgroundTimerId = null;

const storyTexts = [
  { speaker: "私", text: "学校の課題の資料のために図書室たけど、どこにあったけ、", scene: "tosyo" },
  { speaker: "私", text: "うーん,,,,,ないなー,,,っあ!!", scene: "school" },
  { speaker: "私", text: "白雪姫じゃん。なつかしー。こんなのも高校の図書室にあるんだ。", scene: "school" },
  { speaker: "私", text: "うわ、なにこれボロボロじゃん。学校のものなんだから大切にしないと。", scene: "bookopen" },
  { speaker: "私", text: "最後に読んだの子供のころだったからストーリー忘れちゃってるなぁ。", scene: "" },
  { speaker: "私", text: "そうそう、白雪姫が毒リンゴを食べちゃって、倒れちゃって、", scene: "school" },
  { speaker: "私", text: "そこに、王子様が現れて、白雪姫にkissして、", scene: "school" },
  { speaker: "私", text: "喉につっかえてた毒リンゴがとれて,,,,あれ？", scene: "school" },
  { speaker: "私", text: "な、なにこれ？", scene: "" },
  { speaker: "私", text: "いや、うっうわぁぁぁぁぁぁぁ,,,,,,,", scene: "deco" },
  { speaker: "", text: ",,,,,,,,,,,,,,,,,,,,,,,,,,", scene: "bookclo" },
  { speaker: "私", text: "いてて、なんなんだよぉ、", scene: "mori" },
  { speaker: "私", text: "あれっ、ここはどこだ？私図書室にいたのに？", scene: "tp" },
  { speaker: "???", text: "き、君は,,,!?", scene: "tp" },
  { speaker: "???", text: "ま、まさか、外からの訪問者!?", scene: "tp" },
  { speaker: "私", text: "!? どこ？誰だ？", scene: "tp" },
  { speaker: "???", text: "下だよ、下", scene: "unknowman" },
  { speaker: "小人", text: "僕は、小人、君の知っている白雪姫の小人の一人だよ。", scene: "smallman1" },
  { speaker: "小人", text: "君は、今、白雪姫のストーリーの中にいるってこと。", scene: "smallman" },
  { speaker: "私", text: "えっ!? 小人!? どういうこと???", scene: "talk" },
  { speaker: "私", text: "それに白雪姫!? なにこれ、夢!?", scene: "talk" },
  { speaker: "私", text: "あれ、でも私が知ってる白雪姫には、7人いたはずでは?", scene: "talk" },
  { speaker: "小人", text: "そうなんだ。でも他のみんなは白雪姫に襲われ、離れ離れになってしまったんだ。", scene: "smallman" },
  { speaker: "私", text: "どういうこと? 白雪姫が襲ってきた? 意味が分からないよ。", scene: "talk" },
  { speaker: "小人", text: "それが、本来なら王子様のキスで起きる場面で、", scene: "smallman" },
  { speaker: "小人", text: "王子様も毒リンゴの毒をもらってしまい、倒れてしまったんだ。", scene: "smallman" },
  { speaker: "小人", text: "それで、起きなくなった白雪姫が、あの悪い王女に操られちゃって,,,", scene: "smallman" },
  { speaker: "小人", text: "そこで、君に頼みたいことがあるんだ。", scene: "smallman" },
  { speaker: "私", text: "頼みたいこと?", scene: "talk" },
  { speaker: "小人", text: "そこで白雪姫を治すための魔法のリンゴを集めてほしいんだ。", scene: "smallman" },
  { speaker: "小人", text: "体の小さい僕にはこの森は大きすぎるかなね", scene: "smallman" },
  { speaker: "小人", text: "集めてくれたら、お礼に元の世界に戻してあげる。", scene: "smallman" },
  { speaker: "私", text: "魔法のリンゴ!?わかんないけど、白雪姫を助ければ、いいのね。", scene: "smallman" },
  { speaker: "私", text: "そしたら元の世界に戻れる。,,,", scene: "choice" }
];


const storyA = [
  { speaker: "私", text: "わかった。私に任せて", scene: "talk" },

];

const storyB = [

  { speaker: "小人", text: "なぜ取らないの？", scene: "choiceB" }
];

const images = [
  'background2.jpg',
  'background3.jpg',
  'background4.jpg'
];

function startRandomBackground() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url(${randomImage})`;

  setTimeout(() => {
    document.body.style.backgroundImage = 'url(background1.jpg)';
  }, 500);

  const nextTime = Math.floor(Math.random() * 6000) + 26000;
  backgroundTimerId = setTimeout(startRandomBackground, nextTime);
}

function stopRandomBackground() {
  clearTimeout(backgroundTimerId);
  backgroundTimerId = null;
}

function changeBackground(scene) {
  if (scene === currentScene) return;
  currentScene = scene;

  if (scene === "forest") {
    startRandomBackground();
  } else {
    stopRandomBackground();
    document.body.style.backgroundImage = 'url(background1.jpg)';
  }
}

let intervalId = null; // ← グローバルに保持しておく

function typeText(text, el, callback) {
  el.textContent = "";
  let i = 0;
  isTyping = true;

  clearInterval(intervalId); // 既存のタイピングがあれば止める

  intervalId = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(intervalId);
      intervalId = null;
      isTyping = false;
      document.getElementById("next-icon").style.display = "block";
      if (callback) callback();
    }
  }, 40);
}

function nextText() {
  if (isTyping) return;

  if (currentIndex < storyTexts.length) {
    const data = storyTexts[currentIndex];
    document.getElementById("speaker-name").textContent = data.speaker || "";
    document.getElementById("next-icon").style.display = "none";

    typeText(data.text, document.getElementById("story-text"), () => {
      if (data.scene) handleScene(data.scene);

      // ここでキャラ画像を更新
      updateCharacterImage(data.speaker);

      currentIndex++; // ✅ テキスト表示が終わったあとに進める！

      // ✅ テキストが終わった直後にmainへ遷移
      if (goToMainAfterTap && currentIndex >= storyTexts.length) {
        goToMainAfterTap = false;
        showMainScreen();
      }
    });
  } else {
    // テキストがすでに終わってるなら、表示終了
    document.getElementById("story-container").style.display = "none";
    stopRandomBackground();
  }
}




function handleScene(scene) {
  switch (scene) {
    case "tosyo":
      backtosyo();
      break;
    case "mori":
      morihe();
      break;
    case "choice":
      showChoices();
      break;
    case "choiceB":
      showChoices("B");
      break;
    case "main":
      showMainScreen();
      break;
    case "choiceD":
      showChoices("2");
      break;
    case "choiceF":
      showChoices("3");
      break;
      case "choiceH":
      showChoices("4");
      break;
      case "choiceJ":
      showChoices("5");
      break;
      case "choiceL":
      showChoices("6");
      break;
      case "choiceN":
      showChoices("7");
      break;
      case "enter":
      bookup();
      break;
    case "smallman1":
      smnsmall();
      break;
      case "bookopen":
      bookdesu();
      break;
      case "bookclo":
      booktozi();
      break;
      case "deco":
      animateElement();
      sceneTransition();
      nextText();
      morihe();
      break;
    case "gameover":
      gameov();
      break;
    default:
      stopRandomBackground();
  }
}
function showOverlay() {
  document.getElementById("overlay").style.display = "block";
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}



function showChoices(type = "A") {
    showOverlay(); // ←ここで表示
  document.getElementById("choice-box").innerHTML = ""; // 初期化

  if (type === "A") {
    document.getElementById("choice-box").innerHTML = `
      <button onclick="selectChoice('A')">わかった。私に任せて</button>
      <button onclick="selectChoice('B')">信じられない。私には無理</button>
    `
      skipdel()
      ;
  } else if (type === "B") {
    document.getElementById("choice-box").innerHTML = `
      <button onclick="selectChoice('C')">わかった。私にしか出来ないんだね</button>
      <button onclick="selectChoice('D')">だから、無理、白雪姫なんて知らない</button>
    `;
      } else if (type === "D") {
    document.getElementById("choice-box").innerHTML = `
      <button onclick="selectChoice('E')">終わったら元の世界に戻してくれるんだよね。</button>
      <button onclick="selectChoice('F')">いくら頼んでも無理なものは無理。</button>
    `;
  }else if (type === "2") {
    document.getElementById("choice-box").innerHTML = `
      <button onclick="selectChoice('G')">うるっさいなぁ。わかったよ</button>
      <button onclick="selectChoice('H')">はやく元の世界に戻してよ</button>
    `;
  }else if (type === "3") {
    document.getElementById("choice-box").innerHTML = `
      <button onclick="selectChoice('I')">一回だけだからね!?</button>
      <button onclick="selectChoice('J')">うるさいなぁ</button>
    `;
  }else if (type === "4") {
    document.getElementById("choice-box").innerHTML = `
      <button onclick="selectChoice('K')">はぁ,,,わかったよ。ッチ</button>
      <button onclick="selectChoice('L')">やらないって言ってるでしょ！</button>
    `;
  }else if (type === "5") {
    document.getElementById("choice-box").innerHTML = `
      <button onclick="selectChoice('M')">あぁぁもおわかったよやればいいんだろ？</button>
      <button onclick="selectChoice('N')">私には無理！</button>
    `;
  }else if (type === "6") {
    document.getElementById("choice-box").innerHTML = `
      <button onclick="selectChoice('O')">はぁ、やりますよ</button>
      <button onclick="selectChoice('P')">無視して逃げる。</button>
    `;
  }


  document.getElementById("choice-box").style.display = "flex";
}

function selectChoice(choice) {
  document.getElementById("choice-box").style.display = "none";
  hideOverlay(); // ←ここで非表示
  if (choice === "A") {
    storyTexts.splice(currentIndex, 0,
     { speaker: "私", text: "りんごを探しに森へ進んだ!", scene: "" },
     { speaker: "", text: "", scene: "main" }
    );
  } else if (choice === "B") {
    storyTexts.splice(currentIndex, 0,
     { speaker: "私", text: "信じられない。私には無理" },
      { speaker: "小人", text: "君しかいないんだ。頼むよ!", scene: "choiceB" }
    );
  } else if (choice === "C") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "わかった。私にしか出来ないんだね", scene: "" },
           { speaker: "私", text: "りんごを探しに森へ進んだ!", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  } else if (choice === "D") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "だから、無理、白雪姫なんて知らない", scene: "" },
      { speaker: "小人", text: "一生のお願い。頼むよ!", scene: "choiceD" }
    );
  } else if (choice === "E") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "終わったら元の世界に戻してくれるんだよね。", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  } else if (choice === "F") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "いくら頼んでも無理なものは無理。", scene: "" },
            { speaker: "小人", text: "白雪姫を助けられるのは君だけなんだ!", scene: "choiceF" }
    );
  } else if (choice === "G") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "うるっさいなぁ。わかったよ", scene: "" },
           { speaker: "私", text: "りんごを探しに森へ進んだ!", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  } else if (choice === "H") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "はやく元の世界に戻してよ", scene: "" },
       { speaker: "小人", text: "集めてきてくれたら帰すから!", scene: "choiceH" }
    );
  }else if (choice === "I") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "一回だけだからね!?", scene: "" },
           { speaker: "私", text: "りんごを探しに森へ進んだ!", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  }else if (choice === "J") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "うるさいなぁ", scene: "" },
      { speaker: "小人", text: "おねがいだよぉ!", scene: "choiceJ" }
    );
  }else if (choice === "K") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "はぁ,,,わかったよ。ッチ", scene: "" },
           { speaker: "私", text: "嫌々ながらりんごを探しに森へ進んだ!", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  }else if (choice === "L") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "やらないって言ってるでしょ！", scene: "" },
      { speaker: "小人", text: "ほんとに頼むよぉ!", scene: "choiceL" }
    );
  }else if (choice === "M") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "あぁぁもおわかったよやればいいんだろ？", scene: "" },
           { speaker: "私", text: "悪態をつきながら、りんごを探しに森へ進んだ!", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  }else if (choice === "N") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "私には無理！", scene: "" },
      { speaker: "小人", text: "じゃあ一人で帰れるもんならかえってみな!", scene: "choiceN" }
    );
  }else if (choice === "O") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "はぁ、やりますよ", scene: "" },
           { speaker: "私", text: "キレ気味に言ってから、りんごを探しに森へ進んだ!", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  }else if (choice === "P") {
    storyTexts.splice(currentIndex, 0,
            { speaker: "", text: "GAME OVER    サイトをもう一度読み込んでね", scene: "gameover" }
    );
  dissmall()
  gameov(); // 文章の後すぐに演出したいなら、nextText()のコールバックで入れることも可能
}


  nextText();
}


document.getElementById("skip-button").addEventListener("click", () => {
  if (isTyping) {
    // 表示中なら全文即時表示して中断
    clearInterval(intervalId);
    intervalId = null;
    isTyping = false;

    const currentText = storyTexts[currentIndex];
    const textBox = document.getElementById("text-box"); // ← 必要なら変更
    textBox.textContent = currentText.text;
    document.getElementById("next-icon").style.display = "block";

    // スキップでは currentIndex を増やさない（即時表示だけ）
  } else {
    // 普通のスキップ処理
    while (currentIndex < storyTexts.length && storyTexts[currentIndex].scene !== "choice") {
      currentIndex++;
    }
    if (currentIndex < storyTexts.length) {
      skipdel();
      nextText();
    }
  }
});

function skipdel() {
  document.getElementById("skip-button").style.display = "none";
  morihe(); // ← 他の演出関数
  booktozi();
  smnsmall();
}

function showMainScreen() {
  dissmall();
  document.getElementById("story-container").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

function backtosyo() {
document.body.style.backgroundImage = 'url(tabunmain.jpg)';
}

function bookdesu() {
  document.getElementById("SWbook").style.display = "block";
}

function booktozi() {
  document.getElementById("SWbook").style.display = "none";
}


function animateElement() {
  const elem = document.getElementById("SWbook");
  elem.classList.add("bookUpdesu");
}

function idousuru() {
  document.getElementById("black").style.display = "block";
}

function morihe() {
    document.body.style.backgroundImage = 'url(publicdomainq-0059436qjx.jpg)';
  }

  function sceneTransition(callback) {
  const screen = document.getElementById('screenFade');
  
  // フェードイン
  screen.style.opacity = '1';
  screen.style.pointerEvents = 'auto';

  // 2秒待って、フェードアウト＋コールバック
  setTimeout(() => {
    if (callback) callback(); // シーン変更などここで実行
    screen.style.opacity = '0';
    screen.style.pointerEvents = 'none';
  }, 2000);
}
 function backset() {
  document.body.style.background = 'black'
 }
 const options = {
  root: null,
  rootMargin: '-40% 0px -40% 0px',
  threshold: 0      // 中央付近に来たら 1 回だけ class を付加
};

const io = new IntersectionObserver((entries, observer)=> {
  entries.forEach(entry=>{
    if (entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);  // 一度だけで良ければ解除
    }
  });
}, options);

function setupImageZoom(id) {
  const img = document.getElementById(id);
  if (!img) return;

  img.addEventListener('click', () => {
    const fullSrc = img.getAttribute('data-full');
    const overlayImage = document.getElementById('overlay-image');
    overlayImage.src = fullSrc;
    const overlay = document.getElementById('image-overlay');
    overlay.classList.remove('hidden');

    // img2だけヒントボタンを表示
    const hintBtn = document.getElementById('hint-button');
    const hintDialog = document.getElementById('hint-dialog');
    if (id === 'img2') {
      hintBtn.classList.remove('hidden');
      hintDialog.classList.add('hidden'); // ダイアログは閉じておく
    } else {
      hintBtn.classList.add('hidden');
      hintDialog.classList.add('hidden');
    }
  });
}

// 初期設定
setupImageZoom('img1');
setupImageZoom('img2');

// ヒントボタン押下でYes/Noダイアログを表示
document.getElementById('hint-button').addEventListener('click', () => {
  document.getElementById('hint-dialog').classList.remove('hidden');
});

// Yesボタンの処理
document.getElementById('hint-yes').addEventListener('click', () => {
  alert('「かみ」が「みみ」になるとき｛か　が　み｝なので');
  document.getElementById('hint-dialog').classList.add('hidden');
});

// Noボタンの処理
document.getElementById('hint-no').addEventListener('click', () => {
  alert('「己の力でといてみせよ」');
  document.getElementById('hint-dialog').classList.add('hidden');
});

// オーバーレイを閉じる処理
document.getElementById('close-overlay').addEventListener('click', () => {
  document.getElementById('image-overlay').classList.add('hidden');
  // ダイアログも閉じる
  document.getElementById('hint-dialog').classList.add('hidden');
});

// 画像オーバーレイ外クリックで閉じる処理
document.getElementById('image-overlay').addEventListener('click', (e) => {
  if (e.target.id === 'image-overlay') {
    document.getElementById('image-overlay').classList.add('hidden');
    document.getElementById('hint-dialog').classList.add('hidden');
  }
});


function updateCharacterImage(speaker) {
  const wrapper = document.getElementById("character-wrapper");
  const inner = document.getElementById("character-inner");
  const img = document.getElementById("character-img");


  if (speaker === "小人") {
    img.src = "赤小人T.png";
    inner.classList.remove("kobito-animated");
    void inner.offsetWidth;
    inner.classList.add("kobito-animated");
  } else {
    img.src = "赤小人.png";
    inner.classList.remove("kobito-animated");
  }
}



function smnsmall() {
   document.getElementById("character-wrapper").style.display = "block"; 
}
function dissmall() {
   document.getElementById("character-wrapper").style.display = "none"; 
}

function animateElement() {
  const elem = document.getElementById("SWbook");
  elem.style.transform = "translate(-50%, -50%) scale(15)";
}
    const NAMESPACE = 'amawasa.github.io'; // サイト固有識別子
    const KEY = 'site'; // ページ識別名

    // 累計閲覧数の取得と加算
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
      .then(res => res.json())
      .then(data => {
        document.getElementById("total").textContent = data.value;
      });

    // 簡易リアルタイム閲覧者数
    const nowSpan = document.getElementById("now");
    const sessionKey = 'viewer-session';
    const SESSION_LIFETIME = 15000; // 15秒をリアルタイムとみなす

    // ユーザー識別（localStorageに一時保存）
    if (!localStorage.getItem(sessionKey)) {
      localStorage.setItem(sessionKey, Date.now());
    }

    function updateNowViewing() {
      const now = Date.now();
      let users = JSON.parse(localStorage.getItem('now-users') || '{}');
      users[navigator.userAgent] = now;

      // 古いアクセス削除
      for (let k in users) {
        if (now - users[k] > SESSION_LIFETIME) delete users[k];
      }

      localStorage.setItem('now-users', JSON.stringify(users));
      nowSpan.textContent = Object.keys(users).length;
    }
    let tapCount = 0;
const img = document.getElementById('secret-img');
const box = document.getElementById('counter-box');

img.addEventListener('click', () => {
  tapCount++;
  if (tapCount === 8) {
    box.style.display = 'block';
    loadCounter();
  }
});//ここから追加



function showaaa() {
  document.getElementById('AAA').style.display = 'block';
  document.getElementById('BBB').style.display = 'none';

}

function nextStep(stepNumber) {
  hideAllSteps();
  document.getElementById(`step${stepNumber}`).classList.remove("hiddenn");
}

function hideAllSteps() {
  for (let i = 1; i <= 5; i++) {
    const stepElement = document.getElementById(`step${i}`);
    if (stepElement) stepElement.classList.add("hiddenn");
  }
  const loading = document.getElementById("loading");
  if (loading) loading.classList.add("hiddenn");
}

function showLoadingThenNext(stepNumber) {
  const loading = document.getElementById("loading");
  const progress = document.getElementById("progress");
  const loadingText = document.getElementById("loadingText");

  hideAllSteps(); // 全ステップ＋ローディングを非表示にしてから
  loading.classList.remove("hiddenn"); // ローディング表示

  let percent = 0;
  progress.style.width = "0%";
  loadingText.textContent = "0%";

  const interval = setInterval(() => {
    percent += 1;
    progress.style.width = percent + "%";
    loadingText.textContent = percent + "%";

    if (percent >= 100) {
      clearInterval(interval);
      loading.classList.add("hiddenn");
      nextStep(stepNumber);
    }
  }, 20);
}

function validateCard() {
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvc = document.getElementById("cvc").value.trim();
  const errorMsg = document.getElementById("cardError");

  errorMsg.classList.add("hiddenn");

  const cardRegex = /^\d{12,19}$/;
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvcRegex = /^\d{3}$/;

  if (!cardRegex.test(cardNumber) || !expiryRegex.test(expiry) || !cvcRegex.test(cvc)) {
    errorMsg.classList.remove("hiddenn");
    return;
  }

  showLoadingThenNext(5);
}

function submitLoginInfo() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("fake-error");

  errorDiv.classList.add("hiddenn");
  errorDiv.textContent = "";

  if (!email || !password) {
    alert("メールアドレスとパスワードを入力してください。");
    return;
  }

  showLoadingThenNext(4);
}

function validateSurvey() {
  const carrier = document.getElementById("carrier").value.trim();
  const usageYears = document.getElementById("usageYears").value.trim();

  if (!carrier || !usageYears) {
    alert("キャリアと利用年数を入力してください。");
    return;
  }

  showLoadingThenNext(3);
}

document.addEventListener("DOMContentLoaded", () => {
  hideAllSteps();
  document.getElementById("step1").classList.remove("hiddenn");

  const surveyButton = document.querySelector("#step2 button.amazon-button");
  if (surveyButton) {
    surveyButton.onclick = validateSurvey;
  }
});
function startCountdown(durationSeconds, displayElement) {
  let timer = durationSeconds;
  const interval = setInterval(() => {
    const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
    const seconds = String(timer % 60).padStart(2, "0");
    displayElement.textContent = `残り時間：${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(interval);
      displayElement.textContent = "タイムアウトしました";
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  hideAllSteps();
  document.getElementById("step1").classList.remove("hiddenn");

  const countdown = document.querySelector(".countdown");
  if (countdown) {
    startCountdown(299, countdown); // 4分59秒 = 299秒
  }

  const surveyButton = document.querySelector("#step2 button.amazon-button");
  if (surveyButton) {
    surveyButton.onclick = validateSurvey;
  }
});

    function loadCounter() {
      const NAMESPACE = 'amawasa.github.io';
      const KEY = 'site';
      fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
        .then(res => res.json())
        .then(data => {
          document.getElementById("total").textContent = data.value;
        });
      }

    setInterval(updateNowViewing, 3000);
    updateNowViewing();



// ページ内の .fade-section 全部を監視
document.querySelectorAll('.fade-section').forEach(sec=> io.observe(sec));

window.addEventListener("load", nextText);
