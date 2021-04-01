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
    {
        heading: "About the initiative",
        texts: [
            {
                heading: "About the project",
                paragraphs: [
                    "Teaching for heroes (TFH) is a new charitable social project initiated by students and graduates of leading schools and universities in Kazakhstan, the USA, Great Britain and other countries. We started this project to provide support for doctors and make our contribution to the fight against COVID-19. Today, each medical workers is our hero standing at the forefront every day of the virus war.",
                    {
                        part1: "Teaching For Heroes created an online platform bringing together representatives of the new generation who are ready to learn and share their knowledge with each other. ",
                        part2: "Children of doctors from 8 to 16 years old can receive free online lessons to practice their English speaking skills with top-class teachers.",
                        part3: " Whether they are interested in sports, art, travel or medicine, they will always find an inspiring mentor with us. They can choose from among over 400 teachers who are fluent in English. Thanks to a simple and convenient online platform, we quickly connect students and teachers, providing both parties with a flexible schedule and a convenient booking system. We partnered with Nativated.com, an online English learning platform, that also offers access to over 300 students from Oxford and Cambridge."
                    }
                ]
            }, {
                heading: "Our motto – Inspire! Support! Share knowledge!",
                paragraph: "We want to expand our initiative globally to help healthcare professionals worldwide. Our initiative was born in Kazakhstan, where the pandemic situation suddenly worsened in June 2020. The country, which was least affected by COVID-19 this spring, has suddenly experienced a sharp increase in disease since the beginning of summer. This situation prompted us to take serious steps and start helping. As the next step, we plan to launch similar initiatives in other countries that are severely affected by the virus."
            }
        ],
        underImage: [
            {
                heading: "Ilya Kan",
                subheading: "Initiator of the campaign",
            }, {
                heading: "Out Hearts for the medics",
                subheading: "Logo of the initiative",
            }
        ]
    }, {
        heading: "О нашей инициативе",
        texts: [
            {
                heading: "О проекте",
                paragraphs: [
                    "Teaching for heroes (TFH) – это новый благотворительный социальный проект, инициированный студентами и выпускниками ведущих школ и университетов Казахстана, США, Великобритании и других стран. Основной целью проекта является оказание посильной поддержки медицинским работникам, которые борются с COVID-19 по всему миру. Сегодня каждый из них – наш герой, который изо дня в день стоит на передовой, принимая основной удар на себя.",
                    {
                        part1: "Teaching for heroes – это онлайн платформа, объединяющая представителей нового поколения, готовых развиваться, учиться и делиться своими знаниями с другими. ",
                        part2: "Дети медиков, от 8 до 16 лет, смогут получить бесплатные онлайн-уроки английского языка, во время которых они могут практиковать свои разговорные навыки с выдающимися учителями.",
                        part3: " Интересуются ли они спортом, искусством, путешествиями или медициной, у нас они всегда найдут вдохновляющего наставника. Они могут выбирать более чем из 400 свободно владеющих английским языком преподавателей, бронировать и получать бесплатные уроки. Благодаря простой и удобной платформе мы быстро соединяем студентов и преподавателей, предоставляя обеим сторонам гибкий график и удобную систему бронирования. Мы сотрудничаем с Nativated.com - онлайн-платформой для изучения английского языка, которая предлагает доступ более чем к 300 студентам и выпускникам из Оксфорда и Кембриджа."
                    }
                ]
            }, {
                heading: "Наш девиз - Вдохновляй! Поддерживай! Делись!",
                paragraph: "Мы хотим распространить нашу инициативу глобально, чтобы помочь медикам во всем мире. Наша инициатива родилась в Казахстане, где ситуация с пандемией внезапно ухудшилась в июне 2020 года. Страна, которая наименее пострадала от воздействия COVID-19 весной, с начала лета внезапно столкнулась с резким ростом заболеваний. Эта ситуация побудила нас предпринять серьезные шаги и начать помогать. В качестве следующих шагов мы планируем выход с подобной инициативой на другие страны, сильно пострадавшие от вируса."
            }
        ],
        underImage: [
            {
                heading: "Ilya Kan",
                subheading: "Инициатор кампании",
            }, {
                heading: "Наши сердца для медиков",
                subheading: "Логотип инициативы",
            }
        ]
    }, {
        heading: "Біздің бастама туралы",
        texts: [
            {
                heading: "Бастама туралы",
                paragraphs: [
                    "Teaching for heroes (TFH) – бұл Қазақстан, АҚШ, Ұлыбритания және басқа елдердің алдыңғы қатарлы мектептері мен университеттерінің студенттері мен түлектерінің бастамасымен әрекет етуін бастаған жаңа әлеуметтік қайырымдылық жоба. Жобаның негізгі мақсаты әлемдегі COVID-19-бен күресіп жатқан медициналық қызметкерлерге қолдау көрсету болып табылады.",
                    {
                        part1: "Teaching for heroes - бұл ары қарай даму, үйрену мен басқалармен өз білгенімен бөліскісі келетін жаңа буын өкілдерін біріктіретін онлайн платформа. ",
                        part2: "8 бен 16 жас аралығындағы медициналық қызметкерлердің балалары ағылшын тілінде тегін онлайн сабақ барысында сөйлеу дағдыларын білікті мұғалімдермен дамыта алады.",
                        part3: " Олар спортқа, өнерге, саяхатқа немесе медицинаға қызығушылық танытса да, бізде олар әрқашан шабыт беретін тәлімгер таба алады. Олар 400-ден астам ағылшын тілін еркін меңгерген мұғалімдер арасынан таңдай алады, олармен сабақты брондап, тегін сабақ өте алады. Қарапайым және ыңғайлы платформа арқасында біз екі тарапқа ыңғайлы кесте мен қолайлы брондау жүйесін ұсыну арқылы оқушы мен мұғалімді тез байланыстырамыз. Біз 300-ден астам Оксфорд пен Кембридж студенттері мен түлектерімен байланыс ұсынып, ағылшын тілін оқытатын онлайн платформасы Nativated.com-мен серіктеспіз."
                    }
                ]
            }, {
                heading: "Біздің ұранымыз – Шабыт бер! Қолдау көрсет! Бөліс!",
                paragraph: "Әлемдегі барлық медициналық қызметкерлерге көмектесу үшін бастамамызды дүниежүзіне тарату ойымыз бар. Жоба 2020 жылдың маусым айынан бастап пандемия жағдайы күрт нашарлаған Қазақстанда бастау алды. Көктемде COVID-19-дан аз мөлшерде зардап шеккен ел жаз басталысымен кенет аурудың күрт өсуіне тап болды. Осындай жағдай бізді маңызды қадамдар жасауға және көмек көрсетуге итермеледі. Келесі қадам ретінде біз осындай бастамамен вирустан зардап шеккен басқа елдерге шығуды жоспарлап отырмыз."
            }
        ],
        underImage: [
            {
                heading: "Ilya Kan",
                subheading: "Кампания бастамашысы",
            }, {
                heading: "Жүректеріміз дәрігерлер үшін",
                subheading: "Бастама логотипі",
            }
        ]
    }
];

const studentsData = [
    {
        heading: "FOR STUDENTS",
        forPeople: "students",
        paragraphs: [
            {
                heading: "Become a hero of the future! Knowledge is power!",
                list: [
                    "Are you a doctor or a healthcare worker who is currently involved in the fight against COVID-19?",
                    "Do you have a child of 8-16 years old who wants to study English?"
                ],
                text: {
                    part1: "If you answer is “Yes” to both of these questions, ",
                    part2: "TFH will help your child learn English for free!"
                }
            }, {
                heading: "What does the website offer?",
                list: [
                    "Free online English lessons for the kids of medical workers.",
                    "More than 300 top students from domestic and foreign universities, fluent in English ready to talk with you on any topic of interest.",
                    "A reliable video chat to communicate with your teacher and a booking system to plan regular classes and track your history"
                ]
            }
        ],
        img: "/images/students.jpg",
        howTo: "How to participate?",
        step: [
            {
                num: "STEP 1",
                heading: "Register on our website",
                subheading: "After registration, your account will be credited with points that can be exchanged for free English lessons."
            }, {
                num: "STEP 2",
                heading: "Connect via video chat",
                subheading: "Select a topic that you want to discuss during the lesson. Then choose a teacher, date and time for the lesson."
            }, {
                num: "STEP 3",
                heading: "Follow the schedule",
                subheading: "Connect on the scheduled time. This will require a stable Internet connection, camera and a microphone"
            }
        ],
        apply: "Apply for free lesson"
    }, {
        heading: "Для студентов",
        forPeople: "students",
        paragraphs: [
            {
                heading: "Стань героем будущего! Знания - сила!",
                list: [
                    "Вы – медработник, который сегодня принимает участие в борьбе с COVID-19?",
                    "У Вас есть ребёнок от 8 до 16 лет, который хочет изучать английский язык?"
                ],
                text: {
                    part1: "Если вы ответили “Да”, ",
                    part2: "мы с радостью поможем Вашему ребенку с изучением английского языка!"
                }
            }, {
                heading: "Что мы предлагаем?",
                list: [
                    "Бесплатное онлайн-обучение детей медиков английскому языку во время летних каникул.",
                    "Более 300 лучших студентов отечественных и зарубежных ВУЗов, свободно владеющих английским языком",
                    "Качественную платформу для проведения онлайн-уроков и удобную систему планирования занятий под ваше расписание"
                ]
            }
        ],
        img: "/images/students.jpg",
        howTo: "Как принять участие?",
        step: [
            {
                num: "Шаг 1",
                heading: "Зарегистрируйся на нашем сайте",
                subheading: "После регистрации тебе будут начислены кредиты, которые ты сможешь обменять на бесплатные уроки английского"
            }, {
                num: "Шаг 2",
                heading: "Выбери учителя и тему",
                subheading: "Выбери интересующую тебя тему, удобное время и подходящего учителя-наставника"
            }, {
                num: "Шаг 3",
                heading: "Подключись к видеочату",
                subheading: "Подключись к видеочату в назначенное время! Для этого потребуется стабильное интернет-соединение, камера и микрофон"
            }
        ],
        apply: "Зарегистрироваться"
    }, {
        heading: "Студенттер үшін",
        forPeople: "students",
        paragraphs: [
            {
                heading: "Болашақ батыры бол! Білім – күш!",
                list: [
                    "Сіз COVID-19-бен күреске қатысатын медицина қызметкерісіз бе?",
                    "Сізде 8 бен 16 жас аралығындағы ағылшын тілін үйренгісі келетін балаңыз бар ма?"
                ],
                text: {
                    part1: "Егер «Ия» деп жауап берген болсаңыз, ",
                    part2: "онда біз балаңызға ағылшын тілін оқытуға қуана көмектесеміз!"
                }
            }, {
                heading: "Біз не ұсынамыз?",
                list: [
                    "Жазғы демалыс барысында медициналық қызметкерлердің балаларына ағылшын тілін тегін онлайн оқыту.",
                    "Ағылшын тілін жетік меңгерген 300-ден астам отандық және шетелдік ЖОО студенттері.",
                    "Онлайн сабақтарды жүргізу және өзіңізге ыңғайлы сабақ кестесін жоспарлау жүйесі үшін сапалы платформа."
                ]
            }
        ],
        img: "/images/students.jpg",
        howTo: "Қалай қатысуға болады?",
        step: [
            {
                num: "1-қадам",
                heading: "Біздің сайтта тіркел",
                subheading: "Тіркелгеннен кейін сізге кредиттер беріледі, оларды тегін ағылшын тілі сабақтарына алмастыра аласыз"
            }, {
                num: "2-қадам",
                heading: "Өзіңе қызықты тақырып пен мұғалімді таңда",
                subheading: "Өзіңізге қызықты тақырып, қолайлы уақыт пен сәйкес мұғалім-тәлімгерді таңдаңыз"
            }, {
                num: "3-қадам",
                heading: "Видеочатқа қосыл",
                subheading: "Белгіленген уақытта видеочатқа қосыл! Ол үшін тұрақты интернет қосылым, камера мен микрофон қажет"
            }
        ],
        apply: "Тіркелу"
    }
];

const teachersData = [
    {
        heading: "FOR TEACHERS",
        forPeople: "teachers",
        paragraphs: [
            {
                heading: "Do good now! Join the initiative! Take part in our project!",
                text: "Join the community of teacher-mentors helping children of real heroes and get a unique opportunity of free training with native English speakers from Oxford and Cambridge"
            }, {
                heading: "You meet the requirements to become a mentor teacher if:",
                list: [
                    "you seek to do good",
                    "you graduated from or you are currently studying at a high school or a university with English language instruction",
                    "you know English at upper intermediate level or above",
                    "you can teach at least 2 hours per week."
                ]
            }
        ],
        img: "/images/teachers.jpg",
        howTo: "How to participate?",
        step: [
            {
                num: "STEP 1",
                heading: "Register on our website",
                subheading: "To register, you will need to submit an application, indicate the number of spare hours a week for teaching and submit convenient dates and hours."
            }, {
                num: "STEP 2",
                heading: "Get verified by our team",
                subheading: "The information provided will be verified by our administrators. You will receive a confirmation from us once the process is completed."
            }, {
                num: "STEP 3",
                heading: "Follow the schedule",
                subheading: "the next lesson at Teaching For Heroes may be booked with you!"
            }
        ],
        apply: "Become a teacher"
    }, {
        heading: "Для учителей",
        forPeople: "teachers",
        paragraphs: [
            {
                heading: "Делай добро сейчас! Прими участие в нашем проекте!",
                text: "Присоединяйся к сообществу учителей-наставников, помогающих детям настоящих героев и получи уникальную возможность бесплатного обучения с носителями английского языка из Оксфорда и Кембриджа"
            }, {
                heading: "Учителем может стать каждый, кто:",
                list: [
                    "стремится делать добро",
                    "закончил или учится в школе или университете с английским языком обучения",
                    "знает английский на уровне upper-intermediate и выше",
                    "способен посвятить урокам не менее 2 часов свободного времени в неделю"
                ]
            }
        ],
        img: "/images/teachers.jpg",
        howTo: "Как принять участие?",
        step: [
            {
                num: "Шаг 1",
                heading: "Зарегистрируйся на нашем сайте",
                subheading: "Для регистрации тебе нужно подать заявку, заполнить форму ниже, указать количество бесплатных часов в неделю для преподавания и удобное время"
            }, {
                num: "Шаг 2",
                heading: "Получи подтверждение от администраторов",
                subheading: "Предоставленная информация будет проверена нашими администраторами, после чего ты получишь подтверждение."
            }, {
                num: "Шаг 3",
                heading: "Следите за расписанием,",
                subheading: "ведь именно с тобой могут назначить очередной урок"
            }
        ],
        apply: "Стать учителем"
    }, {
        heading: "Мұғалімдер үшін",
        forPeople: "teachers",
        paragraphs: [
            {
                heading: "Жақсылықты қазір жаса! Біздің жобаға қатыс!",
                text: "Нағыз бүгінгі күннің батырларының балаларына көмектесетін мұғалім-тәлімгерлер қауымдастығына қосыл да, Оксфорд пен Кэмбриджден ағылшын тілі иелерінен тегін оқу мүмкіндігін жіберіп алма."
            }, {
                heading: "Мұғалім бола алатындар:",
                list: [
                    "жақсылық жасауға ұмтылатын",
                    "мектепте немесе университетте ағылшын тілінде білім алып жатқан немесе оқуын бітірген",
                    "ағылшын тілін upper-intermediate және одан да жоғары деңгейде меңгерген",
                    "аптасына 2 сағаттан кем емес уақытын сабақ беруге мүмкіндігі бар тұлғалар"
                ]
            }
        ],
        img: "/images/teachers.jpg",
        howTo: "Қалай қатысуға болады?",
        step: [
            {
                num: "1-қадам",
                heading: "Біздің сайтта тіркел",
                subheading: "Тіркелу үшін сізге өтініш беру, төмендегі форманы толтыру, аптасына оқытылатын тегін сабақ сағаттары мен ыңғайлы уақытын көрсету керек"
            }, {
                num: "2-қадам",
                heading: "Сайт әкімшілігінен растама",
                subheading: "Көрсетілген ақпарат біздің сайт әкімшілігімен тексерілгеннен кейін сізге растама жіберіледі"
            }, {
                num: "3-қадам",
                heading: "Сабақ кестесін тексеріп отыр",
                subheading: "Teaching For Heroes кезекті сабағы нақты сенімен бекітілуі мүмкін"
            }
        ],
        apply: "Мұғалім бол"
    }
];

const sponsorsData = [
    {
        heading: "SUPPORT OUR HEROES!",
        forPeople: "sponsors",
        text: {
            heading: "We encourage companies or individuals to support our charity project!",
            paragraphs: [
                {
                    part1: "Thousands of doctors across the world are fighting the virus are unable to come home to see their families. ",
                    part2: "TFH wants to help our doctors by giving their children free online classes.",
                    part3: " Our teachers give English lessons for free. In return, we want to reward them for their donation to our community. For every 6 free lessons they provide, we give our teachers an opportunity to have online lesson with students from Oxford and Cambridge at Nativated.com"
                }, {
                    part1: "With a ",
                    part2: "simple donation",
                    part3: ", you can help us teach more students, give out more lessons, and help out more doctors."
                }
            ],
            bold: "Help us to make the world a better place!"
        },
        email: {
            interested: "Interested in sponsoring our initiative?",
            drop: "Drop us an email",
            send: "Send email"
        },
        grateful: "We are grateful for the support from:",
        img: "/images/sponsors.jpg"
    }, {
        heading: "Поддержите наших героев!",
        forPeople: "sponsors",
        text: {
            heading: "Мы будем рады поддержке компаний и всех желающих, готовых выступить спонсорами и принять участие в нашем проекте!",
            paragraphs: [
                {
                    part1: "Тысячи врачей по всему миру борются с вирусом, не имея возможности вернуться домой. ",
                    part2: "Мы, TFH, хотим помочь нашим врачам, предоставляя их детям бесплатные онлайн-уроки.",
                    part3: " Наши учителя-наставники преподают английский язык абсолютно бесплатно. В свою очередь, мы хотим вознаградить их за бескорыстное пожертвование нашему обществу. За каждые 8 проведённых бесплатных уроков мы даём нашим учителям-наставникам возможность получить онлайн-урок со студентами из Оксфорда и Кембриджа."
                }, {
                    part1: "С помощью ",
                    part2: "простого пожертвования",
                    part3: ", вы можете помочь нам обучать больше учеников, давать больше уроков и помогать большему количеству врачей."
                }
            ],
            bold: "Помогите нам сделать мир лучше!"
        },
        email: {
            interested: "Заинтересованы в поддержке нашей инициативы?",
            drop: "Напишите нам!",
            send: "Email"
        },
        grateful: "Мы благодарим за оказанную поддержку:",
        img: "/images/sponsors.jpg"
    }, {
        heading: "Батырларымызды қолдаңыз!",
        forPeople: "sponsors",
        text: {
            heading: "Біздің жобаны қолдағысы келетін компаниялар мен демеуші ретінде қолдау көрсетуге дайын барлық жандарға риза боламыз!",
            paragraphs: [
                {
                    part1: "Әлем бойынша мыңдаған дәрігерлер үйге қайту мүмкіндігінсіз вируспен күресуде. ",
                    part2: "Біз, TFH, дәрігерлердің балаларына онлайн сабақ беру арқылы көмек көрсетуге тырысып жатырмыз.",
                    part3: " Біздің мұғалім-тәлімгерлеріміз ағылшын тілін мүлдем ақысыз негізде үйретеді. Өз атымыздан оларды қоғам үшін жанкешті қызметі үшін марапаттағымыз келіп отыр. Әрбір өткізген 8-ші тегін сабағымыз үшін мұғалімдерімізге Оксфорд және Кембридж студенттерімен онлайн сабақ өту мүмкіндігін береміз."
                }, {
                    part1: "Қарапайым ",
                    part2: "қайырымдылық арқылы",
                    part3: " көбірек оқушыларға сабақ беруге, көбірек сабақтар ұсынуға және көбірек дәрігерге көмек беруге жәрдемдесесміз."
                }
            ],
            bold: "Әлемді жақсырақ етуге көмектесіңіз!"
        },
        email: {
            interested: "Біздің бастаманы қолдағыңыз келеді ме?",
            drop: "Бізге хабарласыңыз!",
            send: "Электрондық пошта жіберу"
        },
        grateful: "Көрсеткен көмегіңіз үшін алғыс айтамыз:",
        img: "/images/sponsors.jpg"
    }
];

module.exports = {
    common: commonData,
    home: homeData,
    aboutUs: aboutUsData,
    students: studentsData,
    teachers: teachersData,
    sponsors: sponsorsData
}