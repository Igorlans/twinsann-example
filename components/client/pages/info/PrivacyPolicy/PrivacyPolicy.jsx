import SeoBlock from '@/components/client/SeoBlock/SeoBlock';
import classes from '../AboutPay/HowToOrder.module.scss'
import SchemaBlock from '@/components/client/SeoBlock/SchemaBlock';


const PrivacyPolicy = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Політика конфіденційності",
          "item": `${process.env.NEXT_PUBLIC_API_URL}/info/privacyPolicy`
        }]
    }
    return (
        <>
            <SeoBlock 
				title="Політика конфіденційності"
                description="Отримайте актуальну інформацію про політику конфіденційності"
			/>
            <SchemaBlock schema={schema} />
            <div className={classes.pageInfo} style={{minHeight: '100vh'}}>
                <h1 className={classes.title}>
                    Політика конфіденційності
                </h1>
                <div className="item-text">
                    <p>Справжня Політика конфіденційності персональних даних (далі - Політика конфіденційності) діє відносно
                        всієї інформації, яку Інтернет-магазин «TWINSANN», розташований за адресою - https://twinsann.com,
                        може отримати про Користувача під час використання сайту Інтернет-магазину, програм і продуктів
                        Інтернет- магазина.</p>
                    <p>1. Визначення термінів</p>
                    <p>1.1 У цій Політиці конфіденційності використовуються такі терміни:</p>
                    <p>1.1.1. «Адміністрація сайту Інтернет-магазину (далі - Адміністрація сайту)» - уповноважені
                        співробітники на управління сайтом, що діють від імені інтернет-магазина TWINSANN, які організовують
                        і здійснює обробку персональних даних, а також визначає цілі обробки персональних даних, склад
                        персональних даних, що підлягають обробці , дії або операції, що здійснюються з персональними
                        даними.</p>
                    <p>1.1.2. «Персональні дані» - будь-яка інформація, що стосується прямо або побічно певного або
                        визначається фізичній особі (суб'єкту персональних даних).</p>
                    <p>1.1.3. «Обробка персональних даних» - будь-яка дія (операція) або сукупність дій (операцій), що
                        здійснюються з використанням засобів автоматизації або без використання таких засобів з
                        персональними даними, включаючи збір, запис, систематизацію, накопичення, зберігання, уточнення
                        (оновлення, зміна), витяг, використання, передачу (поширення, надання, доступ), знеособлення,
                        блокування, видалення, знищення персональних даних.</p>
                    <p>1.1.4. «Конфіденційність персональних даних» - обов'язкове для дотримання Адміністратором або іншим
                        отримав доступ до персональних даних особою вимога не допускати їх поширення без згоди суб'єкта
                        персональних даних або наявності іншого законного підстави.</p>
                    <p>1.1.5. «Користувач сайту Інтернет-магазину TWINSANN» - особа, яка має доступ до Сайту, за допомогою
                        мережі Інтернет і використовує Сайт інтернет-магазину.</p>
                    <p>1.1.6. «Cookies» - невеликий фрагмент даних, відправлений веб-сервером і зберігається на комп'ютері
                        користувача, який веб-клієнт або веб-браузер кожен раз пересилає веб-серверу в HTTP-запиті при
                        спробі відкрити сторінку відповідного сайту.</p>
                    <p>1.1.7. «IP-адреса» - унікальний мережеву адресу вузла в комп'ютерній мережі, побудованої за
                        протоколом IP.</p>
                    <p>2. Загальні положення</p>
                    <p>2.1. Використання Користувачем сайту Інтернет-магазину означає згоду з цією Політикою
                        конфіденційності та умовами обробки персональних даних Користувача.</p>
                    <p>2.2. У разі незгоди з умовами Політики конфіденційності Користувач повинен припинити використання
                        сайту Інтернет-магазину.</p>
                    <p>2.3.Настоящая Політика конфіденційності застосовується лише до сайту Інтернет-магазину TWINSANN.
                        Інтернет-магазин не контролює і не несе відповідальність за сайти третіх осіб, на які Користувач
                        може перейти по посиланнях, доступним на сайті інтернет-магазину.</p>
                    <p>2.4. Адміністрація сайту не перевіряє достовірність персональних даних, що надаються Користувачем
                        сайту Інтернет-магазину.</p>
                    <p>&nbsp;
                    </p><p>3. ПРЕДМЕТ ПОЛІТИКИ КОНФІДЕНЦІЙНОСТІ</p>
                    <p>&nbsp;
                    </p><p>3.1. Справжня Політика конфіденційності встановлює зобов'язання Адміністрації сайту
                    інтернет-магазину щодо нерозголошення та забезпечення режиму захисту конфіденційності персональних
                    даних, які Користувач повинен за вимогою надати Адміністрації сайту при реєстрації на сайті
                    інтернет-магазину або при оформленні замовлення для придбання Товару.</p>
                    <p>3.2. Персональні дані, дозволені до обробки в рамках цієї Політики конфіденційності, надаються
                        Користувачем шляхом заповнення реєстраційної форми на Сайті інтернет-магазину FunkoFans в розділі
                        про реєстрацію і включають в себе наступну інформацію:</p>
                    <p>3.2.1. ПІБ Користувача;</p>
                    <p>3.2.2. контактний телефон Користувача;</p>
                    <p>3.2.3. адреса електронної пошти (e-mail);</p>
                    <p>3.2.4. адреса доставки Товару;</p>
                    <p>3.2.5. місце проживання Користувача.</p>
                    <p>3.3. Інтернет-магазин захищає Дані, які автоматично передаються в процесі перегляду рекламних блоків
                        і при відвідуванні сторінок, на яких встановлено статистичний скрипт системи ( "піксель"): IP
                        адреса; інформація з cookies;інформація про браузер (чи іншої програми, яка здійснює доступ до
                        показу реклами); час доступу; адреса сторінки, на якій розташований рекламний блок;реферер (адреса
                        попередньої сторінки).</p>
                    <p>3.3.1.Відключення cookies може спричинити неможливість доступу до частин сайту Інтернет-магазину, що
                        вимагають авторизації.</p>
                    <p>3.2. Інтернет-магазин здійснює збір статистики про IP-адреси своїх відвідувачів. Дана інформація
                        використовується з метою виявлення і вирішення технічних проблем, для контролю законності проведених
                        фінансових платежів.</p>
                    <p>4. Будь-яка інша персональна інформація, не обумовлені вище (історія покупок, використовувані
                        браузери і операційні системи і т.д.), підлягає надійному зберіганню і нерозповсюдження, за винятком
                        випадків, передбачених в п.п. 5.2. і 5.3. цієї Політики конфіденційності</p>
                    <p> ЦІЛІ ЗБОРУ ПЕРСОНАЛЬНОЇ ІНФОРМАЦІЇ КОРИСТУВАЧА</p>
                    <p>1. Персональні дані Користувача Адміністрація сайту інтернет-магазину може використовувати в
                        цілях:</p>
                    <p>1.1. Ідентифікації Користувача, зареєстрованого на сайті Інтернет-магазину, для оформлення замовлення
                        і (або) укладення Договору купівлі-продажу товару дистанційним способом з Інтернет-магазином
                        TWINSANN.</p>
                    <p>1.2. Надання Користувачеві доступу до персоналізованих ресурсів Сайту інтернет-магазину.</p>
                    <p>1.3. Встановлення з Користувачем зворотного зв'язку, включаючи напрямок повідомлень, запитів, що
                        стосуються використання Сайту інтернет-магазину, надання послуг, обробка запитів і заявок від
                        Користувача.</p>
                    <p>1.4. Визначення місця знаходження Користувача для забезпечення безпеки, запобігання шахрайства.</p>
                    <p>1.5. Підтвердження достовірності та повноти персональних даних, наданих Користувачем.</p>
                    <p>1.6. Створення облікового запису для здійснення покупок, якщо Користувач дав згоду на створення
                        облікового запису.</p>
                    <p>1.7. Повідомлення Користувача Сайту інтернет-магазину про стан Замовлення.</p><p></p>
                    <p>1.8. Обробки і отримання платежів, підтвердження податку або податкових пільг Користувачем.
                    </p><p>1.9. Надання Користувачеві ефективної клієнтської і технічної підтримки при виникненні проблем
                    пов'язаних з використанням Сайту інтернет-магазину.</p>
                    <p>1.10. Надання Користувачеві з його згоди, оновлень продукції, спеціальних пропозицій, інформації про
                        ціни, розсилки новин та інших відомостей від імені Інтернет-магазину або від імені партнерів
                        Інтернет-магазину.</p>
                    <p>1.11. Здійснення рекламної діяльності за згодою Користувача.</p>
                    <p>1.12. Надання доступу Користувачеві на сайти або сервіси партнерів Інтернет-магазину з метою
                        отримання продуктів, оновлень і послуг.</p>
                    <p> СПОСОБИ І ТЕРМІНИ ОБРОБКИ ПЕРСОНАЛЬНОЇ ІНФОРМАЦІЇ</p>
                    <p>1. Обробка персональних даних Користувача здійснюється без обмеження терміну, будь-яким законним
                        способом, в тому числі в інформаційних системах персональних даних з використанням засобів
                        автоматизації або без використання таких засобів.</p>
                    <p>2. Користувач погоджується з тим, що Адміністрація сайту має право передавати персональні дані третім
                        особам, зокрема, кур'єрським службам, організаціями поштового зв'язку, операторам електрозв'язку,
                        виключно з метою виконання замовлення Користувача, оформленого на Сайті інтернет-магазину « TWINSANN
                        », включаючи доставку Товару.</p>
                    <p>3. Персональні дані Користувача можуть бути передані уповноваженим органам державної влади України
                        тільки на підставах та в порядку, встановленим законодавством України.</p>
                    <p>4. При втраті або розголошення персональних даних Адміністрація сайту інформує Користувача про втрату
                        або розголошення персональних даних.</p>
                    <p>5. Адміністрація сайту вживає необхідних організаційних і технічних заходів для захисту персональної
                        інформації Користувача від неправомірного або випадкового доступу, знищення, перекручення,
                        блокування, копіювання, поширення, а також від інших неправомірних дій третіх осіб.</p>
                    <p>6. Адміністрація сайту спільно з Користувачем вживає всіх необхідних заходів щодо запобігання збиткам
                        або інших негативних наслідків, викликаних втратою або розголошенням персональних даних
                        Користувача.</p>
                    <p> Зобов'язання сторін</p>
                    <span>1. Користувач зобов'язаний:</span>
                    <p>1.1. Надати інформацію про персональні дані, необхідну для користування Сайтом інтернет-магазину
                        FunkoFans.</p>
                    <p>1.2. Оновити, доповнити надану інформацію про персональні дані в разі зміни даної інформації.</p>
                    <p>2. Адміністрація сайту зобов'язана:</p>
                    <p>2.1. Використовувати отриману інформацію виключно для цілей, зазначених у п. 4 цієї Політики
                        конфіденційності.</p>
                    <p>6.2.2. Забезпечити зберігання конфіденційної інформації в таємниці, не розголошувати без попередньої
                        письмової згоди Користувача, а також не здійснювати продаж, обмін, опублікування, або розголошення
                        іншими можливими способами переданих персональних даних Користувача, за винятком п.п. 5.2. і 5.3.
                        цієї Політики Конфіденційності.</p>
                    <p>6.2.3. Вживати заходів обережності для захисту конфіденційності персональних даних Користувача згідно
                        з порядком, який зазвичай використовується для захисту такого роду інформації в існуючому діловому
                        обороті.</p>
                    <p>6.2.4. Здійснити блокування персональних даних, що відносяться до відповідного Користувачеві, з
                        моменту звернення або запиту Користувача або його законного представника або уповноваженого органу з
                        захисту прав суб'єктів персональних даних на період перевірки, в разі виявлення недостовірних
                        персональних даних або неправомірних дій.</p>
                    <p>7. ВІДПОВІДАЛЬНІСТЬ СТОРІН</p>
                    <p>7.1. Адміністрація сайту, яка не виконала свої зобов'язання, несе відповідальність за збитки,
                        понесені Користувачем у зв'язку з неправомірним використанням персональних даних, відповідно до
                        законодавства України, за винятком випадків, передбачених п.п. 5.2., 5.3. і 7.2. цієї Політики
                        Конфіденційності.</p>
                    <p>7.2. У разі втрати або розголошення Конфіденційної інформації Адміністрація сайту не несе
                        відповідальність, якщо дана конфіденційна інформація:</p>
                    <p>7.2.1. Стала публічним надбанням до її втрати або розголошення.</p>
                    <p>7.2.2. Була отримана від третьої сторони до моменту її отримання Адміністрацією сайту.</p>
                    <p>7.2.3. Була розголошена за згодою Користувача.</p>
                    <p>8. Вирішення спорів</p>
                    <p>8.1. До звернення в суд з позовом у спорах, що виникають із відносин між Користувачем сайту
                        Інтернет-магазину і Адміністрацією сайту, обов'язковим є пред'явлення претензії (письмового
                        пропозиції про добровільне врегулювання спору).</p>
                    <p>8.2 .Получатель претензії протягом 30 календарних днів з дня отримання претензії, письмово повідомляє
                        заявника претензії про результати розгляду претензії.
                    </p><p>8.3. При не досягненні угоди суперечка буде переданий на розгляд до судового органу відповідно до
                    чинного законодавства України.</p>
                    <p>8.4. До цій Політиці конфіденційності та відносин між Користувачем і Адміністрацією сайту
                        застосовується чинне законодавство України.</p>
                    <p>9. ДОДАТКОВІ УМОВИ</p>
                    <p>9.1. Адміністрація сайту має право вносити зміни в справжню Політику конфіденційності без згоди
                        Користувача.</p>
                    <p>9.2. Нова Політика конфіденційності вступає в силу з моменту її розміщення на Сайті
                        інтернет-магазину, якщо інше не передбачено новою редакцією Політики конфіденційності.</p>
                </div>
            </div>
        </>
    )
}
export default PrivacyPolicy;