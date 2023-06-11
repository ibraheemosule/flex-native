import s from "./activity.scss";
import { FlatList, SafeAreaView, View } from "react-native";
import { formatDate } from "../../utils";
import events from "../../../events.json";
import Event from "./event/Event";
import Comment from "./comment/Comment";
import { TouchableHighlight } from "react-native";
import { Feather } from "@expo/vector-icons";

const Activity = () => {
  return (
    <View style={{ flexShrink: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={events}
        keyExtractor={item => item.createdAt}
        renderItem={({ item: event, index: i }) => {
          const ev = { ...event };
          const isAuthorSame = ev.author === events[i - 1]?.author;

          ev.createdAt = formatDate(ev.createdAt).toString();

          return (
            <View style={[s.container, !isAuthorSame && i !== 0 && s.border]}>
              <View style={[s.form_group, isAuthorSame && s.hide]}>
                <TouchableHighlight
                  style={[s.label, s.checked]}
                  disabled={!isAuthorSame}
                >
                  <Feather name="check" size={12} color="#fff" />
                </TouchableHighlight>
              </View>

              <Event ev={ev} />
              {ev.type === "comment" ? <Comment ev={ev} /> : ""}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Activity;
