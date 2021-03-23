const commonData = [
    {
        language: "English",
        languageCode: "en",
        home: "Home",
        aboutUs: "About the initiative",
        students: "Students",
        teachers: "Teachers",
        sponsors: "Sponsors",
        login: "Login",
        contactUs: "Email us at:",
        privacyPolicy: "Our Privacy Policy",
        termsConditions: "Our terms & Conditions"
    }, {
        language: "Russian",
        languageCode: "ru",
        home: "Главная страница",
        aboutUs: "Об инициативе",
        students: "Ученикам",
        teachers: "Учителям",
        sponsors: "Спонсорам",
        login: "Войти",
        contactUs: "Напишите нам:",
        privacyPolicy: "Политика конфиденциальности",
        termsConditions: "Условия использования"
    }, {
        language: "Kazakh",
        languageCode: "kk",
        home: "Басты бет",
        aboutUs: "Бастама туралы",
        students: "Оқушыларға",
        teachers: "Мұғалімдерге",
        sponsors: "Демеушілерге",
        login: "Кіру",
        contactUs: "Бізге хабарласыңыз:",
        privacyPolicy: "Құпиялылық саясаты",
        termsConditions: "Пайдалану шарттары"
    }
];

const homeData = [
    {
        paragraphs: [
            {
                part1: "COVID-19 has endangered us and our loved ones. Fortunately, we have doctors and nurses, our medical workers, ",
                part2: "OUR HEROES",
                part3: ", who are at the forefront of the fight against the virus. We express our deep gratitude to you for your professionalism and devotion to your mission!"
            }, {
                part1: "In return, we, the TFH initiative, strive to ",
                part2: "support our doctors and nurses by providing their children with free high-quality online classes."
            },
            "“Education is the most powerful weapon which you can use to change the world.” ~ Nelson Mandela"
        ],
        learnMoreButton: "Learn more about TFH",
        cards: [
            {
                for: "For students",
                heading: "Become a hero of the future! Knowledge is power!",
                subheading: "Free online English language training provided for free",
                button: "Get a free lesson"
            }, {
                for: "For teachers",
                heading: "Do good deeds with us! Join our charity project!",
                subheading: "To teach means to study twice!",
                button: "Become a teacher"
            }
        ],
        numbers: {
            lessons: "LESSONS",
            teachers: "TEACHERS",
            students: "STUDENTS"
        },
        partner: "In cooperation with"
    }, {
        paragraphs: [
            {
                part1: "COVID-19 поставил под угрозу нас и наших близких. К счастью, у нас есть врачи и медсестры, наши медицинские работники, ",
                part2: "наши герои",
                part3: ", которые находятся на передовой борьбы с вирусом. Выражаем вам свою глубокую благодарность за профессионализм и преданность призванию!"
            }, {
                part1: "В свою очередь, мы, инициатива TFH, ",
                part2: "стремимся поддержать наших врачей и медсестёр, предоставляя их детям бесплатные качественные он-лайн уроки."
            },
            "“Образование - это самое могущественное оружие, способное изменить мир” ~ Нельсон Мандела"
        ],
        learnMoreButton: "Узнать больше о TFH",
        cards: [
            {
                for: "Ученикам",
                heading: "Стань героем будущего! Знания - сила!",
                subheading: "Бесплатное онлайн-обучение английскому языку",
                button: "Бесплатные уроки"
            }, {
                for: "Учителям",
                heading: "Делай добро! Присоединяйся к нашему проекту!",
                subheading: "Обучать - вдвойне учиться!",
                button: "Стать учителем"
            }
        ],
        numbers: {
            lessons: "УРОКИ",
            teachers: "УЧИТЕЛЕЙ",
            students: "УЧЕНИКОВ"
        },
        partner: "В сотрудничестве с"
    }, {
        paragraphs: [
            {
                part1: "COVID-19 бізге және біздің жақындарымызға қауіп төндіріп тұр. Бақытымызға орай, вируспен күрестің алдыңғы қатарында тұрған дәрігерлеріміз бен медбикелер, біздің медициналық қызметкерлеріміз, ",
                part2: "біздің батырларымыз бар.",
                part3: " Кәсіпқойлық пен өз істеріңізге берілгендігіңіз үшін алғысымызды айтамыз!"
            }, {
                part1: "Өз кезегімізде біз, TFH бастамасы, ",
                part2: "дәрігерлеріміз бен медбикелердің балаларына сапалы тегін онлайн сабақтар ұсыну арқылы оларға қолдау көрсетуге тырысып отырмыз."
            },
            "“Білім – бұл әлемді өзгерте алатын ең мықты қару” - Нельсон Мандела"
        ],
        learnMoreButton: "TFH туралы толығырақ білу",
        cards: [
            {
                for: "Оқушыларға",
                heading: "Болашақ батыры бол! Білім – күш!",
                subheading: "Ағылшын тілін тегін оқыту",
                button: "Тегін сабақтар"
            }, {
                for: "Мұғалімдер үшін",
                heading: "Жақсылық жаса! Біздің жобаға қосыл!",
                subheading: "Оқыту – екі есе үйрену!",
                button: "Мұғалім бол"
            }
        ],
        numbers: {
            lessons: "САБАҚТАР",
            teachers: "МҰҒАЛІМ",
            students: "ОҚУШЫ"
        },
        partner: "пен бірлесе"
    }
];

const aboutUsData = [

];

const studentsData = [

];

const teachersData = [

];

const sponsorsData = [

];

module.exports = {
    common: commonData,
    home: homeData,
    aboutUs: aboutUsData,
    students: studentsData,
    teachers: teachersData,
    sponsors: sponsorsData
}