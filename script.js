import { useState, useEffect } from 'react';
import axios from 'axios';

function IdeasComponent() {
  const [ideas, setIdeas] = useState({
    file : " ",
    line : " ",
    function : " ",
    class : " ",
    type : " " 
  });
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
          headers: {
            'Accept': 'application/json'
          }
        });

        setIdeas(response.data.data);

      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div>
    <h1>List of Ideas</h1>
    <ul>
     
      {Array.isArray(ideas) ? (
        ideas.map(idea => (
          <li key={idea.id}>
            {idea.title} - {idea.description}
          </li>
        ))
      ) : (
        <li>Data tidak tersedia atau format tidak sesuai</li>
      )}
    </ul>
  </div>
  );
}

export default IdeasComponent;
