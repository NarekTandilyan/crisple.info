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

        inf_h1_1.innerText = `Reinventa tus espacios exteriores con techos versátiles y duraderos: la solución definitiva para una vida al aire libre`
        inf_h1_2.innerText = `Protección contra las inclemencias del tiempo`
        inf_h1_3.innerText = `Variedad de materiales y estilos`
        inf_h1_4.innerText = `Eficiencia energética y confort`
        inf_h1_5.innerText = `Instalación profesional y garantía de calidad`
        inf_text.innerText = `En Crisple, nuestro equipo de expertos se encarga de la instalación de tus techos de manera rápida y eficiente. Además, ofrecemos garantías de calidad en todos nuestros productos e instalaciones, asegurando que disfrutes de tus nuevos techos sin preocupaciones.

Los techos de aluminio, policarbonato, cristal y panel sándwich son soluciones versátiles y duraderas para mejorar tus espacios exteriores y disfrutar de una vida al aire libre sin preocupaciones. En Crisple, estamos comprometidos con la calidad y la satisfacción del cliente, ofreciéndote las mejores soluciones de techos para tu hogar.

No importa cuál sea tu estilo o tus necesidades específicas, nuestros techos de aluminio, policarbonato, cristal y panel sándwich pueden adaptarse a cualquier situación y ofrecer resultados excepcionales. Con nuestra amplia gama de opciones de personalización, podemos garantizar que tu nuevo techo se integre a la perfección con el diseño de tu hogar y mejore la calidad de vida de sus habitantes.

Si estás buscando una solución duradera, funcional y estilizada para tus espacios exteriores, no dudes en contactarnos en Crisple. Nuestro equipo de profesionales está listo para ayudarte a transformar tu hogar y disfrutar de una vida al aire libre sin preocupaciones.`;

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

    inf_h1_1.innerText = `Reinvent your outdoor spaces with versatile and durable roofs: the ultimate solution for outdoor living`
    inf_h1_2.innerText = `Protection against inclement weather`
    inf_h1_3.innerText = `Variety of materials and styles`
    inf_h1_4.innerText = `Energy efficiency and comfort`
    inf_h1_5.innerText = `Professional installation and quality assurance`
    inf_text.innerText = `At Crisple, our team of experts will handle the installation of your ceilings quickly and efficiently. In addition, we offer quality guarantees on all our products and installations, ensuring that you can enjoy your new ceilings without worries.

Aluminium, polycarbonate, glass and sandwich panel roofs are versatile and long-lasting solutions to enhance your outdoor spaces and enjoy carefree outdoor living. At Crisple, we are committed to quality and customer satisfaction, offering you the best roofing solutions for your home.

No matter what your style or specific needs, our aluminium, polycarbonate, glass and sandwich panel roofs can be tailored to any situation and deliver exceptional results. With our wide range of customisation options, we can ensure that your new roof blends seamlessly with the design of your home and improves the quality of life for its inhabitants.

If you are looking for a durable, functional and stylish solution for your outdoor spaces, do not hesitate to contact us at Crisple. Our team of professionals is ready to help you transform your home and enjoy carefree outdoor living.`;

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

    inf_h1_1.innerText = `Réinventez vos espaces extérieurs avec des toitures polyvalentes et durables : la solution ultime pour la vie en plein air`
    inf_h1_2.innerText = `Protection contre les intempéries`
    inf_h1_3.innerText = `Variété de matériaux et de styles`
    inf_h1_4.innerText = `Efficacité énergétique et confort`
    inf_h1_5.innerText = `Installation professionnelle et assurance qualité`
    inf_text.innerText = `Chez Crisple, notre équipe d'experts s'occupera de l'installation de votre plafond rapidement et efficacement. De plus, nous offrons des garanties de qualité sur tous nos produits et installations, vous assurant ainsi de pouvoir profiter de vos nouvelles toitures sans soucis.

Les toitures en aluminium, en polycarbonate, en verre et en panneaux sandwich sont des solutions polyvalentes et durables pour améliorer vos espaces extérieurs et profiter d'une vie en plein air sans soucis. Chez Crisple, nous nous engageons à assurer la qualité et la satisfaction du client, en vous offrant les meilleures solutions de toiture pour votre maison.

Quel que soit votre style ou vos besoins spécifiques, nos toitures en aluminium, polycarbonate, verre et panneaux sandwich s'adaptent à toutes les situations et offrent des résultats exceptionnels. Grâce à notre large gamme d’options de personnalisation, nous pouvons garantir que votre nouvelle toiture s’intègre parfaitement à la conception de votre maison et améliore la qualité de vie de ses habitants.

Si vous recherchez une solution durable, fonctionnelle et élégante pour vos espaces extérieurs, n'hésitez pas à nous contacter chez Crisple. Notre équipe de professionnels est prête à vous aider à transformer votre maison et à profiter d'une vie en plein air sans soucis.`;

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

    inf_h1_1.innerText = `Erfinden Sie Ihre Außenbereiche neu mit vielseitigen und langlebigen Dächern: die ultimative Lösung für das Leben im Freien`
    inf_h1_2.innerText = `Schutz vor schlechtem Wetter`
    inf_h1_3.innerText = `Vielfalt an Materialien und Stilen`
    inf_h1_4.innerText = `Energieeffizienz und Komfort`
    inf_h1_5.innerText = `Fachgerechte Montage und Qualitätssicherung`
    inf_text.innerText = `Bei Crisple erledigt unser Expertenteam Ihre Deckeninstallation schnell und effizient. Darüber hinaus bieten wir Qualitätsgarantien auf alle unsere Produkte und Installationen, sodass Sie Ihre neuen Dächer ohne Sorgen genießen können.

Dächer aus Aluminium, Polycarbonat, Glas und Sandwichpaneelen sind vielseitige und langlebige Lösungen zur Verschönerung Ihrer Außenbereiche und für ein unbeschwertes Leben im Freien. Bei Crisple sind wir der Qualität und Kundenzufriedenheit verpflichtet und bieten Ihnen die besten Dachlösungen für Ihr Zuhause.

Ganz gleich, welchen Stil oder welche speziellen Anforderungen Sie haben: Unsere Dächer aus Aluminium, Polycarbonat, Glas und Sandwichpaneelen passen sich jeder Situation an und bieten außergewöhnliche Ergebnisse. Mit unseren vielfältigen Individualisierungsmöglichkeiten sorgen wir dafür, dass sich Ihr neues Dach nahtlos in das Design Ihres Hauses einfügt und die Lebensqualität seiner Bewohner verbessert.

Wenn Sie nach einer langlebigen, funktionalen und stilvollen Lösung für Ihre Außenbereiche suchen, zögern Sie nicht, uns bei Crisple zu kontaktieren. Unser professionelles Team ist bereit, Ihnen bei der Umgestaltung Ihres Zuhauses zu helfen und Ihnen ein unbeschwertes Leben im Freien zu ermöglichen.`;

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

        inf_h1_1.innerText = `Преобразите свое открытое пространство с помощью универсальных и долговечных крыш: лучшее решение для жизни на открытом воздухе`
        inf_h1_2.innerText = `Защита от непогоды`
        inf_h1_3.innerText = `Разнообразие материалов и стилей`
        inf_h1_4.innerText = `Энергоэффективность и комфорт`
        inf_h1_5.innerText = `Профессиональный монтаж и гарантия качества`
        inf_text.innerText = `Команда экспертов Crisple быстро и эффективно выполнит установку вашего потолка. Кроме того, мы предоставляем гарантии качества на всю нашу продукцию и установки, гарантируя, что вы сможете без опасений пользоваться своей новой крышей.

Крыши из алюминия, поликарбоната, стекла и сэндвич-панелей — это универсальные и долговечные решения, которые помогут вам улучшить свое открытое пространство и наслаждаться беззаботной жизнью на открытом воздухе. В компании Crisple мы стремимся к качеству и удовлетворенности клиентов, предлагая вам лучшие кровельные решения для вашего дома.

Независимо от вашего стиля или конкретных потребностей, наши крыши из алюминия, поликарбоната, стекла и сэндвич-панелей могут адаптироваться к любой ситуации и обеспечить исключительные результаты. Благодаря широкому спектру возможностей индивидуальной настройки мы можем гарантировать, что ваша новая крыша идеально впишется в дизайн вашего дома и улучшит качество жизни его обитателей.

Если вы ищете долговечное, функциональное и стильное решение для вашего открытого пространства, не стесняйтесь обращаться к нам в Crisple. Наша команда профессионалов готова помочь вам преобразить ваш дом и наслаждаться беззаботной жизнью на природе.`;

        consultants.innerText = `Русскоязычные консультанты`;       
}
