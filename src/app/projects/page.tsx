"use client"
import React, { useEffect, useState } from 'react';
import Carousel from '../components/carrusel';

type Repository = {
  id: number;
  name: string;
  owner: {
    avatar_url: string;
  };
};

async function getinfo(user: string): Promise<Repository[]> {
  const list = await fetch(`https://api.github.com/users/${user}/repos`);
  const info: Repository[] = await list.json();
  return info;
}

export default function Home() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataAc = await getinfo('NanL04');
      setRepositories(dataAc);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("https://res.cloudinary.com/dnkli6esx/image/upload/v1684572315/folderprueba/c_mismq5.jpg")' }}>
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <Carousel repositories={repositories} />
        </div>

        <footer className="bg-black text-white p-4">
          <div>
          <p className="text-4xl text-white font-bold">03</p>
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
    </div>
  );
}
