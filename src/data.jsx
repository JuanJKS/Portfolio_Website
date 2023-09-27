import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Sobre mí',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contacto',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Nombre : ',
    description: 'Juan Cruz',
  },

  {
    id: 2,
    title: 'Apellido : ',
    description: 'Bo',
  },

  {
    id: 3,
    title: 'Edad : ',
    description: '35 años',
  },

  {
    id: 4,
    title: 'Nacionalidad : ',
    description: 'Argentino',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Disponible',
  },

  {
    id: 6,
    title: 'Dirección : ',
    description: 'Colegiales, CABA',
  },

  {
    id: 7,
    title: 'Celular : ',
    description: '+5491150629428',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'bo.juancruz14@gmail.com',
  },

  {
    id: 9,
    title: 'Estado Civil : ',
    description: 'Soltero',
  },

  {
    id: 10,
    title: 'Idiomas : ',
    description: 'Inglés técnico',
  },
];

export const stats = [
  {
    id: 1,
    no: '...',
    title: 'Años de <br /> Experiencia',
  },

  {
    id: 2,
    no: '3',
    title: 'Proyectos <br /> Completados',
  },

  {
    id: 3,
    no: '200+',
    title: 'Horas <br /> Cursos',
  },

  {
    id: 4,
    no: '2',
    title: 'Clientes <br /> Felices',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - PRESENTE',
    title: 'Profesor Particular <span> Independiente </span>',
    desc: 'Llevo aproximadamente 8 años dando clases de matemática y física de forma independiente. En todos estos años he intentado e intento transmitir de la mejor manera posible todo lo que sé al respecto de las materias mencionadas, adaptándome a las necesidades y tiempos de cada persona. Me encanta enseñar y también disfruto mucho de poder aportar mi grano de arena para el cumplimiento de objetivos de aquellas personas que me contactan en busca de ayuda.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2016 - 2020',
    title: 'Compras <span> TANDANOR </span>',
    desc: 'Tuve un paso de 4 años por la empresa Talleres Navales Dársena Norte (TANDANOR), en la cual desarrollé tareas como el análisis de las compras de todo el astillero según el proceso establecido; la emisión de órdenes de compra; el seguimiento y la logística de las entregas; la supervisión de todo el equipo del sector Compras, en conjunto con la revisión y aprobación de las órdenes de compra emitidas.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2012 - 2016',
    title: 'Logística <span> Aguas Danone </span>',
    desc: 'Me desempeñé como pasante y luego de manera efectiva, en un período total de 4 años, en la empresa Aguas Danone de Argentina. Dentro de mis tareas mas importantes se destacan la gestión de recupero de chapadur y pallet de los distintos canales del mercado; el seguimiento de la deuda, por cliente y por canal, de los pallet; la colaboración en el planeamiento del abastecimiento de pallet y chapadur a las distintas plantas de la empresa.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Diplomatura web full stack con React JS <span> UTN </span>',
    desc: 'Di mis primeros pasos en el mundo de la programación realizando la Diplomatura mencionada en el Centro de e-Learning de la UTN; la misma culminó con la entrega de un proyecto final el cual forma parte de los proyectos de mi portfolio como programador. Posterior a la culminación de la Diplomatura continué y continúo estudiando de forma autodidacta para mejorar y ampliar mis habilidades.<br><br>',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2006 - 2010',
    title: 'Ingeniería Industrial <span> UTN </span>',
    desc: 'Cursé la carrera de Ingeniería Industrial en la Universidad Tecnológica Nacional regional Buenos Aires (UTN); llegué a realizar hasta el tercer año de la carrera, con muy buen promedio, pero decidí discontinuar dichos estudios en aquel momento. No he sentido hasta el momento deseos de retomar la carrera, pero lo considero algo pendiente.<br><br>',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2005',
    title: 'Perito Mercantil <span> Instituto San Pablo Apóstol </span>',
    desc: 'Inicié el colegio secundario en el año 2001 en el colegio San Pablo. Culminé dichos estudios en el año 2005, en tiempo y forma, con un promedio de 8,77.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'JavaScript',
    percentage: '90',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'NodeJS',
    percentage: '85',
  },

  {
    id: 5,
    title: 'Git',
    percentage: '80',
  },

  {
    id: 6,
    title: 'SQL',
    percentage: '75',
  },

  {
    id: 7,
    title: 'MongoDB',
    percentage: '90',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Diseño Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Sitio Web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Proyecto Personal',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Ver : ',
        desc: '<a href="https://profejuan.tech" target="_blank" rel="noreferrer">Proyecto Clases</a>',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Diseño Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Sitio Web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Proyecto Personal',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Ver : ',
        desc: '<a href="https://adminprofejuan.tech" target="_blank" rel="noreferrer">Proyecto Administrador</a>',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Diseño Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Sitio Web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Proyecto Personal',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Ver : ',
        desc: '<a href="" target="_blank" rel="noreferrer">Próximamente</a>',
      },
    ],
  },

  /*{
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },*/
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
