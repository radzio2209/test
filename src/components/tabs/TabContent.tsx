import { ReactElement } from "react";

type TabContentProps = {
  id: string;
  active?: boolean;
  children: ReactElement | ReactElement[] | string;
};

export default function TabContent(props: TabContentProps) {
  const tab_id = props.id + "_tab";
  const content_id = props.id + "_content";
  return (
    <div
      id={content_id}
      className={props.active ? "" : "hidden"}
      role="tabpanel"
      aria-labelledby={tab_id}
    >
      {props.children}
    </div>
  );
}
