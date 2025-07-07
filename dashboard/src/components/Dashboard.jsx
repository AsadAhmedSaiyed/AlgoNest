import { Route, Routes, useParams } from "react-router-dom";
import { useState } from "react";

import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [summary, setSummary] = useState({});
  const [allHoldings, setAllHoldings] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const { id } = useParams();

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#134e4a] min-h-screen  ">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-[30%] lg:h-screen lg:overflow-y-auto">
          <div className="p-4">
            <WatchList
              id={id}
              user={user}
              setUser={setUser}
              summary={summary}
              setSummary={setSummary}
              setAllOrders={setAllOrders}
              setAllHoldings={setAllHoldings}
              allOrders={allOrders}
            />
          </div>
        </div>

        <div className="w-full lg:w-[70%] lg:h-screen lg:overflow-y-auto">
          <div className="p-4 space-y-4">
            <Routes>
              <Route
                index
                element={
                  <Summary
                    id={id}
                    user={user}
                    setUser={setUser}
                    summary={summary}
                    setSummary={setSummary}
                  />
                }
              />
              <Route
                path="orders"
                element={
                  <Orders
                    allOrders={allOrders}
                    setAllOrders={setAllOrders}
                    id={id}
                  />
                }
              />
              <Route
                path="holdings"
                element={
                  <div className="w-full overflow-x-auto">
                    <Holdings
                      summary={summary}
                      setSummary={setSummary}
                      allHoldings={allHoldings}
                      setAllHoldings={setAllHoldings}
                      id={id}
                    />
                  </div>
                }
              />
              <Route
                path="funds"
                element={
                  <Funds
                    id={id}
                    user={user}
                    setUser={setUser}
                    summary={summary}
                    setSummary={setSummary}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
