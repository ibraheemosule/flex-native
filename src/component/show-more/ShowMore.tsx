import s from "./show-more.scss";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { useState } from "react";
import FileIcon from "../svgs/FileIcon";

const ShowMore = () => {
  const [noEvents, setNoEvents] = useState<boolean>(true);
  return (
    <View style={s.show_more}>
      {/* {noEvents ? <Text style={s.no_event}>No More Events</Text> : ""} */}
      <TouchableOpacity>
        <View style={s.more_events}>
          <FileIcon />
          <Text style={s.event_text}>Show 20 more events</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ShowMore;
