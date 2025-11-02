
import HeroImage from "/assets/hero-image.jpg"; 

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/unity.png";
import Tools10 from "/assets/tools/kotlin.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/mongodb.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Unity",
    ket: "Augmented Reality App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Kotlin",
    ket: "Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "MongoDB",
    ket: "Database",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/english.jpg";
import Proyek2 from "/assets/proyek/klinik.png";
import Proyek3 from "/assets/proyek/transaksi_gudang.png";
import Proyek4 from "/assets/proyek/ular_tangga.jpg";
import Proyek5 from "/assets/proyek/website_portofolio.png";
import Proyek6 from "/assets/proyek/pamasaran_kopi.png";
import { link } from "framer-motion/client";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Augmented Reality English App",
    desk: "Pembelajaran bahasa inggris berbasis Augmented Reality untuk anak usia dini menggunakan Unity dan Vuforia.",
    tools: ["Unity", "C#", "Vuforia"],
    dad: "200",
    link:"https://drive.google.com/drive/folders/13UYqPZ0gAqEIIkVpPCZ065gqDT42xyiS?usp=sharing"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Klinik Kesehatan",
    desk: "Website untuk klinik kesehatan sederhana dengan fitur informasi layanan, dokter, dan kontak.",
    tools: ["Vite", "ReactJS", "TailwindCSS", "ExpressJS", "MongoDB","NodeJS"],
    dad: "300",
    
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "transaksi Gudang",
    desk: "Aplikasi web untuk manajemen transaksi gudang dengan fitur pencatatan masuk dan keluarnya barang.",
    tools: ["laravel", "PHP", "MySQL", "Bootstrap"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Ular Tangga AR",
    desk: "Aplikasi permainan ular tangga berbasis Augmented Reality menggunakan Unity dan Vuforia.",
    tools: ["Unity", "C#", "Vuforia"],
    dad: "500",
    link:"https://drive.google.com/drive/folders/13UYqPZ0gAqEIIkVpPCZ065gqDT42xyiS?usp=sharing"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Website portfolio orang lain untuk menampilkan informasi tentang dirinya dan proyek-proyek yang telah kerjakannya.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "600",
    link:"https://farhat1926.github.io/websiteview/"
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "promosi Kedai Kopi",
    desk: "Website promosi kedai kopi sederhana untuk meningkatkan visibilitas online dan menarik pelanggan baru.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "700"
    link: "https://farhat1926.github.io/LIYE-AMARAT/"
  },
];