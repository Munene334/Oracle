import React, { createContext, useState, useEffect } from 'react';

export const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [journey, setJourney] = useState([]); // shared scripture journey

  useEffect(() => {
    // bootstrap with mock data
    setPosts([
      {
        id: 'p1',
        author: { id: 'u1', name: 'Sarah Joy' },
        type: 'highlight',
        verse: 'Romans 8:28',
        text: 'This verse encourages me to trust God in hard times.',
        reactions: { amen: 12 }
      }
    ]);
  }, []);

  const addPost = (post) => setPosts((p) => [post, ...p]);

  const addJourneyEvent = (evt) => setJourney((j) => [evt, ...j]);

  return (
    <FeedContext.Provider value={{ posts, addPost, journey, addJourneyEvent }}>
      {children}
    </FeedContext.Provider>
  );
};
