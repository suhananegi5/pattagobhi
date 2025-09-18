const pages = {
  "Jiya Maam": `
    <html>
      <head>
        <title>Jiya Maam</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background-color: #ffffff; }
          h1 { color: #2c3e50; }
          p { color: #34495e; font-size: 16px; line-height: 1.5; }
        </style>
      </head>
      <body>
        <h1>Jiya Ma'am</h1>
        <p>
          Jiya Maam isn't just a leader, she's the kind of person who leaves a lasting impact on everyone she works with.<br>
          During my internship, she wasn’t only my department head, but also my mentor, biggest supporter, and someone I now call a very close friend.<br><br>

          She has entrusted Hannah and me with her department, a gesture that means the world to both of us.<br>
          It reflects not just her faith in us, but also her rare ability to empower others with trust, grace, and encouragement.<br><br>

          Jiya Maam is one of the sweetest, most caring people I know.<br>
          She's the kind of person who checks in when she doesn't have to, who notices the little things, and who makes even the hardest days lighter just by being around.<br>
          Her warmth, patience, and constant support have shaped not just my work, but me as a person.<br><br>

          More than just a professional guide, she's a friend I can always count on and I'm endlessly grateful for her.
        </p>
      </body>
    </html>
  `,
  about: `
    <html>
      <head>
        <title>About Us</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background-color: #ffffff; }
          h1 { color: #2c3e50; }
          p { color: #34495e; font-size: 16px; line-height: 1.5; }
        </style>
      </head>
      <body>
        <h1>About Us</h1>
        <p>
          Jiya Maam and I have worked on two events together so far, and it's been a journey that's brought us closer in ways I didn't expect.<br>
          From the very beginning of our last project, I started seeing a side of her that I hadn't known before, a side that's incredibly deep, warm, and full of love.<br><br>

          She loves with so much passion and sincerity. Even when circumstances force her to step back from someone she cares about, she never truly stops caring.<br>
          That kind of love quiet, unwavering, and selfless makes me fall absolutely in love with her (respectfully) all over again.<br><br>

          She's helped me, supported me, and stood by me more times than I can count.<br>
          And even though I may have messed things up, I'm still beyond grateful that she's in my life.<br>
          Because knowing her really knowing her has been one of the most meaningful things I've experienced.
        </p>
      </body>
    </html>
  `,
  sorry: `
    <html>
      <head>
        <title>Sorry</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background-color: #ffffff; }
          h1 { color: #2c3e50; }
          p { color: #34495e; font-size: 16px; line-height: 1.5; }
        </style>
      </head>
      <body>
        <h1>I'm Sorry Jiya Maam</h1>
        <p>
          For what feels like the hundredth time, I've messed something up again because of my communication skills.<br>
          And this time, I've hurt someone I deeply care about you, Jiya Maam.<br><br>

          I want you to know that it was never, ever my intention to hurt you.<br>
          If I said or did anything that caused you pain, I am truly and genuinely sorry from the bottom of my heart.<br><br>

          Life feels... off without you.<br>
          Without talking to you, without sending you my usual weird messages all day, I don't really know what to do with myself.<br><br>

          This entire website it's my way of trying to say what I haven't been able to communicate properly in chat.<br>
          You mean so much to me, not just as a mentor, or a friend, but as someone who's been a constant source of light, care, and comfort in my life.<br><br>

          So pleaseeeee, jiyayayaya maam... if you can find it in your heart, I hope you will forgive me.<br>
          Please, please, please know how sorry I am and how much I miss having you around.<br><br>

          I pinky promise to try harder. To be better. To never take your presence in my life for granted again.<br><br>

          <strong>I'm really, truly sorry.</strong>
        </p>
      </body>
    </html>
  `,
  options: `
    <html>
      <head>
        <title>Options</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #ffffff;
            color: #2c3e50;
          }
          h1 {
            margin-bottom: 20px;
          }
          button {
            display: block;
            margin: 10px 0;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 6px;
            background-color: #3498db;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          button:hover {
            background-color: #2980b9;
          }
          #response {
            margin-top: 30px;
            font-size: 18px;
            font-weight: bold;
            color: #e74c3c;
          }
          p.note {
            margin-top: 25px;
            font-style: italic;
            color: #555;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <h1>Options</h1>
        <button onclick="selectOption(1)">1st: Mujhe maaf krdo</button>
        <button onclick="selectOption(2)">2nd: Mujhe pls maaf krdo</button>
        <button onclick="selectOption(3)">3rd: Mujhe pls pls maaf krdo</button>
        <button onclick="selectOption(4)">4th: Main chhat se kud jaaungi</button>

        <p class="note">
          Please kindly select 1st, 2nd, or 3rd option.<br>
          But even if you select the 4th one... I understand.
        </p>

        <div id="response"></div>

        <script>
          function selectOption(option) {
            const responseDiv = document.getElementById('response');
            switch(option) {
              case 1:
                responseDiv.textContent = "Thank you for choosing the 1st option! Love you too ";
                break;
              case 2:
                responseDiv.textContent = "2nd option selected — bahut saara pyaar aapko ";
                break;
              case 3:
                responseDiv.textContent = "3rd option chosen! MUJHE PATA THA U LOVE ME ";
                break;
              case 4:
                responseDiv.textContent = "i-, koi nahi i understand";
                break;
              default:
                responseDiv.textContent = "";
            }
          }
        </script>
      </body>
    </html>
  `
};

function loadPage(pageName) {
  const iframe = document.getElementById('contentFrame');
  if(pages[pageName]){
    // Use srcdoc for simplicity
    iframe.srcdoc = pages[pageName];
  } else {
    iframe.srcdoc = "<p>Page not found.</p>";
  }
}

// Load default page on window load
window.onload = () => loadPage('Jiya Maam');