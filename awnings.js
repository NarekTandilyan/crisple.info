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
const inf_h1_1 = document.querySelector('.inf_h1_1');
const inf_h1_2 = document.querySelector('.inf_h1_2');
const inf_h1_3 = document.querySelector('.inf_h1_3');
const inf_h1_4 = document.querySelector('.inf_h1_4');
const inf_h1_5 = document.querySelector('.inf_h1_5');
// Текст
const inf_text = document.querySelector('.inf');
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

        inf_h1_1.innerText = `Transforma tus espacios exteriores con los toldos de alta calidad de Crisple`
        inf_h1_2.innerText = `Protección contra los rayos nocivos del sol`
        inf_h1_3.innerText = `Amplia variedad de estilos y materiales`
        inf_h1_4.innerText = `Soluciones personalizadas para cada hogar`
        inf_h1_5.innerText = `Instalación profesional y servicio al cliente excepcional`
        inf_text.innerText = `Protección y estilo para tus espacios exteriores No solo son funcionales, sino que los toldos también aportan un toque de estilo y sofisticación a tus espacios exteriores. Ya sea para una terraza, un patio o una ventana, nuestros toldos se convierten en una extensión atractiva y elegante de tu hogar, mejorando su apariencia y valor.

Con Crisple, puedes estar seguro de que recibirás un servicio de calidad, productos duraderos y una atención al detalle en cada proyecto de montaje de toldos. No esperes más para mejorar tus espacios exteriores y disfrutar de la protección y el estilo que nuestros toldos pueden ofrecerte. `;

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

    inf_h1_1.innerText = `Transform your outdoor spaces with high-quality awnings from Crisple`
    inf_h1_2.innerText = `Protection against the sun's harmful rays`
    inf_h1_3.innerText = `Wide variety of styles and materials`
    inf_h1_4.innerText = `Custom solutions for each home`
    inf_h1_5.innerText = `Professional installation and exceptional customer service`
    inf_text.innerText = `Protection and style for your outdoor spaces are not only functional, but awnings also bring a touch of style and sophistication to your outdoor spaces. Whether for a terrace, a patio or a window, our awnings become an attractive and elegant extension of your home, improving its appearance and value.

With Crisp, you can be sure that you will receive quality service, durable products and attention to detail in every awning installation project. Do not wait any longer to improve your outdoor spaces and enjoy the protection and style that our awnings can offer you.`;

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

    inf_h1_1.innerText = `Transformez vos espaces extérieurs avec les auvents de haute qualité de Crisple`
    inf_h1_2.innerText = `Protection contre les rayons nocifs du soleil`
    inf_h1_3.innerText = `Grande variété de styles et de matériaux`
    inf_h1_4.innerText = `Des solutions personnalisées pour chaque maison`
    inf_h1_5.innerText = `Installation professionnelle et service client exceptionnel`
    inf_text.innerText = `La protection et le style de vos espaces extérieurs ne sont pas seulement fonctionnels, mais les auvents apportent également une touche de style et de sophistication à vos espaces extérieurs. Que ce soit pour une terrasse, un patio ou une fenêtre, nos auvents deviennent une extension attrayante et élégante de votre maison, améliorant son apparence et sa valeur.

Avec Crisp, vous pouvez être sûr de recevoir un service de qualité, des produits durables et une attention aux détails dans chaque projet d'installation d'auvent. N'attendez plus pour améliorer vos espaces extérieurs et profitez de la protection et du style que nos auvents peuvent vous offrir.`;

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

    inf_h1_1.innerText = `Verwandeln Sie Ihre Außenbereiche mit hochwertigen Markisen von Crisple`
    inf_h1_2.innerText = `Schutz vor den schädlichen Strahlen der Sonne`
    inf_h1_3.innerText = `Große Vielfalt an Stilen und Materialien`
    inf_h1_4.innerText = `Individuelle Lösungen für jedes Zuhause`
    inf_h1_5.innerText = `Professionelle Installation und außergewöhnlicher Kundenservice`
    inf_text.innerText = `Schutz und Stil für Ihre Außenbereiche sind nicht nur funktional, sondern Markisen verleihen Ihren Außenbereichen auch einen Hauch von Stil und Raffinesse. Ob für eine Terrasse, eine Terrasse oder ein Fenster, unsere Markisen werden zu einer attraktiven und eleganten Erweiterung Ihres Hauses und verbessern dessen Aussehen und Wert.

Mit Crisp können Sie sicher sein, dass Sie bei jedem Markiseninstallationsprojekt qualitativ hochwertigen Service, langlebige Produkte und Liebe zum Detail erhalten. Warten Sie nicht länger, um Ihre Außenbereiche zu verbessern, und genießen Sie den Schutz und den Stil, den unsere Markisen Ihnen bieten können.`;

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

        inf_h1_1.innerText = `Преобразите свои открытые пространства с помощью высококачественных навесов от Crisple`
        inf_h1_2.innerText = `Защита от вредных солнечных лучей`
        inf_h1_3.innerText = `Широкий выбор стилей и материалов`
        inf_h1_4.innerText = `Индивидуальные решения для каждого дома`
        inf_h1_5.innerText = `Профессиональная установка и исключительное обслуживание клиентов`
        inf_text.innerText = `Защита и стиль ваших открытых пространств Не только функциональны, но и навесы привносят нотку стиля и изысканности в ваши открытые пространства. Будь то терраса, патио или окно, наши навесы станут привлекательным и элегантным дополнением вашего дома, улучшая его внешний вид и ценность.

С Crisple вы можете быть уверены, что получите качественный сервис, долговечные продукты и внимание к деталям в каждом проекте по сборке навесов. Не ждите больше, чтобы улучшить свои внешние пространства и насладиться защитой и стилем, которые могут предложить вам наши навесы.`;

        consultants.innerText = `Русскоязычные консультанты`;
}
