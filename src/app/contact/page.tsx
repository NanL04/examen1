import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  return (
    <div className="bg-cover bg-center flex flex-col min-h-screen" style={{ backgroundImage: 'url("https://res.cloudinary.com/dnkli6esx/image/upload/v1684572315/folderprueba/te_e2q4np.jpg")' }}>
      <div>
        <h2 className="text-4xl text-white font-bold" id="www">
          HELLO! I&apos;M NANCY, AN IT PROFESSIONAL WITH EXTENSIVE EXPERIENCE AND {' '}
        </h2>
        <h2 className="text-4xl text-white font-bold" id="www">
          SOLID KNOWLEDGE IN THE FIELD OF DATABASES.
        </h2>
        <h2 className="text-4xl text-white font-bold" id="www">
          I AM EXACTLY THE PROFESSIONAL YOU NEED, SO DON&apos;T HESITATE ANY LONGER AND CONTACT ME.{' '}
        </h2>
        <h2 className="text-4xl text-black font-bold" id="www">
          .....
        </h2>
        <h2 className="text-4xl text-black font-bold" id="www">
          .....
        </h2>
        <h2 className="text-4xl text-white font-bold" id="www">
          PHONE: 85853917{' '}
        </h2>
        <h2 className="text-4xl text-white font-bold" id="www">
          CORREO: LEZCANOARIASN@GMAIL.COM
        </h2>
      </div>

      <footer className="bg-black text-white p-4 mt-auto">
        <div>
          <p className="text-4xl text-white font-bold">04</p>
          <div className="container mx-auto text-center">
            <p>Phone: +506-8585-3917</p>
            <p>
              <a className="text-white underline" href="https://www.facebook.com/nancy.lezcano.735/" target="_blank" rel="noopener noreferrer">
                Facebook: Nancy Lezcano
              </a>
            </p>
            <p>
              <a className="text-white underline" href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
                Email: lezcanoariasn@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
