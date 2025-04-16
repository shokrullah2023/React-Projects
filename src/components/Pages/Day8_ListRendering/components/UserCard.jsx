

export default function UserCard({ user }) {
    return (
        <div className="border p-4 rounded shadow-sm">
            <h3 className="font-bold">{user.name}</h3>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
        </div>
    )
}