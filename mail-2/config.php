<?php
define("HOST", "smtp.yandex.ru");       // SMTP сервера вашей почты
define("LOGIN", "*****@******");       // логин вашей почты
define("PASS", "*******");      // пароль вашей почты
define("SECURE", "ssl");
define("PORT", "465");

define("SENDERS_EMAIL", "*****@********");               // почта С которой отправляем
define("SENDERS_NAME", "ООО Курс");                     // имя отправителя
define("RECIPIENTS_EMAIL", "*****@********");           // почта НА которую отправляем
define("RECIPIENTS_EMAIL_2", "*****@********");         // почта НА которую отправляем
define("RECIPIENTS_EMAIL_3", "*****@********");           // почта НА которую отправляем

// -- для нас --
define("TITLE_EMAIL", "Сообщение с сайта");             // заголовок письма
define("BODY_EMAIL", "
    <div style='background: #dd3f45; padding: 8px; height: 22px; text-align: center; background: -webkit-linear-gradient(127deg, #dd3f45,#484b53); background: linear-gradient(127deg, #dd3f45,#484b53);  '>
        <div style='color: #fff; font-weight: bold; font-size: 18px;'>$titleModal</div>
    </div>

    <div style='padding: 12px 18px; background: #fafafa;'>
        <ul>
            <li>Телефон или почта, которую оставил клиент: $text</li>
        </ul>
    </div>

    <div style='color: #fff; background: #dd3f45; padding: 4px; height: 16px; text-align: center; font-size: 12px; background: -webkit-linear-gradient(127deg, #dd3f45,#484b53); background: linear-gradient(127deg, #dd3f45,#484b53);'>
        Страница с которой отправили запрос: <a style='color: #fff; font-weight: bold; padding-left: 8px;' href='$linkPage'>$titlePage</a>
    </div>
"); 

// -- для клиента --
define("TITLE_CLIENT_EMAIL", "Сообщение с сайта");      // заголовок письма
define("BODY_CLIENT_EMAIL", "
    <div style='background: #dd3f45; padding: 8px; height: 22px; text-align: center; background: -webkit-linear-gradient(127deg, #dd3f45,#484b53); background: linear-gradient(127deg, #dd3f45,#484b53);  '>
        <div style='color: #fff; font-weight: bold; font-size: 18px;'>Здравствуйте!</div>
    </div>

    <div style='padding: 40px 18px; background: #fafafa;'>
        <p style='font-weight:bold;'>Спасибо. Заявка принята. В ближайшее время с Вами свяжется наш менеджер.</p>
        <p style='margin-top: 40px;'>Мы стремимся делать наш сайт лучше, чтобы вам было удобно получать информацию на нем. <br>
        Пройдите пожалуйста небольшой опрос, который займет у вас не более пяти минут: <br>
        <a style='font-weight:bold;color: #a90c0c;text-decoration: none;font-size: 20px;' href='https://docs.google.com/forms/d/e/1FAIpQLSd_1lVkZMiws1fXS_6k2uo8khzwf4aOmC4EvJeyLmmwpEqFqA/viewform'>«Оценка сайта zaokurs.ru» </a>
        </p>
    </div>

    <hr>

    <div style='background:#fafafa;padding:40px 18px 40px 18px;font-size:14px;'>
        <p>С уважением, ООО 'Курс'</p>
        <ul>
            <li>Тел.: 8 800-200-60-10 (бесплатно по РФ), 8 (81153) 5-07-44, 5-08-31</li>
            <li>Моб. тел: +7-911-360-44-80 (Whatsapp, Viber)</li>
            <li>Адрес: 182110, Псковская обл., г. Великие Луки, пр. Гагарина 9 к. 1, оф. 4</li>
            <li>Наш канал на YouTube: <a href='https://www.youtube.com/channel/UCv3gfBlZ1WJ-RgxdHLaFG5A'>ООО Курс - Аккумуляторы</a></li>
            <li>Яндекс Дзен: <a href='https://zen.yandex.ru/id/5e4d26705c1f4e253331a36e'>ООО Курс</a></li>
            <li>Сайт: <a href='https://zaokurs.ru/katalog/akkumulyatornyie-batarei'>zaokurs.ru</a></li>
        </ul>
    </div>    

    <div style='color: #fff; background: #dd3f45; padding: 4px; height: 16px; text-align: center; font-size: 12px; background: -webkit-linear-gradient(127deg, #dd3f45,#484b53); background: linear-gradient(127deg, #dd3f45,#484b53);'>
        Промышленные аккумуляторы <a style='color: #fff; font-weight: bold; padding-left: 8px;' href='https://zaokurs.ru'>ООО Курс</a>
    </div>
"); 