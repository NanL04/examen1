import Image from 'next/image'
type Repository = {
  id: number;
  name : string;
  full_name : string;
  owner : {
    avatar_url : string;
  }
}

async function getData(){
  const res = await fetch('https://api.github.com/repos/NanL04/PRO2');
  const data: Repository = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();
 return (   
    
   <div className="bg-[#ffffff] w-full min-h-screen">  
   <Image  
     src={data.owner.avatar_url}
     width={250}
     height={250}
     alt="Picture of the author"/>
   
   </div>
   
 )
}





