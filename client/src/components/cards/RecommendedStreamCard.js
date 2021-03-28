import React from "react";
import { numberFormatter } from "../../apis/general";
import { Link } from "react-router-dom";
import Pill from "../common/Pill";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
/**
 * A data card for  a reccomended stream
 **/
const RecommendedStreamCard = ({ stream }) => {
  if (!stream) {
    return <div>NO STREAM Available</div>;
  }
  console.log(stream);
  return (
    <div className="recommended-stream mb-16 flex flex-row justify-between items-center">
      <button>
        <ChevronLeftIcon size={32} />
      </button>
      <div className="flex shadow-xl">
        <div className="relative">
          <Link to={`/streams/${stream.id}`}>
            <div className="thumbnail">
              <video width="530" height="300" controls />
              <div className="card-text-overlay bg-red-600 px-1 rounded absolute align-t-l">
                <p className="font-semibold">LIVE</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="stream-details p-2 bg-white w-52">
          {/* Main Stream Details*/}
          <div className="flex space-x-2 items-center">
            <img
              src="http://via.placeholder.com/50"
              className="rounded-full"
              alt="A User"
            />
            <div className="main-details text-sm">
              <p className="text-primary font-semibold">
                {stream.user.userName}
              </p>
              <p className="text-primary">{stream.title}</p>
              <p>{numberFormatter(stream.views)} Views</p>
            </div>
          </div>
          {/* Stream Tags*/}
          <div className="pills flex flex-nowrap overflow-hidden space-x-2">
            <Pill content="Flex" />
            <Pill content="JS" />
          </div>
          <p className="text-xs">{stream.description}</p>
        </div>
      </div>
      <button>
        <ChevronRightIcon size={32} />
      </button>
    </div>
  );
};
export default RecommendedStreamCard;
