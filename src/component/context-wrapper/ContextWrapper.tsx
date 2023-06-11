import { Context } from "../../utils/context";
import { ReactElement, useEffect, useState } from "react";
import events from "../../../events.json";
import { EventType } from "../../ts-types";
import { sortActivity } from "../../utils";

type PropType = { children: ReactElement };

export default function ContextWrapper({ children }: PropType) {
  const [activity] = useState(sortActivity([...events]) as EventType[]);
  const [activitySlice, setActivitySlice] = useState([] as EventType[]);
  const [selectedActivity, setSelectedActivity] = useState([] as string[]);

  const showMoreActivity = (number: number) => {
    const slice = activity.slice(number, number + 6);
    setActivitySlice(prev => prev.concat(slice));
  };

  const toggleActivity = (id: string) => {
    if (selectedActivity.includes(id)) {
      setSelectedActivity(arr => arr.filter(item => item !== id));
      return;
    }
    const selectedIds = [] as string[];
    activitySlice.every(event => {
      selectedIds.push(event.createdAt);

      if (event.createdAt === id) return false;
      return true;
    });

    setSelectedActivity(selectedIds);
  };

  const contextData = {
    activity,
    activitySlice,
    showMoreActivity,
    selectedActivity,
    toggleActivity,
  };

  useEffect(() => {
    !activitySlice.length && setActivitySlice(activity.slice(0, 6));
  }, []);

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
}
