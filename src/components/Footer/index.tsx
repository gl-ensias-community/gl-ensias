"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Section Logo et Réseaux sociaux */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo.png"
                    alt="ENSIAS logo"
                    className="dark:hidden"
                    width={140}
                    height={140}
                  />
                  <Image
                    src="/images/logo/logo.png"
                    alt="ENSIAS logo"
                    className="hidden dark:block"
                    width={140}
                    height={140}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  The Software Engineering (GL) branch at ENSIAS (École Nationale Supérieure d'Informatique et d'Analyse des Systèmes) is committed to producing highly skilled computer engineers.
                </p>
                <li className="flex items-center mb-4">
                    <svg
                      className="w-8 h-8 mr-3 text-body-color dark:text-body-color-dark"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm8 6l8-5H4l8 5zm0 2L4 9v8h16v-8l-8 5z" />
                    </svg>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      Email:{" "}
                      <a href="mailto:info@ensias.ma" className="hover:text-primary">
                      gl.ensias.promo@gmail.com
                      </a>
                    </p>
                  </li>
                <p>Follow us</p>
                <div className="flex items-center mt-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61563803917528"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3V2z"
                      ></path>
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://x.com/gl_ensias"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43 3a9.12 9.12 0 01-2.83 1.08A4.48 4.48 0 0016.4 2a4.48 4.48 0 00-4.46 5.48A12.94 12.94 0 013 4.1a4.48 4.48 0 001.39 5.98 4.44 4.44 0 01-2.05-.56v.06a4.48 4.48 0 003.57 4.4 4.52 4.52 0 01-1.18.16 4.45 4.45 0 01-.84-.08 4.48 4.48 0 004.18 3.12A9 9 0 012 19.54a12.86 12.86 0 006.29 1.84A12.94 12.94 0 0021 7.46c0-.2 0-.39-.02-.59A9.23 9.23 0 0023 3z"
                      ></path>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/gl-ensias/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.983 3.5c0 1.375-1.116 2.5-2.492 2.5C1.117 6 0 4.875 0 3.5 0 2.125 1.117 1 2.492 1 3.867 1 4.983 2.125 4.983 3.5zM0 8.653h4.984v12.351H0V8.653zm8.757 0h4.784v1.68h.066c.666-1.264 2.293-2.597 4.719-2.597 5.043 0 5.973 3.32 5.973 7.632v8.634h-4.988v-7.662c0-1.825-.033-4.168-2.538-4.168-2.541 0-2.93 1.986-2.93 4.036v7.794H8.757V8.653z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href=" https://www.instagram.com/gl_ensias/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.302.975.975 1.24 2.242 1.302 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.302 3.608-.975.975-2.242 1.24-3.608 1.302-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.302-.975-.975-1.24-2.242-1.302-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.302-3.608.975-.975 2.242-1.24 3.608-1.302 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.755 0 8.332.013 7.052.072 5.764.132 4.608.365 3.685 1.288c-.922.922-1.156 2.078-1.216 3.366C2.013 6.332 2 6.755 2 12s.013 5.668.072 6.948c.06 1.288.293 2.444 1.216 3.366.922.922 2.078 1.156 3.366 1.216 1.28.059 1.703.072 6.948.072s5.668-.013 6.948-.072c1.288-.06 2.444-.293 3.366-1.216.922-.922 1.156-2.078 1.216-3.366.059-1.28.072-1.703.072-6.948s-.013-5.668-.072-6.948c-.06-1.288-.293-2.444-1.216-3.366-.922-.922-2.078-1.156-3.366-1.216-1.28-.059-1.703-.072-6.948-.072zM12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.125A3.964 3.964 0 018.037 12 3.964 3.964 0 0112 8.037 3.964 3.964 0 0115.963 12 3.964 3.964 0 0112 15.963zm6.406-11.845a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@gl_ensias"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l5 3-5 3V10z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M22.54 6.42A2.42 2.42 0 0020.15 5H3.85A2.42 2.42 0 001.46 6.42a29.94 29.94 0 000 11.16A2.42 2.42 0 003.85 19h16.3a2.42 2.42 0 002.39-1.42 29.94 29.94 0 000-11.16z"
                      ></path>
                    </svg>
                  </a>
                 {/* TikTok-like Icon */}
                  <a
                      href="https://www.tiktok.com/@gl_ensias"
                      aria-label="TikTok"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                  <svg
                      className="w-6 h-6 fill-current" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                  >
                  <path d="M12 2C17.523 2 22 6.477 22 12s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2C7.589 4 4 7.589 4 12s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zm0-2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm6-7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-6-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-3 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/>
                  </svg>
                  </a>



                </div>
              </div>
            </div>

            {/* Section Contact ENSIAS */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12 mt-11 ml-60">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  ENSIAS
                </h2>
                <ul>
                  {/* Icône maison pour l'adresse */}
                  <li className="flex items-center mb-4">
                    <svg
                      className="w-10 h-10 mr-3 text-body-color dark:text-body-color-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7m-2 2v7a2 2 0 01-2 2H9a2 2 0 01-2-2v-7m10 0l-2 2m-6-2l-2 2"
                      ></path>
                    </svg>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      Avenue Mohammed Ben Abdallah Regragui, Madinat Al Irfane, BP 713, Agdal Rabat, Maroc
                    </p>
                  </li>
                  {/* Icône email */}
                  <li className="flex items-center mb-4">
                    <svg
                      className="w-8 h-8 mr-3 text-body-color dark:text-body-color-dark"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm8 6l8-5H4l8 5zm0 2L4 9v8h16v-8l-8 5z" />
                    </svg>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      Email:{" "}
                      <a href="mailto:info@ensias.ma" className="hover:text-primary">
                      n.mhirich@um5r.ac.ma
                      </a>
                    </p>
                  </li>
                  {/* Lien "More Information" */}
                  <li className="mb-4">
                      <Link 
                          href="http://ensias.um5.ac.ma/" 
                          className="text-base text-body-color dark:text-body-color-dark hover:text-primary"
                    >
                    More Information
            </Link>
                  </li>
                  {/* Social Media Icons under More Information */}
                  <div className="flex items-center mt-4">
                    {/* Facebook */}
                    <a
                      href="https://web.facebook.com/Ensias-104706825356957"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3V2z"
                        ></path>
                      </svg>
                    </a>
                    {/* Twitter */}
                    <a
                      href="https://twitter.com/ensias_official"
                      aria-label="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43 3a9.12 9.12 0 01-2.83 1.08A4.48 4.48 0 0016.4 2a4.48 4.48 0 00-4.46 5.48A12.94 12.94 0 013 4.1a4.48 4.48 0 001.39 5.98 4.44 4.44 0 01-2.05-.56v.06a4.48 4.48 0 003.57 4.4 4.52 4.52 0 01-1.18.16 4.45 4.45 0 01-.84-.08 4.48 4.48 0 004.18 3.12A9 9 0 012 19.54a12.86 12.86 0 006.29 1.84A12.94 12.94 0 0021 7.46c0-.2 0-.39-.02-.59A9.23 9.23 0 0023 3z"
                        ></path>
                      </svg>
                    </a>
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/ensias"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.983 3.5c0 1.375-1.116 2.5-2.492 2.5C1.117 6 0 4.875 0 3.5 0 2.125 1.117 1 2.492 1 3.867 1 4.983 2.125 4.983 3.5zM0 8.653h4.984v12.351H0V8.653zm8.757 0h4.784v1.68h.066c.666-1.264 2.293-2.597 4.719-2.597 5.043 0 5.973 3.32 5.973 7.632v8.634h-4.988v-7.662c0-1.825-.033-4.168-2.538-4.168-2.541 0-2.93 1.986-2.93 4.036v7.794H8.757V8.653z" />
                    </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href=" https://www.instagram.com/ensias.official/"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.302.975.975 1.24 2.242 1.302 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.302 3.608-.975.975-2.242 1.24-3.608 1.302-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.302-.975-.975-1.24-2.242-1.302-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.302-3.608.975-.975 2.242-1.24 3.608-1.302 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.755 0 8.332.013 7.052.072 5.764.132 4.608.365 3.685 1.288c-.922.922-1.156 2.078-1.216 3.366C2.013 6.332 2 6.755 2 12s.013 5.668.072 6.948c.06 1.288.293 2.444 1.216 3.366.922.922 2.078 1.156 3.366 1.216 1.28.059 1.703.072 6.948.072s5.668-.013 6.948-.072c1.288-.06 2.444-.293 3.366-1.216.922-.922 1.156-2.078 1.216-3.366.059-1.28.072-1.703.072-6.948s-.013-5.668-.072-6.948c-.06-1.288-.293-2.444-1.216-3.366-.922-.922-2.078-1.156-3.366-1.216-1.28-.059-1.703-.072-6.948-.072zM12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.125A3.964 3.964 0 018.037 12 3.964 3.964 0 0112 8.037 3.964 3.964 0 0115.963 12 3.964 3.964 0 0112 15.963zm6.406-11.845a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
                      </svg>
                    </a>
                
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              &copy; 2024 GL-ENSIAS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
