import s from "./comment.scss";
import { View, Text, Image } from "react-native";
import { IComment } from "../../../ts-types";
import AviIcon from "../../svgs/AviIcon";

type PropType = {
  ev: IComment;
};

const Comment = ({ ev }: PropType) => {
  return (
    <View style={s.comment_container}>
      <View style={s.comment}>
        <Text style={s.title}>{ev.message?.title}</Text>
        <View style={s.info}>
          <View style={s.avi}>
            <AviIcon />
          </View>
          <Text style={s.name}>
            {ev.author}{" "}
            <Text style={s.time}>
              {" "}
              {Number(ev.createdAt) > 1
                ? `${ev.createdAt} days`
                : `${ev.createdAt} day`}{" "}
              ago
            </Text>
          </Text>
        </View>
        <Text style={s.text}>{ev.message?.description}</Text>
      </View>
    </View>
  );
};

export default Comment;
