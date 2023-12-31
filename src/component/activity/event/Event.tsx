import s from "./event.scss";
import { View, Text } from "react-native";
import { EventType } from "../../../ts-types";
import { statusColors } from "../../../utils";
import { FontAwesome } from "@expo/vector-icons";

type PropType = {
  ev: EventType;
};

const Event = ({ ev }: PropType) => (
  <View style={s.activity}>
    <View style={s.name_initial_wrapper}>
      <Text style={s.name_initial}>{ev.author[0]}</Text>
    </View>
    <View style={s.name}>
      <Text style={s.user}>
        {ev.author}{" "}
        {ev.type === "activity" ? (
          <Text style={s.text}>has changed Status to </Text>
        ) : null}
      </Text>
      {ev.type === "activity" ? (
        <View style={s.status}>
          <FontAwesome
            style={s.status}
            name="circle"
            size={12}
            color={statusColors[ev.activity?.status ?? "Pending"]}
          />
          <Text style={s.user}>{ev.activity?.status}</Text>
          <Text>
            {Number(ev.createdAt) > 1
              ? `${ev.createdAt} days`
              : `${ev.createdAt} day`}{" "}
            ago
          </Text>
        </View>
      ) : null}
    </View>
  </View>
);

export default Event;
