import Link from "next/link";
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://res.cloudinary.com/dnkli6esx/image/upload/v1684572316/folderprueba/fondo2_whkthv.jpg")' }}>
        <center>
          <h2 className="text-6xl text-white font-bold" id="www">INNOVATING WITH </h2>
          <h2 className="text-6xl text-white font-bold" id="www">CODE AND CREATIVITY</h2>
        </center>
      </div>

      <footer className="bg-black text-white p-4">
      <div>
        <p className="text-4xl text-white font-bold">01</p>
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
