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

        inf_h1_1.innerText = `Transforma tu hogar con elegantes cerramientos de cristal: una solución innovadora y práctica`
        inf_h1_2.innerText = `Disfruta de vistas panorámicas sin restricciones: una experiencia visual inigualable con cerramientos de cristal`
        inf_h1_3.innerText = `Aislamiento térmico y acústico eficiente: confort y ahorro energético con cerramientos de cristal`
        inf_h1_4.innerText = `Protección y disfrute todo el año: Cerramientos de cristal para espacios exteriores`
        inf_h1_5.innerText = `Transforma tu hogar con cerramientos de cristal: versatilidad y funcionalidad en tus espacios interiores`
        inf_text.innerText = `En cuanto al mantenimiento, los cerramientos de cristal son sorprendentemente fáciles de limpiar y cuidar. A diferencia de otros materiales, como la madera o el metal, el vidrio no se deteriora ni se degrada con el tiempo. Además, su superficie lisa y no porosa evita la acumulación de suciedad, polvo y otros residuos, lo que facilita la limpieza y el mantenimiento. Con un simple paño húmedo y un producto limpiacristales, podrás mantener tus cerramientos de cristal impecables y relucientes durante años.

Los cerramientos de cristal también pueden personalizarse para adaptarse a tus necesidades y preferencias estéticas. Puedes elegir entre diferentes tipos de vidrio, como vidrio templado, vidrio laminado o incluso vidrio tintado, así como una variedad de acabados y colores para los perfiles y accesorios. De esta manera, puedes asegurarte de que tus cerramientos de cristal se adapten perfectamente al estilo de tu hogar y a tus gustos personales.

Los acristalamientos brindan una estética elegante y moderna a cualquier espacio, al tiempo que ofrecen una gran funcionalidad y facilidad de mantenimiento. Ya sea en terrazas, porches, pérgolas o interiores, los cerramientos de cristal realzan la belleza de tu hogar y mejoran la calidad de vida de sus habitantes.`;

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

    inf_h1_1.innerText = `Transform your home with elegant glass enclosures: an innovative and practical solution`
    inf_h1_2.innerText = `Enjoy unrestricted panoramic views: an unrivaled visual experience with glass enclosures`
    inf_h1_3.innerText = `Efficient thermal and acoustic insulation: comfort and energy savings with glass enclosures`
    inf_h1_4.innerText = `Protection and enjoyment all year round: Glass enclosures for outdoor spaces`
    inf_h1_5.innerText = `Transform your home with glass enclosures: versatility and functionality in your interior spaces`
    inf_text.innerText = `As for maintenance, glass enclosures are surprisingly easy to clean and care for. Unlike other materials, such as wood or metal, glass does not deteriorate or degrade over time. In addition, its smooth, non-porous surface prevents the accumulation of dirt, dust and other residues, making cleaning and maintenance easy. With a simple damp cloth and a glass cleaner, you can keep your glass enclosures spotless and shiny for years to come.

Glass enclosures can also be customized to suit your needs and aesthetic preferences. You can choose from different types of glass, such as tempered glass, laminated glass or even tinted glass, as well as a variety of finishes and colors for profiles and accessories. This way, you can ensure that your glass enclosures perfectly fit the style of your home and your personal tastes.

Glazing provides an elegant and modern aesthetic to any space, while offering great functionality and ease of maintenance. Whether on terraces, porches, pergolas or interiors, glass enclosures enhance the beauty of your home and improve the quality of life of its inhabitants.`;

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

    inf_h1_1.innerText = `Transformez votre maison avec des parois vitrées élégantes : une solution innovante et pratique`
    inf_h1_2.innerText = `Profitez d'une vue panoramique sans restriction : une expérience visuelle inégalée avec des enceintes en verre`
    inf_h1_3.innerText = `Isolation thermique et acoustique efficace : confort et économies d'énergie avec les parois vitrées`
    inf_h1_4.innerText = `Protection et plaisir toute l'année : clôtures en verre pour espaces extérieurs`
    inf_h1_5.innerText = `Transformez votre maison avec des parois vitrées : polyvalence et fonctionnalité dans vos espaces intérieurs`
    inf_text.innerText = `En ce qui concerne l’entretien, les enceintes en verre sont étonnamment faciles à nettoyer et à entretenir. Contrairement à d’autres matériaux, comme le bois ou le métal, le verre ne se détériore pas et ne se dégrade pas avec le temps. De plus, sa surface lisse et non poreuse empêche l’accumulation de saleté, de poussière et d’autres résidus, facilitant ainsi le nettoyage et l’entretien. Avec un simple chiffon humide et un nettoyant pour vitres, vous pouvez garder vos boîtiers en verre impeccables et brillants pendant des années.

Les enceintes en verre peuvent également être personnalisées pour répondre à vos besoins et à vos préférences esthétiques. Vous pouvez choisir parmi différents types de verre, tels que le verre trempé, le verre feuilleté ou encore le verre teinté, ainsi qu'une variété de finitions et de couleurs pour les profils et les accessoires. De cette façon, vous pouvez vous assurer que vos parois vitrées s’adaptent parfaitement au style de votre maison et à vos goûts personnels.

Le vitrage apporte une esthétique élégante et moderne à n'importe quel espace, tout en offrant une grande fonctionnalité et une facilité d'entretien. Que ce soit sur des terrasses, des porches, des pergolas ou des intérieurs, les fermetures en verre rehaussent la beauté de votre maison et améliorent la qualité de vie de ses habitants.`;

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

    inf_h1_1.innerText = `Verwandeln Sie Ihr Zuhause mit eleganten Glaseinfassungen: eine innovative und praktische Lösung`
    inf_h1_2.innerText = `Genießen Sie uneingeschränkte Panoramablicke: Ein unvergleichliches visuelles Erlebnis mit Glasabdeckungen`
    inf_h1_3.innerText = `Effiziente Wärme- und Schalldämmung: Komfort und Energieeinsparung mit Glasabtrennungen`
    inf_h1_4.innerText = `Schutz und Genuss das ganze Jahr über: Glasüberdachungen für den Außenbereich`
    inf_h1_5.innerText = `Verwandeln Sie Ihr Zuhause mit Glaseinhausungen: Vielseitigkeit und Funktionalität in Ihren Innenräumen`
    inf_text.innerText = `Was die Wartung betrifft, sind Glasgehäuse überraschend einfach zu reinigen und zu pflegen. Im Gegensatz zu anderen Materialien wie Holz oder Metall verschlechtert oder verformt sich Glas im Laufe der Zeit nicht. Darüber hinaus verhindert die glatte, porenfreie Oberfläche die Ansammlung von Schmutz, Staub und anderen Rückständen, was die Reinigung und Wartung erleichtert. Mit einem einfachen feuchten Tuch und einem Glasreiniger können Sie Ihre Glasgehäuse jahrelang makellos und glänzend halten.

Glasgehäuse können auch individuell an Ihre Bedürfnisse und ästhetischen Vorlieben angepasst werden. Zur Auswahl stehen Ihnen unterschiedliche Glasarten wie ESG, Verbundglas oder auch getöntes Glas sowie eine Vielzahl an Oberflächen und Farben bei Profilen und Zubehör. So stellen Sie sicher, dass sich Ihre Glasfassade optimal an den Stil Ihres Zuhauses und Ihren persönlichen Geschmack anpasst.

Verglasungen verleihen jedem Raum eine elegante, moderne Ästhetik und bieten gleichzeitig hohe Funktionalität und einfache Wartung. Ob auf Terrassen, Veranden, Pergolen oder im Innenbereich: Glaseinhausungen werten Ihr Zuhause auf und verbessern die Lebensqualität seiner Bewohner.`;

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

        inf_h1_1.innerText = `Преобразите свой дом с помощью элегантных стеклянных ограждений: инновационное и практичное решение`
        inf_h1_2.innerText = `Наслаждайтесь неограниченным панорамным видом: непревзойденные визуальные впечатления благодаря стеклянным ограждениям`
        inf_h1_3.innerText = `Эффективная тепло- и звукоизоляция: комфорт и экономия энергии благодаря стеклянным ограждениям`
        inf_h1_4.innerText = `Защита и удовольствие круглый год: стеклянные ограждения для открытых пространств`
        inf_h1_5.innerText = `Преобразите свой дом с помощью стеклянных ограждений: универсальность и функциональность внутренних пространств`
        inf_text.innerText = `Что касается обслуживания, то стеклянные ограждения на удивление легко чистить и ухаживать за ними. В отличие от других материалов, таких как дерево или металл, стекло не портится и не деградирует со временем. Кроме того, его гладкая, непористая поверхность препятствует накоплению грязи, пыли и других остатков, что облегчает чистку и уход. Используя простую влажную ткань и чистящее средство для стекол, вы сможете сохранить стеклянные ограждения безупречными и блестящими на долгие годы.

Стеклянные ограждения также могут быть изготовлены по индивидуальному заказу в соответствии с вашими потребностями и эстетическими предпочтениями. Вы можете выбирать из различных типов стекла, таких как закаленное стекло, многослойное стекло или даже тонированное стекло, а также из множества вариантов отделки и цветов для профилей и аксессуаров. Таким образом, вы можете быть уверены, что ваши стеклянные ограждения идеально подойдут к стилю вашего дома и вашим личным вкусам.

Остекление придает любому помещению элегантный, современный вид, обеспечивая при этом большую функциональность и простоту ухода. Будь то террасы, веранды, перголы или интерьеры, стеклянные ограждения подчеркивают красоту вашего дома и улучшают качество жизни его обитателей.`;

        consultants.innerText = `Русскоязычные консультанты`;
}
