import pin1 from "../assets/pins/07e12b3d2eb799a155437cb8779d4406-transformed.png";
import pin2 from "../assets/pins/69af73df02d8c14b07673af1832d81c5-transformed.png";
import pin3 from "../assets/pins/74acd3335b013c5bc358827ea9a32e8c.png";
import pin4 from "../assets/pins/image-no-bg-preview8.png";
import pin5 from "../assets/pins/image-no-bg-preview9.png";
import pin6 from "../assets/pins/image-no-bg-preview11.png";
// import fff from "../assets/pins/07e12b3d2eb799a155437cb8779d4406-transformed.png"

export interface sourceMark {
  text: string;
  list?: Array<{
    point: string;
  }>;
}

export interface source {
  title: string;
  fontSize: number;
  fontHeight?: number;
  fontMargin?: number;
  info?: string;
  creator: string;
  target: string;
  link: string;
  img: string;
  pluses: Array<sourceMark>;
  minuses: Array<sourceMark>;
}

export const sources = [
  {
    title: "Помощь рядом",
    fontSize: 96,
    creator:
      "организация «Врачи детям», которая занимается поддержкой семей и защищает права детей.",
    target: "дети и подростки до 18 лет.",
    link: "https://pomoschryadom.ru/",
    img: pin1,
    pluses: [
      {
        text: "Анонимность. Если человек не хочет, то может не раскрывать свое настоящее имя.",
      },
      {
        text: "Консультации проводятся бесплатно.",
      },
      {
        text: "На сайте размещены «Советы психологов»",
      },
      {
        text: "На сайте размещен список примерных вопросов, с которыми можно обратиться.",
      },
      {
        text: "На сайте размещено множество других номеров служб психологической помощи даже для тех, кто старше восемнадцати.",
      },
    ],
    minuses: [
      {
        text: "На сайте размещен список примерных вопросов, с которыми можно обратиться.",
      },
      {
        text: "На сайте размещено множество других номеров служб психологической помощи даже для тех, кто старше восемнадцати.",
      },
    ],
  },
  {
    title: "Ярославна",
    fontSize: 90,
    creator: "Институт практической психологии и психоанализа.",
    target: "все желающие.",
    link: "https://yaroslavna.help/",
    img: pin2,
    pluses: [
      {
        text: "После разговора предложат записаться на три бесплатные личные консультации.",
      },
      {
        text: "Все, что происходит в разговоре не записывается, также у службы помощи не остается номер телефона абонента.",
      },
    ],
    minuses: [
      {
        text: "Возможны только звонки, написать сообщение нельзя.",
      },
      {
        text: "Консультируют только выпускники Института Педагогической психологии и Психоанализа.",
      },
    ],
  },
  {
    title: "Я родитель",
    fontSize: 84,
    info: "Онлайн-консультации по вопросам воспитания и сложных ситуаций в отношениях с детьми.",
    creator: "Фонд поддержки детей, находящихся в трудной жизненной ситуации.",
    target: "родители детей и подростков.",
    link: "https://www.ya-roditel.ru/parents/consultation/",
    img: pin3,
    pluses: [
      {
        text: "Консультации проводятся бесплатно.",
      },
      {
        text: "Помимо консультаций психолога, можно получить консультацию юриста.",
      },
      {
        text: "Вы можете видеть, какие именно специалисты будут отвечать на ваши вопросы. (Иногда, внешний вид человека очень важен в контексте доверия и способности открыться.)",
      },
      {
        text: "Помимо получения психологической помощи, на сайте можно найти такую полезную информацию, как:",
        list: [
          {
            point: "фильмы для семейного просмотра",
          },
          {
            point: "познавательные передачи для детей",
          },
          {
            point: "блоги самых известных мам",
          },
          {
            point:
              "полезные статьи на разные темы (отцовство, многодетная семья, финансовая грамотность, процесс усыновления)",
          },
        ],
      },
    ],
    minuses: [
      {
        text: "Ответ психологов через несколько дней появится на сайте, поэтому экстренная психологическая помощь невозможна",
      },
      {
        text: "Чтобы отправить запрос, нужно заполнить онлайн-форму, указав электронный адрес, что может насторожить людей.",
      },
    ],
  },
  {
    title: "Помогая другим - помогаешь себе",
    fontSize: 55,
    fontHeight: 55,
    fontMargin: 30,
    info: "В этом проекте работают особенные психологи. Психолог с инвалидностью - это новое социальное явление. До сих пор в обществе бытует мнение, что человек с инвалидностью всегда нуждается в помощи. Наши психологи с инвалидностью, напротив, сами эффективно помогают другим людям.",
    creator: "Благотворительный проект",
    target: "Родители детей и подростков.",
    link: "http://pomogaya-drugim.ru/",
    img: pin4,
    pluses: [
      {
        text: "Помощь можно получить в формате переписки на форуме или по Skype.",
      },
      {
        text: "Иногда очень важно видеть, что именно человек, хоть и удаленно, сопереживает тебе. Данный формат исключает переживания по поводу личности собеседника на другом конце провода.",
      },
      {
        text: "Консультации проводятся бесплатно",
      },
      {
        text: "На сайте указаны фото и информация о психологах, их опыте работы, образования и тд.",
      },
    ],
    minuses: [
      {
        text: "Психологи принимают по вторникам и четвергам с 16:00 до 18:00 по московскому времени, поэтому экстренная психологическая помощь не всегда возможна.",
      },
    ],
  },
  {
    title: "Консультации магистрантов НИУ ВШЭ",
    fontSize: 65,
    fontHeight: 65,
    fontMargin: 30,
    creator:
      "Факультет социальных наук НИУ ВШЭ. В этом проекте помощь оказывают студенты и выпускники магистерской программы «Психоанализ и психоаналитическая психотерапия» Высшей школы экономики.",
    target: "Взрослые старше 18 лет.",
    link: "https://www.hse.ru/ma/therapy/news/352754028.html",
    img: pin5,
    pluses: [
      {
        text: "В рамках Центра предложены 3 бесплатные консультации по 50 минут каждая, 1 раз в неделю. В ближайшее время Центр работает только в формате онлайн, это означает, что сессии с психологом будут проводиться в любом удобном Вам дистанционном формате видеосвязи (Skype, Zoom, WhatsApp, Viber и т.п.).",
      },
      {
        text: "Возможность не только проработать тревожащие ситуации и вопросы, но и просто выговориться",
      },
      {
        text: "Помощь оказывают специалисты, которые регулярно проходят обязательные супервизии у ведущих психологов и психоаналитиков России",
      },
    ],
    minuses: [
      {
        text: "Невозможность очной консультации при данной необходимости",
      },
      {
        text: "Центр предоставляет только 3 бесплатных консультации, которых может оказать недостаточно.",
      },
      {
        text: "В центр могут обратиться только лица, достигшие 18 лет.",
      },
    ],
  },
  {
    title: "PsySovet",
    fontSize: 96,
    creator: "Выпускники факультета психологии МГУ.",
    target: "Все желающие.",
    link: "https://psysovet.ru/",
    img: pin6,
    pluses: [
      {
        text: "Сервис с специализируется на подборе психологов, способных помочь именно в вашей ситуации",
      },
      {
        text: "Консультации проводятся бесплатно.",
      },
      {
        text: "Возможность подобрать специалиста как для очной, так и для дистанционной встречи.",
      },
      {
        text: "Удобный сайт, классифицирующий типы проблем для лучшего и точного подбора психолога.",
      },
    ],
    minuses: [
      {
        text: "Ваша переписка с психологом, происходящая перед первой бесплатной консультацией, будет видна всем пользователям, однако указывать настоящие имя и фамилию необязательно, обсуждение останется анонимным.",
      },
    ],
  },
];
