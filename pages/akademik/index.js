import Breadcrumb from "../../components/Fragments/breadcrumb";
import ImageList from "../../components/Fragments/imageList";
import PublicNavbar from "../../components/Layouts/public_navbar";
import Footer from "../../components/footer";
import Slider from "../../components/slider";

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Akademik', url: '/akademik', }, // Gantilah dengan path ikon yang sesuai
];
const imageListData = [
  {
    src: '/img/kedokteran.jpg',
    alt: 'Image 2',
    link: '#',
    description: 'Fakultas Kedokteran',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png',
    alt: 'Image 2',
    link: '#',
    description: 'Fakultas Teknik Komputer',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png',
    alt: 'Image 2',
    link: '#',
    description: 'Fakultas Teknik Komputer',
  },
]
export default function index() {
  return (
    <>
      <PublicNavbar />
      <Slider></Slider>
      <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
      <div className="ml-6">
        <div className="p-5">
          <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Layanan Akademik Universitas</h2>
          <p class="mb-3 text-gray-500 dark:text-gray-400">Sebagai salah satu institusi pendidikan tinggi yang berorientasi pada sistem pendidikan berbasis penelitian, Universitas Indonesia selalu mengupayakan agar sistem pendidikan yang ada mampu mempersiapkan mahasiswa-mahasiswinya bersaing secara global dalam segala aspek, baik di bidang ilmu sains, sosial humaniora, dan kedokteran. </p>
          <p class="mb-3 text-gray-500 dark:text-gray-400">Untuk itu dibutuhkan pembangunan budaya dan atmosfir intelektual yang intensif dan konsisten. Hal ini sepenuhnya mendapatkan dukungan dari organisasi dan manajemen yang saling mendukung satu sama lain, baik itu dari Majelis Wali Amanat, Kabinet Rektorat, Dekan Fakultas hingga Tim Administrasi.Dalam menjalankan roda operasionalnya, pihak manajemen UI menggunakan asas transparansi dan akuntabilitas. Dengan prinsip tersebut, diharapkan UI mampu berakselerasi dalam masyarakat global sebagai perguruan tinggi dengan tradisi akademik yang telah mengakar kuat sejak abad ke-19.</p>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-5 px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Lihat Selengkapnya
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </button>
        </div>
      </div>
      <div className="ml-6">
        <div className="p-3">
        <h2 class="mb-4 mt-6 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Daftar Fakultas</h2>
        <ImageList images={imageListData} />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
