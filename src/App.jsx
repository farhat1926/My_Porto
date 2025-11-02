import DataImage from "./data"
import { listTools,listProyek } from "./data"

function App() {
  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap:6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="hero image" className="w-10 rounded-md" loading="lazy"/>
          <q>Tanpa Komitmen lu gaakan pernah mulai, <br /> Tanpa Konsisten lu gaakan pernah selesai 😉</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">halo,Saya Mohamad Farhat</h1>
        <p className="text-base/loose mb-6 opacity-50">Saya adalah seorang programmer full-stack MERN (MongoDB,Expressjs,Reactjs,Nodejs) yang juga mendalami teknologi Augmented Reality. Saya suka menciptakan solusi digital yang efisien dan interaktif — mulai dari web app hingga pengalaman AR yang menarik. Selalu terbuka untuk kolaborasi dan tantangan baru di dunia teknologi.</p>
      <div className="flex items-center sm:gap-4 gap-2">
        <a href="/assets/ATS.pdf" download className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
          Download CV <i className="ri-download-line ri-lg"></i>
        </a>
        <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
          Lihat proyek <i className="ri-arrow-down-line ri-lg"></i>
        </a>
      </div>
      </div>
      <img src={DataImage.HeroImage} alt="hero image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>
    </div>

    {/* tentang saya */}
    <div className="tentang mt-32 py-10 " id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"data-aos="flip-right" data-aos-duration="1000">
      <img src={DataImage.HeroImage} alt="" className="w-12 rounded-md  mb-10 sm:hidden" loading="lazy"/>
        <p className="text-base/loose mb-10 ">
       Halo! Saya seorang Full-Stack Developer dengan fokus pada pengembangan MERN Stack (MongoDB, Express.js, React.js, dan Node.js), serta memiliki keahlian dalam teknologi Augmented Reality (AR).
Saya memiliki passion dalam membangun aplikasi interaktif dan modern yang menggabungkan arsitektur backend yang efisien dengan antarmuka frontend yang responsif dan menarik.
Saya dikenal sebagai pribadi yang disiplin, detail-oriented, dan selalu antusias untuk terus belajar dan berinovasi.
Bagi saya, pemrograman bukan hanya tentang menulis kode, tetapi juga tentang menciptakan solusi yang bermakna dan memberikan dampak positif bagi pengguna.
        </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image"  className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1 ">4<span className="text-violet-500">+</span></h1>
              <p>Proyek Selesai</p>
              </div>
             
            </div>
          </div>
      </div>

      <div className="tools mt-32 relative overflow-hidden" id="tools">
  <h1
    className="text-4xl/snug font-bold mb-4"
    data-aos="fade-down-right"
    data-aos-duration="1000"
    data-aos-delay="300"
  >
    Tools yang dipakai
  </h1>
  <p
    className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
    data-aos="fade-down-right"
    data-aos-duration="1000"
    data-aos-delay="300"
  >
    Berikut ini beberapa tools yang saya pakai
  </p>

  <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {listTools.map((tool) => (
      <div
        key={tool.id}
        className="relative flex items-center gap-3 p-4 border border-zinc-600 rounded-md bg-zinc-800/60 hover:bg-zinc-800 backdrop-blur-sm group overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={tool.dad}
      >
        {/* Logo tool jadi bintang jatuh */}
        <div className="relative w-14 h-14 flex items-center justify-center overflow-visible">
          <img
            src={tool.gambar}
            alt={tool.nama}
            className="w-14 rounded-md animate-shooting-logo"
            style={{
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            loading="lazy"
          />
          {/* Ekor cahaya */}
          <span className="absolute w-10 h-[2px] bg-gradient-to-r from-violet-500 to-transparent rounded-full blur-sm -rotate-45 right-0 top-2"></span>
        </div>

        <div>
          <h4 className="font-bold text-violet-400">{tool.nama}</h4>
          <p className="opacity-50 text-sm">{tool.ket}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>


    {/* tentang saya */}
    {/* Proyek saya */}
    <div className="proyek mt-32 py-10" id="proyek">
  <h1
    className="text-center text-4xl font-bold mb-2"
    data-aos="fade-down-right"
    data-aos-duration="1000"
    data-aos-delay="300"
  >
    Proyek
  </h1>
  <p
    className="text-base/loose text-center opacity-50"
    data-aos="fade-down-right"
    data-aos-duration="1000"
    data-aos-delay="300"
  >
    Berikut ini proyek yang telah saya kerjakan
  </p>

  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
    {listProyek.map((proyek) => (
      <div
        key={proyek.id}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={proyek.dad}
        className="
          group relative p-5 bg-gradient-to-br from-zinc-800 to-zinc-900 
          rounded-3xl shadow-lg border border-zinc-700 
          hover:shadow-violet-700/40 transition-all duration-500
          hover:-translate-y-2 animate-[float_6s_ease-in-out_infinite]
        "
      >
        <div className="overflow-hidden rounded-2xl">
          <img
            src={proyek.gambar}
            alt=""
            loading="lazy"
            className="rounded-2xl w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="mt-5">
          <h1 className="text-xl font-bold mb-3 text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
            {proyek.nama}
          </h1>
          <p className="text-sm mb-4 opacity-70">{proyek.desk}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {proyek.tools.map((tool, index) => (
              <p
                className="py-1 px-3 bg-zinc-700/60 rounded-full text-sm font-semibold border border-zinc-600"
                key={index}
              >
                {tool}
              </p>
            ))}
          </div>

          <div className="text-center">
  <a
    href={proyek.link}
    download                    
    className="
      bg-violet-700 hover:bg-violet-600 
      py-2 px-5 rounded-full 
      border border-zinc-600 transition-all duration-300 
      shadow-md hover:shadow-violet-700/50
    "
  >
    Lihat Projek
  </a>
</div>

        </div>
      </div>
    ))}
  </div>
</div>

    {/* Proyek saya */}

    {/* Kontak saya */}
    <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
      <h1 className="text-4xl font-bold mb-4 text-center"  data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay="300">Ingin bekerja sama?</h1>
      <p className="text-base/loose mb-10 opacity-50 text-center"  data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay="300">Jangan ragu untuk menghubungi saya jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan lebih lanjut.</p>
      <form action="https://formsubmit.co/fardahat29@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama:</label>
            <input type="text" name="nama" placeholder="masukkan nama" className="border border-zinc-500 p-2 rounded-b-md" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email:</label>
            <input type="email" name="email" placeholder="masukkan email" className="border border-zinc-500 p-2 rounded-b-md" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan">Pesan:</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" className="border border-zinc-500 p-2 rounded-b-md" placeholder="masukkan pesan" required/>
          </div>
          <di className="text-center">
          <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
          </di>
        </div>
      </form>
    </div>
    
    {/* Kontak saya */}

    </>
  )
}

export default App
