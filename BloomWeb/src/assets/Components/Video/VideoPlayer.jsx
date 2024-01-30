import React, {
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      Uid: {user.uid}
      <div ref={ref} className="w-48 h-48 bg-black"></div>
    </div>
  );
};