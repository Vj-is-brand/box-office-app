import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchShowInfo } from '../api/tvMaze';
import { useQuery } from '@tanstack/react-query';

//we will use data fetching library like SWR or react Query for fetching data

// const useShowById = (getId) => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);
// console.log(getId);

//   useEffect(() => {
//     async function fetchData() {
//       // You can await here
//       try {
//         const response = await searchShowInfo(getId);
//         setShowData(response);
//       } catch (error) {
//         setShowError(error);
//       }
//     }

//     fetchData();
//   }, [getId]);

//   return { showData, showError};
// }

const Show = () => {
  const { showId } = useParams();
  //  const {showData,showError} = useShowById(showId);
  const {data:showData,error:showError} = useQuery({
    queryKey: ['show', showId],
    queryFn: () => searchShowInfo(showId),
  });

  if (showError) {
    return <div>you have an error. {showError.mesage()}</div>;
  }

  if (showData) {
    return <div>your data is {showData.name}</div>;
  }
  return <div>your data is loading</div>;
};

export default Show;
