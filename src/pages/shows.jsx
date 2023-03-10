import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchShowInfo } from '../api/tvMaze';
const Show = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);
  // console.log(showId);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const response = await searchShowInfo(showId);
        setShowData(response);
      } catch (error) {
        setShowError(error);
      }
    }

    fetchData();
  }, [showId]);

  if (showError) {
    return <div>you have an error. {showError.mesage()}</div>;
  }

  if (showData) {
    return <div>your data is {showData.name}</div>;
  }
  return <div>your data is loading</div>;
};

export default Show;
