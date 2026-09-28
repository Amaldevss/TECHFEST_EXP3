import { useState } from "react";
import EventList from "../components/EventList";
import events from "../data/events";

function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredEvents = events.filter((event) => {
    const nameMatches = event.name.toLowerCase().includes(search.toLowerCase());
    const categoryMatches = category === "All" || event.category === category;
    return nameMatches && categoryMatches;
  });

  return (
    <div className="page events-page">
      <h1>Events</h1>

      <div className="filter-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Technical">Technical</option>
          <option value="Workshop">Workshop</option>
          <option value="Cultural">Cultural</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <EventList events={filteredEvents} />
    </div>
  );
}

export default Events;