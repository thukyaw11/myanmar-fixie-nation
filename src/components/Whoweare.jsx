import teamImg from '../assets/team.jpg'

const Whoweare = () => {
    return (
        <div className="rounded-lg w-auto mt-24 grid md:grid-cols-2 grid-cols-1 gap-4 ">
            
            <img src={teamImg} alt="" className='h-96 w-full rounded-r-[400px] object-cover object-center ml-[-1]'/>
            <div className="flex flex-col justify-center p-10">
                <p className="text-5xl font-semibold dark:text-white">Who we are?</p>
                <p className="pt-6 text-gray-600  dark:text-slate-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto ducimus, ex, doloremque fugiat magnam impedit commodi quo corrupti reprehenderit labore officiis beatae voluptate numquam laboriosam possimus. Porro, eveniet dolorem?</p>
            </div>
               
        </div>
    );
}

export default Whoweare;