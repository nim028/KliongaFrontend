import image1 from "../assets/images/etude/019.jpg";
import image2 from "../assets/images/etude/001.jpg";
import image3 from "../assets/images/etude/053.jpg";
import image4 from "../assets/images/etude/022.jpg";
import image5 from "../assets/images/etude/13.avif";
import image6 from "../assets/images/etude/31.jpg";
import image7 from "../assets/images/etude/040.jpeg";
import {
  FaCalendarDays,
  FaGraduationCap,
  FaUserCheck,
  FaChalkboardUser,
  FaMoneyBillWave,
  FaFile,
  FaMessage,
} from "react-icons/fa6";

export const data_service = [
  {
    icon: <FaUserCheck />,
    title: "Gestion de inscriptions",
    image: image1,
    content:
      "Inscrivez faciliment vos élèves en ligne et gerez les reinscription.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Suivi des élèves",
    image: image2,
    content:
      "Accedez aux informations scolaires, aux notes et aux absences des elèves.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Paiement en ligne",
    image: image3,
    content:
      "Réglez les frais de scolarité en Ariary via carte bancaire,mobile money ou virement bancaire.",
  },
  {
    icon: <FaCalendarDays />,
    title: "Emploi du temps",
    image: image4,
    content:
      "Planification et modification d'emplois du temps pour les clsddes et les enseignants",
  },
  {
    icon: <FaFile />,
    title: "Gestion des examens",
    image: image5,
    content:
      "Organisez et planifiez les examens avec suivi des notes et des bulletins.",
  },
  {
    icon: <FaMessage />,
    title: "Communication Simplifié ",
    image: image6,
    content:
      "Notifications automatiques pour les parents et les enseiganats via email ou SMS",
  },
  {
    icon: <FaChalkboardUser />,
    title: "Tableau de bord personnalisé",
    image: image7,
    content:
      "interface intuitive pour chaque utilisateur (administrateur,enseignant,parent,élève)",
  },
];
