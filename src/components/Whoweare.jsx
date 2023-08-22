import teamImg from '../assets/team.jpg'

const Whoweare = () => {
    return (
        <div className="rounded-md w-auto mt-24 bg-slate-200 grid md:grid-cols-2 grid-cols-1 gap-4 ">
            <div className="flex flex-col justify-center p-10">
                <p className="text-5xl font-semibold">Who we are?</p>
                <p className="pt-6 text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto ducimus, ex, doloremque fugiat magnam impedit commodi quo corrupti reprehenderit labore officiis beatae voluptate numquam laboriosam possimus. Porro, eveniet dolorem?</p>
            </div>
            <img src={teamImg} alt="" className='h-96 w-full rounded-lg object-cover object-center'/>
               
        </div>
    );
}

export default Whoweare;