type TabProps = {
  name: string;
  count?: string;
  id: string;
  active?: boolean;
  //[k: string]: any;
};

export default function Tab(props: TabProps) {
  const id = props.id;
  const tab_id = id + "_tab";
  const content_id = id + "_content";

  let classes =
    "hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500";
  if (props.active) classes += " active";

  return (
    <button
      type="button"
      className={classes}
      id={tab_id}
      data-hs-tab={"#" + content_id}
      aria-controls={content_id}
      role="tab"
    >
      {props.name}

      {props.count !== "" && (
        <span className="hs-tab-active:bg-blue-100 hs-tab-active:text-blue-600 dark:hs-tab-active:bg-blue-800 dark:hs-tab-active:text-white ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
          {props.count}
        </span>
      )}
    </button>
  );
}
