const LAYERS = [
  { name: "Venukagundaram",           src: "images/1.png" },
  { name: "Boggili Posi Kattadam",    src: "images/2.png" },
  { name: "Addugundaram",             src: "images/3.png" },
  { name: "Gocchi Kattu",             src: "images/4.png" },
  { name: "Mukkala Chira",            src: "images/5.png" },
  { name: "Gudakattu",                src: "images/6.png" },
  { name: "Kaccha Kattu",             src: "images/7.png" },
  { name: "Kuchipudi",                src: "images/8.png" },
  { name: "Kuchipudi 2",              src: "images/9.png" },
  { name: "Halaki Vokkaliga",         src: "images/10.png" },
  { name: "Gobbe Seere",              src: "images/11.png" },
  { name: "Nadikattu",                src: "images/12.png" },
  { name: "Mudukongula Chira",        src: "images/13.png" },
  { name: "Pinn Kossavam",            src: "images/14.png" },
  { name: "Saurashta Katt",           src: "images/15.png" },
  { name: "Madisaru",                 src: "images/16.png" },
  { name: "Madisaru 2",               src: "images/17.png" },
  { name: "Bharatanatyam",            src: "images/18.png" },
  { name: "Ranchi Saiko",             src: "images/19.png" },
  { name: "Jhabua",                   src: "images/20.png" },
  { name: "Balaghat",                 src: "images/21.png" },
  { name: "Ranchi-Tukupani Simdega",  src: "images/22.png" },
  { name: "Palamu Mahuadanr",         src: "images/23.png" },
  { name: "Hazaribag",                src: "images/24.png" },
  { name: "Koli",                     src: "images/25.png" },
  { name: "Santhal Pargana",          src: "images/26.png" },
  { name: "Ranchi",                   src: "images/27.png" },
  { name: "Chodhri",                  src: "images/28.png" },
  { name: "Gamthi",                   src: "images/29.png" },
  { name: "Dharampur",                src: "images/30.png" },
  { name: "Parsi",                    src: "images/31.png" },
  { name: "Seedha Palla",             src: "images/32.png" },
  { name: "Dangi",                    src: "images/33.png" },
  { name: "Kalna",                    src: "images/34.png" },
  { name: "Santhal",                  src: "images/35.png" },
  { name: "Dhokna Jalpaiguri",        src: "images/36.png" },
  { name: "Kachha",                   src: "images/37.png" },
  { name: "Kachha Variation 1",       src: "images/38.png" },
  { name: "Lapetawali",               src: "images/39.png" },
  { name: "Meher",                    src: "images/40.png" },
  { name: "Ghorapindha",              src: "images/41.png" },
  { name: "Kuncha",                   src: "images/42.png" },
  { name: "Santhal",                  src: "images/43.png" },
  { name: "Kotapad",                  src: "images/44.png" },
  { name: "Kotapad 2",                src: "images/45.png" },
  { name: "Mysore Shaili",            src: "images/46.png" },
  { name: "Karnataka Kacche",         src: "images/47.png" },
  { name: "Iyengari Kacche",          src: "images/48.png" },
  { name: "Madhava Kacche",           src: "images/49.png" },
  { name: "Bhootheyara",              src: "images/50.png" },
  { name: "Coorg",                    src: "images/51.png" },
  { name: "Yakshagana Mali Kase",     src: "images/52.png" },
  { name: "Yakshagana Parvati Kase",  src: "images/53.png" },
  { name: "Yakshagana Kase",          src: "images/54.png" },
  { name: "Agari",                    src: "images/55.png" },
  { name: "Kaatakari",                src: "images/56.png" },
  { name: "Thakkar",                  src: "images/57.png" },
  { name: "Warli",                    src: "images/58.png" },
  { name: "Marathamoli",              src: "images/59.png" },
  { name: "Munger",                   src: "images/60.png" },
  { name: "East Champaran",           src: "images/61.png" },
  { name: "Purnia",                   src: "images/62.png" },
  { name: "Madhubani",                src: "images/63.png" },
  { name: "Maar Kaccha",              src: "images/64.png" },
  { name: "Chatta Mundu",             src: "images/65.png" },
  { name: "Mohiniattam",              src: "images/66.png" },
  { name: "Kalsi Dance",              src: "images/67.png" },
  { name: "Adivasi",                  src: "images/68.png" },
  { name: "Danda Mundu",              src: "images/69.png" },
  { name: "Dhangad",                  src: "images/70.png" },
  { name: "Christian Kunbi",          src: "images/71.png" },
  { name: "Hindu Kunbi",              src: "images/72.png" },
  { name: "Chhattisgarh East",        src: "images/73.png" },
  { name: "Chhattisgarh Central",     src: "images/74.png" },
  { name: "Surguja North",            src: "images/75.png" },
  { name: "Surguja North Dance",      src: "images/76.png" },
  { name: "Chhattisgarh Central 2",   src: "images/77.png" },
  { name: "Chhattisgarh Central 3",   src: "images/78.png" },
  { name: "Chhattisgarh Central 4",   src: "images/79.png" },
  { name: "Bastar",                   src: "images/80.png" },
  { name: "Dhangad",                  src: "images/81.png" },
];

const stage   = document.getElementById('stage');
const leftEl  = document.getElementById('left-names');
const rightEl = document.getElementById('right-names');
const readout = document.getElementById('readout');
const imgs    = [];
const btns    = [];
const half    = Math.ceil(LAYERS.length / 2);

LAYERS.forEach((layer, i) => {
  const img     = document.createElement('img');
  img.src       = layer.src;
  img.alt       = layer.name;
  img.className = 'layer';
  img.style.cssText = `z-index: ${i + 1}; transform: translateX(0px) scale(1); filter: brightness(1); opacity: 0.15;`;
  stage.appendChild(img);
  imgs.push(img);

  const btn       = document.createElement('button');
  btn.className   = 'name-btn';
  btn.textContent = layer.name;
  btn.type        = 'button';

    const activate = () => {
        imgs.forEach(el => {
        el.classList.remove('active');
        const idx = imgs.indexOf(el);
        el.style.cssText = `z-index: ${idx + 1}; transform: translateX(-200px) scale(1); filter: brightness(1); opacity: 0.04; transition: filter 0.4s ease, opacity 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);`;
        });
        btns.forEach(b => { b.classList.remove('highlighted'); b.classList.add('dimmed'); });
        img.style.cssText = `z-index: 200; transform: translateX(200px) scale(1.5); filter: brightness(1); opacity: 1; transition: filter 0.4s ease, opacity 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);`;
        img.classList.add('active');
        btn.classList.remove('dimmed');
        btn.classList.add('highlighted');
        stage.classList.add('has-active');
        readout.textContent = layer.name;
    };

  const deactivate = () => {
    imgs.forEach(el => {
      el.classList.remove('active');
      const idx = imgs.indexOf(el);
      el.style.cssText = `z-index: ${idx + 1}; transform: translateX(0px) scale(1); filter: brightness(1); opacity: 0.15; transition: filter 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);`;
    });
    btns.forEach(b => { b.classList.remove('dimmed'); b.classList.remove('highlighted'); });
    stage.classList.remove('has-active');
    readout.textContent = '';
  };

  btn.addEventListener('mouseenter', activate);
  btn.addEventListener('mouseleave', deactivate);
  btns.push(btn);

  if (i < half) {
    rightEl.appendChild(btn);
  } else {
    leftEl.appendChild(btn);
  }
});