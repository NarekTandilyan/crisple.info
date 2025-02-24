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
// Текст
const inf_text1 = document.querySelector('.inf1');
const inf_text2 = document.querySelector('.inf2');
const inf_text3 = document.querySelector('.inf3');
const inf_text4 = document.querySelector('.inf4');
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

        inf_h1_1.innerText = `Transforma tu hogar con persianas de calidad: la solución ideal para comodidad, privacidad y eficiencia energética`
        inf_h1_2.innerText = `Control de luz y privacidad`
        inf_h1_3.innerText = `Estilos y materiales para todos los gustos`
        inf_h1_4.innerText = `Instalación profesional y personalizada`
        
        inf_text1.innerText = `¿Buscas una manera práctica y estilizada de mejorar la comodidad, privacidad y eficiencia energética de tu hogar? Entonces las persianas son la solución perfecta. En Crisple, nos especializamos en la instalación de persianas de alta calidad, adaptadas a tus necesidades y estilo personal. Descubre las ventajas de contar con persianas en tu hogar y cómo nuestro equipo experto puede ayudarte a lograr la transformación que buscas.`;
        inf_text2.innerText = `Una de las principales ventajas de las persianas es su capacidad para controlar la cantidad de luz que entra en tu hogar. Con una amplia variedad de estilos y materiales, puedes elegir la opacidad y el grado de apertura que mejor se adapte a tus necesidades. Además, las persianas proporcionan privacidad a tus espacios, permitiéndote disfrutar de la tranquilidad y seguridad que mereces.`;
        inf_text3.innerText = `En Crisple, ofrecemos una amplia gama de estilos, materiales y colores de persianas para adaptarse a cualquier decoración y preferencia personal. Ya sea que busques persianas enrollables, venecianas, verticales o de cualquier otro tipo, nuestras opciones garantizan que encontrarás la solución perfecta para tu hogar. Además, trabajamos con materiales de alta calidad, como aluminio, madera, PVC y tejidos técnicos, que garantizan durabilidad y resistencia al paso del tiempo.`;
        inf_text4.innerText = `En Crisple, nuestro equipo de profesionales altamente capacitados se encargará de la instalación de tus persianas de forma rápida y eficiente. Además, nos aseguramos de que cada proyecto se adapte a las medidas y necesidades específicas de tu hogar, garantizando un acabado impecable y un ajuste perfecto.
        Si deseas mejorar la comodidad, privacidad y eficiencia energética de tu hogar, las persianas son la solución ideal. En Crisple, estamos comprometidos a ofrecerte la mejor calidad y un servicio personalizado. `;

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

    inf_h1_1.innerText = `Transform your home with quality blinds: the ideal solution for comfort, privacy and energy efficiency`
    inf_h1_2.innerText = `Light and privacy control`
    inf_h1_3.innerText = `Styles and materials for all tastes`
    inf_h1_4.innerText = `Professional and custom installation`
    
    inf_text1.innerText = `Are you looking for a practical and stylish way to improve the comfort, privacy and energy efficiency of your home? Then blinds are the perfect solution. At Crisple, we specialise in installing high-quality blinds, tailored to your needs and personal style. Discover the benefits of having blinds in your home and how our expert team can help you achieve the transformation you are looking for.`;
    inf_text2.innerText = `One of the main advantages of blinds is their ability to control the amount of light that enters your home. With a wide variety of styles and materials, you can choose the opacity and degree of openness that best suits your needs. In addition, blinds provide privacy to your spaces, allowing you to enjoy the peace and security you deserve.`;
    inf_text3.innerText = `At Crisple, we offer a wide range of blind styles, materials and colours to suit any décor and personal preference. Whether you are looking for roller blinds, Venetian blinds, vertical blinds or any other type, our options ensure that you will find the perfect solution for your home. In addition, we work with high-quality materials, such as aluminium, wood, PVC and technical fabrics, which guarantee durability and resistance over time.`;
    inf_text4.innerText = `At Crisple, our team of highly trained professionals will take care of the installation of your blinds quickly and efficiently. In addition, we make sure that each project is tailored to the specific measurements and needs of your home, guaranteeing an impeccable finish and a perfect fit.
    If you want to improve the comfort, privacy and energy efficiency of your home, blinds are the ideal solution. At Crisple, we are committed to offering you the best quality and personalized service.`;

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

    inf_h1_1.innerText = `Transformez votre maison avec des stores de qualité : la solution idéale pour le confort, l'intimité et l'efficacité énergétique`
    inf_h1_2.innerText = `Contrôle de la lumière et de l'intimité`
    inf_h1_3.innerText = `Des styles et des matières pour tous les goûts`
    inf_h1_4.innerText = `Installation professionnelle et personnalisée`
    
    inf_text1.innerText = `Vous recherchez un moyen pratique et élégant d’améliorer le confort, l’intimité et l’efficacité énergétique de votre maison ? Alors les stores sont la solution parfaite. Chez Crisple, nous nous spécialisons dans l'installation de stores de haute qualité adaptés à vos besoins et à votre style personnel. Découvrez les avantages d'avoir des stores dans votre maison et comment notre équipe d'experts peut vous aider à réaliser la transformation que vous recherchez.`;
    inf_text2.innerText = `L’un des principaux avantages des stores est leur capacité à contrôler la quantité de lumière qui pénètre dans votre maison. Avec une grande variété de styles et de matériaux, vous pouvez choisir l'opacité et le degré d'ouverture qui conviennent le mieux à vos besoins. De plus, les stores assurent l’intimité de vos espaces, vous permettant de profiter de la tranquillité et de la sécurité que vous méritez.`;
    inf_text3.innerText = `Chez Crisple, nous proposons une large gamme de styles, de matériaux et de couleurs de stores adaptés à tous les décors et préférences personnelles. Que vous recherchiez des stores enrouleurs, des stores vénitiens, des stores verticaux ou tout autre type, nos options vous garantissent de trouver la solution parfaite pour votre maison. De plus, nous travaillons avec des matériaux de haute qualité, tels que l'aluminium, le bois, le PVC et les tissus techniques, qui garantissent durabilité et résistance dans le temps.`;
    inf_text4.innerText = `Chez Crisple, notre équipe de professionnels hautement qualifiés s'occupera d'installer vos stores rapidement et efficacement. De plus, nous veillons à ce que chaque projet soit adapté aux mesures et aux besoins spécifiques de votre maison, garantissant une finition impeccable et un ajustement parfait.
    Si vous souhaitez améliorer le confort, l’intimité et l’efficacité énergétique de votre maison, les stores sont la solution idéale. Chez Crisple, nous nous engageons à vous fournir un service personnalisé et de la plus haute qualité.`;

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

    inf_h1_1.innerText = `Verwandeln Sie Ihr Zuhause mit hochwertigen Jalousien: die ideale Lösung für Komfort, Privatsphäre und Energieeffizienz`
    inf_h1_2.innerText = `Licht- und Sichtschutzsteuerung`
    inf_h1_3.innerText = `Stile und Materialien für jeden Geschmack`
    inf_h1_4.innerText = `Professionelle und individuelle Installation`
    
    inf_text1.innerText = `Suchen Sie nach einer praktischen und stilvollen Möglichkeit, den Komfort, die Privatsphäre und die Energieeffizienz Ihres Zuhauses zu verbessern? Dann sind Jalousien die perfekte Lösung. Wir bei Crisple sind auf die Installation hochwertiger Jalousien spezialisiert, die auf Ihre Bedürfnisse und Ihren persönlichen Stil zugeschnitten sind. Entdecken Sie die Vorteile von Jalousien in Ihrem Zuhause und wie unser Expertenteam Ihnen dabei helfen kann, die gewünschte Umgestaltung zu erreichen.`;
    inf_text2.innerText = `Einer der Hauptvorteile von Jalousien besteht darin, dass Sie damit die Lichtmenge steuern können, die in Ihr Zuhause eindringt. Wählen Sie aus einer großen Vielfalt an Stilen und Materialien die Opazität und den Grad der Offenheit, der Ihren Anforderungen am besten entspricht. Darüber hinaus sorgen Jalousien für Privatsphäre in Ihren Räumen, sodass Sie die Ruhe und Sicherheit genießen können, die Sie verdienen.`;
    inf_text3.innerText = `Bei Crisple bieten wir eine große Auswahl an Jalousiestilen, Materialien und Farben, passend zu jedem Dekor und persönlichen Geschmack. Ob Rollos, Jalousien, Lamellenvorhänge oder andere Jalousien: Mit unserem Angebot finden Sie garantiert die perfekte Lösung für Ihr Zuhause. Darüber hinaus arbeiten wir mit hochwertigen Materialien wie Aluminium, Holz, PVC und technischen Geweben, die Langlebigkeit und Widerstandsfähigkeit garantieren.`;
    inf_text4.innerText = `Bei Crisple kümmert sich unser Team aus hochqualifizierten Fachleuten um die schnelle und effiziente Installation Ihrer Jalousien. Darüber hinaus stellen wir sicher, dass jedes Projekt auf die spezifischen Maße und Anforderungen Ihres Zuhauses zugeschnitten ist und garantieren eine tadellose Verarbeitung und perfekte Passform.
    Wenn Sie den Komfort, die Privatsphäre und die Energieeffizienz Ihres Zuhauses verbessern möchten, sind Jalousien die ideale Lösung. Wir bei Crisple sind bestrebt, Ihnen höchste Qualität und persönlichen Service zu bieten.`;

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

        inf_h1_1.innerText = `Преобразите свой дом с помощью качественных жалюзи: идеальное решение для комфорта, конфиденциальности и энергоэффективности.`
        inf_h1_2.innerText = `Управление освещением и конфиденциальностью`
        inf_h1_3.innerText = `Стили и материалы на любой вкус`
        inf_h1_4.innerText = `Профессиональная и индивидуальная установка`
        
        inf_text1.innerText = `Ищете практичный и стильный способ улучшить комфорт, конфиденциальность и энергоэффективность вашего дома? Тогда жалюзи — идеальное решение. В компании Crisple мы специализируемся на установке высококачественных жалюзи, соответствующих вашим потребностям и индивидуальному стилю. Узнайте о преимуществах установки жалюзи в вашем доме и о том, как наша команда экспертов может помочь вам осуществить желаемые преобразования.`;
        inf_text2.innerText = `Одним из главных преимуществ жалюзи является их способность контролировать количество света, проникающего в ваш дом. Благодаря широкому разнообразию стилей и материалов вы можете выбрать степень прозрачности и открытости, которая наилучшим образом соответствует вашим потребностям. Кроме того, жалюзи обеспечивают конфиденциальность вашего пространства, позволяя вам наслаждаться спокойствием и безопасностью, которых вы заслуживаете.`;
        inf_text3.innerText = `В Crisple мы предлагаем широкий выбор стилей, материалов и цветов жалюзи, которые подойдут к любому интерьеру и личным предпочтениям. Независимо от того, ищете ли вы рулонные шторы, жалюзи, вертикальные жалюзи или любой другой тип, наши предложения гарантируют, что вы найдете идеальное решение для вашего дома. Кроме того, мы работаем с высококачественными материалами, такими как алюминий, дерево, ПВХ и технические ткани, которые гарантируют долговечность и устойчивость к внешним воздействиям.`;
        inf_text4.innerText = `В компании Crisple наша команда высококвалифицированных специалистов быстро и эффективно установит ваши жалюзи. Кроме того, мы гарантируем, что каждый проект будет разработан с учетом конкретных размеров и потребностей вашего дома, гарантируя безупречную отделку и идеальную подгонку.
        Если вы хотите повысить комфорт, конфиденциальность и энергоэффективность своего дома, жалюзи — идеальное решение. В Crisple мы стремимся предоставлять вам персонализированное обслуживание высочайшего качества.`;

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
