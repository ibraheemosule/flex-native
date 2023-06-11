import s from "./show-more.scss";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { useState, useContext } from "react";
import FileIcon from "../svgs/FileIcon";
import { Context } from "../../utils/context";

const ShowMore = () => {
  const {showMoreActivity, activitySlice, activity} = useContext(Context)
  const noOfEventsLeft = activity.length - activitySlice.length

  return (
    <View style={s.show_more}>
      {
        noOfEventsLeft ? 
      <TouchableOpacity onPress={() => showMoreActivity(activitySlice.length)}>
        <View style={s.more_events}>
          <FileIcon />
          <Text style={s.event_text}>Show {noOfEventsLeft} more events</Text>
        </View>
      </TouchableOpacity>
    : 
    <Text style={s.no_event}>No More Events</Text> 
      }
    </View>
  );
};

export default ShowMore;
