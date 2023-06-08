import s from "./activity.scss";
import {  FlatList } from "react-native";
import {  formatDate } from "../../utils";
import events from "../../../events.json";
import Event from "./event/Event";

const Activity = () => {
  return (
    <FlatList
      data={events}
      keyExtractor={item => item.createdAt}
      renderItem={({ item: event, index: i }) => {
        const ev = { ...event };
        const isAuthorSame = ev.author === events[i - 1]?.author

        ev.createdAt = formatDate(ev.createdAt).toString();

        return (
        <Event
        ev={ev}
        isAuthorSame={isAuthorSame}
        index={i}
        />
        );
      }}
    />
  );
};

export default Activity;
