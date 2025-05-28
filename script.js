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
    const main = document.getElementById('story-container');
    main.style.display = 'flex';

    document.querySelectorAll('.glitch').forEach((el, index) => {
      const text = el.getAttribute('data-text');
      setTimeout(() => {
        animateGlitchText(el, text, 40, 40);
      }, index * 600);
    });
  }//終わり


    const elements = document.querySelectorAll('.loading');

       elements.forEach(el => {
    const originalText = el.textContent.split('');
    const finalText = el.getAttribute('data-wa').split('');
    let current = [...originalText];

    // 2秒待ってから文字化けスタート
    setTimeout(() => {
      let glitchIndexes = originalText.map((_, i) => i);

      const glitchStep = setInterval(() => {
        if (glitchIndexes.length === 0) {
          clearInterval(glitchStep);

          // すべて文字化けしたあと、さらに2秒後に最終変化を始める
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
    }, 2000); // 最初の表示時間（2秒）
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

document.getElementById('scareButton').addEventListener('click', function() {
  // glitch要素を消す
  document.querySelectorAll('.main-content').forEach(elem => {
    elem.style.display = 'none';
  });

  // 顔と手を表示
  const face = document.getElementById('face');
  const hand = document.getElementById('hand');
  const background = document.getElementById('background');

  face.classList.remove('hidden');
  
background.classList.remove('hidden');
  hand.classList.remove('hidden');

  // 顔を拡大アニメーション
  face.querySelector('img').style.animation = 'faceZoom 2s forwards';

  // 手を下降アニメーション
  hand.querySelector('img').style.animation = 'handDrop 2s forwards';
});



let goToMainAfterTap = false;
let currentIndex = 0;
let isTyping = false;
let currentScene = "";
let backgroundTimerId = null;

const storyTexts = [
  { speaker: "私", text: "学校の課題の資料のために図書室たけど、どこにあったけ、", scene: "tosyo" },
  { speaker: "私", text: "うーん,,,,,ないなー,,,っあ!!", scene: "school" },
  { speaker: "私", text: "白雪姫じゃん。なつかしー。こんなのも高校の図書室にあるんだ。", scene: "school" },
  { speaker: "私", text: "うわ、なにこれボロボロじゃん。学校のものなんだから大切にしないと。", scene: "school" },
  { speaker: "私", text: "最後に読んだの子供のころだったからストーリー忘れちゃってるなぁ。", scene: "school" },
  { speaker: "私", text: "そうそう、白雪姫が毒リンゴを食べちゃって、倒れちゃって、", scene: "school" },
  { speaker: "私", text: "そこに、王子様が現れて、白雪姫にkissして、", scene: "school" },
  { speaker: "私", text: "喉につっかえてた毒リンゴがとれて,,,,あれ？", scene: "school" },
  { speaker: "私", text: "な、なにこれ？", scene: "school" },
  { speaker: "私", text: "いや、うっうわぁぁぁぁぁぁぁ,,,,,,,", scene: "school" },
  { speaker: "", text: ",,,,,,,,,,,,,,,,,,,,,,,,,,", scene: "mori" },
  { speaker: "私", text: "いてて、なんなんだよぉ、", scene: "tp" },
  { speaker: "私", text: "あれっ、ここはどこだ？私図書室にいたのに？", scene: "tp" },
  { speaker: "???", text: "き、君は,,,!?", scene: "tp" },
  { speaker: "???", text: "ま、まさか、外からの訪問者!?", scene: "tp" },
  { speaker: "私", text: "!? どこ？誰だ？", scene: "tp" },
  { speaker: "???", text: "下だよ、下", scene: "unknowman" },
  { speaker: "小人", text: "僕は、小人、君の知っている白雪姫の小人の一人だよ。", scene: "smallman" },
  { speaker: "小人", text: "君は、今白雪姫のストーリーの中にいるってこと!?", scene: "smallman" },
  { speaker: "私", text: "えっ!? 小人!? どういうこと???", scene: "talk" },
  { speaker: "私", text: "それに白雪姫!? なにこれ、夢!?", scene: "talk" },
  { speaker: "私", text: "あれ、でも私が知ってる白雪姫には、7人いたはずでは?", scene: "talk" },
  { speaker: "小人", text: "そうなんだ。でも他のみんなは白雪姫に襲われ、離れ離れになってしまったんだ。", scene: "smallman" },
  { speaker: "私", text: "どういうこと? 白雪姫が襲ってきた? 意味が分からないよ。", scene: "talk" },
  { speaker: "小人", text: "それが、本来なら王子様のキスで起きる場面で、", scene: "smallman" },
  { speaker: "小人", text: "王子様も毒リンゴの毒をもらってしまい、倒れてしまったんだ。", scene: "smallman" },
  { speaker: "小人", text: "それで、起きなくなった白雪姫が、あの悪い王女に操られちゃって,,,", scene: "smallman" },
  { speaker: "小人", text: "そこで、この世界の存在でない君に頼みたいことがあるんだ。", scene: "smallman" },
  { speaker: "私", text: "頼みたいこと?", scene: "talk" },
  { speaker: "小人", text: "そう、君にしかできないことなんだ。", scene: "smallman" },
  { speaker: "小人", text: "君だけがこの世界に干渉できるんだ。", scene: "smallman" },
  { speaker: "小人", text: "過去に戻って、白雪姫を治すための魔法のリンゴを集めてほしいんだ。", scene: "smallman" },
  { speaker: "小人", text: "そうしたら、お礼に元の世界に戻してあげる。", scene: "smallman" },
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
function morihe() {
    document.body.style.backgroundImage = 'url(background1.jpg)';
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

function typeText(text, el, callback) {
  el.textContent = "";
  let i = 0;
  isTyping = true;
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(timer);
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
    document.getElementById("speaker-name").textContent = data.speaker;
    document.getElementById("next-icon").style.display = "none";

    typeText(data.text, document.getElementById("story-text"), () => {
      if (data.scene) handleScene(data.scene);
    });

    currentIndex++;
  } else {
    // 通常の終了
    document.getElementById("story-container").style.display = "none";
    stopRandomBackground();
  }

  // 次のテキストが終わった直後にmainへ遷移（フラグを使って）
  if (goToMainAfterTap && currentIndex >= storyTexts.length) {
    goToMainAfterTap = false;
    showMainScreen();
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
    case "gameover":
      gameover();
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
      <button onclick="selectChoice('L')">黙れ、ガキなめてると潰すぞ</button>
    `;
  }else if (type === "5") {
    document.getElementById("choice-box").innerHTML = `
      <button onclick="selectChoice('M')">あぁぁもおわかったよやればいいんだろ？</button>
      <button onclick="selectChoice('N')">蹴とばされたいの？ガキが。</button>
    `;
  }else if (type === "6") {
    document.getElementById("choice-box").innerHTML = `
      <button onclick="selectChoice('O')">くそが、やりますよ</button>
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
     { speaker: "私", text: "手元の本をめくり、過去に戻った!", scene: "" },
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
      { speaker: "", text: "", scene: "main" }
    );
  } else if (choice === "D") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "だから、無理、白雪姫なんて知らない", scene: "choiceD" }
    );
  } else if (choice === "E") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "終わったら元の世界に戻してくれるんだよね。", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  } else if (choice === "F") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "いくら頼んでも無理なものは無理。", scene: "choiceF" }
    );
  } else if (choice === "G") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "うるっさいなぁ。わかったよ", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  } else if (choice === "H") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "はやく元の世界に戻してよ", scene: "choiceH" }
    );
  }else if (choice === "I") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "一回だけだからね!?", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  }else if (choice === "J") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "うるさいなぁ", scene: "choiceJ" }
    );
  }else if (choice === "K") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "はぁ,,,わかったよ。ッチ", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  }else if (choice === "L") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "黙れ、ガキなめてると潰すぞ", scene: "choiceL" }
    );
  }else if (choice === "M") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "あぁぁもおわかったよやればいいんだろ？", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  }else if (choice === "N") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "蹴とばされたいの？ガキが。", scene: "choiceN" }
    );
  }else if (choice === "O") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "くそが、やりますよ", scene: "" },
      { speaker: "", text: "", scene: "main" }
    );
  }else if (choice === "P") {
    storyTexts.splice(currentIndex, 0,
      { speaker: "私", text: "無視して逃げる。", scene: "" },
            { speaker: "", text: "", scene: "gameover" }
    );
  }


  nextText();
}

document.getElementById("skip-button").addEventListener("click", () => {
  while (currentIndex < storyTexts.length && storyTexts[currentIndex].scene !== "choice") {
    currentIndex++;
  }
  if (currentIndex < storyTexts.length) {
    skipdel();
    nextText();
  }
});

function skipdel() {
    document.getElementById("skip-button").style.display = "none";
}

function showMainScreen() {
  document.getElementById("story-container").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

function backtosyo() {
document.body.style.backgroundImage = 'url(tabunmain.jpg)';
}

window.addEventListener("load", nextText);
