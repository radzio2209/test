import Tab from "@/components/tabs/Tab";
import TabContent from "@/components/tabs/TabContent";
export default function SearchForm() {
  return (
    <div className="mt-3">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
          <Tab name="tab1" id="tab1" active={true} />
          <Tab name="tab2" id="tab2" count="5+" />
          <Tab name="tab3" id="tab3" />
        </nav>
      </div>

      <div className="mt-3">
        <TabContent id="tab1" active={true}>
          <p>To jest zawartość 1</p>
        </TabContent>
        <TabContent id="tab2">
          <p>To jest zawartość 2</p>
        </TabContent>
        <TabContent id="tab3">
          <p>To jest zawartość 3</p>
        </TabContent>
      </div>
    </div>
  );
}
