import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://res.cloudinary.com/dnkli6esx/image/upload/v1684572318/folderprueba/f_sdb3eb.jpg")' }}>
        <center>
          <h2 className="text-4xl text-white font-bold" id="www">¡Discover the power of creativity with our amazing Short Story Maker! </h2>
          <h2 className="text-4xl text-black font-bold" id="www">. </h2>
          <h2 className="text-4xl text-white font-bold" id="www">Are you ready to plunge into a world of fantasy, mystery or </h2>
          <h2 className="text-4xl text-white font-bold" id="www"> romance just by entering a theme?</h2>
          <h2 className="text-4xl text-black font-bold" id="www">. </h2>
          <h2 className="text-4xl text-white font-bold" id="www"> This is your chance to bring your ideas to life  </h2>
          <h2 className="text-4xl text-white font-bold" id="www"> and enjoy the magic of writing. </h2>
        </center>
      </div>

    
      <footer className="bg-black text-white p-4">
      <div>
        <p className="text-4xl text-white font-bold">02</p>
        <div className="container mx-auto text-center font-bold">
          <p>Phone: +506-8585-3917</p>
          <p>
          <a className="text-white underline font-bold" href="https://www.facebook.com/nancy.lezcano.735/" target="_blank" rel="noopener noreferrer">
              Facebook: Nancy Lezcano
            </a>
          </p>
          <p>
            <a className="text-white underline font-bold" href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
              Email: lezcanoariasn@gmail.com
            </a>
          </p>
        </div>
        </div>
      </footer>
    </div>
  );
}