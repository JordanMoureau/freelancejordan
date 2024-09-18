export default function MyWorkNav({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <h1>A Sampling of My Work</h1>
      {/* Render the Tabs component and pass the necessary props */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

// Tabs Component to display tab navigation
function Tabs({ activeTab, setActiveTab }) {
  // List of portfolio sections
  const tabs = ["All", "Web Work", "Branding", "Illustration", "Print Media"];

  return (
    <div className="tabs-bar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "active" : ""}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
