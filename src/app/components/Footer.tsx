import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappMessage = "Me gustaría que me ayudaras con la creación de mi app web";
  const whatsappUrl = `https://wa.me/3025091063?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left">
            {/* Columna 1: Logo */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/IngNavs.png"
                alt="Logo IngNavs"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>

            {/* Columna 2: Información de desarrollo */}
            <div className="text-sm">
              <p>
                Desarrollado por:{" "}
                <Link href="https://ingnavs.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  Ing Navs
                </Link>
              </p>
              <p className="text-gray-500 dark:text-gray-400">Version 1.0.0</p>
            </div>

            {/* Columna 3: Icono de WhatsApp */}
            <div className="flex justify-center md:justify-end">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  className="fill-current text-green-500 hover:text-green-600 transition-colors"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          <p>&copy; {currentYear} LearnAI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;