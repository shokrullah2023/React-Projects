import SearchBar from "./components/SearchBar";
import SortControl from "./SortControl";
import UserList from "./UserList";
import mockUsers from "./mockUsers";
import { useState } from "react";


export default function Day8App() {

    const [searchTerm, setSerachTerm] = useState("");
    const [sortBy, setSortBy] = useState("");

    // Search & sort logic
    const filteredUsers = mockUsers
        .filter((user) => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if( sortBy === "name") return a.name.localCompare(b.name);
            if( sortBy === "age") return a.age - b.age;
            return 0;
})

return
(
    <div className="max-w-2xl mx-auto p-4">
        <h1>Dynamic User List</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSerachTerm} />
        <SortControl sortBy={sortBy} setSortBy={setSortBy} />
        <UserList users={filteredUsers} />
    </div>
);
}