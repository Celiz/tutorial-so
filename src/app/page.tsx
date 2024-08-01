// pages/index.js
import Head from 'next/head'
import Link from 'next/link'

const sections = [
  { id: 'preparacion', title: 'Preparación' },
  { id: 'usb-booteable', title: 'USB Booteable' },
  { id: 'bios-uefi', title: 'BIOS/UEFI' },
  { id: 'instalacion', title: 'Instalación' },
  { id: 'post-instalacion', title: 'Post-Instalación' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Head>
        <title>Guía de Instalación de Windows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Guía de Instalación de Windows</h1>
          <p className="mt-2 text-xl">Tutorial completo para instalar Windows en tu notebook</p>
        </div>
      </header>

      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Inicio
            </Link>
            <div className="hidden md:flex">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {section.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section id="preparacion" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">1. Preparación</h2>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">1.1 Requisitos mínimos:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Procesador: 1 gigahertz (GHz) o más rápido</li>
              <li>RAM: 1 gigabyte (GB) para 32 bits o 2 GB para 64 bits</li>
              <li>Espacio en disco duro: 16 GB para 32 bits o 20 GB para 64 bits</li>
              <li>Tarjeta gráfica: DirectX 9 o posterior con controlador WDDM 1.0</li>
              <li>Pantalla: 800x600 píxeles</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">1.2 Materiales necesarios:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Notebook</li>
              <li>Dispositivos de entrada (teclado y mouse)</li>
              <li>Imagen ISO de Windows</li>
              <li>Unidad USB (mínimo 8 GB)</li>
              <li>Programa para crear USB Booteable (Rufus recomendado)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">1.3 Preparación del entorno:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Respalda tus datos</li>
              <li>Coloca la notebook en un lugar limpio y bien iluminado</li>
              <li>Asegúrate de que la notebook esté cargada</li>
            </ul>
          </div>
        </section>

        <section id="usb-booteable" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">2. USB Booteable</h2>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">2.1 Descargar Media Creation Tool:</h3>
            <p className="text-gray-700 mb-4">
              Visita el <a href="https://www.microsoft.com/es-es/software-download/windows10" className="text-blue-600 hover:underline">sitio oficial de Microsoft</a> y descarga la herramienta.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">2.2 Preparación del USB:</h3>
            <p className="text-gray-700 mb-4">
              Inserta el USB en un puerto disponible y respalda cualquier dato importante en él.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">2.3 Ejecución de Media Creation Tool:</h3>
            <p className="text-gray-700 mb-4">
              Ejecuta el archivo descargado, acepta los términos de licencia, y selecciona "Crear medios de instalación".
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">2.4 Configuración del medio de instalación:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Selecciona el idioma, la edición, y la arquitectura de Windows</li>
              <li>Selecciona "Unidad flash USB" y elige tu unidad USB</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">2.5 Proceso de creación:</h3>
            <p className="text-gray-700 mb-4">
              Media Creation Tool descargará Windows y creará el medio de instalación en el USB.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">2.6 Finalización:</h3>
            <p className="text-gray-700 mb-4">
              Al completar el proceso, expulsa de forma segura el USB.
            </p>
          </div>
        </section>

        <section id="bios-uefi" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">3. BIOS/UEFI</h2>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">3.1 Acceso al BIOS/UEFI:</h3>
            <p className="text-gray-700 mb-4">
              Apaga y enciende la notebook presionando repetidamente la tecla de acceso (F2, F10, Del, Esc, etc.).
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">3.2 Navegación en el BIOS/UEFI:</h3>
            <p className="text-gray-700 mb-4">
              Usa las teclas de flecha para navegar y Enter para seleccionar opciones.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">3.3 Cambiar el orden de arranque:</h3>
            <p className="text-gray-700 mb-4">
              Ve a la sección de "Boot" y selecciona tu USB como primera opción de arranque.
            </p>
          </div>
        </section>

        <section id="instalacion" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">4. Instalación</h2>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">4.1 Arranque desde el USB:</h3>
            <p className="text-gray-700 mb-4">
              Inserta el USB y arranca la notebook desde él.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">4.2 Pantalla de instalación:</h3>
            <p className="text-gray-700 mb-4">
              Selecciona el idioma, formato de hora y teclado. Introduce la clave de producto si es necesario.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">4.3 Selección y partición del disco:</h3>
            <p className="text-gray-700 mb-4">
              Selecciona la unidad donde instalarás Windows y crea las particiones necesarias.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">4.4 Configuración inicial:</h3>
            <p className="text-gray-700 mb-4">
              Configura las preferencias regionales, la conexión a la red, y la cuenta de usuario.
            </p>
          </div>
        </section>

        <section id="post-instalacion" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">5. Post-Instalación</h2>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">5.1 Actualizaciones de Windows:</h3>
            <p className="text-gray-700 mb-4">
              Ve a "Actualización y seguridad" y busca actualizaciones.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">5.2 Instalación de controladores:</h3>
            <p className="text-gray-700 mb-4">
              Descarga e instala los controladores desde el sitio web del fabricante.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">5.3 Instalación de software esencial:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Navegador web</li>
              <li>Suite de ofimática</li>
              <li>Lector de PDF</li>
              <li>Compresor de archivos</li>
              <li>Reproductor multimedia</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">5.4 Configuración de seguridad:</h3>
            <p className="text-gray-700 mb-4">
              Instala un antivirus y verifica que el firewall esté activado.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">5.5 Optimización del rendimiento:</h3>
            <p className="text-gray-700 mb-4">
              Configura programas de inicio y ajusta configuraciones para mejorar el rendimiento.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Guía de Instalación de Windows. Creado por Matias N. Celiz Ramos</p>
          <p className="mt-2">EESTN°5 "Amancio Williams" - 7°4° Informática</p>
        </div>
      </footer>
    </div>
  )
}
