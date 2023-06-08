import s from "./event.scss";
import { View, Text, TouchableHighlight } from "react-native";
import { EventType } from "../../../ts-types";
import { statusColors } from "../../../utils";
import { Feather, FontAwesome } from "@expo/vector-icons";

type PropType = {
  ev: EventType;
  isAuthorSame: boolean;
  index: number
}

const Event = ({ev, isAuthorSame, index}: PropType) => {
  return (
    <View style={[s.container, !isAuthorSame && index !== 0 && s.border]}>
      <View style={[s.form_group, isAuthorSame && s.hide]}>
        <TouchableHighlight style={[s.label, s.checked]} disabled={!isAuthorSame}>
          <Feather name="check" size={12} color="#fff" />
        </TouchableHighlight>
      </View>
      <View style={s.activity}>
        <View style={s.name_initial_wrapper}>
          <Text style={s.name_initial}>{ev.author[0]}</Text>
        </View>
        <View style={s.name}>
          <Text style={s.user}>
            {ev.author} {ev.type === 'activity' ? <Text style={s.text}>has changed Status to </Text> : ''}
          </Text>
          {ev.type === 'activity' ? 
          <View style={s.status}>
            <FontAwesome
              style={s.status}
              name="circle"
              size={12}
              color={ ev.activity?.status !== undefined ? statusColors[ev.activity.status]: "#F28282"}
            />
            <Text style={s.user}>{ev.activity?.status}</Text>
            <Text>
            {Number(ev.createdAt) > 1
                      ? `${ev.createdAt} days`
                      : `${ev.createdAt} day`}{" "}
                    ago
            </Text>
          </View> : ''}
        </View>
      </View>
    </View>
  );
};

export default Event;
