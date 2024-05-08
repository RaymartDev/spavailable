/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaArrowRightLong,
} from 'react-icons/fa6';
import DefaultPp from '../../../img/defaultPp.png';

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [spaCount, setSpaCount] = useState(0);
  const [feedbackCount, setFeedbackCount] = useState(0);

  setUserCount(900);
  setSpaCount(2000);
  setFeedbackCount(2000);

  const showUserIcon = () => {
    if (userCount > 1000) {
      return <FaArrowTrendUp size={50} color="green" />;
    }
    return <FaArrowTrendDown size={50} color="red" />;
  };

  const showSpaIcon = () => {
    if (spaCount > 1000) {
      return <FaArrowTrendUp size={50} color="green" />;
    }
    return <FaArrowTrendDown size={50} color="red" />;
  };

  const showFeedbackIcon = () => {
    if (feedbackCount > 1000) {
      return <FaArrowTrendUp size={50} color="green" />;
    }
    return <FaArrowTrendDown size={50} color="red" />;
  };

  return (
    <div className="flex flex-col space-y-10">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold">Dashboard</h1>
        <h2>Welcome back, James!</h2>
      </div>

      <div className="flex w-full h-full space-x-10">
        <div className="w-4/5 h-full space-y-10">
          <div className="h-1/5">
            <div className="grid grid-cols-3 space-x-10">
              <div className="rounded-lg shadow-lg border-2 hover:scale-105 duration-150 bg-white">
                <div className="flex justify-between items-center py-4 px-5">
                  <div>
                    <h1 className="text-4xl font-bold">{userCount}</h1>
                    <h2>Users</h2>
                  </div>
                  <div>{showUserIcon()}</div>
                </div>
                <div className="flex rounded-b-lg items-center justify-between bg-[#41924B] text-white py-4 px-5">
                  <h1>View More</h1>
                  <FaArrowRightLong size={30} />
                </div>
              </div>

              <div className="rounded-lg shadow-lg border-2 hover:scale-105 duration-150 bg-white">
                <div className="flex justify-between items-center py-4 px-5">
                  <div>
                    <h1 className="text-4xl font-bold">{spaCount}</h1>
                    <h2>Spa</h2>
                  </div>
                  <div>{showSpaIcon()}</div>
                </div>
                <div className="flex rounded-b-lg items-center justify-between bg-[#41924B] text-white py-4 px-5">
                  <h1>View More</h1>
                  <FaArrowRightLong size={30} />
                </div>
              </div>

              <div className="rounded-lg shadow-lg border-2 hover:scale-105 duration-150 bg-white">
                <div className="flex justify-between items-center py-4 px-5">
                  <div>
                    <h1 className="text-4xl font-bold">{feedbackCount}</h1>
                    <h2>Feedback</h2>
                  </div>
                  <div>{showFeedbackIcon()}</div>
                </div>
                <div className="flex rounded-b-lg items-center justify-between bg-[#41924B] text-white py-4 px-5">
                  <h1>View More</h1>
                  <FaArrowRightLong size={30} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col px-5 py-6 border-2 rounded-lg shadow-lg bg-white">
            <h1 className="font-bold text-2xl">Analytics</h1>
          </div>
        </div>

        <div className="grid grid-rows-4 w-1/5 space-y-5">
          <div className="flex flex-col items-center justify-center border-2 rounded-lg py-8 space-y-3 shadow-lg bg-white">
            <img src={DefaultPp} alt="profilePicture" className="size-16" />
            <h1 className="text-xl">James Allan</h1>
          </div>
          <div className="flex flex-col px-5 py-6 row-span-3 border-2 rounded-lg shadow-lg bg-white">
            <h1 className="font-bold text-2xl">Latest Spa</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
