import { useEffect } from 'react';
import axios from 'axios';

const useRecordVisit = (page) => {
  useEffect(() => {
    const recordVisitor = async () => {
      try {
     
        const data = await axios.post('https://api.ict.lviv.ua/web/visitor', { page });
      } catch (error) {
        console.error('Error recording visit:', error);
      }
    };
    recordVisitor();
  }, [page]); 
};

export default useRecordVisit;