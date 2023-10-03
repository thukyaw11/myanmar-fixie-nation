// import { useEffect, useState } from "react";
// import { firestore} from "../network/firebase";
// import { getDocs, collection }  from "@firebase/firestore"




const Statistics = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchData = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(firestore, 'messages'));
  //     const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //     setData(documents);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setLoading(false);
  //   }
  // };


  // useEffect(() => {
  //   fetchData();
  // }, []);


 

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-16">
      {/* {!loading && 
      <>
      { data.map((item) => (
         ))}
         </>
         }
         { loading && 
           <div>loading</div>
         } */}
        <StatisticsCard count={'2.5k'} text={"MEMBERS"} percent={false} />
     
      <StatisticsCard count={"100"} text={"RIDES"} percent={false} />
      <StatisticsCard count={"100"} text={"YOUTH"} percent={true} /> 
    </div>
  );
};

const StatisticsCard = ({ count, text, percent }) => {
  return (
    <div className="flex rounded-lg w-[100%] md:w-[70%] lg:w-[90%] h-28 mx-0 md:mx-auto items-center justify-around text-black dark:text-white bg-gray-200 dark:bg-slate-800">
      <div className="text-5xl font-semibold">
        {count} {percent ? "%" : "+"}{" "}
      </div>
      <div className="text-xl">{text} </div>
    </div>
  );
};

export default Statistics;
