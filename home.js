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
// Надписи на слайде
const inscr1 = document.querySelector('.inscr1');
const inscr2 = document.querySelector('.inscr2');
const inscr3 = document.querySelector('.inscr3');

//for main in home page
const opt1 = document.querySelector(".opt1");
const opt2 = document.querySelector(".opt2");
const opt3 = document.querySelector(".opt3");
const opt4 = document.querySelector(".opt4");
const opt5 = document.querySelector(".opt5");

const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const h4 = document.querySelector(".h4");
const h5 = document.querySelector(".h5");

const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");

// консультант
const consultants = document.querySelector('.cons');




// Сайт на испанском
label1.onclick = function(){
        ul2.innerHTML = `
						<li><a class="a5" target="_blank" href="roofs.html"> Techos </a></li>
						<li><a class="a4" target="_blank" href="awnings.html"> Toldos </a></li>
						<li><a class="a7" target="_blank" href="blinds.html"> Persianas </a></li>
						<li><a class="a8" target="_blank" href="mosquito_nets.html"> Mosquiteras </a></li>
						<li><a class="a6" target="_blank" href="folding_crystals.html"> Cristales Plegables </a></li>
        
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

        opt1.innerText = `Techos`;
        opt2.innerText = `Toldos`;
        opt3.innerText = `Persianas`;
        opt4.innerText = `Cristales plegables`;
        opt5.innerText = `Mosquiteras`;
    
        h1.innerText = `Techos`;
        h2.innerText = `Toldos`;
        h3.innerText = `Persianas`;
        h4.innerText = `Cristales plegables`;
        h5.innerText = `Mosquiteras`;
    
        p1.innerText = `Realzamos tus espacios exteriores con soluciones de techos, como techos de cristal, techos móviles y pérgolas. Estos elementos aportan elegancia, protección y funcionalidad a áreas como patios, terrazas y jardines.`;
        p2.innerText = `Nuestra amplia gama de toldos incluye opciones fijas y retráctiles, diseñadas para proporcionar protección solar, reducir el consumo de energía y crear espacios exteriores cómodos y funcionales. Disponemos de una gran variedad de estilos, colores y materiales, adaptados a las necesidades y preferencias de cada cliente.`;
        p3.innerText = `Nuestras persianas están diseñadas para controlar la entrada de luz y calor en el interior del hogar o negocio, lo que puede contribuir al ahorro de energía y mejorar la comodidad. Ofrecemos una amplia gama de estilos y materiales, desde persianas enrollables hasta venecianas y motorizadas.`;
        p4.innerText = `Soluciones de acristalamiento para terrazas balcones y otros espacios exteriores. Nuestros productos incluyen vidrios de seguridad, aislamiento térmico y acústico, y diseños personalizados para satisfacer las necesidades específicas de cada proyecto.`;
        p5.innerText = `Protege tus espacios interiores de insectos y otros animales sin sacrificar la estética ni la vista. Nuestras mosquiteras son duraderas, fáciles de mantener y se adaptan a cualquier tipo de ventana o puerta.`;
        consultants.innerText = `Consultores de habla rusa`;
    
}
// Сайт на английском
label2.onclick = function(){
    ul2.innerHTML = `
                    <li><a class="a55" target="_blank" href="roofs.html"> Roofs </a></li>
                    <li><a class="a44" target="_blank" href="awnings.html"> Awnings </a></li>
                    <li><a class="a77" target="_blank" href="blinds.html"> Blinds </a></li>
                    <li><a class="a88" target="_blank" href="mosquito_nets.html"> Mosquito nets </a></li>
                    <li><a class="a66" target="_blank" href="folding_crystals.html"> Folding crystals </a></li>
    
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

    opt1.innerText = `Roofs`;
    opt2.innerText = `Awnings`;
    opt3.innerText = `Blinds`;
    opt4.innerText = `Folding crystals`;
    opt5.innerText = `Mosquito nets`;

    h1.innerText = `Roofs`;
    h2.innerText = `Awnings`;
    h3.innerText = `Blinds`;
    h4.innerText = `Folding crystals`;
    h5.innerText = `Mosquito nets`;

    p1.innerText = `We enhance your outdoor spaces with roofing solutions such as glass roofs, retractable roofs and pergolas. These elements bring elegance, protection and functionality to areas such as patios, terraces and gardens.`;
    p2.innerText = `Our wide range of awnings includes fixed and retractable options, designed to provide sun protection, reduce energy consumption and create comfortable and functional outdoor spaces. We have a wide variety of styles, colours and materials, adapted to the needs and preferences of each client.`;
    p3.innerText = `Our blinds are designed to control the amount of light and heat entering your home or business, which can help save energy and improve comfort. We offer a wide range of styles and materials, from roller blinds to venetian blinds and motorized blinds.`;
    p4.innerText = `Glazing solutions for balconies, terraces and other outdoor spaces. Our products include safety glass, thermal and acoustic insulation, and custom designs to meet the specific needs of each project.`;
    p5.innerText = `Protect your interior spaces from insects and other animals without sacrificing aesthetics or view. Our mosquito nets are durable, easy to maintain and fit any type of window or door.`;

    consultants.innerText = `Russian speaking consultants`;
}
// Сайт на Французском
label3.onclick = function(){
    ul2.innerHTML = `
                    <li><a class="a555" target="_blank" href="roofs.html"> Toits </a></li>
                    <li><a class="a444" target="_blank" href="awnings.html"> Auvents </a></li>
                    <li><a class="a777" target="_blank" href="blinds.html"> Stores </a></li>
                    <li><a class="a888" target="_blank" href="mosquito_nets.html"> Moustiquaires </a></li>
                    <li><a class="a666" target="_blank" href="folding_crystals.html"> Fenêtres pliantes </a></li>
    
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

    opt1.innerText = `Toits`;
    opt2.innerText = `Auvents`;
    opt3.innerText = `Stores`;
    opt4.innerText = `Fenêtres pliantes`;
    opt5.innerText = `Moustiquaires`;

    h1.innerText = `Toits`;
    h2.innerText = `Auvents`;
    h3.innerText = `Stores`;
    h4.innerText = `Fenêtres pliantes`;
    h5.innerText = `Moustiquaires`;

    p1.innerText = `Nous agrémentons vos espaces extérieurs avec des solutions de toiture, telles que des verrières, des toitures mobiles et des pergolas. Ces éléments apportent élégance, protection et fonctionnalité à des espaces tels que les patios, terrasses et jardins.`;
    p2.innerText = `Notre large gamme d'auvents comprend des options fixes et rétractables, conçues pour offrir une protection solaire, réduire la consommation d'énergie et créer des espaces extérieurs confortables et fonctionnels. Nous disposons d’une grande variété de styles, de couleurs et de matériaux, adaptés aux besoins et préférences de chaque client.`;
    p3.innerText = `Nos stores sont conçus pour contrôler l'entrée de lumière et de chaleur à l'intérieur de votre maison ou de votre entreprise, ce qui peut contribuer aux économies d'énergie et améliorer le confort. Nous proposons une large gamme de styles et de matériaux, des stores enrouleurs aux stores vénitiens et motorisés.`;
    p4.innerText = `Solutions de vitrage pour terrasses, balcons et autres espaces extérieurs. Nos produits comprennent du verre de sécurité, de l'isolation thermique et acoustique et des conceptions personnalisées pour répondre aux besoins spécifiques de chaque projet.`;
    p5.innerText = `Protégez vos espaces intérieurs des insectes et autres animaux sans sacrifier l’esthétique ou la vue. Nos moustiquaires sont durables, faciles d’entretien et s’adaptent à tout type de fenêtre ou de porte.`;

    consultants.innerText = `Consultants russophones`;
}
// Сайт на немецком
label4.onclick = function(){
    ul2.innerHTML = `
                    <li><a class="a5555" target="_blank" href="roofs.html"> Dächer </a></li>
                    <li><a class="a4444" target="_blank" href="awnings.html"> Markisen </a></li>
                    <li><a class="a7777" target="_blank" href="blinds.html"> Jalousie </a></li>
                    <li><a class="a8888" target="_blank" href="mosquito_nets.html"> Moskitonetze </a></li>
                    <li><a class="a6666" target="_blank" href="folding_crystals.html"> Faltfenster </a></li>
    
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

    opt1.innerText = `Dächer`;
    opt2.innerText = `Markisen`;
    opt3.innerText = `Jalousie`;
    opt4.innerText = `Faltfenster`;
    opt5.innerText = `Moskitonetze`;

    h1.innerText = `Dächer`;
    h2.innerText = `Markisen`;
    h3.innerText = `Jalousie`;
    h4.innerText = `Faltfenster`;
    h5.innerText = `Moskitonetze`;

    p1.innerText = `Wir verschönern Ihre Außenbereiche mit Dachlösungen wie Glasdächern, mobilen Dächern und Pergolen. Diese Elemente verleihen Bereichen wie Innenhöfen, Terrassen und Gärten Eleganz, Schutz und Funktionalität.`;
    p2.innerText = `Unser breites Sortiment an Markisen umfasst feste und einziehbare Optionen, die Sonnenschutz bieten, den Energieverbrauch senken und komfortable und funktionale Außenbereiche schaffen. Wir verfügen über eine große Auswahl an Stilen, Farben und Materialien, angepasst an die Bedürfnisse und Vorlieben jedes Kunden.`;
    p3.innerText = `Unsere Jalousien sind so konzipiert, dass sie den Eintritt von Licht und Wärme in den Innenraum Ihres Hauses oder Geschäfts steuern, was zu Energieeinsparungen und mehr Komfort beitragen kann. Wir bieten eine große Auswahl an Stilen und Materialien, von Rollos bis hin zu Jalousien und motorisierten Jalousien.`;
    p4.innerText = `Verglasungslösungen für Terrassen, Balkone und andere Außenbereiche. Zu unseren Produkten gehören Sicherheitsglas, Wärme- und Schalldämmung sowie maßgeschneiderte Designs, um den spezifischen Anforderungen jedes Projekts gerecht zu werden.`;
    p5.innerText = `Schützen Sie Ihre Innenräume vor Insekten und anderen Tieren, ohne auf Ästhetik oder Aussicht zu verzichten. Unsere Moskitonetze sind langlebig, pflegeleicht und passen sich an jede Art von Fenster oder Tür an.`;

    consultants.innerText = `Russischsprachige Berater`;
}

//Сайта  на русском
label5.onclick = function(){
        ul2.innerHTML = `
				<li><a class="a55555" target="_blank" href="roofs.html"> Крыши </a></li>
                <li><a class="a44444" target="_blank" href="awnings.html"> Тенты </a></li>
				<li><a class="a77777" target="_blank" href="blinds.html"> Жалюзи </a></li>
				<li><a class="a88888" target="_blank" href="mosquito_nets.html"> Москитные сетки </a></li>
                <li><a class="a66666" target="_blank" href="folding_crystals.html"> Складные окна </a></li>
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

        opt1.innerText = `Крыши`;
        opt2.innerText = `Тенты`;
        opt3.innerText = `Жалюзи`;
        opt4.innerText = `Складные окна`;
        opt5.innerText = `Москитные сетки`;
    
        h1.innerText = `Крыши`;
        h2.innerText = `Тенты`;
        h3.innerText = `Жалюзи`;
        h4.innerText = `Складные окна`;
        h5.innerText = `Москитные сетки`;
    
        p1.innerText = `Мы украсим ваши открытые пространства с помощью кровельных решений, таких как стеклянные крыши, мобильные крыши и беседки. Эти элементы придают элегантность, защиту и функциональность таким помещениям, как патио, террасы и сады.`;
        p2.innerText = `Наш широкий ассортимент навесов включает фиксированные и выдвижные варианты, предназначенные для защиты от солнца, снижения энергопотребления и создания удобных и функциональных открытых пространств. У нас есть широкий выбор стилей, цветов и материалов, адаптированных к потребностям и предпочтениям каждого клиента.`;
        p3.innerText = `Наши жалюзи предназначены для контроля поступления света и тепла в интерьер вашего дома или офиса, что может способствовать экономии энергии и повышению комфорта. Мы предлагаем широкий выбор стилей и материалов: от рулонных штор до венецианских и моторизованных жалюзи.`;
        p4.innerText = `Решения для остекления террас, балконов и других открытых пространств. Наша продукция включает в себя безопасное стекло, тепло- и звукоизоляцию, а также индивидуальный дизайн, отвечающий конкретным потребностям каждого проекта.`;
        p5.innerText = `Защитите свои внутренние помещения от насекомых и других животных, не жертвуя при этом эстетикой и видом. Наши противомоскитные сетки долговечны, просты в уходе и адаптируются к любому типу окон или дверей.`;

        consultants.innerText = `Русскоязычные консультанты`;
}














// //Сайта  на английском
// label3.forEach(label=>{
//     label.onclick = function(){
//         ul.innerHTML = `
//         <li class="li1"><a class="a111" href="ararat_home.html"> Home </a></li>
//         <li class="li1"><a class="a222" href="ararat_shop.html"> Products </a></li>
//         <li class="li2"><a class="a333" href="blagoustroystvo.html"> Improvement </a></li>
//         <li class="li3"><a class="a444" href="istoria.html"> About LLC 'Ararat' </a></li>
//         `;
//         const eng2 = ['Road curb', 'Sidewalk curb', 'Paving stone 10х20', 'Paving stone 20х20', "Pav. stone 'Zigzag'", "Pav. stone 'Kolo'", "Pav. stone 'Gjelka'", "Սալիկ 'Ալիք'"];
        
//         li_list2.forEach((li, i)=>{
//             if(i === 0){
//                 li.innerHTML = `<a class="opt_a" href="ararat_bordyur_dorojniy.html"> ${eng2[i]} </a>`;
//             }else if(i === 1){
//                 li.innerHTML = `<a class="opt_a" href="trat_bordyur.html"> ${eng2[i]} </a>`;
//             }else if(i === 2){
//                 li.innerHTML = `<a class="opt_a" href="brusch10x20.html"> ${eng2[i]} </a>`;
//             }
//             else if(i === 3){
//                 li.innerHTML = `<a class="opt_a" href="brusch20x20.html"> ${eng2[i]} </a>`;
//             }
//             else if(i === 4){
//                 li.innerHTML = `<a class="opt_a" href="br_volna.html"> ${eng2[i]} </a>`;
//             }
//             else if(i === 5){
//                 li.innerHTML = `<a class="opt_a" href="br_kolo.html"> ${eng2[i]} </a>`;
//             }
//             else if(i === 6){
//                 li.innerHTML = `<a class="opt_a" href="br_gjelka.html"> ${eng2[i]} </a>`;
//             }
//             else if(i === 7){
//                 li.innerHTML = `<a class="opt_a" href="br_kvadr.html"> ${eng2[i]} </a>`;
//             }
//         });
    
//         maqruee.innerText = `Adress of company: Lensk c., st. Obiezdnaya 19. Contact us by number: +79999999999. Write us: ararat@mail.ru. Inst: @ararat-lensk. More detailed about contacts you can find below.`;
       
//         h3s.forEach((h3, i)=>{
//             if(i === 0){
//                 h3.innerText = 'Asphalting';
//             }else if(i === 1){
//                 h3.innerText = 'Development of squares';
//             }else if(i === 2){
//                 h3.innerText = 'Construction of buildings';
//             }else{
//                 h3.innerText = 'Concrete production';
//             }
//         })

//         f_as.forEach((a, i)=>{
//             if(i === 0){
//                 a.innerText = 'Home';
//             }else if(i === 1){
//                 a.innerText = 'Products';
//             }else if(i === 2){
//                 a.innerText = 'Improvement';
//             }else if(i === 3){
//                 a.innerText = "About LLC 'Ararat'";
//             }
//         })

//         h4s.forEach((h4, i)=>{
//             if(i === 0){
//                 h4.innerText = 'Links:';
//             }else{
//                 h4.innerText = 'Contacts:';
//             }
//         })

//         label.classList.add('label33');
//         label2.forEach(label=>{
//             label.classList.remove('label22');
//         })
//         label1.forEach(label=>{
//             label.classList.remove('label11');
//         })

//         more_link.forEach(link=>{
//             link.innerText = 'More';
//             link.classList.remove('more_link');
//             link.classList.remove('more_link1');
//             link.classList.add('more_link2');
//         });

//     }
// })


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


// // Слайдер асфальта
// const radios_m = document.querySelectorAll('.radio_m');
// const slider_mini = document.querySelector('.slider_mini');
// let img_n1 = 0;
// let j_m = 0;

// setInterval(() => {
//     radios_m[j_m].checked = 'true';
//     slider_mini.style.left = -img_n1 + '%';
//     img_n1 += 100;
//     j_m++;
//     if(img_n1 > 300){
//         img_n1 = 0;
//     }
//     if(j_m > 3){
//         j_m = 0;
//     }
// }, 3000);

// radios_m.forEach((radio, i)=>{
//     if(i == 0){
//         radio.onclick = ()=>{
//             slider_mini.style.left = 0;
//             img_n1 = 0;
//             j_m = 0;
//         }
//     }else if(i == 1){
//         radio.onclick = ()=>{
//             slider_mini.style.left = -100 + '%';
//             img_n1 = 100;
//             j_m = 1;
//         }
//     }else if(i == 2){
//         radio.onclick = ()=>{
//             slider_mini.style.left = -200 + '%';
//             img_n1 = 200;
//             j_m = 2;
//         }
//     }else{
//         radio.onclick = ()=>{
//             slider_mini.style.left = -300 + '%';
//             img_n1 = 300;
//             j_m = 3;
//         }
//     }
// })


// // Слайдер благоустройства

// const radios_m1 = document.querySelectorAll('.radio_m1');
// const slider_mini1 = document.querySelector('.slider_mini1');
// let img_n2 = 0;
// let j_m1 = 0;

// setInterval(() => {
//     radios_m1[j_m1].checked = 'true';
//     slider_mini1.style.left = -img_n2 + '%';
//     img_n2 += 100;
//     j_m1++;
//     if(img_n2 > 300){
//         img_n2 = 0;
//     }
//     if(j_m1 > 3){
//         j_m1 = 0;
//     }
// }, 3000);

// radios_m1.forEach((radio, i)=>{
//     if(i == 0){
//         radio.onclick = ()=>{
//             slider_mini1.style.left = 0;
//             img_n2 = 0;
//             j_m1 = 0;
//         }
//     }else if(i == 1){
//         radio.onclick = ()=>{
//             slider_mini1.style.left = -100 + '%';
//             img_n2 = 100;
//             j_m1 = 1;
//         }
//     }else if(i == 2){
//         radio.onclick = ()=>{
//             slider_mini1.style.left = -200 + '%';
//             img_n2 = 200;
//             j_m1 = 2;
//         }
//     }else{
//         radio.onclick = ()=>{
//             slider_mini1.style.left = -300 + '%';
//             img_n2 = 300;
//             j_m1 = 3;
//         }
//     }
// })


// // Слайдер строительства домов

// const radios_m2 = document.querySelectorAll('.radio_m2');
// const slider_mini2 = document.querySelector('.slider_mini2');
// let img_n3 = 0;
// let j_m2 = 0;

// setInterval(() => {
//     radios_m2[j_m2].checked = 'true';
//     slider_mini2.style.left = -img_n3 + '%';
//     img_n3 += 100;
//     j_m2++;
//     if(img_n3 > 300){
//         img_n3 = 0;
//     }
//     if(j_m2 > 3){
//         j_m2 = 0;
//     }
// }, 3000);

// radios_m2.forEach((radio, i)=>{
//     if(i == 0){
//         radio.onclick = ()=>{
//             slider_mini2.style.left = 0;
//             img_n3 = 0;
//             j_m2 = 0;
//         }
//     }else if(i == 1){
//         radio.onclick = ()=>{
//             slider_mini2.style.left = -100 + '%';
//             img_n3 = 100;
//             j_m2 = 1;
//         }
//     }else if(i == 2){
//         radio.onclick = ()=>{
//             slider_mini2.style.left = -200 + '%';
//             img_n3 = 200;
//             j_m2 = 2;
//         }
//     }else{
//         radio.onclick = ()=>{
//             slider_mini2.style.left = -300 + '%';
//             img_n3 = 300;
//             j_m2 = 3;
//         }
//     }
// })


// // Слайдер производства

// const radios_m3 = document.querySelectorAll('.radio_m3');
// const slider_mini3 = document.querySelector('.slider_mini3');
// let img_n4 = 0;
// let j_m3 = 0;

// setInterval(() => {
//     radios_m3[j_m3].checked = 'true';
//     slider_mini3.style.left = -img_n4 + '%';
//     img_n4 += 100;
//     j_m3++;
//     if(img_n4 > 300){
//         img_n4 = 0;
//     }
//     if(j_m3 > 3){
//         j_m3 = 0;
//     }
// }, 3000);

// radios_m3.forEach((radio, i)=>{
//     if(i == 0){
//         radio.onclick = ()=>{
//             slider_mini3.style.left = 0;
//             img_n4 = 0;
//             j_m3 = 0;
//         }
//     }else if(i == 1){
//         radio.onclick = ()=>{
//             slider_mini3.style.left = -100 + '%';
//             img_n4 = 100;
//             j_m3 = 1;
//         }
//     }else if(i == 2){
//         radio.onclick = ()=>{
//             slider_mini3.style.left = -200 + '%';
//             img_n4 = 200;
//             j_m3 = 2;
//         }
//     }else{
//         radio.onclick = ()=>{
//             slider_mini3.style.left = -300 + '%';
//             img_n4 = 300;
//             j_m3 = 3;
//         }
//     }
// })

// Часы
// setInterval(()=>{
//     let hours = document.querySelector('.hours');
//     let min = document.querySelector('.min');
//     let sec = document.querySelector('.sec');
//     let date = new Date();
//     let hr = date.getHours() * 30;
//     let mn = date.getMinutes() * 6;
//     let sc = date.getSeconds() * 6;
//     hours.style.transform = `rotateZ(${(hr) + (mn / 12)}deg)`;
//     min.style.transform = `rotateZ(${mn}deg)`;
//     sec.style.transform = `rotateZ(${sc}deg)`;
// }, 1000);


