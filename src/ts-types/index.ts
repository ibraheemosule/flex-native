

export interface IState {
  events: EventType[];
  slicedEvents: EventType[];
}

export type EventType = IActivity | IComment;

export interface IComment {
  type: string;
  createdAt: string;
  author: string;
  message?: IMessage;
  activity?: Activity;
}

export interface IMessage {
  title: string;
  description: string;
  receiver: string;
}

export type IActivity = Omit<IComment, "message"> & {
  activity: Activity;
};

interface Activity {
  type: string;
  status: string;
}

export interface IContext {
  activity: EventType[];
  activitySlice: EventType[];
getMoreActivity: (number: number) => void;
}
