"use client"
import Image from 'next/image'
import { use, useEffect, useState } from 'react'


type Repository = {
  id: number;
  name : string;
  owner : {
    avatar_url : string;
  }
}

async function getinfo(user: string): Promise<Repository[]> {
  const list = await fetch(`https://api.github.com/users/${user}/repos`);
  const info: Repository[] = await list.json();
  return info;
}

export default function Home() {
  const [rep, setData] = useState<Repository[]>([]);
    useEffect(()=>{
      const fetchdata = async () => {
        const dataAc = await getinfo('NanL04');
       setData(dataAc);
      };
      fetchdata();
    
    }, []);

    return (
      <div  className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("fondo7")' }}>

      <div>
    {rep.map((git: Repository) => (
      <div key={git.id}>     
        <h2 className="text-2xl text-white"> 
        <a href={`https://github.com/NanL04/${git.name}`} target="_blank" rel="noopener noreferrer">
          {git.name}
          </a>
          </h2> 
      </div>
    ))}
  </div>
  </div>
    
    );
}