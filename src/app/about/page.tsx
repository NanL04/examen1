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
    
   <div  className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("fondo6.jpg")' }}>

    <div>
    <Image  
     src={data.owner.avatar_url}
     width={550}
     height={450}
     alt="Picture of the author"/>
     </div>

      <div id = 'divm'>
          <p className="text-2xl text-white">Hi, I'm Nancy, a Business Informatics professional with a strong background and </p>
          <p className="text-2xl text-white">experience in the Information Technology field. I am passionate about improving </p>
          <p className="text-2xl text-white">business processes through efficient technological solutions. I have demonstrated </p>
          <p className="text-2xl text-white">exceptional skills in the design, development and implementation of computer </p>
          <p className="text-2xl text-white"> systems that optimize the management and performance of companies. Take the </p>
          <p className="text-2xl text-white">opportunity to work with me and let me show you that with my dedication, work </p>
          <p className="text-2xl text-white"> ethic and results-oriented approach I am ready to face challenges and</p>
          <p className="text-2xl text-white"> contribute to the success of your organization.</p>
      </div>

   </div>
   
 )
}





