const questionText = document.getElementById("question-text");
const buttonsContainer = document.getElementById("buttons-container");
const finalMessage = document.getElementById("final-message");
const mainImage = document.getElementById("mainImage");

/* الصور */
const stepImages = {
  "1": "hi-habibi.jpg",
  "2": "mhjezlek.jpg",
  "2_1": "if-no.jpg",
  "3": "ekhtar.jpg",
  "end_wait": "if-no (2).jpg",
  "end_surprise": "bahebak.jpg",
  "end_love": "special-day.jpg"
};

/* الأسئلة */
const questions = {
  "1": {
    text: "    ربما كان يومك مرهقًا… لكني هُنا  ، نبلش! 💗",
    buttons: [
      { text: "يلا", next: "2" },
      { text: "لا", next: "end_wait", movingNo: true }
    ]
  },

  "2": {
    text: "مجهزالك اشي حلو مثلك يكيكه  ، تشوفه هسا؟",
    buttons: [
      { text: "اه", next: "3" },
      { text: "لا لا", next: "2_1" }
    ]
  },

  "2_1": {
    text: "ليه يا اُمي مبدك تشوفها👈🏼👉🏼؟",
    buttons: [
      { text: "يلا حبيبي", next: "3" }
    ]
  },

  "3": {
    text: " اختر، فكل الطرق هنا تقود لشيء جميل… مثلك ",
    buttons: [
      { text: "تشوف اشي حلو زيك؟", next: "end_love" },
      { text: "كلام مني", next: "end_surprise" }
    ]
  },

  "end_wait": {
    text: "مستحيل تختار لا 😏💗",
    buttons: []
  },

  "end_love": {
    text: `
      <div class="video-container">
        <video class="final-video" controls playsinline>
          <source src="hob-omri.mp4" type="video/mp4">
          متصفحك لا يدعم تشغيل الفيديو
        </video>
      </div>
    `,
    buttons: []
  },

  "end_surprise": {
    text: `
      <div class="love-text">اليوم مو تاريخ عادي ، اليوم يوم الإنسان يلي دخل حياتي بالغلط وبهدوء وبدون تخطيط يلي دخل حياتي وغيّرها كتيير وغيّر افكاري وخلاني احب الحُب ، وأأمن انه لسا الدنيا بخير وفي ناس بتحبنا .. هاليوم ما كان بس ليذكرني انك كبرت سنه أنا بحس انه خلاني اتذكر قديه اميره كبرت في وجودك وقديه اميره صارت اهدى و وقديه روحها تطّمنت من لمّا صار هالشخص جُزء من يومها وتفاصيلها وقلبها وروحها ..
الشخص يلي ناديتله "باندتي وطفلي" وكنت بعنيها لاني كُنت بشوفك طفلي يلي كُلو براءه وكُلو حنّيه وكُلو ايجابيه ، ومن جهه ثانيه الزلمة يلي قد حاله يلي بدو يحققلي احلامي حده ويلي وقف جنبي وصبّر علي وحبني واعطاني طاقه سنين لقدام ، يلي غمرني حُب وحنّيه ولمسات في قلبي وروحي ومشاعري.. يمكن ما بيعرف اخميد كم وجوده كان فرق كم صرت لما اتعب افكر فيه فارتاح قديه لما أضيع واتذايق افتح ع صوره وتبتسم شفايفي وقلبي قبلهم،.. الشخص او نحكي المكان يلي بروحله لما الدنيا تذيق فيني ، كتكوتي يلي حبيتو بطريقه ما فيها استعجال ،الحد الي صوته لحاله بياخذني لعالمي الموازي والحد يلي اخد من تفكيري عُمر ، يلي تأنيت وصبرت واعطيت قلبي وقت لحبيتو واتاكد من قلبي تجاهه لاني حسيت انو بيستاهل فُرصه لتكمل حياتي في ولأني شفت في شبيه روحي الحد يلي حيرفض مني ويضحكني ويعمل كلشي لأكون سعيده.. يلي حبيتو بدون خوف يلي حبيتو حُب نضيف وصادق جددددداً  حُب م فيو لعب مشاعر بس حُب بيزيد اضعاف فقلبي كل يوم ، بُكرا عيد ميلادك بس حقيقةً! هاد اليوم عيد علي كمان لانه وجودك بحياتي صار سبب افرح من غير سبب! كلماتك الي يلي علقت بذاكرتي ورسخت يلي كانت حُضن دافي لقلب يمكن محتاج يسمع هيك حُب من دون ما اطلب وكُنت أقراها بروحي وقلبي قبل عيوني ، كُنت أحسّك جوّات قلبي قاعد متربع وكأنك شايفني بعُمق عُمري م حسيت في من قبل رغم انه كان في الكثير من الفرص الا أنه قلبي كان رافض وللآن ، أنا شايفيتك فكل مكان معي ما فارقت عيوني ولا روحي ، وحاسه فيك ولحد هاللحضه مُمتنه لكلشي صنعناه سوا من ذكريات وحُب، ولما جيت كُنت نعمتي الحلوه يلي اجت فجاه وغيّرت أشياء كثيره جواتي بدون ما احس وانا فعلا سعيده فيك.
كتكوتي 🐥💗، كُل عام والخير مرافق دربك يا كُل الخير يا اجمل أعيادي ، كُل وانت حُبي يلي حبيتو قد هالدنيا حُبي الأبدي وقمري يلي بدي اخفيه عن كل الناس، كُل عام وقلبك مرتاح كثير وروحك متطمنه وأيامك مليانه سعاده ، واضل احكي لحالي بس تضحك " ضحك الحياة ❤️" 
بتمنالك سنه جديده تشبه قلبك لطيفه ودافيه حدّ كل الناس يلي بحبها قلبك ، وتكون مليانه لحضات بتستاهل قلبك ، كُل عام وانت بخير اخميد حقتي   ، وكُل عام وانا مبسوطه انك انتَ🤍. وبدي أشكرك، على كل كلمه حكيتها و دخلت قلبي ، وانا جد فخوره فيك بكل خطوه وبكل تعب وبإصرارك وفخوره انك كبير فعيني وعم تكافح ، حكوونلك صاحبتك وروحك وكلشي بالنسبه الك، أنا للان بالنسبه الي كل إنجاز الك هو فرحه الي والله وكل خطوه بتاخدها وحتاخدها بحسها خطوه النا الثنين ❤️
HAPPY BIRTHDAY YA ROOHI ❤️  

وعد مني…  
رح أضل جنبك بكل أعوامك الجاية…  
وكل سنينك تكون بأحضاني 💞
      </div>
    `,
    buttons: []
  }
};

/* تغيير الصورة */
function changeImage(step) {
  if (stepImages[step]) {
    mainImage.src = stepImages[step];
  }
}

/* تحريك زر لا داخل حدود الكونتينر */
function moveNoButton(button) {
  const containerWidth = buttonsContainer.clientWidth;
  const containerHeight = buttonsContainer.clientHeight;

  const buttonWidth = button.offsetWidth || 80;
  const buttonHeight = button.offsetHeight || 45;

  const maxX = Math.max(containerWidth - buttonWidth, 10);
  const maxY = Math.max(containerHeight - buttonHeight, 10);

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

/* تجهيز زر لا للموبايل */
function setupMovingNoButton(button) {
  button.classList.add("moving-no");

  setTimeout(() => {
    moveNoButton(button);
  }, 50);

  button.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton(button);
  }, { passive: false });

  button.addEventListener("touchmove", (e) => {
    e.preventDefault();
    moveNoButton(button);
  }, { passive: false });

  button.addEventListener("mouseenter", () => {
    moveNoButton(button);
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton(button);
  });
}

/* عرض الخطوات */
function renderStep(step = "1") {
  const data = questions[step];
  changeImage(step);

  if (step.startsWith("end")) {
    questionText.classList.add("hidden");
    buttonsContainer.classList.add("hidden");
    finalMessage.classList.remove("hidden");
    finalMessage.innerHTML = data.text;
    return;
  }

  questionText.classList.remove("hidden");
  buttonsContainer.classList.remove("hidden");
  finalMessage.classList.add("hidden");

  questionText.innerHTML = data.text;
  buttonsContainer.innerHTML = "";

  data.buttons.forEach((btn) => {
    const button = document.createElement("button");
    button.className = "action-button";
    button.textContent = btn.text;

    if (step === "1" && btn.movingNo) {
      setupMovingNoButton(button);
    } else {
      button.addEventListener("click", () => {
        renderStep(btn.next);
      });
    }

    buttonsContainer.appendChild(button);
  });
}

/* تشغيل أولي */
window.addEventListener("load", () => {
  renderStep();
});

/* القلوب */
setInterval(() => {
  const heartsBg = document.querySelector(".bg_heart");

  const size = Math.random() * 30 + 10;
  const left = Math.random() * 100;
  const greenBlue = 150 + Math.random() * 100;
  const time = 5 + Math.random() * 5;

  heartsBg.insertAdjacentHTML(
    "beforeend",
    `
      <div
        class="floating-heart"
        style="
          width:${size}px;
          height:${size}px;
          left:${left}%;
          background:rgba(255,${greenBlue - 50},${greenBlue},0.8);
          animation:love ${time}s linear;
        ">
      </div>
    `
  );

  const hearts = document.querySelectorAll(".floating-heart");
  if (hearts.length > 60) {
    hearts[0].remove();
  }
}, 400);
