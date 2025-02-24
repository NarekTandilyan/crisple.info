const ul1 = document.querySelector(".ul1");
const ul2 = document.querySelector(".ul2");
// Языки
const label1 = document.querySelector(".label1");
const label2 = document.querySelector(".label2");
const label3 = document.querySelector(".label3");
const label4 = document.querySelector(".label4");
const label5 = document.querySelector(".label5");
// Кнопка "больше"
const link_more = document.querySelectorAll('.link_more1');
// Бегущая строка
const marquee = document.querySelector('marquee');
// Надписи
const inscr1 = document.querySelector('.inscr1');
const inscr2 = document.querySelector('.inscr2');
const inscr3 = document.querySelector('.inscr3');
const inf_h1_1 = document.querySelector('.inf_h1_1');
const inf_h1_2 = document.querySelector('.inf_h1_2');
const inf_h1_3 = document.querySelector('.inf_h1_3');
const inf_h1_4 = document.querySelector('.inf_h1_4');
const inf_h1_5 = document.querySelector('.inf_h1_5');
// Текст
const inf_text1 = document.querySelector('.inf1');
const inf_text2 = document.querySelector('.inf2');
const inf_text3 = document.querySelector('.inf3');
const inf_text4 = document.querySelector('.inf4');
const inf_text5 = document.querySelector('.inf5');
// консультант
const consultants = document.querySelector('.cons');



// Сайт на испанском
label1.onclick = function(){
        ul2.innerHTML = `
						<li><a class="a5" href="roofs.html"> Techos </a></li>
						<li><a class="a4" href="awnings.html"> Toldos </a></li>
						<li><a class="a7" href="blinds.html"> Persianas </a></li>
						<li><a class="a8" href="mosquito_nets.html"> Mosquiteras </a></li>
						<li><a class="a6" href="folding_crystals.html"> Cristales Plegables </a></li>
        
        `;
        

        label2.classList.remove('label22');
        label3.classList.remove('label33');
        label4.classList.remove('label44');
        label5.classList.remove('label55');
        label1.classList.add('label11');

        link_more.forEach(link=>{
            link.innerText = 'Más';
            link.classList.remove('link_more2');
            link.classList.remove('link_more3');
            link.classList.remove('link_more4');
            link.classList.remove('link_more5');
            link.classList.add('link_more1');
        })

        marquee.innerHTML = `
                            Bienvenido a Crisple, tu empresa local de Denia especializada en el montaje de toldos, acristalamientos, persianas, mosquiteras y techos. Ofrecemos soluciones personalizadas y de alta calidad para proteger y mejorar tus espacios exteriores, tanto para hogares como para negocios.
                            `;

        inscr1.innerText = `Algunos de nuestros trabajos`
        inscr2.innerText = `Garantía hasta 5 años!`
        inscr3.innerText = `Más de 20 años de experiencia!`

        inf_h1_1.innerText = `Defiende tu hogar de los insectos con las mosquiteras de Crisple: comodidad y protección en una solución elegante`
        inf_h1_2.innerText = `Mejora la calidad del aire en tu hogar`
        inf_h1_3.innerText = `Estética y discreción`
        inf_h1_4.innerText = `Variedad de opciones para adaptarse a tus necesidades`
        inf_h1_5.innerText = `Instalación profesional y rápida`
        
        inf_text1.innerText = `¿Cansado de las noches de verano interrumpidas por molestos mosquitos y otros insectos? Con las mosquiteras de Crisple, podrás disfrutar de la brisa fresca en tu hogar sin tener que preocuparte por esos pequeños intrusos. En este artículo, te contamos cómo nuestras mosquiteras personalizadas y de alta calidad pueden mejorar tu calidad de vida y proteger tu hogar de insectos y plagas no deseadas.`;
        inf_text2.innerText = `Las mosquiteras no solo protegen tu hogar de los insectos, sino que también ayudan a mejorar la calidad del aire al evitar la entrada de polvo, polen y otros contaminantes. Esto es especialmente beneficioso para las personas que sufren de alergias o problemas respiratorios, ya que permite disfrutar de un ambiente más limpio y saludable en el hogar.`;
        inf_text3.innerText = `Nuestras mosquiteras están diseñadas para integrarse de manera discreta y elegante en la estética de tu hogar, sin afectar negativamente su apariencia. Además, ofrecemos una variedad de colores y acabados para que puedas elegir la opción que mejor se adapte al estilo de tu hogar.`;
        inf_text4.innerText = `En Crisple, entendemos que cada hogar es único, y por eso ofrecemos una amplia gama de mosquiteras adaptadas a tus necesidades y preferencias. Ya sea para ventanas, puertas o incluso terrazas, nuestras mosquiteras están disponibles en diferentes estilos y materiales para garantizar una solución perfecta para cada situación.`;
        inf_text5.innerText = `Nuestro equipo de profesionales expertos se encarga de realizar la instalación de tus mosquiteras con rapidez y eficiencia, asegurando un acabado perfecto y duradero. Además, nos preocupamos por ofrecer un servicio al cliente excepcional y una comunicación fluida durante todo el proceso, desde la consulta inicial hasta la finalización del proyecto.`;

        consultants.innerText = `Consultores de habla rusa`;
}
// Сайт на английском
label2.onclick = function(){
    ul2.innerHTML = `
                    <li><a class="a55" href="roofs.html"> Roofs </a></li>
                    <li><a class="a44" href="awnings.html"> Awnings </a></li>
                    <li><a class="a77" href="blinds.html"> Blinds </a></li>
                    <li><a class="a88" href="mosquito_nets.html"> Mosquito nets </a></li>
                    <li><a class="a66" href="folding_crystals.html"> Folding crystals </a></li>
    
    `;
    
    label1.classList.remove('label11');
    label3.classList.remove('label33');
    label4.classList.remove('label44');
    label5.classList.remove('label55');
    label2.classList.add('label22');

    link_more.forEach(link=>{
        link.innerText = 'More';
        link.classList.remove('link_more1');
        link.classList.remove('link_more3');
        link.classList.remove('link_more4');
        link.classList.remove('link_more5');
        link.classList.add('link_more2');
    })

    marquee.innerHTML = `
        Welcome to Crisple, your local company in Denia specialized in the assembly of awnings, glazing, blinds, mosquito nets and ceilings. We offer customized and high-quality solutions to protect and improve your outdoor spaces, both for homes and businesses.       
    `;

    inscr1.innerText = `Some of our works`
    inscr2.innerText = `Warranty up to 5 years!`
    inscr3.innerText = `More than 20 years of experience!`

    inf_h1_1.innerText = `Defend your home from insects with Crisple mosquito nets: comfort and protection in an elegant solution`
    inf_h1_2.innerText = `Improve the air quality in your home`
    inf_h1_3.innerText = `Aesthetics and discretion`
    inf_h1_4.innerText = `Variety of options to suit your needs`
    inf_h1_5.innerText = `Professional and fast installation`
    
    inf_text1.innerText = `Tired of summer nights interrupted by annoying mosquitoes and other insects? With Crisple mosquito nets, you can enjoy the cool breeze in your home without having to worry about those little intruders. In this article, we tell you how our high-quality and customized mosquito nets can improve your quality of life and protect your home from unwanted insects and pests.`;
    inf_text2.innerText = `Mosquito nets not only protect your home from insects, but also help improve air quality by preventing the entry of dust, pollen and other pollutants. This is especially beneficial for people who suffer from allergies or respiratory problems, as it allows them to enjoy a cleaner and healthier environment at home.`;
    inf_text3.innerText = `Our mosquito nets are designed to integrate discreetly and elegantly into the aesthetics of your home, without negatively affecting its appearance. In addition, we offer a variety of colors and finishes so you can choose the option that best suits the style of your home.`;
    inf_text4.innerText = `At Crisple, we understand that every home is unique, and that's why we offer a wide range of mosquito nets adapted to your needs and preferences. Whether for windows, doors or even terraces, our mosquito nets are available in different styles and materials to ensure a perfect solution for every situation.`;
    inf_text5.innerText = `Our team of expert professionals is responsible for carrying out the installation of your mosquito nets quickly and efficiently, ensuring a perfect and durable finish. In addition, we care about offering exceptional customer service and smooth communication throughout the entire process, from the initial consultation to the completion of the project.`;

    consultants.innerText = `Russian speaking consultants`;
}
// Сайт на Французском
label3.onclick = function(){
    ul2.innerHTML = `
                    <li><a class="a555" href="roofs.html"> Toits </a></li>
                    <li><a class="a444" href="awnings.html"> Auvents </a></li>
                    <li><a class="a777" href="blinds.html"> Stores </a></li>
                    <li><a class="a888" href="mosquito_nets.html"> Moustiquaires </a></li>
                    <li><a class="a666" href="folding_crystals.html"> Fenêtres pliantes </a></li>
    
    `;
    
    label1.classList.remove('label11');
    label2.classList.remove('label22');
    label4.classList.remove('label44');
    label5.classList.remove('label55');
    label3.classList.add('label33');

    link_more.forEach(link=>{
        link.innerText = 'Plus';
        link.classList.remove('link_more1');
        link.classList.remove('link_more2');
        link.classList.remove('link_more4');
        link.classList.remove('link_more5');
        link.classList.add('link_more3');
    })

    marquee.innerHTML = `
        Bienvenue chez Crisple, votre entreprise locale à Denia spécialisée dans l'assemblage d'auvents, de vitrages, de stores, de moustiquaires et de plafonds. Nous offrons des solutions personnalisées et de haute qualité pour protéger et améliorer vos espaces extérieurs, tant pour les maisons que pour les entreprises.
    `;

    inscr1.innerText = `Quelques unes de nos oeuvres`
    inscr2.innerText = `Garantie jusqu'à 5 ans!`
    inscr3.innerText = `Plus de 20 ans d'expérience!`

    inf_h1_1.innerText = `Protégez votre maison des insectes avec des moustiquaires infirmes: confort et protection dans une solution élégante`
    inf_h1_2.innerText = `Améliorez la qualité de l'air dans votre maison`
    inf_h1_3.innerText = `Esthétique et discrétion`
    inf_h1_4.innerText = `Variété d'options pour répondre à vos besoins`
    inf_h1_5.innerText = `Installation professionnelle et rapide`
    
    inf_text1.innerText = `Fatigué des nuits d'été interrompues par les moustiques et autres insectes agaçants? Avec des moustiquaires infirmes, vous pouvez profiter de la brise fraîche dans votre maison sans avoir à vous soucier de ces petits intrus. Dans cet article, nous vous expliquons comment nos moustiquaires de haute qualité et personnalisées peuvent améliorer votre qualité de vie et protéger votre maison des insectes et parasites indésirables.`;
    inf_text2.innerText = `Les moustiquaires protègent non seulement votre maison des insectes, mais contribuent également à améliorer la qualité de l'air en empêchant l'entrée de poussière, de pollen et d'autres polluants. Ceci est particulièrement bénéfique pour les personnes souffrant d'allergies ou de problèmes respiratoires, car cela leur permet de profiter d'un environnement plus propre et plus sain à la maison.`;
    inf_text3.innerText = `Nos moustiquaires sont conçues pour s'intégrer discrètement et élégamment à l'esthétique de votre maison, sans nuire à son apparence. De plus, nous offrons une variété de couleurs et de finitions afin que vous puissiez choisir l'option qui convient le mieux au style de votre maison.`;
    inf_text4.innerText = `Chez Crisple, nous comprenons que chaque maison est unique, et c'est pourquoi nous offrons une large gamme de moustiquaires adaptées à vos besoins et préférences. Que ce soit pour les fenêtres, les portes ou même les terrasses, nos moustiquaires sont disponibles dans différents styles et matériaux pour assurer une solution parfaite à chaque situation.`;
    inf_text5.innerText = `Notre équipe de professionnels experts se charge de réaliser l'installation de vos moustiquaires rapidement et efficacement, en assurant une finition parfaite et durable. De plus, nous nous soucions d'offrir un service client exceptionnel et une communication fluide tout au long du processus, de la consultation initiale à la réalisation du projet.`;

    consultants.innerText = `Consultants russophones`;
}
// Сайт на немецком
label4.onclick = function(){
    ul2.innerHTML = `
                    <li><a class="a5555" href="roofs.html"> Dächer </a></li>
                    <li><a class="a4444" href="awnings.html"> Markisen </a></li>
                    <li><a class="a7777" href="blinds.html"> Jalousie </a></li>
                    <li><a class="a8888" href="mosquito_nets.html"> Moskitonetze </a></li>
                    <li><a class="a6666" href="folding_crystals.html"> Faltfenster </a></li>
    
    `;
    
    label1.classList.remove('label11');
    label2.classList.remove('label22');
    label3.classList.remove('label33');
    label5.classList.remove('label55');
    label4.classList.add('label44');

    link_more.forEach(link=>{
        link.innerText = 'Mehr';
        link.classList.remove('link_more1');
        link.classList.remove('link_more2');
        link.classList.remove('link_more3');
        link.classList.remove('link_more5');
        link.classList.add('link_more4');
    })

    marquee.innerHTML = `
        Willkommen bei Crisple, Ihrem lokalen Unternehmen in Denia, das sich auf die Montage von Markisen, Verglasungen, Jalousien, Moskitonetzen und Decken spezialisiert hat. Wir bieten maßgeschneiderte und qualitativ hochwertige Lösungen zum Schutz und zur Verbesserung Ihrer Außenräume, sowohl für Privathaushalte als auch für Unternehmen.   
    `;

    inscr1.innerText = `Einige unserer Werke`
    inscr2.innerText = `Garantie bis zu 5 jahre!`
    inscr3.innerText = `Mehr als 20 jahre erfahrung!`

    inf_h1_1.innerText = `Schützen Sie Ihr Zuhause mit verkrüppelten Moskitonetzen vor Insekten: Komfort und Schutz in einer eleganten Lösung`
    inf_h1_2.innerText = `Verbessern Sie die Luftqualität in Ihrem Zuhause`
    inf_h1_3.innerText = `Ästhetik und Diskretion`
    inf_h1_4.innerText = `Vielzahl von Optionen für Ihre Bedürfnisse`
    inf_h1_5.innerText = `Professionelle und schnelle Installation`
    
    inf_text1.innerText = `Müde von Sommernächten, die von Mücken und anderen lästigen Insekten unterbrochen werden? Mit gebrechlichen Moskitonetzen können Sie die kühle brise in Ihrem Zuhause genießen, ohne sich um diese kleinen Eindringlinge sorgen zu müssen. In diesem Artikel erklären wir Ihnen, wie unsere hochwertigen und maßgeschneiderten Moskitonetze Ihre Lebensqualität verbessern und Ihr Zuhause vor unerwünschten Insekten und Schädlingen schützen können.`;
    inf_text2.innerText = `Moskitonetze schützen Ihr Zuhause nicht nur vor Insekten, sondern tragen auch zur Verbesserung der Luftqualität bei, indem Sie das eindringen von Staub, pollen und anderen Schadstoffen verhindern. Dies ist besonders vorteilhaft für Menschen mit Allergien oder Atemproblemen, da Sie zu Hause eine sauberere und gesündere Umgebung genießen können.`;
    inf_text3.innerText = `Unsere Moskitonetze sind so konzipiert, dass Sie sich diskret und elegant in die ästhetik Ihres Hauses einfügen, ohne das Erscheinungsbild zu beeinträchtigen. Darüber hinaus bieten wir eine Vielzahl von Farben und Oberflächen an, sodass Sie die option auswählen können, die am besten zum Stil Ihres Hauses passt.`;
    inf_text4.innerText = `Bei Crisple verstehen wir, dass jedes Haus einzigartig ist, und deshalb bieten wir eine große Auswahl an Moskitonetzen an, die auf Ihre Bedürfnisse und Vorlieben zugeschnitten sind. Ob für Fenster, Türen oder sogar Terrassen, unsere Moskitonetze sind in verschiedenen Stilen und Materialien erhältlich, um eine perfekte Lösung für jede situation zu gewährleisten.`;
    inf_text5.innerText = `Unser Team von erfahrenen Fachleuten ist dafür verantwortlich, die Installation Ihrer Moskitonetze schnell und effizient durchzuführen und ein perfektes und langlebiges Finish zu gewährleisten. Darüber hinaus ist es uns wichtig, während des gesamten Prozesses einen hervorragenden Kundenservice und eine reibungslose Kommunikation zu bieten, von der ersten Beratung bis zur Fertigstellung des Projekts.`;

    consultants.innerText = `Russischsprachige Berater`;
}

//Сайта  на русском
label5.onclick = function(){
        ul2.innerHTML = `
				<li><a class="a55555" href="roofs.html"> Крыши </a></li>
                <li><a class="a44444" href="awnings.html"> Тенты </a></li>
				<li><a class="a77777" href="blinds.html"> Жалюзи </a></li>
				<li><a class="a88888" href="mosquito_nets.html"> Москитные сетки </a></li>
                <li><a class="a66666" href="folding_crystals.html"> Складные окна </a></li>
        `;

        label1.classList.remove('label11');
        label2.classList.remove('label22');
        label3.classList.remove('label33');
        label4.classList.remove('label44');
        label5.classList.add('label55');

        link_more.forEach(link=>{
            link.innerText = 'Больше';
            link.classList.remove('link_more1');
            link.classList.remove('link_more2');
            link.classList.remove('link_more3');
            link.classList.remove('link_more4');
            link.classList.add('link_more5');
        })

        marquee.innerHTML = `
            Добро пожаловать в Crisple, вашу местную компанию в Дении, специализирующуюся на сборке навесов, остекления, жалюзи, противомоскитных сеток и крыш. Мы предлагаем индивидуальные и высококачественные решения для защиты и улучшения ваших открытых пространств, как для дома, так и для бизнеса.
        `;

        inscr1.innerText = `Некоторые из наших работ`
        inscr2.innerText = `Гарантия до 5 лет!`
        inscr3.innerText = `Более 20 лет опыта!`

        inf_h1_1.innerText = `Защитите свой дом от насекомых с помощью москитных сеток Crisple: комфорт и защита в одном элегантном решении`
        inf_h1_2.innerText = `Улучшите качество воздуха в вашем доме`
        inf_h1_3.innerText = `Эстетика и незаметность`
        inf_h1_4.innerText = `Разнообразие вариантов в соответствии с вашими потребностями`
        inf_h1_5.innerText = `Профессиональная и быстрая установка`
        
        inf_text1.innerText = `Устали от летних ночей, прерываемых надоедливыми комарами и другими насекомыми? Благодаря противомоскитным сеткам Crisple вы сможете наслаждаться свежим ветерком в своем доме, не беспокоясь о маленьких злоумышленниках. В этой статье мы расскажем вам, как наши высококачественные противомоскитные сетки, изготовленные на заказ, могут улучшить качество вашей жизни и защитить ваш дом от нежелательных насекомых и вредителей.`;
        inf_text2.innerText = `Москитные сетки не только защищают ваш дом от насекомых, но и помогают улучшить качество воздуха, предотвращая попадание пыли, пыльцы и других загрязняющих веществ. Это особенно полезно для людей, страдающих аллергией или заболеваниями дыхательных путей, поскольку позволяет им наслаждаться более чистой и здоровой средой дома.`;
        inf_text3.innerText = `Наши москитные сетки разработаны таким образом, чтобы гармонично и элегантно вписаться в эстетику вашего дома, не портя его внешний вид. Кроме того, мы предлагаем широкий выбор цветов и отделок, чтобы вы могли выбрать вариант, наилучшим образом соответствующий стилю вашего дома.`;
        inf_text4.innerText = `В Crisple мы понимаем, что каждый дом уникален, и именно поэтому предлагаем широкий ассортимент противомоскитных сеток, адаптированных к вашим потребностям и предпочтениям. Наши противомоскитные сетки для окон, дверей и даже террас доступны в различных стилях и из разных материалов, что позволяет подобрать идеальное решение для любой ситуации.`;
        inf_text5.innerText = `Наша команда опытных специалистов быстро и эффективно установит ваши противомоскитные сетки, обеспечив идеальный и долговечный результат. Кроме того, мы заботимся об обеспечении исключительного обслуживания клиентов и бесперебойной коммуникации на протяжении всего процесса — от первоначальной консультации до завершения проекта.`;
        
        consultants.innerText = `Русскоязычные консультанты`;
}



//Большой слайдер
const radios = document.querySelectorAll('.radio');
const slider = document.querySelector('.slider');
let img_n = 0;
let j = 0;

setInterval(() => {
    radios[j].checked = 'true';
    slider.style.left = -img_n + '%';
    img_n += 100;
    j++;
    if(img_n > 900){
        img_n = 0;
    }
    if(j > 9){
        j = 0;
    }
}, 3000);

radios.forEach((radio, i)=>{
    if(i == 0){
        radio.onclick = ()=>{
            slider.style.left = 0;
            img_n = 0;
            j = 0;
        }
    }else if(i == 1){
        radio.onclick = ()=>{
            slider.style.left = -100 + '%';
            img_n = 100;
            j = 1;
        }
    }else if(i == 2){
        radio.onclick = ()=>{
            slider.style.left = -200 + '%';
            img_n = 200;
            j = 2;
        }
    }else if(i == 3){
        radio.onclick = ()=>{
            slider.style.left = -300 + '%';
            img_n = 300;
            j = 3;
        }
    }else if(i == 4){
        radio.onclick = ()=>{
            slider.style.left = -400 + '%';
            img_n = 400;
            j = 4;
        }
    }else if(i == 5){
        radio.onclick = ()=>{
            slider.style.left = -500 + '%';
            img_n = 500;
            j = 5;
        }
    }else if(i == 6){
        radio.onclick = ()=>{
            slider.style.left = -600 + '%';
            img_n = 600;
            j = 6;
        }
    }else if(i == 7){
        radio.onclick = ()=>{
            slider.style.left = -700 + '%';
            img_n = 700;
            j = 7;
        }
    }else if(i == 8){
        radio.onclick = ()=>{
            slider.style.left = -800 + '%';
            img_n = 800;
            j = 8;
        }
    }else{
        radio.onclick = ()=>{
            slider.style.left = -900 + '%';
            img_n = 900;
            j = 9;
        }
    }
})
