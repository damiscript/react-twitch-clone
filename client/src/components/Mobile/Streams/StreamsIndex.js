import React from "react";
import _ from "lodash";
import "./StreamsIndex.css";
import { fetchCategories, fetchStreams } from "../../../actions/";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LiveStreamCard from "../../Cards/LiveStreamCard/LiveStreamCard";
import CategoryCard from "../../Cards/CategoryCard/CategoryCard";
import ScrollableContent from "../../Common/ScrollableContent/ScrollableContent";
import SuggestedStreams from "..//Suggested/SuggestedStream";
import Loader from "../../Common/Loader/Loader";
/**
 * @ref @MobileVersion
 * The main URL for all the streams displayed
 **/
class StreamsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
    const query = "?_expand=user&_sort=views&_order=desc&live=true";
    this.props.fetchStreams(query);
  }
  /*
   *Render the list of categories retrieved from the server when available
   */
  renderCategories = () => {
    if (_.isEmpty(this.props.categories)) {
      return <Loader extraStyle={"py-8"} />;
    }
    return this.props.categories.map((category, index) => {
      return (
        <div key={index} className="index-category">
          <CategoryCard category={category} />
        </div>
      );
    });
  };
  /*
   *Render the list of streams from the server
   */
  renderLiveStreams = () => {
    if (_.isEmpty(this.props.streams)) {
      return <Loader extraStyle={"py-8"} />;
    }
    return this.props.streams.map((stream, index) => {
      return (
        <div className="w-max" key={index}>
          <LiveStreamCard stream={stream} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="streams-index px-2 py-4">
        {/* Title */}
        <div className="title">
          <h2 className="font-semibold sm:text-6xl text-4xl mb-2">
            Welcome To Twitch!
          </h2>
          <div className="inline uppercase sm:text-2xl text-base font-semibold text-secondaryV">
            <span>Live Channels </span>
            <span>We Think You'll Like</span>
          </div>
        </div>
        {/* Live Channels the user may like*/}
        <ScrollableContent>{this.renderLiveStreams()}</ScrollableContent>
        <div className="inline w-full uppercase sm:text-2xl text-base font-semibold text-secondaryV">
          <Link to="/directory" className="text-primary">
            Categories{" "}
          </Link>
          <span>We Think You'll Like</span>
        </div>
        <ScrollableContent>{this.renderCategories()}</ScrollableContent>

        <SuggestedStreams
          title={
            <div className="inline w-full uppercase sm:text-2xl text-base font-semibold text-secondaryV">
              <span>RECOMMENDED </span>
              <Link to="/directory/game/Minecraft" className="text-primary">
                Minecraft{" "}
              </Link>
              <span>Channels</span>
            </div>
          }
          game="Minecraft"
        />

        <SuggestedStreams
          title={
            <div className="inline w-full uppercase sm:text-2xl text-sm font-semibold text-secondaryV">
              <span>RECOMMENDED </span>
              <Link to="/directory/game/Fortnite" className="text-primary">
                Fortnite{" "}
              </Link>
              <span>Channels</span>
            </div>
          }
          game="Fortnite"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories),
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, { fetchCategories, fetchStreams })(
  StreamsIndex
);
