import React from "react";
import "./StreamsIndex.css";
import LiveStreamCard from "../../cards/LiveStreamCard";
import StreamCategoryCard from "../../cards/StreamCategoryCard";
import ScrollableContent from "../../common/ScrollableContent";

class StreamsIndex extends React.Component {
  render() {
    var Streams = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const renderLiveStreams = Streams.map((stream, index) => {
      return (
        <div className="w-max" key={index}>
          <LiveStreamCard />
        </div>
      );
    });

    const renderList = Streams.map((stream, index) => {
      return (
        <React.Fragment key={index}>
          <StreamCategoryCard stretch={true} />
        </React.Fragment>
      );
    });

    return (
      <div className="streams px-2">
        {/* Title */}
        <div className="title">
          <h2 className="font-semibold sm:text-6xl text-4xl mb-2">
            Welcome To Twitch!
          </h2>
          <div className="inline uppercase sm:text-2xl text-sm font-semibold text-secondaryV">
            <span>Live Channels </span>
            <span>We Think You'll Like</span>
          </div>
        </div>
        {/* Live Channels the user may like*/}
        <ScrollableContent>{renderLiveStreams}</ScrollableContent>
        <div className="inline uppercase sm:text-2xl text-sm font-semibold text-secondaryV">
          <a href="/#" className="text-primary">
            Categories{" "}
          </a>
          <span>We Think You'll Like</span>
        </div>
        <ScrollableContent>{renderList}</ScrollableContent>
        <div className="inline uppercase sm:text-2xl text-sm font-semibold text-secondaryV">
          <span>RECOMMENDED </span>
          <a href="/#" className="text-primary">
            Just Chatting{" "}
          </a>
          <span>Channels</span>
        </div>
        {/* Recommended [Category] Channels */}
        <ScrollableContent>{renderList}</ScrollableContent>
      </div>
    );
  }
}

export default StreamsIndex;