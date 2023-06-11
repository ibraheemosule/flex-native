
import { Context } from "../../utils/context";
import { ReactElement, useEffect, useState } from "react";
import events from '../../../events.json'
import { EventType } from "../../ts-types";
import { sortActivity } from "../../utils";

type PropType = {children: ReactElement}

export default function ContextWrapper({children}: PropType) {
  const [activity] = useState(sortActivity([...events]) as EventType[]) 
  const [activitySlice, setActivitySlice] = useState([] as EventType[])

  const getMoreActivity =  ( number: number) => {
    const slice = activity.slice(number, number + 6);
    setActivitySlice(prev => prev.concat(slice))
  }


  useEffect(() => {
    !activitySlice.length && setActivitySlice(activity.slice(0, 6))
  }, [])

  return (
    <Context.Provider value={{activity, activitySlice, getMoreActivity }}>
   {children}
    </Context.Provider>
  );
}
